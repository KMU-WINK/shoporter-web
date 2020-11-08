<template>
  <div id="app">
    <bottomTabBar/>
    <login picture_src= static/assets/coupangLogo.png />
    <Test :test3="test3"/>
  </div>
</template>

<script>
import bottomTabBar from './components/bottomTabBar.vue'
import Test from './components/Test';
import login from './components/login';
export default {
  name: 'App',
  components: {
    bottomTabBar,
    Test,
    login,
  },
  data(){
    return{
      test3:"asdf"
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #EDF1F5;
}
</style>
