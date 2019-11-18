<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <display-number v-bind:number="number"></display-number>
    <count-from-number
    :number.sync="numberToDisplay"
    />
    <input-username
    :value="username"
    @input="value => username = value"
    />
    <counter v-on:count="handleCount"></counter>
    <p>clicks = {{ clicks }}</p>
    <demo-key v-for="(item, i) in items" :key="item" @click.native="items.splice(i, 1)">
      {{ item }}
    </demo-key>
  </div>
</template>

<script>
import DisplayNumber from './components/DisplayNumber.vue'
import CountFromNumber from './components/CountFromNumber.vue'
import InputUsername from './components/InputUsername.vue'
import Counter from './components/Counter.vue'
import DemoKey from './components/DemoKey.vue'

export default {
  name: 'app',
  components: {
    DisplayNumber,
    CountFromNumber,
    InputUsername,
    Counter,
    DemoKey
  },
  props: {
        number: {
            type: Number,
            required: true
        }
  },
  data () { 
        return {
            clicks: 27,
            items: ['one', 'two', 'three', 'four', 'five']
        }
    },
    methods: {
        handleCount(clicks) {
        this.clicks = clicks;
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
