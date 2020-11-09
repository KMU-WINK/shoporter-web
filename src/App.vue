<template>
  <div id="app">
    <bottomTabBar/>
    <login picture_src= 'coupangLogo.png' />
  </div>
</template>

<script>
import bottomTabBar from './components/bottomTabBar.vue'
import login from './components/login';

export default {
  name: 'App',
  components: {
    bottomTabBar,
    login,
  },
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
