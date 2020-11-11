<template>
  <div id="app" class="indexDiv">
    <TotalMoney :callItem="1239" :totalSell="49800000"/>
    <div class="comment">주문수량을 보려면 쇼핑몰을 추가하세요</div>
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
  .indexDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .comment {
    font-family: SpoqaHanSans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #6C7680;
    margin: 36px 0px 24px 0px;
  }
</style>