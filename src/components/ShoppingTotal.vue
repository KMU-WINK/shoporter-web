<template>
  <div class="ShoppingTotal">
    <div>
      <img :src="resolve_img_url(picture_src)" />
      {{ shopName }}
    </div>
    <div class="content">
      <div class="item">
        <div>주문</div>
        <div class="number">
          {{ order }}
        </div>
      </div>
      <div class="item">
        <div>취소</div>
        <div class="number">
          {{ cancel }}
        </div>
      </div>
      <div class="item">
        <div>문의</div>
        <div class="number">
          <span>{{ question }}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
name: "ShoppingTotal",
  props: {
    shopName : String,
    order : String,
    cancel : String,
    question : String,
    picture_src : String,
  },
  methods: {
    resolve_img_url: function (path) {
      let images = require.context('../static/assets/', false, /\.png$|\.jpg$/)
      return images("./" + path)
    }
  }
}
</script>

<style scoped>
  .ShoppingTotal {
    font-family: SpoqaHanSans;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    color: #3D454D;
    background-color: #ffffff;
    width: 344px;
    height: 56px;
    margin: 8px;
    padding: 8px;
    border-radius: 4px;
  }
  .ShoppingTotal > div {
    display: flex;
    flex-direction: row;
  }
  .ShoppingTotal > div img {
    margin-right: 6px;
    width: 16px;
  }
  .content {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    margin-bottom: 8px;
  }
  .item {
    width: 88px;
    height: 16px;
    font-family: SpoqaHanSans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    color: #6C7680;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 16px;
    margin-right: 16px;
  }
  .item div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .number {
    text-decoration: underline;
    font-family: SpoqaHanSans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 18px;
    text-align: right;
    text-decoration-line: underline;
    color: #3D454D;
  }
  .number > span {
    color: #FF4D88;
    text-decoration: underline;
    text-decoration-color: #FF4D88;
  }
</style>