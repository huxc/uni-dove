<template>
  <z-paging
    ref="paging"
    v-model="list"
    @query="getList"
  >
    <wd-card v-for="item in list" :key="item.id" type="rectangle">
      <template #title>
        <view class="title">
          <view>{{ item.created_at }}</view>
          <view class="title-tip">
            <wd-icon name="warning" size="14px" custom-style="vertical-align: bottom" />
            身份证：{{ item.id_card }}
          </view>
        </view>
      </template>
      <view h-40px class="content">
        <image
          :src="item.avatar"
          alt="joy"
          class="border-rd-4px mr-12px h-80rpx w-80rpx"
        />
        <view>
          <view class="text-[rgba(0,0,0,0.85)] text-32rpx">
            {{ item.name }}
          </view>
          <view class="text-[rgba(0,0,0,0.25)] text-24rpx">
            邮箱：{{ item.email }} | 年龄：{{ item.age }}
          </view>
        </view>
      </view>

      <template #footer>
        <view>
          <wd-button size="small" plain @click="handleDetail">
            查看详情
          </wd-button>
        </view>
      </template>
    </wd-card>
  </z-paging>
</template>

<script lang="ts" setup>
const router = useRouter()

const list = ref<User[]>([])
const paging = ref<ZPagingInstance<any> | null>(null)
/**
 * 分页查询数据
 */
function getList(pageNum: number, pageSize: number) {
  api_user_getCustomers({ pageNum, pageSize }).then((res) => {
    const newList = (res.data as Pagination<User>)?.list || []
    paging.value!.complete(newList)
  }).catch(() => {
    paging.value!.complete(false)
  })
}
/**
 * taioz
 */
function handleDetail() {
  router.navigateTo({
    path: '/pages-sub/detail/index',
    // 参数
    query: {
      name: 'name',
    },
  })
}
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
