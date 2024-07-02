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
        src="https://files.superbed.cn/static/images/b8/ad/6683a8ced9c307b7e982b8ad.gif" mode="aspectFit"
      />
    </view>

    <view mt-60 box-border px-40>
      <text>常用功能</text>
      <view flex justify-between items-center mt-30>
        <view w-100 flex flex-col items-center>
          <text class="i-mdi-alarm text-blue-400 text-60" />
          <text text-22>
            功能
          </text>
        </view>
        <view w-100 flex>
          <text class="i-mdi-alarm text-blue-400 text-60" />
          <text>功能</text>
        </view>
        <view w-100>
          <text class="i-mdi-alarm text-blue-400 text-60" />
          <text>功能</text>
        </view>
        <view w-100>
          <text class="i-mdi-alarm text-blue-400 text-60" />
          <text>功能</text>
        </view>
      </view>

      <view flex justify-between items-center mt-30>
        <view w-100>
          <text class="i-mdi-alarm text-blue-400 text-60" />
          <text>功能</text>
        </view>
        <view w-100>
          <text class="i-mdi-alarm text-blue-400 text-60" />
          <text>功能</text>
        </view>
        <view w-100>
          <text class="i-mdi-alarm text-blue-400 text-60" />
          <text>功能</text>
        </view>
        <view w-100>
          <text class="i-mdi-alarm text-blue-400 text-60" />
          <text>功能</text>
        </view>
      </view>
    </view>
    <view mt-60 box-border px-40>
      <text>其他功能</text>
      <view flex justify-between items-center mt-30>
        <view w-100>
          <text class="i-mdi-alarm text-blue-400 text-60" />
          <text>功能</text>
        </view>
        <view w-100>
          <text class="i-mdi-alarm text-blue-400 text-60" />
          <text>功能</text>
        </view>
        <view w-100>
          <text class="i-mdi-alarm text-blue-400 text-60" />
          <text>功能</text>
        </view>
        <view w-100>
          <text class="i-mdi-alarm text-blue-400 text-60" />
          <text>功能</text>
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
