<template>
  <div>
    <h3>{{counter.num}}</h3>
    <button @click="add">+</button>
    <button @click="reduces">-</button>
  </div>
</template>

<script>
import {mapState} from 'vuex';
  export default {
    // 第一种得到store中state值的写法
    // computed:{
    //   counter() {
    //       return this.$store.state.counter
    //   }
    // },
    // 第二种得到store中state值的写法
    // computed: mapState({
    //   counter: state => state.counter  //理解为传入state对象，修改state.counter属性
    // }),
    // 第三种得到store中state的写法
    computed: mapState(["counter"]),
    methods:{
      add(){
        this.$store.commit('add')
      },
      reduces(){
        this.$store.commit('reduces')
      }
    }
  }
</script>
