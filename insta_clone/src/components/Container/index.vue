<template>
  <div>
    <div v-for="(feed, i) in feeds" :key="i">
      <Post :feed="feed" />
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
export default {
  components: { Post: Post },
  props: { feeds: Array },
};
</script>

<style></style>
