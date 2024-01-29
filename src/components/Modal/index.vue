<template>
  <div class="black-bg" v-if="modalOn === true">
    <div class="white-bg">
      <!-- <img :src="productModal.imgSrc" class="room-img" /> -->
      <!-- <h4>{{ productModal.name }}</h4>
      <p>{{ productModal.price }}</p> -->
      <Discount />
      <button @click="closeModal">닫기</button>
    </div>
  </div>
</template>

<script>
import Discount from "../Discount";
export default {
  name: "Modal",
  components: { Discount: Discount },
  props: {
    productModal: Object,
    modalOn: Boolean,
    closeModal: Function,
  },
};
</script>

<style>
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
.room-img {
  width: 100%;
  margin-top: 40px;
}
</style>
