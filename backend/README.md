# 访问管理后台

线上入口：<https://english.tlpy8.com/admin/>。管理员可以查看访问概览，按北京时间、页面、事件类型、设备、关键词筛选，查看单条详情或访客轨迹，分页浏览并导出当前筛选下的全部 CSV 记录。在右上角修改密码会使所有已有登录会话失效。

## 记录范围

- 浏览器首屏和 Nuxt 站内路由切换；忽略仅锚点变化，合并 `.html`、尾斜杠和首页别名。
- 下载链接、视频链接和其他外部链接点击；下载点击不代表文件下载完成。
- 服务端时间、页面、标题、来源、目标链接、点击文字、匿名访客/会话标识、IP、设备、浏览器、系统、语言、屏幕和 User-Agent。
- 随机访客标识保存在 localStorage；会话标识保存在 sessionStorage，30 分钟无活动后换新。清理存储或更换浏览器会成为新访客，不等于真实人数。
- 来源和目标 URL 去掉查询参数、片段和凭据。后台不参与统计。常见爬虫和无头浏览器会被过滤；脚本被禁用或拦截时可能遗漏。
- 从上线时开始记录，不将以前的 Nginx 请求日志混入浏览行为统计。现有访问日志继续保留。

## 架构和配置

公众站仍由 Nginx 提供 Nuxt 静态文件。`/admin/` 和 `/api/analytics/` 转发至本机 `127.0.0.1:8091` 的 Flask/Gunicorn 服务。SQLite 开启 WAL；数据、会话与账号均在发布目录外，升级与回滚不会覆盖。

| 配置 | 生产值 |
| --- | --- |
| 服务 | `english-again-analytics.service` |
| 运行账号 | `english-analytics`（无登录权限） |
| 后端代码 | `/opt/english-again-analytics/current` |
| Python 环境 | `/opt/english-again-analytics/venv` |
| 环境配置 | `/etc/english-again-analytics.env`，root 可读 |
| 数据库 | `/var/lib/english-again-analytics/analytics.sqlite3` |
| 数据库备份 | `/var/backups/english-again-analytics/` |
| 备份定时器 | `english-again-analytics-backup.timer` |

环境变量：`ANALYTICS_DB`、`SITE_ORIGIN`（精确源，不能带尾斜杠）、`COOKIE_SECURE=1`、`TRUST_PROXY=1`。仅在 Nginx 覆盖真实 IP 请求头且后端只绑定回环地址时启用代理信任。

前端生产构建默认启用统计，开发模式默认关闭；`NUXT_PUBLIC_ANALYTICS_ENABLED=true/false` 可覆盖。静态站改变配置后必须重新生成并发布。

登录 cookie 为 Secure、HttpOnly、SameSite=Strict，有效 12 小时。数据库只存 PBKDF2-SHA256 密码哈希（100 万次迭代）及会话 token 的 SHA256；写操作验证 Origin，登录后还验证 CSRF token。Nginx 和后端限制登录尝试和采集频率。查询采用参数化 SQL，CSV 防公式注入，后台使用 CSP 和 textContent 显示访客提供的文本。

## 本地开发与验证

```bash
python3 -m venv .venv
.venv/bin/pip install -r backend/requirements.txt
.venv/bin/python -m unittest discover -s backend/tests -v
npm run check
npm run generate
npm run check:static
node tests/analytics-browser.mjs
```

浏览器测试使用临时独立数据库和测试账号，退出后删除；验证真实 Nuxt 路由、下载点击、认证、筛选、分页、全量 CSV、详情、密码修改、手机布局和无障碍。

本地完整预览：

```bash
SITE_ORIGIN=http://127.0.0.1:8091 COOKIE_SECURE=0 \
  .venv/bin/gunicorn --chdir backend --bind 127.0.0.1:8091 'preview:app'
```

`preview.py` 只供本地预览，生产运行 `app:create_app()`。通过 `manage.py init-admin` 从标准输入读取 `{"username":"admin","password":"至少12位密码"}` 初始化本地账号。已有账号拒绝覆盖，重置必须显式使用 `reset-password`；不要将密码写进命令参数或版本控制。

## 接口

| 方法 / 地址（前缀 `/api/analytics`） | 用途 |
| --- | --- |
| `POST /collect` | 同源采集，事件 ID 去重，8 KB 上限 |
| `POST /login` | 账号密码登录 |
| `GET /me` | 当前账号和 CSRF token |
| `POST /logout` | 撤销当前会话 |
| `POST /password` | 校验当前密码、修改密码、撤销所有会话 |
| `GET /records` | 筛选和分页；每页最多 100 条 |
| `GET /records/:id` | 记录详情 |
| `GET /summary` | 同一筛选条件下的计数、热门页面、最近 31 个有访问的日期 |
| `GET /export` | 同一筛选下全部记录，流式 UTF-8 BOM CSV，不受分页限制 |
| `GET /health` | 数据库连接检查，不返回记录 |

筛选参数：`start/end`（YYYY-MM-DD，北京时间包含结束日）、`kind`、`path`、`device`、`visitor_id`、`session_id`、`ip`、`browser`、`os`、`q`；分页 `page/size`，排序 `order=asc/desc`。除采集、登录和健康检查，数据接口均需登录。

## 运维与恢复

```bash
systemctl status english-again-analytics
journalctl -u english-again-analytics -n 100 --no-pager
systemctl start english-again-analytics-backup
systemctl list-timers english-again-analytics-backup.timer
```

备份每天北京时间 03:15 左右执行，使用 SQLite backup API 并校验完整性，保留最近 14 份；访问记录本身不自动删除。备份目前位于同一台服务器，仍需按运维需要复制到异机。

恢复前停止后台服务，保存现有数据库及其 WAL/SHM；将选定备份复制至数据库路径，清理属于旧数据库的 WAL/SHM，设置 `english-analytics` 所有权及 600 权限，再启动服务。恢复账号数据库后建议重置密码以撤销备份里的旧会话。

后端升级：上传至新的版本目录，安装并测试依赖，备份数据库，原子切换 `current` 后重启服务。前端按根目录部署步骤切换。Nginx 修改前备份并运行 `nginx -t`。回滚代码时保留数据库；未来若增加不兼容迁移，必须另行制定数据迁移和恢复步骤。
