<template>
  <div>
    <Header headerTitle="SHOPORTER."/>
    <router-view></router-view>
    <BottomTabBar></BottomTabBar>
  </div>
</template>

<script>
import Header from "@/components/Header";
import BottomTabBar from "@/components/BottomTabBar";

export default {
  name: 'App',
  components: {
    BottomTabBar,
    Header,
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
