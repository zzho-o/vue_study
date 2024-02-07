<template>
  <div>
    <h4>상세페이지</h4>
    <div class="mb-5"></div>
    <div v-for="feed in feeds" :key="feed.id">
      <div v-if="feed.number === Number($route.params.id)">
        <h5>{{ feed.title }}</h5>
        <p>{{ feed.content }}</p>
      </div>
      <!-- 피드들을 한번씩 다 검사해야 하기에 좋은지 확인해야 하는 부분 PageNation을 쓴다면 괜찮을지도 -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    feeds: Array,
  },
};
</script>

<style></style>
