<template>
  <div>
    <myheader></myheader>
    <div class="container-fluid">
      <h1>初めての Vue.js</h1>
      <p v-if="msg.length > 0">
        {{msg}}
      </p>
      <p v-else>
        no text
      </p>
      <div class="input-group">
        <span class="input-group-addon">Select</span>
        <input class="form-control" type="text" v-model="msg">
        <span class="input-group-btn">
        <button class="btn btn-default" @click="clear()">
          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span> clear
        </button>
        <button class="btn btn-default" @click="get()">
          <span class="glyphicon glyphicon-search" aria-hidden="true"></span> Get
        </button>
      </span>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable spaced-comment */

  import myheader from './myheader';
  import axios from 'axios';

  export default {
    components: {
      myheader
    },
    data: function () {
      return {
        msg: 'Hello World!'
      };
    },
    methods: {
      clear: function () {
        this.msg = '';
      },
      get: function () {
        //const that = this
        const postalCodeLookup = 'http://www.geonames.org/postalCodeLookupJSON?postalcode=10504&country=US';
        axios.get(postalCodeLookup)
          .then((response) => {
            this.msg = response.data.postalcodes[0].adminName1;
          });
      }
    }
  };
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-family: "Open Sans", "Helvetica Neue", Helvetica, "Arial", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, sans-serif;
    font-weight: 300;
    line-height: 1.2;
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
