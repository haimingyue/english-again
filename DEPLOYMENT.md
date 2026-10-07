# 线上部署信息

最后核实：2026-10-07。继续部署时，先查阅本文件并通过 SSH 确认服务器的实际状态；下面的版本号是本次发布记录，后续发布后需要更新。

## 站点与当前版本

| 项目 | 信息 |
| --- | --- |
| 线上首页 | <https://english.tlpy8.com> |
| 阅读页面 | <https://english.tlpy8.com/reading/> |
| GitHub 仓库 | <https://github.com/haimingyue/english-again> |
| 发布分支 | `main` |
| 当前线上源码 | 本次访问后台实现，基于 `1044386dc455e3a97fb8217f67397e25c4e5b0a3`；对应源码与本文件一同提交 |
| 当前发布目录 | `/var/www/english-again/releases/analytics-20261007-2` |
| 上一版（可回滚） | `/var/www/english-again/releases/analytics-20261007` |

公众网站采用 Nuxt 静态生成，Nginx 提供 `.output/public/` 中的文件。访问管理后台由同机 Python/Gunicorn 服务和 SQLite 数据库提供，入口为 <https://english.tlpy8.com/admin/>。服务器无需 Node、PM2 或 Docker。详见 [后台说明](backend/README.md)。

GitHub Actions 的 `Build and verify website` 目前只负责构建、验收并上传 `english-again-static` 产物，保留 7 天；**没有配置自动 SSH 发布**。Actions 成功或点击 `Re-run all jobs` 都不会更新线上网站，仍需上传产物并切换发布目录。

## 已验证的 SSH 连接

- 服务器：`47.120.46.32`，Ubuntu 26.04，2 核 / 2 GB。
- 用户：`root`，端口：`22`。
- 本机密钥：`/Users/simoon/Desktop/project/英语自学指北/_simoonqian2c2g.pem`，位于项目上一级目录。
- 此连接最初记录在“为项目命名”会话，2026-10-07 已再次登录并完成发布。
- `~/.ssh/config` 中没有对应别名，使用下面的完整命令即可。本机已有服务器的 `known_hosts` 记录。

在当前 Mac 的终端运行：

```bash
ssh -i '/Users/simoon/Desktop/project/英语自学指北/_simoonqian2c2g.pem' \
  -o IdentitiesOnly=yes \
  -o BatchMode=yes \
  -o ConnectTimeout=15 \
  -o StrictHostKeyChecking=yes \
  root@47.120.46.32
```

只记录密钥位置，不将私钥内容或 PEM 文件提交到仓库。换电脑时需通过安全方式准备密钥，并核实服务器指纹。

## 服务器目录

| 用途 | 路径 |
| --- | --- |
| 各次发布产物 | `/var/www/english-again/releases/<版本号>` |
| Nginx 当前网站目录（符号链接） | `/var/www/english-again/current` |
| Nginx 站点配置 | `/etc/nginx/sites-available/english-again` |
| Nginx 公共配置 | `/etc/nginx/snippets/english-again-static.conf` |
| 文件校验清单、发布记录与配置备份 | `/var/backups/english-again` |
| 发布锁 | `/var/lock/english-again-deploy.lock` |
| HTTPS 证书验证目录 | `/var/www/letsencrypt/.well-known/acme-challenge` |
| 访问日志 | `/var/log/nginx/english-again.access.log` |
| 错误日志 | `/var/log/nginx/english-again.error.log` |

登录服务器后，先确认线上实际版本：

```bash
readlink -f /var/www/english-again/current
cat /var/backups/english-again/analytics-20261007-2.release
```

第二条命令读取当前发布记录；后续发布应读取对应版本的 `.release` 文件。

## 后续发布步骤

1. 确认要发布的源码提交。可从对应成功的 Actions 运行下载 `english-again-static`，或在本地项目根目录构建：

   ```bash
   git lfs pull
   npm ci
   npm run check
   npm run generate
   npm run check:static
   ```

   本机构建前停止开发服务器，避免共用 `.nuxt` 目录。发布的是 `.output/public/` 的全部内容，保留子目录结构；`site/*.html` 是历史原型。

