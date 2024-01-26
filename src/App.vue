<template>
  <div class="black-bg" @click="modalOn = false" v-if="modalOn === true">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>내용</p>
      <button @click="modalOn = false">닫기</button>
    </div>
  </div>

  <div class="menu">
    <a v-for="(menu, i) in menus" :key="i">{{ menu }}</a>
  </div>
  <div v-for="(product, i) in products" :key="i">
    <img :src="product.imgSrc" class="room-img" />
    <h4 @click="modalOn = true">{{ product.name }}</h4>
    <p>{{ product.price }}</p>
    <button @click="increase(product)">허위매물신고</button>
    <span>신고수 : {{ product.reportNum }}</span>
  </div>
</template>

<script>
import { products } from "./assets/dummy";
export default {
  name: "App",
  components: {},
  data() {
    return {
      modalOn: false,
      products: products,
      menus: ["Home", "Shop", "About"],
    };
  },
  methods: {
    increase(obj) {
      obj.reportNum += 1;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
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
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
</style>
