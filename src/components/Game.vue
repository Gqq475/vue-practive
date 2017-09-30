<template>
  <div class="game">
    <h2>来玩个游戏吧！！！！</h2>
    <Table />
  </div>
</template>

<script>
import Table from './Table.vue' // 引入子组件
export default {
  name: 'game',
  components: { // 引入子组件
    Table
  },
  data () {
    return {
      // msg: 'Almost remember you are absolutely unique'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
