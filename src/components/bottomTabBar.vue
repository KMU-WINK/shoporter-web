<template>
  <div class="bottomTabBar">
    <div>
      <img src="../static/assets/graphLogoOff.png">
      <span>매출/정산</span>
    </div>
    <div>
      <img src="../static/assets/homeLogoOff.png">
      <span>주문/매출</span>
    </div>
    <div>
      <img src="../static/assets/setLogoOff.png">
      <span>설정</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bottomTabBar',
  props: {
    msg: String
  }
}
</script>

<style scoped>

  .bottomTabBar {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.16), 0px 1px 12px rgba(0, 0, 0, 0.16), 0px 3px 5px rgba(0, 0, 0, 0.16);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  .bottomTabBar > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  span {
    font-size: 10px;
    line-height: 16px;
    color: #3D454D;
    font-family: SpoqaHanSans;
  }
</style>