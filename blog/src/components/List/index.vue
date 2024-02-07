<template>
  <div>
    <router-link to="/">홈</router-link>
    <div class="mt-5"></div>
    <div v-for="(feed, i) in feeds" :key="i">
      <router-link :to="'/detail/' + i">
        <div>{{ feed.title }}</div>
        <p>{{ feed.content }}</p>
        <div class="mt-5"></div>
      </router-link>
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
