<template>
  <div>
    <p>{{ data }}</p>
    <p>{{ data2 }}</p>
    <p>{{ test3 }}</p>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      data: "si",
      data2: "bal"
    }
  },
  props: {
    test3: String
  },
  mounted() {
    this.test2();
  },
  methods: {
    //lexical scope vs dynamic scope
    test2: function () {
      this.test3 = "qwer";
    },
    test4: () => {

    },
    test1() {

    }
  }
}

</script>

<style scoped>

</style>