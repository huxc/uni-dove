<template>
  <view class="v-banner" :style="[boxStyle]">
    <swiper
      class="v-swiper" :autoplay="true" indicator-dots circular
      @animationfinish="onAnimationfinish"
    >
      <swiper-item v-for="(url, index) in list" :key="index" class="v-swiperi-tem">
        <image class="v-img" :src="url" mode="scaleToFill" />
      </swiper-item>
    </swiper>
  </view>
</template>

<script lang="ts" setup>
const props = defineProps({
  // 轮播图列表
  list: {
    type: Array as PropType<Array<any>>,
    // eslint-disable-next-line jsdoc/require-jsdoc
    default: () => [],
  },
})

const indexes = defineModel<number>()

const boxStyle = computed(() => {
  return {
    transition: '1.2s background-image',
    backgroundImage: `url(${props.list[indexes.value ?? 0]})`,
  }
})

/**
 * 动画
 */
function onAnimationfinish(e) {
  indexes.value = e.detail.current
}
</script>

<style lang="scss">
/*sass变量，用于动态计算*/
$swiperWidth: 650rpx;

$swiperHeight: 350rpx;

$verticalPadding: 50rpx;

$horizontalPadding: 50rpx;

$imgWidth: $swiperWidth + $horizontalPadding * 2;

$imgHeight: $swiperHeight + $horizontalPadding * 2;

.v-banner {
  display: inline-block;
  background-size: 100% 100%;
  padding: $verticalPadding $horizontalPadding;
  .v-swiper {
    height: $swiperHeight;
    width: $swiperWidth;
    overflow: hidden;
    .v-swiperi-tem {
      .v-img {
        width: $imgWidth;
        height: $imgHeight;
        margin-top: -$verticalPadding;
        margin-left: -$horizontalPadding;
      }
    }
  }
}
</style>
