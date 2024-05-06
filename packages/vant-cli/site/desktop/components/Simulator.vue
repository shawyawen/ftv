<template>
  <div :class="['van-doc-simulator', { 'van-doc-simulator-fixed': isFixed }]">
    <button class="preview" @click="preview" ref="iframe">预览组件</button>

    <!--    <iframe ref="iframe" :src="src" :style="simulatorStyle" frameborder="0" />-->
  </div>
</template>

<script>
export default {
  name: 'VanDocSimulator',

  props: {
    src: String,
  },

  data() {
    return {
      scrollTop: window.scrollY,
      windowHeight: window.innerHeight,
    };
  },

  computed: {
    isFixed() {
      return this.scrollTop > 60;
    },

    simulatorStyle() {
      const height = Math.min(640, this.windowHeight - 90);
      return {
        height: height + 'px',
      };
    },
  },
  methods: {
    preview() {
      window.open(
        this.src, // 新窗口要加载的URL地址
        '组件预览', // 窗口的名称或标签，可选，通常用于识别特定窗口以便后续操作
        'width=1920,height=1080,resizable=yes,scrollbars=yes,status=yes', // 窗口特征参数，如尺寸、是否可调整大小等
      );
    },
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.scrollTop = window.scrollY;
    });
    window.addEventListener('resize', () => {
      this.windowHeight = window.innerHeight;
    });
  },
};
</script>

<style lang="less">
.van-doc-simulator {
  position: absolute;
  top: calc(var(--van-doc-padding) + var(--van-doc-header-top-height));
  right: var(--van-doc-padding);
  z-index: 1;
  box-sizing: border-box;
  //width: var(--van-doc-simulator-width);
  //min-width: var(--van-doc-simulator-width);
  overflow: hidden;
  //background: var(--van-doc-background-2);
  //border-radius: var(--van-doc-border-radius);

  @media (max-width: 1100px) {
    right: auto;
    left: 750px;
  }

  @media (min-width: var(--van-doc-row-max-width)) {
    right: 50%;
    margin-right: calc(var(--van-doc-row-max-width) / 2 * -1 + 24px);
  }

  &-fixed {
    position: fixed;
    top: var(--van-doc-padding);
  }

  iframe {
    display: block;
    width: 100%;
  }
}
.preview {
  cursor: pointer;
  position: fixed;
  top: calc(var(--navbar-height) + 50px);
  right: 10px;
  padding: 3px 15px;
  background-color: #44bd87;
  border: none;
  outline: none;
  color: #fff;
  margin: 0.5rem 0;
  border-bottom: 2px solid #047857;
  text-shadow: 1px 1px 1px #047857;
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;
  vertical-align: middle;
}
</style>
