<template>
  <div>
    <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li v-if="step === 1" @click="step += 1">Next</li>
        <li v-if="step === 2" @click="publish">발행</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>
    <Container
      @write="content = $event"
      :feeds="feeds"
      :step="step"
      :imgUrl="imgUrl"
    />
    <button @click="more">더보기</button>

    <div class="footer">
      <ul class="footer-button-plus">
        <input @change="upload" type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>
  </div>
</template>

<script>
import Container from "./components/Container";
import { dummy } from "./assets/dummy";
import axios from "axios";

export default {
  name: "App",
  components: { Container: Container },
  data() {
    return { feeds: dummy, moreNum: 0, step: 0, imgUrl: "", content: "" };
  },
  methods: {
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.moreNum}.json`)
        .then((res) => {
          this.feeds.push(res.data);
          this.moreNum += 1;
        });
    },
    upload(e) {
      const file = e.target.files;
      const url = URL.createObjectURL(file[0]);
      this.imgUrl = url;
      this.step += 1;
    },
    publish() {
      const myFeed = {
        name: "tmp name",
        userImage: "",
        postImage: this.imgUrl,
        likes: 0,
        date: "",
        liked: false,
        content: this.content,
        filter: "",
      };
      this.feeds.unshift(myFeed);
      this.step = 0;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
