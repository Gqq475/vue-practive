<template>
  <div class="child">
    <h2>我是hello vue的子组件哦！！！</h2>
  </div>
</template>

<script>
export default {
  name: 'child',
  data () {
    return {
      // msg: 'Almost remember you are absolutely unique'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  margin: 0 auto;
  border: 1px solid red;
  width: 50%;
  height: 500px;
}
h1, h2 {
  font-weight: normal;
}

</style>
