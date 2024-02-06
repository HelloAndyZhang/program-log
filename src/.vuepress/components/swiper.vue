<template>
  <!-- props的配置跟原来版本实例化时候的配置一样，只是转换格式即可 -->
  <swiper
    autoplay
    loop
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :modules="modules"
    :keyboard="true"
    :mousewheel="true"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
    :pagination="{ el: '.pagination', type: 'bullets' }"
    :scrollbar="{ el: '.swiper-scrollbar', draggable: true }"
  >
    <swiper-slide v-for="(item, index) in swiperList" :key="index">
      <img :src="item.imgPic" alt=""   style="pointer-events: none;object-fit: cover;" />
    </swiper-slide>
  </swiper>

  <div class="swiper-button-next">
    <svg
      class="ov-icon"
      aria-hidden="true"
      width="19.2"
      height="19.2"
      viewBox="-139.52 -43.52 599.04 599.04"
      fill="currentColor"
      style="font-size: 1.2em"
    >
      <path
        d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
      ></path>
    </svg>
  </div>
  <div class="swiper-button-prev">
    <svg
      class="ov-icon"
      aria-hidden="true"
      width="19.2"
      height="19.2"
      viewBox="-139.52 -43.52 599.04 599.04"
      fill="currentColor"
      style="font-size: 1.2em"
    >
      <path
        d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
      ></path>
    </svg>
  </div>
  <!-- <div class="pagination"></div>
  <div class="swiper-scrollbar"></div> -->
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
//这里拆分了模块，按需引入，注意一些模块需要引入css才能生效
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
  Mousewheel,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
export default defineComponent({
  setup() {
    const state = reactive({
      swiperList: [
        {
          imgPic:
            "https://raw.githubusercontent.com/HelloAndyZhang/docs-site/main/static/image/20200731/5719b6ea5397f.jpg",
        },
        {
          imgPic:
            "https://v2-vuepress-theme-gungnir.vercel.app/img/home-bg/1.jpg",
        },
        {
          imgPic:
            "https://v2-vuepress-theme-gungnir.vercel.app/img/home-bg/2.jpg",
        },
        {
          imgPic:
            "https://v2-vuepress-theme-gungnir.vercel.app/img/home-bg/3.jpg",
        },
        {
          imgPic:
            "https://v2-vuepress-theme-gungnir.vercel.app/img/home-bg/4.jpg",
        },
      ],
    });
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };

    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Keyboard, Mousewheel, Pagination, Scrollbar],
      ...toRefs(state),
    };
  }, //setup

  components: {
    Swiper,
    SwiperSlide,
  },
});
</script>

<style lang="scss" scoped>
.swiper {
  height: 100vh;
}
.swiper-slide {
  height: 100vh;
  img {
    width: 100%;
    height: 100%;
  }
}
.swiper-scrollbar {
  height: 10px;
}
.swiper-button {
  &-prev,
  &-next {
    z-index: 100;
    cursor: pointer;
    position: absolute;
    top: 50%;
    margin-top: -30px;
    width: auto;
    padding: 15px 6px;
    color: #fff9;
    background-color: #0000004d;
    transition: 0.6s ease;
    box-sizing: border-box;
    display: flex;
    &:hover {
      color: #fff;
      background-color: #0009;
    }
  }
  &-prev {
    left: 0;
    border-radius: 0 3px 3px 0;
  }
  &-next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }
}
</style>
