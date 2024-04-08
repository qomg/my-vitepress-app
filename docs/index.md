---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "My Awesome Project"
  text: "A VitePress Site"
  tagline: My great project tagline
  image:
    src: /logo.png
    alt: VitePress
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples
    - theme: brand
      text: View on GitHub
      link: https://qomg.github.io/
      target: _blank
      rel: sponsored

features:
  - title: ArkTS基础语法
    details: ArkTS在TypeScript的基础上，匹配ArkUI框架，扩展了声明式UI描述、自定义组件、动态扩展UI元素、状态管理和渲染控制、并发任务等多种能力。
    link: /ArkTS基础语法
  - title: ArkUI组件
    details: ArkUI基础组件，包括布局、列表、滚动、导航、按钮以及动画。
    link: /ArkUI组件
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---


# Getting Started

You can get started using VitePress right away using `npx`!

```sh
npm init
npx vitepress init
```
