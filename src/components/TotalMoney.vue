<template>
  <div class="totalMoney">
    <div class="ymn">
      {{ nMonth }}.{{ nDay }}(0시~24시)
    </div>
    <div class="total">
      <div>
        <div class="title">
          금일 총 주문수량
        </div>
        <div class="sum">
          {{ callItem }}
        </div>
      </div>
      <div>
        <div class="title">
          금일 총 매출
        </div>
        <div class="sum">
          {{ totalSell }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let date = new Date();
let nowMonth = date.getMonth() + 1;
let nowDay = date.getDate();
console.log(date)
export default {
  name: "totalMoney",
  data() {
    return {
      nMonth: nowMonth,
      nDay: nowDay,
    }
  },
  props: {
    callItem : String,
    totalSell : String,
  }
}


</script>

<style scoped>
  .totalMoney {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 360px;
    height: 108px;
  }
  .totalMoney > div {
    display: flex;
    flex-direction: row;
  }
  .totalMoney > div > div {
    display: flex;
    flex-direction: column;
  }
  .ymn {
    font-family: Black Han Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    color: #828E99;
    margin: 16px 16px 0px 16px
  }
  .title {
    font-family: SpoqaHanSans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    color: #3D454D;
    width: 164px;
    height: 28px;
  }
  .sum {
    font-family: Black Han Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 28px;
    color: #3D454D;
    width: 164px;
    height: 28px;
  }
  .total {
    margin: 6px 16px 16px 16px;
  }
</style>