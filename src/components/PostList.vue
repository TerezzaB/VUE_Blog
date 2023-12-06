<template>
    <div v-for="post in posts" :key="post.id">
        <P-Card class="content-card">
            <template #content>
                <p><SinglePost :post="post"/></p>
            </template>
        </P-Card>
    </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue';
import SinglePost from './SinglePost.vue'

export default {
    name: 'PostList',
    props: ['posts'],
    components: { SinglePost },
    setup(props) {
        onMounted(() => console.log('Component PostList mounted'))
        onUnmounted(() => console.log('Component UNmounted'))
        onUpdated(() => console.log('Component updated'))
    }
}
</script>

<style scoped>
.content-card { width:30em; margin: 25px auto; transition: transform 0.3s ease }
.content-card:hover { transform: scale(1.02); cursor: pointer; }
</style>