<template>
  <div>
    <myheader></myheader>
    <p v-if="msg.length > 0">
      {{msg}}
    </p>
    <p v-else>
      no text
    </p>
    <input type="text" v-model="msg">
    <button @click="clear()">clear</button>
    <button @click="get()">Get</button>
  </div>
</template>

<script>
  /* eslint-disable spaced-comment */

  import myheader from './myheader'
  import axios from 'axios'

  export default {
    components: {
      myheader
    },
    data () {
      return {
        msg: 'Hello World!'
      }
    },
    methods: {
      clear () {
        this.msg = ''
      },
      get () {
        //const that = this
        const postalCodeLookup = 'http://www.geonames.org/postalCodeLookupJSON?postalcode=10504&country=US'
        axios.get(postalCodeLookup)
          .then((response) => {
            this.msg = response.data.postalcodes[0].adminName1
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
