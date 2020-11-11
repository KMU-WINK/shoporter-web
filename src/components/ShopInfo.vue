<template>
  <div class="ShopInfo">
    <img :src="resolve_img_url(picture_src)" />
    {{ shopName }}
  </div>
</template>

<script>
export default {
name: "ShopInfo",
  props: {
    picture_src: String,
    shopName: String,
  },
  methods: {
    resolve_img_url: function (path) {
      let images = require.context('../static/assets/', false, /\.png$|\.jpg$/)
      return images("./"+path)
    }
  }
}
</script>

<style scoped>
  .ShopInfo {
    width: 328px;
    height: 68px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    font-family: SpoqaHanSans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    color: #12161A;
  }
  .ShopInfo > img {
    width: 36px;
    margin: 16px;
  }
</style>