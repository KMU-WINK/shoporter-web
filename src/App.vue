<template>
  <div id="app">
    <bottomTabBar/>
<!--    <login picture_src= 'coupangLogo.png' />-->
    <totalMoney :callItem="1239" :totalSell="3123"/>
    <bottomTabBar />
    <Button />
    <Selectbar />
    <Header headerTitle="SHOPORTER." />
  </div>
</template>

<script>
import bottomTabBar from './components/bottomTabBar.vue'
// import login from './components/login';
import totalMoney from "./components/totalMoney.vue"
import Button from './components/Button.vue'
import Selectbar from './components/Selectbar.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    bottomTabBar,
    // login,
    Button,
    Selectbar,
    totalMoney,
    Header,
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
