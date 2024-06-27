<template>
  <view>
    <wd-button size="small" plain @click="handleAbout">
      关于
    </wd-button>
  </view>
</template>

<script lang="ts" setup>
const router = useRouter()

/**
 * handleAbout
 */
function handleAbout() {
  router.navigateTo({
    path: '/pages/about/index',
    // 参数
    query: {
      id: 1,
    },
  })
}
</script>

<style scoped lang="scss">

</style>
