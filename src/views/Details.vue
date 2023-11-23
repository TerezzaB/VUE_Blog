<template>
    <div v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
        <h3>{{ post.title }}</h3>
        <div class="b">( {{ post.id }} )</div>
        <div class="pre">{{ post.body }}</div>
        <span v-for="tag in post.tags" :key="tag">
            #{{ tag }}
        </span>
    </div>
</template>

<script>
import getPost from '../composables/getPost.js'

export default {
    props: [ 'id' ],
    setup(props) {
        const { post, error, load } = getPost(props.id)

        load()
        return { post, error }
    }
}
</script>

<style scoped>
    .post { max-width: 1200px; margin: 0 auto; }
    .post div { color: #444; line-height: 1.5em; margin-top: 40px; }
    .post span { line-height: 40px; }
    .pre { white-space: pre-wrap; }
</style>