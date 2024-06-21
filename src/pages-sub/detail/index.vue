<template>
  <view>详情</view>
</template>

<script lang="ts" setup>
// const router = useRouter()
console.log('import.meta.env--ddd111111111111111', import.meta.env)
</script>

  <style scoped lang="scss">
  .content,
.title {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.content {
  justify-content: flex-start;
}
.title {
  justify-content: space-between;
}
.title-tip {
  color: rgba(0, 0, 0, 0.25);
  font-size: 12px;
}
</style>
