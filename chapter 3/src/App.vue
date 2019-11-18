<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div v-bind:class="[firstClass, secondClass]">
      ...
    </div>
    <module/>
    <preprocessors/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Module from './components/Module.vue'
import Preprocessors from './components/Preprocessors.vue'

export default {
  name: 'app',
  props: {
    number: {
    type: Number,
    required: true
    }
  },
  components: {
    HelloWorld,
    Module,
    Preprocessors
  },
  data () {
    return {
      firstClass: 'foo',
    }
  },
  computed: {
    secondClass() {
    return 'bar';
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

.number {
font-weight: bold;
}
</style>
