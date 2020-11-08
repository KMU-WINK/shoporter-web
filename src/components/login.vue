<template>
  <div class="modal">
    <div class="modalContent">
      <div class="title">
        <div><img :src="picture_src" class="cupang" /></div>
        <div>쿠팡 로그인</div>
      </div>
      <div class="mainContainer">
        <div class="inputBox">
          <div><input placeholder="아이디"></div>
          <div><input placeholder="비밀번호"><img class="eyeIcon" src="../static/assets/eyeIcon.png"></div>
        </div>
        <div>
          <div><button class="loginBtn">로그인</button></div>
          <div class="loginComment">등록된 정보는 암호화되며, 사용자의 계정에 안전하게 보관됩니다.</div>
        </div>
        <div>
          <div class="forgetPw">비밀번호를 잊으셨나요?</div>
          <div class="pageMove">쿠팡 관리자 페이지로 이동</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  props: {
    picture_src : String,
  },
}
</script>

<style scoped>
  .modal {
    position: fixed;
    top: 0;bottom: 0;right: 0;left: 0;
    background: rgba(0,0,0,.5);
  }
  .modalContent {
    position: absolute;
    top: 50%;
    left: 50%;
    background: white;
    width: 328px;
    height: 392px;
    margin-left: -164px;
    margin-top: -196px;
    display: flex;
    flex-direction: column;
  }
  .cupang {
    width: 36px;
    height: 36px;
    margin: 16px;
  }
  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 68px;
  }
  .title > div {
    font-weight: normal;
    font-size: 21px;
    line-height: 21px;
    color: #12161A;
  }
  .mainContainer {
    width: 328px;
    height: 324px;
    background-color: #F7F9FA;
    border-radius: 4px;
  }
  .inputBox {
    display: flex;
    flex-direction: column;
  }
  .inputBox > div {
    display: flex;
    width: 296px;
    height: 56px;
    margin: 8px 16px;
    background-color: #E4EAF0;
    border-radius: 4px 4px 0px 0px;
    border: none;
    align-items: center;
  }
  .inputBox > div > input {
    width: 268px;
    height: 24px;
    border: none;
    background-color: #E4EAF0;
    margin: 16px 12px 16px 16px;
  }
  .eyeIcon {
    position: relative;
    float: right;
    margin-right: 13px;
  }
  .loginBtn {
    background-color: #DAE0E6;
    width: 296px;
    height: 48px;
    margin: 24px 16px 8px 16px;
    border: none;
    border-radius: 2px;
  }
  .loginComment {
    font-family: SpoqaHanSans;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 10px;
    text-align: center;
    color: #828E99;
  }
  .forgetPw {
    color: #525C66;
    font-family: SpoqaHanSans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 12px;
    text-align: center;
    margin: 24px 16px 8px 16px;
  }
  .pageMove {
    color: #0080FF;
    text-align: center;
    font-family: SpoqaHanSans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    text-decoration-line: underline;
  }
</style>
