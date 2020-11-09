<template>
  <div class="Header">
    <div class="title">{{ headerTitle }}</div>
    <div class="image">
      <img src="../static/assets/powerIcon.png">
      <img src="../static/assets/bellIcon.png">
    </div>
  </div>
</template>

<script>
export default {
name: "Header",
  props: {
    headerTitle : String,
  }
}
</script>

<style scoped>
  .Header {
    width: 360px;
    height: 48px;
    background-color: #F7F9FA;
    box-shadow: 0px 1px 0px #DAE0E6;
    display: flex;
    justify-content: space-between;
  }
  .title {
    margin: 16px;
    display: flex;
    align-items: center;
    font-family: Black Han Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    color: #12161A;
  }
  .image {
    display: flex;
    align-items: center;
    width: 78px;
    justify-content: space-between;
    margin: 6px 16px;
  }
</style>