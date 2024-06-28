<template>
  <div>
    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post.id">
        <nuxt-link to="{ name: 'blog-slug', params: { slug: post.slug } }">
          <h3>{{ post.title }}</h3>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const {data, error, pending, refresh} = await useAsyncGql({
  operation: 'getPosts',
  variables: {limit: 15},
});
if (error.value) {
  console.error(error.value);
}
const posts = data.value.posts.nodes ?? [];
</script>
