<template>
  <div>
    <h3>Danh sách bài viết</h3>

    <div
      v-for="(post, index) in posts"
      :key="index"
      class="post"
      :class="{ highlighted: post.title.length > 20 }"
      :style="{ color: post.textColor, backgroundColor: post.backgroundColor }"
    >
      <h4>{{ post.title }}</h4>
      <p><strong>{{ post.author }}</strong></p>
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostList',
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.post {
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.highlighted {
  border: 2px solid gray;
}
</style>
