<template>
  <div id="app">
    <totalMoney :callItem="1239" :totalSell="3123"/>
    <ShoppingManagement picture_src="naver.jpg" Name="아몽스토어" shopName="스마트스토어"/>
    <Button />
    <bottomTabBar />
  </div>
</template>

<script>
import bottomTabBar from './components/bottomTabBar.vue'
import totalMoney from "./components/totalMoney.vue";
import Button from './components/Button.vue'
import ShoppingManagement from "@/components/ShoppingManagement";

export default {
  name: 'App',
  components: {
    bottomTabBar,
    totalMoney,
    Button,
    ShoppingManagement,
  }
}
</script>

<style>
@font-face{ font-family: SpoqaHanSans; src: url(https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css) }

* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #EDF1F5;
}
</style>
