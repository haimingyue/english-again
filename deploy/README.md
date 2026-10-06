# 静态网站部署

## 架构

GitHub Actions 负责构建与验收，Nginx 直接提供 `.output/public` 中的静态文件。服务器无需 Node、PM2、Docker 或数据库。工作流成功后下载 `english-again-static`，解压后上传；目前没有配置 GitHub 自动 SSH 发布，也不把 SSH 私钥提交进仓库。

首次部署使用提交 `d8787e9` 在本机重新生成的产物，已通过静态资源检查；对应源码也已通过 GitHub Actions 全部检查。

- 服务器：`47.120.46.32`，Ubuntu 26.04，2 核 / 2GB。
- 目标域名：`english.tlpy8.com`。
- 发布目录：`/var/www/english-again/releases/<版本号>`。
- 当前目录：`/var/www/english-again/current`，符号链接指向一个发布目录。
- Nginx 站点：`/etc/nginx/sites-available/english-again`。
- 公共配置：`/etc/nginx/snippets/english-again-static.conf`。
- ACME 验证目录：`/var/www/letsencrypt`。
- 文件校验清单与配置备份：`/var/backups/english-again`。
- 日志：`/var/log/nginx/english-again.access.log`、`english-again.error.log`。

## 发布与回滚

1. 下载通过检查的 Actions 部署包，或在对应源码提交运行 `npm ci && npm run generate && npm run check:static`。
2. 使用 SSH/rsync 上传产物到新的发布目录，不覆盖正在提供访问的目录。目录权限为 755、文件为 644。
3. 校验上传文件与本地 SHA-256 一致，并确认 `index.html`、`404.html`、`_nuxt/` 和所有页面资源齐全。
4. 若已有当前版本，将旧版本 `_nuxt/` 中尚未存在的文件复制到新版本 `_nuxt/`，让已打开的页面仍能加载旧的哈希资源。
5. 记录 `readlink /var/www/english-again/current`，用临时符号链接加 `mv -Tf` 原子切换 `current` 到新目录。仅更新静态文件不需要重启 Nginx。
6. 检查首页、11 条路由、旧 `.html` 链接、404、音频和下载，失败则将 `current` 切回前一目录。

至少保留最近两版。配置更新时先备份，再执行 `nginx -t && systemctl reload nginx`。

## 域名与 HTTPS

1. 在 `tlpy8.com` 的 DNS 中增加 `english` 的 A 记录，值为 `47.120.46.32`。不添加未配置的 IPv6 地址。
2. 阿里云安全组入方向允许 TCP 80、443，确保公网 HTTP ACME 验证地址可访问。
3. 在解析生效后使用 Certbot 的 webroot 模式申请证书：

```sh
certbot certonly --webroot -w /var/www/letsencrypt -d english.tlpy8.com
```

4. 签发成功后，将 `nginx/english-again-https.conf` 安装为站点配置，执行 `nginx -t && systemctl reload nginx`。HTTPS 模板在证书签发前不能启用。
5. 将 `renewal-hooks/reload-nginx.sh` 安装为 `/etc/letsencrypt/renewal-hooks/deploy/reload-nginx.sh`，权限为 755；确认 `certbot.timer` 启用，运行 `certbot renew --dry-run --run-deploy-hooks --no-random-sleep-on-renew` 验证自动续期与重载钩子。

参考：[Nginx try_files](https://nginx.org/en/docs/http/ngx_http_core_module.html#try_files)、[Certbot webroot 与续期](https://eff-certbot.readthedocs.io/en/stable/using.html)。

## 首次上线记录（2026-10-06）

- 当前发布版本：`d8787e9-20261006`，全部上传文件已通过 SHA-256 比对。
- HTTPS 已启用，HTTP 请求重定向到 `https://english.tlpy8.com`。
- 证书到期日：2027-01-04；已启用 `certbot.timer` 和续期后 Nginx 重载钩子。
- 线上验证：32 项路由与资源检查通过，包括全部页面、旧 `.html` 地址、六个 Anki 下载、缓存、404 和隐藏文件访问限制；Range 请求返回 206，HTML gzip 生效。
- Certbot 模拟续期与 Nginx 重载钩子已验证通过。
- 线上浏览器验收通过：移动端导航、下载版本切换与图库交互、全部旧 HTML 链接。公网连续加载 11 页的用例使用 180 秒总时限，实际约 96 秒；首次 90 秒时限不足，已复验通过。
