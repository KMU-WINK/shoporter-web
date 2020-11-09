<template>
  <div id="app">
    <Header headerTitle="SHOPORTER." />
    <totalMoney :callItem="1239" :totalSell="3123"/>
    <Button />
    <Selectbar />
    <VersionInfo currentVersion="0.0.1" newestVersion="0.0.1"/>
    <ShopInfo picture_src="coupangLogo.png" shopName="쿠팡"/>
<!--    <ShoppingTotal picture_src= 'coupangLogo.png' />-->
<!--    <login picture_src= 'coupangLogo.png' />-->
    <bottomTabBar />

  </div>
</template>

<script>
import bottomTabBar from './components/BottomTabBar.vue'
import totalMoney from "./components/TotalMoney.vue"
import Button from './components/Button.vue'
import Selectbar from './components/Selectbar.vue'
import Header from './components/Header.vue'
import VersionInfo from "@/components/VersionInfo";
import ShopInfo from "@/components/ShopInfo";
// import ShoppingTotal from "@/components/ShoppingTotal";
// import login from './components/login';


export default {
  name: 'App',
  components: {
    // login,
    // ShoppingTotal,
    bottomTabBar,
    Button,
    Selectbar,
    totalMoney,
    Header,
    ShopInfo,
    VersionInfo,
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
