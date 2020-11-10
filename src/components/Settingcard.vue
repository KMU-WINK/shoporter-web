<template>
<div>
  <div class="card">
    <span>알림 설정</span>
  </div>
  <div class="card two">
    <span>쇼핑몰 관리</span>
  </div>
  <div class="card three">
    <span>어플리케이션 정보</span>
  </div>
  <div class="card four">
    <span>내 쇼핑몰</span>
  </div>
  <div class="card five">
    <span>쇼핑몰 추가</span>
    <span class="overlap">(중복 등록 가능)</span>
  </div>
</div>


</template>

<script>
export default {
name: "Settingcard"
}
</script>

<style scoped>
  .card {
    position: absolute;
    width: 328px;
    height: 290px;
    left: 400px;
    top: 106px;
    background: #FFFFFF;
    border-radius: 4px;
  }

  span{

    padding: 16px;
    font-family: Black Han Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 18px;
    color: #292E33;
    display: flex;
    flex-direction: row;
  }

  span.overlap{
    color: #DAE0E6;
  }

  .card.two {

    width: 328px;
    height: 110px;
    left: 400px;
    top: 412px;
  }

  .card.three {
    width: 328px;
    height: 230px;
    left: 400px;
    top: 538px;
    background: #FFFFFF;
    border-radius: 4px;
  }

  .card.four {
    width: 328px;
    height: 322px;
    left: 750px;
    top: 106px;
    background: #FFFFFF;
    border-radius: 4px;
  }

  .card.five {
    width: 328px;
    height: 186px;
    left: 750px;
    top: 444px;
    background: #FFFFFF;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
  }
</style>