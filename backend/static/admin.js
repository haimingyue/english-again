"use strict";
const $ = (selector) => document.querySelector(selector);
const apiBase = "/api/analytics";
const names = {
  pageview: "页面浏览",
  download: "下载点击",
  video: "视频点击",
  outbound: "外链点击",
  desktop: "电脑",
  mobile: "手机",
  tablet: "平板",
};
let csrf = "",
  page = 1,
  total = 0,
  active = new URLSearchParams(),
  selectedVisitor = "",
  currentDetail = null,
  generation = 0;
const number = (value) => new Intl.NumberFormat("zh-CN").format(value);
function node(tag, text, className) {
  const el = document.createElement(tag);
  if (text !== undefined) el.textContent = text;
  if (className) el.className = className;
  return el;
}
function status(text, error = false) {
  $("#status").textContent = text;
  $("#status").classList.toggle("error", error);
}
function showLogin(message = "") {
  generation++;
  csrf = "";
  $("#dashboard").hidden = true;
  $("#login").hidden = false;
  $("#boot").hidden = true;
  $("#login-error").textContent = message;
  document.querySelectorAll("dialog[open]").forEach((d) => d.close());
  $("#login-form input[name=password]").value = "";
}
async function api(path, options = {}) {
  const response = await fetch(apiBase + path, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": csrf,
      ...options.headers,
    },
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    if (response.status === 401 && path !== "/login") showLogin();
    throw new Error(data.error || "请求失败，请稍后重试");
  }
  return data;
}
async function enter(data) {
  csrf = data.csrf;
  $("#username").textContent = data.username;
  $("#login").hidden = true;
  $("#dashboard").hidden = false;
  $("#boot").hidden = true;
  await load();
}
function dateString(date) {
  return new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}
