<template>
  <div id="app">
    <div class="allMargin">
      <div class="miniTitle"><p>알림 설정</p></div>
      <div class="underLine"><Selectbar listName="주문 알림"/></div>
      <div class="underLine"><Selectbar listName="문의 알림"/></div>
      <div class="underLine"><Selectbar listName="취소 / 반품 / 교환 / 환불 알림"/></div>
      <UrlButtonList addList="방해 금지 시간" class="radiusCSS"/>
    </div>
    <div class="allMargin">
      <div class="miniTitle"><p>쇼핑몰 관리</p></div>
      <UrlButtonList addList="쇼핑몰 추가/관리" class="radiusCSS"/>
    </div>
    <div class="allMargin">
      <div class="miniTitle"><p>어플리케이션 정보</p></div>
      <div class="underLine"><VersionInfo currentVersion="0.0.1" newestVersion="0.0.1"/></div>
      <div class="underLine"><UrlButtonList addList="개인정보취급방침"/></div>
      <UrlButtonList addList="서비스 이용약관" class="radiusCSS"/>
    </div>
  </div>
</template>

<script>

import UrlButtonList from "@/components/UrlButtonList";
import Selectbar from "@/components/Selectbar";
import VersionInfo from "@/components/VersionInfo";

export default {
name: "Setting.vue",
  components:{
    VersionInfo,
    Selectbar,
    UrlButtonList,
  }
}
</script>

<style scoped>
  .allMargin{
    margin: 16px;
  }
  .miniTitle{
    font-family: Black Han Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 18px;
    background-color: white;
    width: 328px;
    height: 55px;
    display: flex;
    align-items: center;
    border-radius: 4px 4px 0 0;
  }
  .allMargin p{
    margin: 16px;
  }
  .radiusCSS{
    border-radius: 0 0 4px 4px;
  }
  .underLine:after{
    content: "";
    display: block;
    position: absolute;
    border-bottom: 1px solid #E4EAF0;
    width: 296px;
    margin: 0 16px;
  }

</style>