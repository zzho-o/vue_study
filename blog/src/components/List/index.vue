<template>
  <div>
    <router-link to="/">홈</router-link>
    <div v-for="(feed, i) in feeds" :key="i">
      <div>{{ feed.title }}</div>
      <p>{{ feed.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  component: {},
  props: { feeds: Array },
};
</script>

<style></style>
