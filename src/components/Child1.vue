<template>
  <div id="child1">
    <h1>Child1</h1>
    <button @click="print()">メソッド呼出</button>
  </div>
</template>

<script>
  export default {
    name: 'child1',
    methods: {
      print () {
        console.log('child1のprintメソッドを実行した。');
      }
    }
  };
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
