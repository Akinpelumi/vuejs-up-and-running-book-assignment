<template>
  <div class="hello">
    <p>The number is <span class="number">{{ number }}</span></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      number: 20907253853739273983938744
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
