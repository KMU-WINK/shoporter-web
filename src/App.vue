<template>
  <div id="app">
    <totalMoney :callItem="1239" :totalSell="3123"/>
    <bottomTabBar />
    <Button />
    <ShoppingTotal picture_src="../static/assets/coupangLogo.png" shopName="쿠팡" order="20" cancel="20" question="20"/>
  </div>
</template>

<script>
import bottomTabBar from './components/bottomTabBar.vue'
import totalMoney from "./components/totalMoney.vue";
import Button from './components/Button.vue'
import ShoppingTotal from "@/components/ShoppingTotal";

export default {
  name: 'App',
  components: {
    bottomTabBar,
    totalMoney,
    Button,
    ShoppingTotal,
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
