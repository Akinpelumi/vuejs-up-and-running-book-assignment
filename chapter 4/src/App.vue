<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
  },
  render(createElement) {
    return createElement (
      'div',
      [
      createElement(
      'button',
      {
      on: {
      click: () => this.counter++,
      }
      },
      'Click to increase counter'
      ),
      createElement(
      'p',
      `You've clicked the button ${this.counter} times`
      )
      ],
      78
    )
  },
  // render() {
  //   return (
  //     <div>
  //       <button onClick={this.clickHandler}>Click to increase counter</button>
  //       <p>You've clicked the button {counter} times</p>
  //     </div>
  //   );
  // }
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
