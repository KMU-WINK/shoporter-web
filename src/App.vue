<template>
  <div id="app">
    <bottomTabBar />
    <Button />
    <Selectbar />
  </div>
</template>

<script>
import bottomTabBar from './components/bottomTabBar.vue'
import Button from './components/Button.vue'
import Selectbar from './components/Selectbar.vue'


export default {
  name: 'App',
  components: {
    bottomTabBar,
    Button,
    Selectbar
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
