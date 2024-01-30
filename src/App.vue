<template>
  <Modal
    :productModal="productModal"
    :modalOn="modalOn"
    :closeModal="closeModal"
  />

  <div class="menu">
    <a v-for="(menu, i) in menus" :key="i">{{ menu }}</a>
  </div>

  <div style="margin-bottom: 20px">
    <Card
      :product="product"
      :increase="increase"
      @modalOn="
        modalOn = true;
        productModal = $event;
      "
      v-for="(product, i) in products"
      :key="i"
    />
    <!-- :clickProduct="clickProduct" -->
    <!-- 이 함수로도 조작 가능 -->
  </div>

  <div style="margin-bottom: 100px"></div>
</template>

<script>
import { products } from "./assets/dummy";
import Modal from "./components/Modal";
import Card from "./components/Card";
export default {
  name: "App",
  components: { Modal: Modal, Card: Card },
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
