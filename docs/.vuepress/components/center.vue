<template>
  <div>
    <div class="wrapper">
      <img src="https://vuejs.org/images/logo.png" alt="">
      <p>{{word}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  props: ['word']
}
</script>
<style scoped lang='scss'>

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 300px);
  img {
    width: 150px;
  }
  p {
    font-size: 20px;
  }
}
</style>
