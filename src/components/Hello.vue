<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <button @click="step">跳转页面喽</button>
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
    <!-- 父组件向子组件传值时，要在子组件入口的地方绑定需要传值的是数据，
    格式为(: => v-bind:, data => 传值的属性名， 'message' =>传递的值) -->
    <HelloChild :data='message' />
  </div>
</template>

<script>
import HelloChild from './HelloChild.vue' // 引入子组件
export default {
  components: { // 引入子组件
    HelloChild
  },
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: ''
    }
  },
  methods: {
    step () {
      // 路由跳转
      this.$router.push({
        path: '/demo',
        // '要跳转的路径的 name,在 router 文件夹下的 index.js 文件内找',
        name: 'Demo',
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
