<template>
  <Modal
    :productModal="productModal"
    :modalOn="modalOn"
    :closeModal="closeModal"
  />

  <div class="menu">
    <a v-for="(menu, i) in menus" :key="i">{{ menu }}</a>
  </div>

  <div style="margin-bottom: 20px" v-for="(product, i) in products" :key="i">
    <img :src="product.imgSrc" class="room-img" />
    <h4 @click="clickProduct(product)">
      {{ product.name }}
    </h4>
    <p>{{ product.price }}</p>
    <button @click="increase(product)">허위매물신고</button>
    <span style="margin-left: 20px">신고 수 : {{ product.reportNum }}</span>
  </div>
  <div style="margin-bottom: 100px"></div>
</template>

<script>
import { products } from "./assets/dummy";
import Modal from "./components/Modal";
export default {
  name: "App",
  components: { Modal: Modal },
  data() {
    return {
      productModal: {},
      modalOn: false,
      products: products,
      menus: ["Home", "Shop", "About"],
    };
  },
  methods: {
    increase(obj) {
      obj.reportNum += 1;
    },
    clickProduct(obj) {
      this.productModal = obj;
      this.modalOn = true;
    },
    closeModal() {
      this.modalOn = false;
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