function setRange(days) {
  const form = $("#filters");
  const now = new Date();
  form.elements.end.value = days === "all" ? "" : dateString(now);
  form.elements.start.value =
    days === "all"
      ? ""
      : dateString(new Date(now.getTime() - (Number(days) - 1) * 86400000));
  document
    .querySelectorAll("[data-range]")
    .forEach((b) =>
      b.classList.toggle("active", b.dataset.range === String(days)),
    );
}
function applyFilters() {
  active = new URLSearchParams();
  for (const [key, value] of new FormData($("#filters")))
    if (value) active.set(key, value);
  if (selectedVisitor) active.set("visitor_id", selectedVisitor);
  page = 1;
  $("#visitor-filter").hidden = !selectedVisitor;
  $("#visitor-filter span").textContent = selectedVisitor
    ? "访客：" + selectedVisitor
    : "";
}
function recordParams() {
  const p = new URLSearchParams(active);
  p.set("page", page);
  p.set("size", $("#page-size").value);
  return p;
}
function filterVisitor(id) {
  selectedVisitor = id;
  applyFilters();
  void load();
}
function renderSummary(data) {
  for (const key of ["pageviews", "visitors", "sessions", "downloads"])
    $("#metric-" + key).textContent = number(data[key]);
  const trend = $("#trend");
  trend.replaceChildren();
  const max = Math.max(1, ...data.daily.map((d) => d.count));
  for (const item of data.daily) {
    const col = node("div", undefined, "trend-item");
    const bar = node("meter");
    bar.min = 0;
    bar.max = max;
    bar.value = item.count;
    bar.setAttribute("aria-label", item.day + " 浏览量 " + item.count);
    col.title = item.day + "：" + item.count;
    col.append(
      node("b", number(item.count)),
      bar,
      node("span", item.day.slice(5)),
    );
    trend.append(col);
  }
  if (!data.daily.length)
    trend.append(node("p", "所选范围内暂无页面浏览记录", "empty"));
  const list = $("#top-pages");
  list.replaceChildren();
  data.pages.forEach((item, i) => {
    const li = node("li");
    const button = node("button", item.path);
    button.type = "button";
    button.addEventListener("click", () => {
      const select = $("#filters").elements.path;
      if (![...select.options].some((o) => o.value === item.path))
        select.add(new Option(item.path, item.path));
      select.value = item.path;
      applyFilters();
      void load();
    });
    li.append(
      node("span", String(i + 1).padStart(2, "0"), "rank"),
      button,
      node("b", number(item.count)),
    );
    list.append(li);
  });
  if (!data.pages.length) list.append(node("li", "暂无页面浏览记录", "empty"));
}
function renderRows(data) {
  total = data.total;
  const body = $("#rows");
  body.replaceChildren();
  $("#total").textContent = number(total) + " 条";
  data.items.forEach((item) => {
    const row = node("tr");
    const time = node("td", item.time.slice(0, 10));
    time.append(node("small", item.time.slice(11)));
    const kind = node("td");
    kind.append(
      node("span", names[item.kind] || item.kind, "badge " + item.kind),
    );
    const path = node("td", item.path);
    path.append(node("small", item.label || item.title));
    const visitor = node("td");
    const button = node("button", item.visitor_id.slice(0, 8), "text-button");
    button.title = "筛选此访客的访问轨迹";
    button.addEventListener("click", () => filterVisitor(item.visitor_id));
    visitor.append(button, node("small", item.ip));
    const device = node(
      "td",
      (names[item.device] || item.device) + " · " + item.browser,
    );
    device.append(node("small", item.os));
    let source = "直接访问";
    if (item.referrer) {
      try {
        source = new URL(item.referrer).hostname;
      } catch {
        source = item.referrer;
      }
    }
    const ref = node("td", source);
    ref.title = item.referrer;
    const action = node("td");
    const details = node("button", "查看", "text-button");
    details.addEventListener("click", () => void showDetail(item.id));
    action.append(details);
    row.append(time, kind, path, visitor, device, ref, action);
    body.append(row);
  });
  if (!data.items.length) {
    const tr = node("tr"),
      td = node(
        "td",
        "暂无符合条件的访问记录。试试扩大日期范围或清除筛选。",
        "empty",
      );
    td.colSpan = 7;
    tr.append(td);
    body.append(tr);
  }
  const pages = Math.max(1, Math.ceil(total / Number($("#page-size").value)));
  $("#page-info").textContent =
    `第 ${page} / ${pages} 页 · 共 ${number(total)} 条`;
  $("#prev").disabled = page <= 1;
  $("#next").disabled = page >= pages;
}
async function load() {
  const current = ++generation;
  status("正在加载记录…");
  $("#export").disabled = true;
  $("#prev").disabled = true;
  $("#next").disabled = true;
  try {
    const [records, summary] = await Promise.all([
      api("/records?" + recordParams()),
      api("/summary?" + active),
    ]);
    if (current !== generation) return;
    if (page > 1 && !records.items.length) {
      page = Math.max(
        1,
        Math.ceil(records.total / Number($("#page-size").value)),
      );
      return load();
    }
    renderRows(records);
    renderSummary(summary);
    status("");
    $("#export").disabled = false;
    $("#updated").textContent =
      "更新于 " +
      new Intl.DateTimeFormat("zh-CN", {
        timeZone: "Asia/Shanghai",
        hour: "2-digit",
        minute: "2-digit",
      }).format(new Date());
  } catch (error) {
    if (current === generation) status(error.message, true);
  }
}
async function showDetail(id) {
  try {
    currentDetail = await api("/records/" + id);
    const list = $("#detail-fields");
    list.replaceChildren();
    for (const [key, label] of [
      ["id", "记录 ID"],
      ["time", "北京时间"],
      ["kind", "事件类型"],
      ["path", "访问页面"],
      ["title", "页面标题"],
      ["label", "点击内容"],
      ["target", "目标链接"],
      ["referrer", "来源页面"],
      ["ip", "IP 地址"],
      ["visitor_id", "访客标识"],
      ["session_id", "会话标识"],
      ["device", "设备"],
      ["browser", "浏览器"],
      ["os", "操作系统"],
      ["language", "语言"],
      ["screen", "屏幕尺寸"],
      ["user_agent", "User-Agent"],
    ]) {
      const value = currentDetail[key];
      list.append(node("dt", label), node("dd", names[value] || value || "—"));
    }
    $("#detail-dialog").showModal();
  } catch (error) {
    status(error.message, true);
  }
}
$("#login-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  button.disabled = true;
  $("#login-error").textContent = "";
  try {
    const data = Object.fromEntries(new FormData(event.currentTarget));
    await enter(
      await api("/login", { method: "POST", body: JSON.stringify(data) }),
    );
    event.target.reset();
  } catch (error) {
    $("#login-error").textContent = error.message;
  } finally {
    button.disabled = false;
  }
});
$("#filters").addEventListener("submit", (event) => {
  event.preventDefault();
  applyFilters();
  void load();
});
$("#filters").addEventListener("input", () =>
  document
    .querySelectorAll("[data-range]")
    .forEach((b) => b.classList.remove("active")),
);
document.querySelectorAll("[data-range]").forEach((b) =>
  b.addEventListener("click", () => {
    setRange(b.dataset.range);
    applyFilters();
    void load();
  }),
);
$("#reset-filters").addEventListener("click", () => {
  $("#filters").reset();
  selectedVisitor = "";
  setRange(7);
  applyFilters();
  void load();
});
$("#refresh").addEventListener("click", () => void load());
$("#visitor-filter button").addEventListener("click", () => {
  selectedVisitor = "";
  applyFilters();
  void load();
});
$("#prev").addEventListener("click", () => {
  page--;
  void load();
});
$("#next").addEventListener("click", () => {
  page++;
  void load();
});
$("#page-size").addEventListener("change", () => {
  page = 1;
  void load();
});
$("#export").addEventListener("click", async () => {
  try {
    await api("/me");
    const a = node("a");
    a.href = apiBase + "/export?" + active;
    a.download = "visits.csv";
    document.body.append(a);
    a.click();
    a.remove();
    status("已开始导出当前筛选下的全部记录。");
  } catch (error) {
    status(error.message, true);
  }
});
$("#logout").addEventListener("click", async () => {
  try {
    await api("/logout", { method: "POST", body: "{}" });
    showLogin();
  } catch (error) {
    status(error.message, true);
  }
});
$("#password-open").addEventListener("click", () => {
  $("#password-form").reset();
  $("#password-error").textContent = "";
  $("#password-dialog").showModal();
});
$("#password-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget));
  if (data.password !== data.confirm) {
    $("#password-error").textContent = "两次输入的新密码不一致";
    return;
  }
  const button = event.currentTarget.querySelector("button[type=submit]");
  button.disabled = true;
  try {
    await api("/password", { method: "POST", body: JSON.stringify(data) });
    $("#password-dialog").close();
    showLogin("密码已更新，请使用新密码登录");
  } catch (error) {
    $("#password-error").textContent = error.message;
  } finally {
    button.disabled = false;
  }
});
document
  .querySelectorAll("[data-close]")
  .forEach((b) =>
    b.addEventListener("click", () =>
      document.getElementById(b.dataset.close).close(),
    ),
  );
$("#view-visitor").addEventListener("click", () => {
  $("#detail-dialog").close();
  filterVisitor(currentDetail.visitor_id);
});
setRange(7);
applyFilters();
api("/me")
  .then(enter)
  .catch((error) =>
    showLogin(error.message.includes("登录") ? "" : error.message),
  );
