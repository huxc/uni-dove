<template>
  <view>
    <view h-39vh w-100vw bg-blue-5 pos-relative overflow-hidden>
      <view mt-160 w-230px h-80px ml-60 flex justify-between items-center>
        <wd-img :width="80" :height="80" round src="https://picsum.photos/seed/picsum/100/100" />
        <text text-white text-42>
          Hello,
        </text>
        <text text-white>
          admin
        </text>
      </view>
      <image
        w-100vw h-140 pos-absolute pos-bottom-none pos-left-none mix-blend-screen
        src="https://pic.imgdb.cn/item/6684ad09d9c307b7e947f9e8.gif" mode="aspectFit"
      />
    </view>

    <view mt-60 box-border px-40>
      <text font-bold>
        常用功能
      </text>
      <view flex justify-between items-center mt-30>
        <view w-100 flex flex-col items-center>
          <text class="i-mdi:settings-outline text-blue-400 text-60" />
          <text text-22 block mt-10>
            用户设置
          </text>
        </view>
        <view w-100 flex flex-col items-center>
          <text class="i-material-symbols-light:headset-mic text-blue-400 text-60" />
          <text text-22 block mt-10>
            联系客服
          </text>
        </view>

        <view w-100 flex flex-col items-center>
          <text class="i-mdi:printer-settings text-blue-400 text-60" />
          <text text-22 block mt-10>
            打印
          </text>
        </view>

        <view w-100 flex flex-col items-center>
          <text class="i-mdi:heart-settings text-blue-400 text-60" />
          <text text-22 block mt-10>
            我的收藏
          </text>
        </view>
      </view>

      <view flex justify-between items-center mt-30>
        <view w-100 flex flex-col items-center>
          <text class="i-mdi:content-save-settings-outline text-blue-400 text-60" />
          <text text-22 block mt-10>
            我的文档
          </text>
        </view>
        <view w-100 flex flex-col items-center>
          <text class="i-material-symbols-light:phonelink-setup-rounded text-blue-400 text-60" />
          <text text-22 block mt-10>
            联系人
          </text>
        </view>
        <view w-100 flex flex-col items-center>
          <text class="i-mdi:archive-settings-outline text-blue-400 text-60" />
          <text text-22 block mt-10>
            我的发票
          </text>
        </view>
        <view w-100 flex flex-col items-center>
          <text class="i-material-symbols-light:mail text-blue-400 text-60" />
          <text text-22 block mt-10>
            我的邮件
          </text>
        </view>
      </view>
    </view>
    <view mt-60 box-border px-40>
      <text font-bold>
        其他功能
      </text>
      <view flex justify-between items-center mt-30>
        <view w-100 flex flex-col items-center>
          <text class="i-heroicons:photo text-blue-400 text-60" />
          <text text-22 block mt-10>
            我的相册
          </text>
        </view>
        <view w-100 flex flex-col items-center>
          <text class="i-material-symbols-light:photo-camera-outline text-blue-400 text-60" />
          <text text-22 block mt-10>
            拍照
          </text>
        </view>
        <view w-100 flex flex-col items-center>
          <text class="i-maki:bus text-blue-400 text-60" />
          <text text-22 block mt-10>
            车票
          </text>
        </view>
        <view w-100 flex flex-col items-center>
          <text class="i-maki:parking-paid text-blue-400 text-60" />
          <text text-22 block mt-10>
            停车场
          </text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
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
