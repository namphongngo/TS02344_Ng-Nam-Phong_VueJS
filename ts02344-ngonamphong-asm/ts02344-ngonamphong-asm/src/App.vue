<template>
  <!-- NAVBAR -->
  <Navbar @change-page="currentPage = $event" />

  <!-- CONTENT -->
  <div class="container mt-4">
    <Home v-if="currentPage === 'home'" />
    <PostForm v-if="currentPage === 'post'" />
    <Profile v-if="currentPage === 'profile'" />
    <Login v-if="currentPage === 'login'" />
    <Register v-if="currentPage === 'register'" />
  </div>

  <!-- FOOTER -->
  <Footer />
</template>

<script setup>
import { ref } from 'vue'

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

import Home from './views/Home.vue'
import PostForm from './views/PostForm.vue'
import Profile from './views/Profile.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'

const currentPage = ref('home')
</script>
