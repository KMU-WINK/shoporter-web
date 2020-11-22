<template>
    <div class="addShopButtonCSS">
      <div>{{ addList }}</div>
      <img src="../static/assets/linkNextPageLogo.png" alt="linkNextPageLogo">
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
    Height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .addShopButtonCSS div{
    padding: 16px;
    margin: 16px 16px 20px 0;
  }
  .addShopButtonCSS img{
    display: inline-block;
    margin: 19px 16px 20px 0;
    width: 9px;
  }

</style>