<template>
  <div class="home">
    <h1>Home Page</h1>
    <PostList v-if="showPosts" :posts="posts" /> 
    <button @click="showPosts = !showPosts">Toggle Posts</button>
    <button @click="posts.pop()">Delete a Post</button>
  </div>
</template>

<script>
// @ is an alias to /src

import { ref } from 'vue'
import PostList from '../components/PostList.vue'

export default {
  name: 'HomeView',
  components: { PostList },
  setup() {
    //will be run before every life cycle hooks (mounted/created etc)
    const posts = ref([
      { title: 'Welcome to the blog', body: 'Lorem ipsum body', id: 1 },
      { title: 'Top 5 CSS tips', body: 'Lorem ipsum body 2', id: 2 },
      { title: 'Top 6 CSS tips', body: 'Lorem ipsum body 3', id: 3 },
      { title: 'Top 7 CSS tips', body: 'Lorem ipsum body 4', id: 4 },
      { title: 'Top 8 CSS tips', body: 'Lorem ipsum body 5', id: 5 }
    ])

    const showPosts = ref(false)

    return { posts, showPosts }
  }
}
</script>
