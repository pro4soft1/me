<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <nuxt-link to="{ name: 'blog-slug', params: { slug: post.slug } }">
          <h3>{{ post.title }}</h3>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data() {
    return {
      posts: []
    }
  },
  async asyncData({app}) {
    const {data} = await app.apolloProvider.defaultClient.query({
      query: gql`
      query getPosts {
    posts {
        nodes {
            id
            slug
            status
            content
            featuredImage {
                cursor
            }
            excerpt
            link
            title
            uri
        }
    }
}

      `
      // variables: { limit: 5 }
    })

    return {
      posts: data.posts.nodes
    }
  }
}
</script>
