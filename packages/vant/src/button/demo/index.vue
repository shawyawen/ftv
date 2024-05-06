<script setup lang="ts">
import VanButton from '..';
import VanSwipe from '../../swipe';
import VanSwipeItem from '../../swipe-item';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    type: '按钮类型',
    size: '按钮尺寸',
    icon: '图标按钮',
    loading: '加载状态',
    shape: '按钮形状',
    default: '激活按钮',
    primary: '主要按钮',
    success: '成功按钮',
    danger: '危险按钮',
    warning: '警告按钮',
    large: '大号按钮',
    normal: '普通按钮',
    small: '小型按钮',
    mini: '迷你按钮',
    plain: '朴素按钮',
    square: '方形按钮',
    round: '圆形按钮',
    hairline: '细边框',
    hairlineButton: '细边框按钮',
    loadingText: '加载中...',
    router: '页面导航',
    urlRoute: 'URL 跳转',
    vueRoute: '路由跳转',
    customColor: '自定义颜色',
    pure: '单色按钮',
    gradient: '渐变色按钮',
    blockElement: '块级元素',
    animatedButton: '动画按钮',
    doTask: '做任务',
    lottery: '抽大奖',
  },
  'en-US': {
    type: 'Type',
    size: 'Size',
    icon: 'Icon',
    loading: 'Loading',
    shape: 'Shape',
    default: 'Default',
    primary: 'Primary',
    success: 'Success',
    danger: 'Danger',
    warning: 'Warning',
    large: 'Large',
    normal: 'Normal',
    small: 'Small',
    mini: 'Mini',
    plain: 'Plain',
    square: 'Square',
    round: 'Round',
    hairline: 'Hairline',
    hairlineButton: 'Hairline',
    loadingText: 'Loading...',
    router: 'Router',
    urlRoute: 'URL',
    vueRoute: 'Vue Router',
    customColor: 'Custom Color',
    pure: 'Pure',
    gradient: 'Gradient',
    blockElement: 'Block Element',
    animatedButton: 'Animated Button',
    doTask: 'Do Task',
    lottery: 'Lottery',
  },
});
</script>

<template>
  <demo-block :title="t('type')">
    <div class="demo-button-row">
      <van-button type="primary" round>{{ t('primary') }}</van-button>
      <van-button type="default" round>{{ t('default') }}</van-button>
    </div>
  </demo-block>

  <demo-block :title="t('disabled')">
    <van-button disabled type="primary" :text="t('disabled')" round />
  </demo-block>

  <demo-block :title="t('loadingStatus')">
    <van-button loading type="primary" round />
    <van-button loading type="primary" loading-type="spinner" round />
    <van-button loading :loading-text="t('loadingText')" type="primary" round />
  </demo-block>

  <demo-block :title="t('shape')">
    <van-button type="primary" square :text="t('square')" />
    <van-button type="primary" round :text="t('round')" />
  </demo-block>

  <demo-block :title="t('icon')">
    <van-button type="primary" icon="plus" />
    <van-button type="primary" icon="plus" :text="t('button')" />
  </demo-block>

  <demo-block :title="t('animatedButton')">
    <van-button type="primary" round>
      <van-swipe
        vertical
        class="notice-swipe"
        :autoplay="2000"
        :touchable="false"
        :show-indicators="false"
      >
        <van-swipe-item>{{ t('doTask') }}</van-swipe-item>
        <van-swipe-item>{{ t('lottery') }}</van-swipe-item>
      </van-swipe>
    </van-button>
  </demo-block>
</template>

<style lang="less">
.demo-button {
  .van-button {
    &--large {
      margin-bottom: var(--van-padding-md);
    }

    &--small,
    &--normal:not(:last-child) {
      margin-right: var(--van-padding-md);
    }
  }

  .van-doc-demo-block {
    padding: 0 var(--van-padding-md);
  }

  .van-doc-demo-block__title {
    padding-left: 0;
  }

  &-row {
    margin-bottom: var(--van-padding-sm);
  }

  .notice-swipe {
    height: 40px;
    line-height: 40px;
  }
}
</style>
