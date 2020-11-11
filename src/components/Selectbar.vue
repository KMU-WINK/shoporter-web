<template>
<div class="Selectbar">
  <span>{{ listName }}</span>
  <div>
    <label class="switch">
      <input type="checkbox">
      <span class="slider"></span>
    </label>
  </div>
</div>
</template>

<script>
export default {
  name: "Selectbar",
  props : {
    listName : String,
  },
}
</script>

<style scoped>

.Selectbar{
  padding: 16px;
  width: 296px;
  height: 12px;
  background: #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.switch {
  display: inline-block;
  width: 48px;
  height: 28px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  width: 48px;
  height: 28px;
  background-color: #E4EAF0;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 14px;
}

.slider:before {
  position: absolute;
  content: "";
  width: 24px;
  height: 24px;
  left: 2px;
  top: 2px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
}
input:checked + .slider {
  background-color: #12161A;
}
input:checked + .slider:before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
}
span{
  font-family: SpoqaHanSans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #3D454D;
}
</style>