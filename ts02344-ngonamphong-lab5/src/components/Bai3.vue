<template>
  <div>
    <h3>Thông tin cá nhân</h3>

    <div>
      <label>Họ và Tên:</label>
      <input v-model="userInfo.name" />
    </div>

    <div>
      <label>Tuổi:</label>
      <input type="number" v-model="userInfo.age" />
    </div>

    <div>
      <label>Email:</label>
      <input type="email" v-model="userInfo.email" />
    </div>

    <div class="info">
      <h4>Thông tin đã nhập:</h4>
      <p>Họ và Tên: {{ userInfo.name }}</p>
      <p>Tuổi: {{ userInfo.age }}</p>
      <p>Email: {{ userInfo.email }}</p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const userInfo = reactive({
  name: '',
  age: null,
  email: ''
})
</script>

<style>
.info {
  margin-top: 15px;
  padding: 10px;
  background: #222;
  color: white;
  border-radius: 6px;
}
</style>
