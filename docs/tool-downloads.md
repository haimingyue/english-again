# 读书会客户端下载配置

页面：`../site/tools.html`。下载信息统一维护在 `../site/data/tools-downloads.json`，无需修改页面布局。

| 配置键 | 安装包 |
| --- | --- |
| `win-x64` | Windows 64 位，x64 |
| `win-x86` | Windows 32 位，x86；当前适配待确认 |
| `mac-arm64` | macOS，Apple 芯片 |
| `mac-x64` | macOS，Intel 芯片 |

当前四项 `url` 均为空，不会提供下载链接。准备好并验证对应安装包后，填写 `url`（完整 HTTPS 地址）、`version`（实际版本号）、`minimumSystem`（经验证的最低系统要求），并把该项 `status` 改为 `published`。只有状态为 `published` 且地址有效时，页面才显示可点击的下载入口。撤下版本时改回 `pending` 并清空地址即可。

Windows 32 位尚未在现有桌面项目的构建目标中配置，当前使用 `unconfirmed` 状态；需要完成构建和实机验证后再开放，不能直接复用 64 位安装包。

系统识别使用浏览器提供的平台与架构信息。信息不足时保留手动选择，不根据 Mac UA 中的“Intel”字样猜测芯片，也不把 `Win32` 直接当作 32 位操作系统。手机、平板、Linux 和 Windows ARM 不自动推荐这四个安装包。浏览器架构信息仅作参考，不能保证操作系统版本兼容性。

平台识别与下载链接规则验证：在项目根目录执行 `node tests/tools-platform.test.mjs`。图片预览在 `site/assets/images/tools/`，高清原图在 `site/assets/images/tools/originals/`，仅在打开大图时加载。
