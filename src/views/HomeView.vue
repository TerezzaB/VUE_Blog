<template>
  <div class="home">
    <h1>Home Page</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />  
    </div>
    <div v-else>Loading ...</div>
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts.js'

export default {
  name: 'HomeView',
  components: { PostList },
  setup() {
    //will be run before every life cycle hooks (mounted/created etc)

    //now i can use any of these -> { posts, error, load } inside this component
    const { posts, error, load } = getPosts()

    load()
    return { posts, error }
  }
}
</script>
