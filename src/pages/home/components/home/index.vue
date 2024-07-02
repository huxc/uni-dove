<template>
  <view>
    <V3Swiper v-model="indexes" :list="list" />
    <wd-card title="企业介绍">
      我们是一家专注于创新和可持续发展的企业，致力于为客户提供高效解决方案和卓越服务。
      <template #footer>
        <wd-button size="small" plain>
          查看详情
        </wd-button>
      </template>
    </wd-card>
    <wd-card title="经营分析">
      经营分析涵盖市场研究、竞争分析和财务评估，旨在优化资源配置和战略决策，确保企业在竞争激烈的市场中持续增长和盈利。
      <template #footer>
        <wd-button size="small" plain>
          查看详情
        </wd-button>
      </template>
    </wd-card>
  </view>
</template>

<script lang="ts" setup>
import V3Swiper from '@/components/v3-swiper/index.vue'

const indexes = ref(0)

const list = ref([
  'https://fastly.picsum.photos/id/50/980/500.jpg?hmac=-_MmpagZspmLnIvPUC_9lPFReSTfNcWgSCg7rf_ZHJk',
  'https://fastly.picsum.photos/id/12/980/500.jpg?hmac=L8G9tavMuOJf2Z9vt6DRHxyIBjAnmsAxzrycd0w0LEU',
  'https://fastly.picsum.photos/id/198/980/500.jpg?hmac=2sUi4k2Suv34rF5VKsHwKAbV17rDrBbDIfsbKaE-BGs',
  'https://fastly.picsum.photos/id/230/980/500.jpg?hmac=km4jMgVHnp_yYbMPcMydQiauBA73CE07xg93NkOiyS4',
])

onMounted(() => {
  uni.setNavigationBarColor({
    frontColor: '#ffffff',
    backgroundColor: '#000000',
    animation: {
      duration: 0,
      timingFunc: 'linear',
    },
  })
})
</script>

<style scoped lang="scss">

</style>
