<template>
  <div id="child1">
    <h1>Child1</h1>
  </div>
</template>

<script>
  export default {
    name: 'child1',
    methods: {
      print () {
        console.log('printメソッドを実行した。');
      }
    }
  };
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
