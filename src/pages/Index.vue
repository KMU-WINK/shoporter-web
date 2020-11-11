<template>
  <div id="app">
    <TotalMoney :callItem="1239" :totalSell="3123"/>
    <div>주문수량을 보려면 쇼핑몰을 추가하세요</div>
    <Button/>
  </div>
</template>

<script>

import TotalMoney from "@/components/TotalMoney";
import Button from "@/components/Button";

export default {
  name: "index",
  components: {
    TotalMoney,
    Button,
  }
}
</script>

<style scoped>

</style>