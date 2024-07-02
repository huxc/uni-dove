<route>
    {
        "style": {
            "navigationStyle":"custom",
            "navigationBarTextStyle":"white"
        }
    }
</route>

<template>
  <view w-100vw h-100vh>
    <view w-100vw h-30vh bg-blue-5 z-0 overflow-hidden pos-relative>
      <view text-40 text-white mt-180 ml-40>
        欢迎登录
      </view>
      <view pos-absolute h-80 w-100vw bg-white pos-bottom-none rounded-t-100 />
    </view>

    <view flex justify-center items-center mt--140>
      <image z-10 src="../../static/login.png" mode="scaleToFill" />
    </view>

    <view w-80vw m-a>
      <wd-form ref="formRef" :model="loginDto">
        <wd-cell-group border>
          <wd-input
            v-model="loginDto.username"
            :rules="[{ required: true, message: '请填写用户名' }]"
            label="用户名" label-width="100px" prop="username" clearable placeholder="请输入用户名"
          />
          <wd-input
            v-model="loginDto.password"
            :rules="[{ required: true, message: '请填写密码' }]"
            label="密码" label-width="100px" prop="password" show-password clearable placeholder="请输入密码"
          />
        </wd-cell-group>

        <view mt-50>
          <wd-button block type="primary" size="large" @click="handleLogin">
            登录
          </wd-button>
        </view>
      </wd-form>
    </view>
  </view>
</template>

<script setup>
import store from '@/store'

const formRef = ref()
const router = useRouter()
const loginDto = reactive({
  password: '123456',
  username: 'admin',
})

/**
 * 登录
 */
function handleLogin() {
  formRef.value
    .validate()
    .then(({ valid }) => {
      if (valid) {
        store.userStore.logIn(loginDto).then(() => {
          router.navigateTo({
            path: '/pages/home/index',
          })
        })
      }
    })
}
</script>
