<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="col-4 shadow-sm rounded p-4 border">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" v-model="loginInfo.username" id="exampleInputEmail1" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" v-model="loginInfo.password" id="exampleInputPassword1">
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <div class="d-flex flex-column px-1">
          <button type="button" class="btn btn-primary text-light mb-2" @click="submit()">登录</button>
          <button type="button" class="btn border">注册</button>
        </div>
        
      </form>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
const loginInfo = reactive({
  username: '',
  password: ''
}) 
const router = useRouter();
const submit = () => {
  router.push('/dashboard')
}
onMounted(async () => {
  
})

</script>

<style scoped>

</style>