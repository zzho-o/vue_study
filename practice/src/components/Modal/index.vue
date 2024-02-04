<template>
  <div class="black-bg" v-if="modalOn === true">
    <div class="white-bg">
      <img :src="productModal.imgSrc" class="room-img" />
      <h4>{{ productModal.name }}</h4>
      <p>{{ productModal.price }}만원</p>
      <!-- <Discount /> -->
      <div style="display: flex; flex-direction: column">
        <input v-model="month" />
        <p>
          {{ month ? month : "1" }}개월 선택함 :
          {{ productModal.price * (month ? Number(month) : 1) }}만원
        </p>
        <button @click="closeModal">닫기</button>
      </div>
    </div>
  </div>
</template>

<script>
// import Discount from "../Discount";
export default {
  name: "Modal",
  // components: { Discount: Discount },
  props: {
    productModal: Object,
    modalOn: Boolean,
    closeModal: Function,
  },
  data() {
    return {
      month: "1",
    };
  },
  watch: {
    month(val) {
      if (Number(val) > 12 || Number(val) < 0) {
        alert("유효개월 수를 초과하였습니다.");
      }
    },
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
