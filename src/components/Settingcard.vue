<template>
<div>
  <div class="card">
    <div>
      <span>{{ cardName}}</span>
      <span class="overlap">{{ check }}</span>
    </div>
  </div>
</div>


</template>

<script>
export default {
  name: "Settingcard",
  props : {
    cardName : String,
    check : String,
  }
}

</script>

<style scoped>
  .card {
    width: 328px;
    background: #FFFFFF;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
  }
  .card span{
    margin: 16px;
    font-family: Black Han Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 18px;
    color: #292E33;
  }
  .card span.overlap{
    color: #DAE0E6;
  }
</style>