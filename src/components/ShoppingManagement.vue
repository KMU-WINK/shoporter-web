<template>
  <div class="content">
    <img :src="resolve_img_url(picture_src)" class="shopImg">
    <div class="info">
      <h1 class="name">{{ Name }}</h1>
      <p class="shopName">{{ shopName }}</p>
    </div>
    <img src="../static/assets/button1.png" class="modifyButton" id="button">
    <img src="../static/assets/button2.png" class="deleteButton" id="button">
  </div>
</template>

<script>
export default {
  name: "ShoppingManagement",
  props: {
    Name : String,
    shopName : String,
    picture_src : String,
  },
  methods : {
    resolve_img_url : function (path) {
      let images = require.context('../static/assets/', false, /\.png$|\.jpg$/)
      return images("./" + path)
    }
  }
}
</script>

<style scoped>
  .content{
    position: relative;
    width: 328px;
    height: 68px;
    left: 16px;
    background-color: white;
    display: flex;
    flex-direction: row;
  }
  .shopImg{
    position: relative;
    width: 36px;
    height: 36px;
    left: 16px;
    top: 16px;
    border-radius: 50%;
  }
  .info{
    font-family: SpoqaHanSans;
    font-style: normal;
  }
  .name{
    position: absolute;
    height: 16px;
    width: 140px;
    left: 68px;
    top: 18px;


    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    color: #12161A;
  }
  .shopName{
    position: absolute;
    width: 140px;
    height: 12px;
    left: 68px;
    top: 38px;



    font-weight: normal;
    font-size: 12px;
    line-height: 12px;
    color: #828E99;

  }
  .modifyButton{
    position: absolute;
    top: 22px;
    left: 238px;
  }
  .deleteButton{
    position: absolute;
    top: 22px;
    left: 282px;
  }

  #button{
    width: 24px;
    height: 24px;
  }

</style>