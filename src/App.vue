<template>
  <div id="app">
    <totalMoney :callItem="1239" :totalSell="3123"/>
    <bottomTabBar/>
  </div>
</template>

<script>
import bottomTabBar from './components/bottomTabBar.vue'
import totalMoney from "./components/totalMoney.vue";

export default {
  name: 'App',
  components: {
    bottomTabBar,
    totalMoney,
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
