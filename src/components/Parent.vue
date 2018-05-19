<template>
  <div id="parent">
    <h1>Parent</h1>
    <button @click="$refs.child1.print()">Child1のメソッド呼出</button>
    <hr>
    <child1 ref="child1"></child1>
    <hr>
    <router-view name="child2"></router-view>
  </div>
</template>

<script>
  import child1 from '@/components/Child1';

  export default {
    name: 'parent',
    components: {
      child1
    }
  };
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
