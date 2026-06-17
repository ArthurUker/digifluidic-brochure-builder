# 02_VERSIONING_RULES.md

## 1. 文档信息

| 项目 | 内容 |
|---|---|
| 文档名称 | Digifluidic Brochure Builder 版本号规则 |
| 文件路径 | `docs/07_review_release/02_VERSIONING_RULES.md` |
| 所属目录 | `docs/07_review_release/` |
| 文档类型 | 版本规范文档 |
| 适用范围 | 白皮书/宣传册版本号、PDF 文件命名和 Git Tag 命名 |
| 当前版本 | v0.1 |
| 维护方式 | 随版本策略调整持续维护 |

## 2. 文档目的与适用范围

本文件用于：

1. 定义白皮书/宣传册的版本号格式和递增规则；
2. 统一 PDF 文件命名中的版本号部分；
3. 规范 Git Tag 的命名方式。

本文件不替代：

1. 发布流程（`01_RELEASE_PROCESS.md`）；
2. CHANGELOG 文档（`03_CHANGELOG.md`）。

## 3. 版本号格式

### 3.1 白皮书版本号

采用 **年月版本号** 格式：

```text
vYYYY.MM
```

| 组成部分 | 说明 | 示例 |
|---|---|---|
| `v` | 版本前缀 | `v` |
| `YYYY` | 四位年份 | `2026` |
| `.` | 分隔符 | `.` |
| `MM` | 两位月份 | `06` |

**示例**：`v2026.06`（2026 年 6 月版本）

### 3.2 特殊场景

| 场景 | 版本号格式 | 示例 |
|---|---|---|
| 同年同月第二次发布 | `vYYYY.MM.N`（N 从 2 开始） | `v2026.06.2` |
| 内部预览版 | `vYYYY.MM-preview` | `v2026.06-preview` |
| 草案版本 | `vYYYY.MM-draft` | `v2026.06-draft` |

### 3.3 不采用的版本格式

- **语义化版本（SemVer）**：如 `1.0.0`，不适用于白皮书（白皮书以时间标识更直观）；
- **数字序号版本**：如 `V1`、`V2`，不够精确。

## 4. 版本号应用场景

### 4.1 PDF 文件命名

```text
Digifluidic_Brochure_[audience]_[lang]_v[version].pdf
```

示例：
- `Digifluidic_Brochure_customer_zh-CN_v2026.06.pdf`
- `Digifluidic_Brochure_internal_zh-CN_v2026.06-preview.pdf`

### 4.2 Web 页面显示

白皮书封面和页脚中显示版本号：

```text
版本：v2026.06
```

### 4.3 数据文件

`src/data/brochure.ts` 的 `meta.version` 字段：

```typescript
export const brochureData: BrochureData = {
  meta: {
    version: 'v2026.06',
    // ...
  },
};
```

### 4.4 Git Tag

```bash
git tag -a v2026.06 -m "Release v2026.06"
```

## 5. 版本号递增规则

### 5.1 正常发布

- 每次正式发布使用当前年月版本号；
- 同年同月如需再次发布，追加小版本号 `.2`、`.3`。

### 5.2 版本号确定时机

- 在发布流程的"确认版本号"步骤确定；
- 由项目经理或内容负责人确认。

### 5.3 版本号与内容更新关系

| 更新类型 | 版本号变化 | 示例 |
|---|---|---|
| 全新发布 | 使用当前年月 | `v2026.06` |
| 内容微调（错别字、联系方式） | 可选递增（同年月追加小版本） | `v2026.06.2` |
| 内容大幅更新 | 使用当前年月 | `v2026.07` |
| 设计/布局调整 | 使用当前年月 | `v2026.07` |
| 内部预览版 | 追加 `-preview` | `v2026.06-preview` |

## 6. 版本号管理

### 6.1 版本号记录

- `src/data/brochure.ts` 的 `meta.version` 字段；
- `docs/07_review_release/03_CHANGELOG.md` 中记录每个版本的变更；
- Git Tag 标记每次发布。

### 6.2 版本号一致性

以下位置的版本号必须一致：

1. `src/data/brochure.ts` → `meta.version`
2. PDF 文件名 → `vYYYY.MM`
3. Web 页面封面/页脚 → 显示版本号
4. Git Tag → `vYYYY.MM`
5. CHANGELOG → 版本号标题

### 6.3 版本号不一致的后果

- PDF 文件无法追踪来源；
- 用户无法确认是否为最新版本；
- 内部版本管理混乱。

## 7. 示例

### 7.1 首次发布（2026 年 6 月）

```
版本号：v2026.06
PDF：Digifluidic_Brochure_customer_zh-CN_v2026.06.pdf
Git Tag：v2026.06
```

### 7.2 同年 6 月第二次发布（紧急修复）

```
版本号：v2026.06.2
PDF：Digifluidic_Brochure_customer_zh-CN_v2026.06.2.pdf
Git Tag：v2026.06.2
```

### 7.3 2026 年 7 月常规更新

```
版本号：v2026.07
PDF：Digifluidic_Brochure_customer_zh-CN_v2026.07.pdf
Git Tag：v2026.07
```

## 8. 当前阶段不纳入

1. 自动化版本号递增；
2. 多分支版本管理；
3. LTS（长期支持）版本策略；
4. 版本废弃和下线策略。

## 9. 风险与控制措施

| 风险 | 控制措施 |
|---|---|
| 版本号不一致 | 发布前检查清单中专门检查版本号一致性 |
| 版本号重复 | 使用年月 + 可选小版本号确保唯一 |
| 旧版本文件覆盖新版本 | PDF 文件名包含版本号，不同版本不会相互覆盖 |
| 忘记更新版本号 | 发布流程中"确认版本号"为必须步骤 |

## 10. 与其他文档的关系

| 相关文档 | 关系说明 |
|---|---|
| `00_INTERNAL_REVIEW_GUIDE.md` | 评审后的版本发布 |
| `01_RELEASE_PROCESS.md` | 发布流程中确认版本号的步骤 |
| `03_CHANGELOG.md` | 每个版本的变更记录 |
| `docs/06_pdf_export/00_PDF_EXPORT_OVERVIEW.md` | PDF 命名规范中的版本号部分 |

## 11. 后续维护规则

1. 版本号格式变更需经团队讨论确认；
2. 所有引用版本号的位置需同步更新；
3. 版本策略重大调整后更新本文件。
