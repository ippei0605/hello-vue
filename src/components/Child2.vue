<template>
  <div id="child2">
    <h1>Child2</h1>
    <button @click="print()">メソッド呼出</button>
  </div>
</template>

<script>
  export default {
    name: 'child2',
    methods: {
      print () {
        console.log('child2のprintメソッドを実行した。');
      }
    }
  };
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
