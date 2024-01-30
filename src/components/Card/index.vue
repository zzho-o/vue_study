<template>
  <div>
    <img :src="product.imgSrc" class="room-img" />
    <h4 @click="clickProduct(product)">
      {{ product.name }}
    </h4>
    <p>{{ product.price }}</p>
    <button @click="increase(product)">허위매물신고</button>
    <span style="margin-left: 20px">신고 수 : {{ product.reportNum }}</span>
  </div>
</template>

<script>
export default {
  name: "Card",
  components: {},
  props: { product: Object, clickProduct: Function, increase: Function },
};
</script>

<style></style>
