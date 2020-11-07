<template>
  <div id="app">
    <bottomTabBar />
  </div>
</template>

<script>
import bottomTabBar from './components/bottomTabBar.vue'


export default {
  name: 'App',
  components: {
    bottomTabBar,
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
