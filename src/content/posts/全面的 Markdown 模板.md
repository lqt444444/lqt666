---
published: 2025-07-07
description: 一个可复用的 Markdown 模板，用于创建结构化的博客文章或技术文档，支持多种高级功能。
tags:
  - Markdown
  - 博客
  - 文档
  - 示例
category: 模板
draft: true
title: 全面的 Markdown 模板
---


这是一个用于创建结构化博客文章、技术文档或笔记的可复用 Markdown 模板。它包括 Frontmatter 元数据、Expressive Code 增强代码块、提示框、GitHub 仓库卡片、嵌入视频、表格、列表和数学公式等功能。

## 引言

在此处提供内容的概述，介绍主题、概述目的，并引导读者了解预期内容。

:::tip  
在 Frontmatter 中使用 `description` 字段来总结内容，以优化 SEO 和预览效果。  
:::

## Frontmatter 配置

文件开头的 Frontmatter 定义了文章的元数据。以下是一个示例：

```yaml
---
title: 全面的 Markdown 模板
published: 2025-07-07
updated: 2025-07-07
description: 一个可复用的 Markdown 模板，用于创建结构化的博客文章或技术文档。
tags: [Markdown, 博客, 文档, 示例]
category: 模板
draft: false
image: ''
---
```

- `title`：文章标题。
- `published`：发布日期（ISO 格式，例如 `2025-07-07`）。
- `updated`：最后更新日期（可选）。
- `description`：用于 SEO 和预览的简短摘要。
- `tags`：用于分类的关键字（例如 `[Markdown, 博客]`）。
- `category`：文章分类（例如 `模板`）。
- `draft`：设为 `true` 表示文章未发布，`false` 表示发布。
- `image`：文章缩略图的路径（可选）。

:::note  
将 `draft` 设为 `true` 可保持文章未公开状态，准备好发布时改为 `false`。  
:::

## 标题

使用标题组织内容结构：

- `# 一级标题` 用于主标题。
- `## 二级标题` 用于章节。
- `### 三级标题` 用于子章节，依此类推。

## 文本格式

- **加粗**：`**文字**` 或 `__文字__`
- _斜体_：`*文字*` 或 `_文字_`
- `等宽字体`：`` `代码` ``
- 删除线：`~~文字~~`

## 列表

### 无序列表

- 项目 1
- 项目 2
    - 子项目 2.1
    - 子项目 2.2
- 项目 3

### 有序列表

1. 第一项
2. 第二项
    1. 子项目 2.1
    2. 子项目 2.2
3. 第三项

### 任务列表

- [x]  已完成任务
- [ ]  未完成任务

## 代码块

使用 [Expressive Code](https://expressive-code.com/) 增强代码块展示，支持语法高亮、行号、标记、折叠等功能。

### 基本语法高亮

```js
console.log('这是一个语法高亮的代码块！');
```

### 显示行号

```js
// 此代码块显示行号
console.log('第 2 行');
console.log('第 3 行');
```

### 自定义起始行号

```js
console.log('从第 10 行开始');
console.log('这是第 11 行');
```

### 行和文本标记

标记特定行或文本以突出显示：

```js
// 第 1 行 - 高亮
console.log('普通行');
// 第 3-4 行 - 高亮范围
console.log('另一行');
// 第 5 行 - 标记为插入
// 第 6 行 - 标记为删除
```

### Diff 风格语法

```diff
function example() {
- console.log('要移除的旧代码');
+ console.log('添加的新代码');
}
```

### 折叠代码段

```js
// 折叠的样板代码
import { library } from 'example-lib';
const setup = library.init();

// 默认可见
console.log('主要功能');

// 再次折叠的清理代码
library.cleanup();
library.shutdown();
```

### 自动换行

```js
// 长行将自动换行
function getLongString() {
  return '这是一个非常长的字符串，可能会超出容器宽度，除非容器非常宽';
}
```

### ANSI 颜色

```ansi
ANSI 颜色示例：
- 常规: [31m红色[0m [32m绿色[0m [33m黄色[0m
- 加粗: [1;31m红色[0m [1;32m绿色[0m
```

## 提示框

使用提示框突出重要信息，支持类型：`note`、`tip`、`important`、`warning`、`caution`。

:::note  
突出显示用户需要注意的信息，即使是快速浏览时。  
:::

:::tip  
提供可选信息，帮助用户更高效地完成任务。  
:::

:::important  
提供用户成功所需的关键信息。  
:::

:::warning  
需要用户立即关注的紧急内容，可能涉及风险。  
:::

:::caution  
提醒用户某个操作可能带来的负面后果。  
:::

### 自定义标题

```markdown
:::note[自定义提示标题]
这是一个带有自定义标题的提示框。
:::
```

### GitHub 风格提示框

```markdown
> [!TIP]
> 这是一个 GitHub 风格的提示框。
```

> [!NOTE]  
> 支持 GitHub 风格的提示框。

## GitHub 仓库卡片

动态显示 GitHub 仓库信息：

```markdown
::github{repo="saicaca/fuwari"}
```

::github{repo="saicaca/fuwari"}

## 嵌入媒体

### YouTube 视频

```markdown
<iframe width="100%" height="468" src="https://www.youtube.com/embed/5gIf0_xpFPI?si=N1WTorLKL0uwLsU_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
```

### Bilibili 视频

```markdown
<iframe width="100%" height="468" src="//player.bilibili.com/player.html?bvid=BV1fK4y1s7Qf&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
```

## 表格

```markdown
| 列 1 | 列 2 | 列 3 |
|------|------|------|
| 行 1A | 行 1B | 行 1C |
| 行 2A | 行 2B | 行 2C |
```

|列 1|列 2|列 3|
|---|---|---|
|行 1A|行 1B|行 1C|
|行 2A|行 2B|行 2C|

### 多行表格

```markdown
| 关键字 | 描述 |
|-------|------|
| 红色  | 日落、苹果和其他红色事物。 |
| 绿色  | 树叶、草地和青蛙。 |
```

|关键字|描述|
|---|---|
|红色|日落、苹果和其他红色事物。|
|绿色|树叶、草地和青蛙。|

## 引用

```markdown
> 这是一个引用块。
> 可以跨多行。
```

> 这是一个引用块。  
> 可以跨多行。

## 脚注

```markdown
这是一个带有脚注的句子[^1]。

[^1]: 这是脚注内容。
```

这是一个带有脚注的句子[^1](https://grok.com/chat/%E8%BF%99%E6%98%AF%E8%84%9A%E6%B3%A8%E5%86%85%E5%AE%B9%E3%80%82)。

## 定义列表

```markdown
术语 1
: 术语 1 的定义。

术语 2
: 术语 2 的定义。
```

术语 1  
: 术语 1 的定义。

术语 2  
: 术语 2 的定义。

## 行块

```markdown
| 第一行
| 第二行
| 第三行
```

| 第一行  
| 第二行  
| 第三行

## 数学公式

### 行内公式

```markdown
行内公式：$\omega = d\phi / dt$
```

行内公式：$\omega = d\phi / dt$

### 展示公式

```markdown
$$
I = \int \rho R^{2} dV
$$
```

$$  
I = \int \rho R^{2} dV  
$$

### 多行公式

```markdown
$$
\begin{equation*}
\pi = 3.1415926535 \ldots
\end{equation*}
$$
```

$$  
\begin{equation*}  
\pi = 3.1415926535 \ldots  
\end{equation*}  
$$

## 分隔线

```markdown
---
```

---
