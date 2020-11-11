<template>
    <div class="addShopButtonCSS">
      <div>{{ addList }}</div>
      <img src="../static/assets/linkNextPageLogo.png">
    </div>
</template>

<script>
export default {
name: "UrlButtonList",
  props: {
    addList : String,
  }
}
</script>

<style scoped>

  .addShopButtonCSS{
    background-color: white;
    font-family: SpoqaHanSans;
    color : #3D454D;
    font-style: normal;
    width: 328px;
    Height: 55px;
    font-size: 16px;
    line-height: 16px;
    display: flex;
    flex-direction: row;
  }
  .addShopButtonCSS div{
    margin: 19px 166px 22px 16px;
    width: 121px;
    height: 16px;
    font-weight: normal;
  }
  .addShopButtonCSS button{
    margin: 19px 16px 22px 0;
    background-color: white;
    width: 9px;
    height: 16px;
    border: 0;
    font-weight: bold;

  }

</style>