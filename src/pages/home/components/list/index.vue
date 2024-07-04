<template>
  <view>
    <!-- use-cache cache-key="homeList" -->
    <z-paging ref="paging" v-model="list" @query="getList">
      <template #top>
        <wd-navbar title="列表" :fixed="true" placeholder safe-area-inset-top />
      </template>

      <wd-card v-for="item in list" :key="item.id" type="rectangle">
        <template #title>
          <view class="flex flex-row justify-between items-center">
            <view>{{ item.name }}</view>
            <view class="text-[rgba(0,0,0,0.65)]">
              <wd-icon name="warning" size="14px" custom-style="vertical-align: bottom" />
              身份证：{{ item.id_card }}
            </view>
          </view>
        </template>
        <view h-40px class="flex flex-row justify-start items-center">
          <image
            :src="`https://picsum.photos/60/60?random=${item.id}`"
            alt="joy"
            class="border-rd-4 mr-12 h-80 w-80"
          />
          <view>
            <view class="text-[rgba(0,0,0,0.65)] text-24">
              注册日期：{{ item.created_at.split(' ')[0] }}
            </view>
            <view class="text-[rgba(0,0,0,0.65)] text-24">
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
  </view>
</template>

<script lang="ts" setup>
import { getCustomers } from '@/api/modules/user'

const router = useRouter()

const list = ref<UserDto[]>([])
const paging = ref<ZPagingInstance | null>(null)

onMounted(() => {
  uni.setNavigationBarColor({
    frontColor: '#000000',
    backgroundColor: '#ffffff',
    animation: {
      duration: 0,
      timingFunc: 'linear',
    },
  })
})

/**
 * 分页查询数据
 */
function getList(pageNum: number, pageSize: number) {
  getCustomers({ pageNum, pageSize }, { isLoading: false }).then((res) => {
    const newList = res.data?.list || []
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
