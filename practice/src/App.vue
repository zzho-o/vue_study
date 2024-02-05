<template>
  <div>
    <transition name="fade">
      <Modal
        :productModal="productModal"
        :modalOn="modalOn"
        :closeModal="closeModal"
      />
    </transition>
    <div class="menu">
      <a v-for="(menu, i) in menus" :key="i">{{ menu }}</a>
    </div>
    <transition name="fade">
      <Discount
        name="fade"
        style="position: absolute; position: fixed"
        v-if="showDiscount === true"
      />
    </transition>
    <button @click="priceSort">가격순정렬</button>
    <button @click="sortBack">되돌리기</button>
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
  </div>
</template>

<script>
import { products } from "./assets/dummy";
import Modal from "./components/Modal";
import Card from "./components/Card";
import Discount from "./components/Discount";

export default {
  name: "App",
  components: { Modal: Modal, Card: Card, Discount: Discount },
  data() {
    return {
      originalProducts: [...products],
      productModal: {},
      modalOn: false,
      products: products,
      menus: ["Home", "Shop", "About"],
      showDiscount: false,
    };
  },
  beforeMount() {
    setTimeout(() => {
      this.showDiscount = true;
    }, 200);
    setTimeout(() => {
      this.showDiscount = false;
    }, 2000);
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
    priceSort() {
      this.products.sort((a, b) => Number(a.price) - Number(b.price));
    },
    sortBack() {
      this.products = [...this.originalProducts];
    },
  },
};
</script>

<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-laeve-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
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