2. 使用上面的 SSH 连接，通过 rsync 将产物上传到一个新的 `/var/www/english-again/releases/<版本号>/`。不要直接覆盖 `current`，也不要复用已有发布目录；目录权限为 755、文件为 644。
3. 对上传文件进行 SHA-256 比对，确认页面、`404.html`、`_nuxt/`、音频和下载资源齐全。将旧版本 `_nuxt/` 中新版本尚未包含的文件复制过去，保障已打开的页面仍能加载旧资源。
4. 获取发布锁，记录 `current` 原先指向的目录；用临时符号链接和 `mv -Tf` 原子切换到新版本。只更新静态文件不需要重启 Nginx。
5. 检查 HTTPS、HTTP 跳转、全部 11 个页面及旧 `.html` 地址、404、音频、六个 Anki 下载和阅读练习交互。失败时将 `current` 原子切回之前记录的目录。
6. 至少保留最近两版；在 `/var/backups/english-again/` 保存 `<版本号>.sha256`、`<版本号>.previous` 和 `<版本号>.release`，并更新本文件的日期、提交和发布目录。

Nginx 配置、证书续期和通用发布说明见 [deploy/README.md](deploy/README.md)。

## 阅读页发布与回滚记录（2026-10-07，历史）

- 已上线提交 `1044386`，阅读页按书中方法和例句更新。
- 185 个上传文件通过 SHA-256 比对；22 个页面地址（11 个路由及对应旧 HTML 地址）、六个 Anki 下载、404 和 HTTP 跳转检查通过。
- 公网阅读页 HTML 与本次构建一致，线上阅读提示及五组练习的浏览器交互验收通过。
- 上一版 `d8787e9-20261006` 已保留。本次切换前的目录保存在 `/var/backups/english-again/1044386-20261007.previous`。

如需撤回本次发布，在服务器上先确认 `current` 仍指向 `1044386-20261007`，再把它原子切回 `.previous` 记录的目录，并复查线上页面。若线上已是更新的版本，应使用那个版本的回滚记录，不要直接套用本次记录。


## 访问后台发布（2026-10-07）

- 前端最终发布版本：`analytics-20261007-2`，前端 187 个文件通过 SHA-256 校验，之前的 `_nuxt` 文件已保留用于兼容打开中的页面。
- 后端：`/opt/english-again-analytics/releases/analytics-20261007`；`current` 链接指向此目录。服务 `english-again-analytics` 已设为开机启动，仅监听 `127.0.0.1:8091`，使用无登录权限的 `english-analytics` 账号。
- 数据库：`/var/lib/english-again-analytics/analytics.sqlite3`，WAL 模式，权限 600；与发布目录分离。
- 备份：`english-again-analytics-backup.timer` 每天北京时间 03:15 左右运行；备份在 `/var/backups/english-again-analytics/`，保留最近 14 份。
- 管理员初始登录信息保存在本机忽略目录 `.data/analytics-admin.json`，权限 600；不上传、不提交该文件。可在后台修改密码，遗失时通过 `backend/manage.py reset-password` 从标准输入重置。
- Nginx 原配置备份：`/var/backups/english-again/analytics-20261007.nginx.previous`。
- 最近一版回滚目标记录：`/var/backups/english-again/analytics-20261007-2.previous`；如需回到后台上线前的版本，使用 `analytics-20261007.previous` 中的 `1044386-20261007`。回滚静态目录后后台和数据库可以继续保留；如需同时撤回后台入口，恢复本次 Nginx 备份并执行 `nginx -t`、重载 Nginx。不要删除数据库。
- 访问后台源码、测试和部署配置与本文件一同提交；线上基于这批代码构建。Git 提交与服务器发布分别进行，后续发布时应保留后台和采集代码。


### 最终验收

- 后端 7 项接口测试通过；前端类型检查、单元测试、11 个页面静态检查通过。
- 原网站 26 项浏览器回归通过；最终标题修正后重验阅读页、工具页、手机导航和旧 HTML 地址 4 项通过。
- 独立数据库的后台浏览器验收通过：真实 SPA 浏览与下载采集、登录、筛选、分页、全部 CSV 导出、记录详情、访客轨迹、修改密码、退出、无障碍与手机布局。
- 公网 HTTPS 验收通过：管理员登录、Secure/HttpOnly cookie、旧 HTML 入口、站内切换、正确页面标题、真实客户端 IP、下载点击、查询、详情、CSV 导出、未登录拒绝访问、CSRF 和退出。
- 线上 26 个页面/后台资源地址可访问；6 个后端核心文件与本地已验证源码哈希一致。
- 重启后台后记录保留；SQLite 备份文件已独立打开并检查完整性、比对记录。验收专用记录与测试会话已清理。
- 本次源码快照：`/var/backups/english-again/analytics-20261007-source.tar.gz`，不含密码、数据库或本机私钥。
