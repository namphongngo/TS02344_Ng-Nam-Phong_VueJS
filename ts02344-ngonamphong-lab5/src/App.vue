<template>
  <div id="app">
    <h1>LAB 5 – VueJS</h1>

    <hr />
    <h2>Bài 1</h2>
    <Bai1 />

    <hr />
    <h2>Bài 2</h2>
    <Bai2 />

    <hr />
    <h2>Bài 3</h2>
    <Bai3 />

    <hr />
    <h2>Bài 4</h2>
    <CreatePost @add-post="addPost" />
    <PostList :posts="posts" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

import Bai1 from './components/Bai1.vue'
import Bai2 from './components/Bai2.vue'
import Bai3 from './components/Bai3.vue'
import CreatePost from './components/CreatePost.vue'
import PostList from './components/PostList.vue'

const posts = ref([])

function addPost(post) {
  posts.value.push(post)
}
</script>

<style>
#app {
  max-width: 900px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}
</style>
