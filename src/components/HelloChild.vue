<template>
  <div class="child">
    <h2>我是hello vue的子组件哦！！！{{value}}</h2>
    <input
      ref="input"
      v-bind:value="value"
      placeholder="edit me"
      v-on:input="updateValue($event.target.value)">
  </div>
</template>
<script>
export default {
  name: 'child',
  props: ['value'],
  data () {
    return {
      // message: ''
    }
  },
  methods: {
    updateValue: function (value) {
      console.log('value', value)
      var formattedValue = value
        // 删除两侧的空格符
        .trim()
        // 保留 2 位小数
        .slice(
          0,
          value.indexOf('.') === -1
            ? value.length
            : value.indexOf('.') + 3
        )
      // 如果值尚不合规，则手动覆盖为合规的值
      if (formattedValue !== value) {
        this.$refs.input.value = formattedValue
      }
      this.$emit('input', formattedValue)
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
