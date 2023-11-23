<template>
    <div class="post m">
        <router-link :to="{ name: 'Details', params: { id: post.id } }">
            <h3>{{ post.id }} {{ post.title }}</h3>
        </router-link>
        <div>{{ snippet }}</div>
        <span v-for="tag in post.tags" :key="tag">
            #{{ tag }}
        </span>
    </div>
</template>


<script>
import { computed } from 'vue'
export default {
    props: ['post'],
    setup(props){
        const snippet = computed(() => {
            return props.post.body.substring(0, 100) + '...' 
        })

        return { snippet }
    }
}
</script>


<style scoped>

</style>