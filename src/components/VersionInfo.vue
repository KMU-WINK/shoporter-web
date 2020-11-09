<template>
  <div class="VersionInfo">
    <div class="title">
      버전정보
    </div>
    <div class="content">
      현재 {{ currentVersion }} | <span> 최신 {{ newestVersion }} </span>
    </div>
  </div>
</template>

<script>
export default {
name: "VersionInfo",
  props: {
    currentVersion: String,
    newestVersion: String,
  }
}
</script>

<style scoped>
  .VersionInfo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 328px;
    height: 60px;
    background-color: #ffffff;
  }
  .title {
    margin: 16px;
    font-family: SpoqaHanSans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    color: #3D454D;
  }
  .content {
    margin: 16px;
    font-family: SpoqaHanSans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #828E99;
  }
  .content > span {
    font-weight: 700;
    color: #292E33;
  }
</style>