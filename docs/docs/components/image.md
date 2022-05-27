# Image 图片

## 基本使用

使用 `src` 属性设置图片的路径，`width` 设置图片的宽度，`height` 可以设置图片的高度

<f-image width="200px" src="https://tianyuhao.cn/images/auto/2.png" />

<f-image height="129px" src="https://tianyuhao.cn/images/auto/1.png" />

::: details 显示代码

```html
<f-image width="200px" src="https://tianyuhao.cn/images/auto/2.png" />
<f-image height="129px" src="https://tianyuhao.cn/images/auto/1.png" />
```

:::

## 适应容器方式

`fit` 属性可以配置不同的适应容器的方式，详见原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit#try_it) 属性

<f-image
    width="110px"
    height="110px"
    style="border:1px solid #333;margin:10px"
    v-for="(fit, index) in ['fill', 'contain', 'cover', 'none', 'scale-down']"
    :key="index"
    :fit="fit"
    src="https://tianyuhao.cn/images/auto/2.png"
/>

::: details 显示代码

```html
<f-image
  width="110px"
  height="110px"
  style="border:1px solid #333;margin:10px"
  v-for="(fit, index) in ['fill', 'contain', 'cover', 'none', 'scale-down']"
  :key="index"
  :fit="fit"
  src="https://tianyuhao.cn/images/auto/2.png"
/>
```

:::

## 大图预览

你可以通过 `preview-list` 属性传入一个数组，存入需要预览的图片地址，可以实现预览效果

<f-image
  width="200px"
  src="https://tianyuhao.cn/images/auto/1.png"
  :preview-list="listImg"
/>

::: details 显示代码

```html
<template>
  <f-image
    width="200px"
    src="https://tianyuhao.cn/images/auto/1.png"
    :preview-list="listImg"
  />
</template>

<script lang="ts" setup>
  const listImg = [
    'https://tianyuhao.cn/images/auto/1.png',
    'https://tianyuhao.cn/images/auto/2.png',
    'https://tianyuhao.cn/images/auto/3.png'
  ]
</script>
```

:::

## 隐藏预览操作栏

如果在大图预览的时候，你不需要使用下放的操作栏，可以通过 `preview-show-option` 属性将其隐藏

<f-image
  width="200px"
  src="https://tianyuhao.cn/images/auto/1.png"
  :preview-list="listImg"
  :preview-show-option="false"
/>

::: details 显示代码

```html
<template>
  <f-image
    width="200px"
    src="https://tianyuhao.cn/images/auto/1.png"
    :preview-list="listImg"
    :preview-show-option="false"
  />
</template>

<script lang="ts" setup>
  const listImg = [
    'https://tianyuhao.cn/images/auto/1.png',
    'https://tianyuhao.cn/images/auto/2.png',
    'https://tianyuhao.cn/images/auto/3.png'
  ]
</script>
```

:::

## 说明文字

`caption` 属性可以在图片上加入一些说明文字

也可以使用 `caption-color` 配置不同的颜色

<f-image height="190px" caption="漂亮的玫瑰花" src="https://tianyuhao.cn/images/auto/2.png" />

<f-image height="190px" caption="看远处的埃菲尔铁塔" caption-color="skyblue" src="https://tianyuhao.cn/images/auto/3.png" />

::: details 显示代码

```html
<f-image
  height="190px"
  caption="漂亮的玫瑰花"
  src="https://tianyuhao.cn/images/auto/2.png"
/>

<f-image
  height="190px"
  caption="看远处的埃菲尔铁塔"
  caption-color="skyblue"
  src="https://tianyuhao.cn/images/auto/3.png"
/>
```

:::

## 圆角图片

`round` 属性可以配置圆角图片，你需要传入一个具体的数值单位

<f-image round="30px" height="190px" caption="漂亮的玫瑰花" src="https://tianyuhao.cn/images/auto/2.png" />

::: details 显示代码

```html
<f-image
  round="30px"
  height="190px"
  caption="漂亮的玫瑰花"
  src="https://tianyuhao.cn/images/auto/2.png"
/>
```

:::

## 懒加载

`lazy` 属性可以设置图片懒加载，详情可参考 `DevTools` 的 `Network`

<f-image width="200px" lazy src="https://tianyuhao.cn/images/auto/4.png" />

::: details 显示代码

```html
<f-image width="200px" lazy src="https://tianyuhao.cn/images/auto/4.png" />
```

:::

## Attributes

| 参数                | 说明                                                                                                         | 类型     | 可选值                                       | 默认值 |
| ------------------- | ------------------------------------------------------------------------------------------------------------ | -------- | -------------------------------------------- | ------ |
| src                 | 图片路径                                                                                                     | string   | ——                                           | ——     |
| alt                 | 原生 [alt](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img#attr-alt) 属性                      | string   | ——                                           | ——     |
| draggable           | 是否可以拖动                                                                                                 | boolean  | ——                                           | true   |
| lazy                | 是否懒加载图片                                                                                               | boolean  | ——                                           | false  |
| root-margin         | 触发懒加载的举例距离                                                                                         | string   | ——                                           | 100px  |
| width               | 图片的宽度                                                                                                   | string   | ——                                           | ——     |
| height              | 图片的高度                                                                                                   | string   | ——                                           | ——     |
| block               | 是否为块级元素                                                                                               | boolean  | ——                                           | false  |
| fit                 | 如何适应容器，原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit#try_it) 属性     | string   | `fill` `contain` `cover` `none` `scale-down` | ——     |
| select              | 是否可以选择复制                                                                                             | boolean  | ——                                           | false  |
| referrer-policy     | 原生 [referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy#syntax) 属性 | string   | ——                                           | ——     |
| preview-list        | 开启图片预览                                                                                                 | string[] | ——                                           | []     |
| preview-show-index  | 图片预览展示的首张图的索引，从 0 开始                                                                        | number   | ——                                           | 0      |
| preview-z-index     | 图片预览展示的 [z-index](https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index)                           | number   | ——                                           | 999    |
| preview-show-option | 是否展示图片预览下面的操作栏                                                                                 | boolean  | ——                                           | true   |
| round               | 配置圆角，传入一个单位                                                                                       | string   | ——                                           | ——     |
| err-src             | 加载失败时要显示的地址                                                                                       | string   | ——                                           | ——     |
| caption             | 图片上的说明文字                                                                                             | string   | ——                                           | ——     |
| caption-color       | 图片上的说明文字的颜色                                                                                       | string   | ——                                           | #fff   |

<script setup>
  const listImg = [
    'https://tianyuhao.cn/images/auto/1.png',
    'https://tianyuhao.cn/images/auto/2.png',
    'https://tianyuhao.cn/images/auto/3.png'
  ]
</script>