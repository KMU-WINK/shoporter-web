<template>
  <div id="app">
    <bottomTabBar />
    <Button />
  </div>
</template>

<script>
import bottomTabBar from './components/bottomTabBar.vue'
import Button from './components/Button.vue'


export default {
  name: 'App',
  components: {
    bottomTabBar,
    Button
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
