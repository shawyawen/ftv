# Button 按钮

### 介绍

按钮用于触发一个操作，如提交表单。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/adftvced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Button } from 'ftv';

const app = createApp();
app.use(Button);
```

## 代码演示

### 按钮类型

按钮支持 `default`、`primary` 两种类型，默认为 `default`。

```html
<ftv-button type="primary">主要按钮</ftv-button>
<ftv-button type="default">激活按钮</ftv-button>
```

### 禁用状态

通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

```html
<ftv-button disabled type="primary">禁用状态</ftv-button>
<ftv-button disabled type="default">禁用状态</ftv-button>
```

### 加载状态

通过 `loading` 属性设置按钮为加载状态，加载状态下默认会隐藏按钮文字，可以通过 `loading-text` 设置加载状态下的文字。

```html
<ftv-button loading type="primary" />
<ftv-button loading type="primary" loading-type="spinner" />
<ftv-button loading type="primary" loading-text="加载中..." />
```

### 按钮形状

通过 `square` 设置方形按钮，通过 `round` 设置圆形按钮。

```html
<ftv-button square type="primary">方形按钮</ftv-button>
<ftv-button round type="primary">圆形按钮</ftv-button>
```

### 图标按钮

通过 `icon` 属性设置按钮图标，支持 Icon 组件里的所有图标，也可以传入图标 URL。

```html
<ftv-button icon="plus" type="primary" />
<ftv-button icon="plus" type="primary">按钮</ftv-button>
<ftv-button
  icon="https://fastly.jsdelivr.net/npm/@ftv/assets/user-active.png"
  type="primary"
>
  按钮
</ftv-button>
```

### 动画按钮

搭配 Button 和 [Swipe 组件](/#/zh-CN/swipe)，可以实现垂直滚动的动画按钮效果。

```html
<ftv-button type="danger" round>
  <ftv-swipe
    vertical
    class="notice-swipe"
    :autoplay="2000"
    :touchable="false"
    :show-indicators="false"
  >
    <ftv-swipe-item>做任务</ftv-swipe-item>
    <ftv-swipe-item>抽大奖</ftv-swipe-item>
  </ftv-swipe>
</ftv-button>

<style>
  .notice-swipe {
    height: 40px;
    line-height: 40px;
  }
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型，可选值为 `primary` `success` `warning` `danger` | _string_ | `default` |
| size | 尺寸，可选值为 `large` `small` `mini` | _string_ | `normal` |
| text | 按钮文字 | _string_ | - |
| color | 按钮颜色，支持传入 `linear-gradient` 渐变色 | _string_ | - |
| icon | 左侧图标名称或图片链接，等同于 Icon 组件的 [name 属性](#/zh-CN/icon#props) | _string_ | - |
| icon-prefix | 图标类名前缀，等同于 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props) | _string_ | `ftv-icon` |
| icon-position | 图标展示位置，可选值为 `right` | _string_ | `left` |
| tag | 按钮根节点的 HTML 标签 | _string_ | `button` |
| native-type | 原生 button 标签的 type 属性 | _string_ | `button` |
| block | 是否为块级元素 | _boolean_ | `false` |
| plain | 是否为朴素按钮 | _boolean_ | `false` |
| square | 是否为方形按钮 | _boolean_ | `false` |
| round | 是否为圆形按钮 | _boolean_ | `false` |
| disabled | 是否禁用按钮 | _boolean_ | `false` |
| hairline | 是否使用 0.5px 边框 | _boolean_ | `false` |
| loading | 是否显示为加载状态 | _boolean_ | `false` |
| loading-text | 加载状态提示文字 | _string_ | - |
| loading-type | [加载图标类型](#/zh-CN/loading)，可选值为 `spinner` | _string_ | `circular` |
| loading-size | 加载图标大小，默认单位为 `px` | _number \| string_ | `20px` |
| url | 点击后跳转的链接地址 | _string_ | - |
| to | 点击后跳转的目标路由对象，等同于 Vue Router 的 [to 属性](https://router.vuejs.org/zh/api/interfaces/RouterLinkProps.html#Properties-to) | _string \| object_ | - |
| replace | 是否在跳转时替换当前页面历史 | _boolean_ | `false` |

### Events

| 事件名     | 说明                                     | 回调参数            |
| ---------- | ---------------------------------------- | ------------------- |
| click      | 点击按钮，且按钮状态不为加载或禁用时触发 | _event: MouseEvent_ |
| touchstart | 开始触摸按钮时触发                       | _event: TouchEvent_ |

### Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 按钮内容       |
| icon    | 自定义图标     |
| loading | 自定义加载图标 |

### 类型定义

组件导出以下类型定义：

```ts
import type {
  ButtonType,
  ButtonSize,
  ButtonProps,
  ButtonNativeType,
  ButtonIconPosition,
} from 'ftv';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                              | 默认值                        | 描述 |
| --------------------------------- | ----------------------------- | ---- |
| --ftv-button-mini-height          | _24px_                        | -    |
| --ftv-button-mini-padding         | _0 var(--ftv-padding-base)_   | -    |
| --ftv-button-mini-font-size       | _var(--ftv-font-size-xs)_     | -    |
| --ftv-button-small-height         | _32px_                        | -    |
| --ftv-button-small-padding        | _0 var(--ftv-padding-xs)_     | -    |
| --ftv-button-small-font-size      | _var(--ftv-font-size-sm)_     | -    |
| --ftv-button-normal-font-size     | _var(--ftv-font-size-md)_     | -    |
| --ftv-button-normal-padding       | _0 15px_                      | -    |
| --ftv-button-large-height         | _50px_                        | -    |
| --ftv-button-default-height       | _44px_                        | -    |
| --ftv-button-default-line-height  | _1.2_                         | -    |
| --ftv-button-default-font-size    | _var(--ftv-font-size-lg)_     | -    |
| --ftv-button-default-color        | _var(--ftv-text-color)_       | -    |
| --ftv-button-default-background   | _var(--ftv-background-2)_     | -    |
| --ftv-button-default-border-color | _var(--ftv-gray-4)_           | -    |
| --ftv-button-primary-color        | _var(--ftv-white)_            | -    |
| --ftv-button-primary-background   | _var(--ftv-primary-color)_    | -    |
| --ftv-button-primary-border-color | _var(--ftv-primary-color)_    | -    |
| --ftv-button-success-color        | _var(--ftv-white)_            | -    |
| --ftv-button-success-background   | _var(--ftv-success-color)_    | -    |
| --ftv-button-success-border-color | _var(--ftv-success-color)_    | -    |
| --ftv-button-danger-color         | _var(--ftv-white)_            | -    |
| --ftv-button-danger-background    | _var(--ftv-danger-color)_     | -    |
| --ftv-button-danger-border-color  | _var(--ftv-danger-color)_     | -    |
| --ftv-button-warning-color        | _var(--ftv-white)_            | -    |
| --ftv-button-warning-background   | _var(--ftv-orange)_           | -    |
| --ftv-button-warning-border-color | _var(--ftv-orange)_           | -    |
| --ftv-button-border-width         | _var(--ftv-border-width)_     | -    |
| --ftv-button-radius               | _var(--ftv-radius-md)_        | -    |
| --ftv-button-round-radius         | _var(--ftv-radius-max)_       | -    |
| --ftv-button-plain-background     | _var(--ftv-white)_            | -    |
| --ftv-button-disabled-opacity     | _var(--ftv-disabled-opacity)_ | -    |
| --ftv-button-icon-size            | _1.2em_                       | -    |
| --ftv-button-loading-icon-size    | _20px_                        | -    |
