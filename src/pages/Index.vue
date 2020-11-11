<template>
  <div id="app">
    <totalMoney :callItem="1239" :totalSell="3123"/>
    <ShoppingManagement picture_src="naver.jpg" Name="아몽스토어" shopName="스마트스토어"/>
    <Button/>
    <Selectbar/>
    <Settingcard cardName="쇼핑몰 이름" check="(중복 사용 가능)"/>
    <VersionInfo currentVersion="0.0.1" newestVersion="0.0.1"/>
    <ShopInfo picture_src="coupangLogo.png" shopName="쿠팡"/>
    <ShoppingTotal picture_src='coupangLogo.png'/>
    <Settingcard cardName="알림 설정">
      <Selectbar listName="주문 알림"/>
      <Selectbar listName="문의 알림"/>
      <Selectbar listName="취소/반품/교환/환불 알림"/>
    </Settingcard>
    <!--    <login picture_src= 'coupangLogo.png' />-->
    <bottomTabBar/>
  </div>
</template>

<script>
import ShoppingTotal from "@/components/ShoppingTotal";
import Button from "@/components/Button";
import Settingcard from "@/components/Settingcard";
import ShoppingManagement from "@/components/ShoppingManagement";
import Selectbar from "@/components/Selectbar";
import totalMoney from "@/components/TotalMoney";
import ShopInfo from "@/components/ShopInfo";
import VersionInfo from "@/components/VersionInfo";

export default {
  name: "index",
  components: {
    // login,
    ShoppingTotal,
    Button,
    Settingcard,
    ShoppingManagement,
    Selectbar,
    totalMoney,
    ShopInfo,
    VersionInfo,
  }
}
</script>

<style scoped>

</style>