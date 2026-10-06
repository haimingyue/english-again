# 内容与素材索引

| 目录或文件 | 内容 |
| --- | --- |
| [asset-manifest.json](asset-manifest.json) | 全部本地媒体的规范路径、类型、大小、SHA-256、原路径和已发现的静态引用 |
| `catalogs/` | 每周课程目录、B 站视频元数据、读书资料选材目录 |
| `research/` | 学习方法论、阅读方法、勘误、课程清单及读书资料说明 |
| `inventories/` | 之前盘点 Obsidian 资料的记录；其中外部绝对路径用于溯源 |
| `sources/course-catalog/` | 用户提供的 3 份 CSV 和 3 张合集截图 |
| `sources/books/` | 已提供的英语自学手册 EPUB |
| `originals/` | 尚未被网页采用的独立素材，保留供后续评估 |
| [网页素材](../site/assets/) | 实际展示的图片、原图、试听和卡组；每份文件的唯一存放处 |

网站下载的卡组分别为 `phonetics.apkg`、`grammar.apkg`、`sentences.apkg`、`coca-30000.apkg`、`phrases.apkg`、`wordbook.apkg`。原来的中文文件名及 COCA 日期文件名，可在迁移记录的 `path` 字段中查到。

资源索引的 `path` 相对于项目根目录，`site_url` 相对于 `site/`。`referenced_by` 记录可静态识别的网页引用；为空不代表可以删除，部分文件由脚本动态选择，或属于原始研究资料和历史设计。

历史素材来源、读书资料目录中的外部文件路径继续保留。当前运行和维护脚本不需要原桌面素材目录、临时剪贴板文件或旧版设计目录。
