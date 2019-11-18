<template>
<!-- Templates Data and Directives -->

<!-- 1 -->
 <!-- <div id="app">
    <p v-if="isMorning">Good morning!</p>
    <p v-if="isAfternoon">Good afternoon!</p>
    <p v-if="isEvening">Good evening!</p>
  </div> -->

<!-- 2 -->
  <!-- <div id="app">
    <p v-if="hours < 12">Good morning!</p>
    <p v-if="hours >= 12 && hours < 18">Good afternoon!</p>
    <p v-if="hours >= 18">Good evening!</p>
  </div> -->

<!-- 3 -->
  <!-- <div id="app">
    <p>The fourth dog is {{ dogs[3] }}</p>
    <p>All the dogs are {{ dogs }}</p>
  </div> -->

  <!-- Looping in Templates -->

  <!-- 4 -->
  <!-- <div id="app">
    <ul>
      <li v-for="dog in dogs">{{ dog }}</li>
    </ul>
  </div> -->
  

<!-- 5 -->
  <!-- <div id="app">
    <ul>
      <li :v-for="(rent, city) in averageRent">
      The average rent in {{ city }} is ${{ rent }}</li>
    </ul>
  </div> -->


<!-- Methods -->
<!-- 6 -->
  <!-- <div id="app">
   <p>Current status: {{ statusFromId(status) }}</p>
  </div> -->

<!-- This -->
<!-- 7 -->
  <!-- <div id="app">
    <p>The sum of the positive numbers is {{ getPositiveNumbersSum() }}</p>
  </div> -->

<!-- Computed -->
<!-- 8 -->
  <!-- <div id="app">
    <p>Sum of numbers: {{ numberTotal }}</p>
  </div> -->

<!-- Watchers -->
<!-- 9 -->
  <!-- <div id="app">
    <input type="text" v-model="inputValue">
    <p>Five seconds ago, the input said "{{ oldInputValue }}".</p>
  </div> -->

<!-- Filter -->
<!-- 10 -->
  <!-- <div id="app">
    <p>Product one cost: {{ productOneCost | formatCost }}</p>
    <p>Product two cost: {{ productTwoCost | formatCost }}</p>
    <p>Product three cost: {{ productThreeCost | formatCost }}</p>
  </div> -->

<!-- Inputs and Events -->
<!-- 11 -->
  <div id="app">
    <button v-on:click="increase">Click to increase counter</button>
    <p>You've clicked the button {{ counter }}</p> times.
  </div>
</template>


<script>
// Templates Data and Directives

//1
  // var hours = new Date().getHours();
  //   export default {
  //   name: 'app',
  //     data() {
  //       return {
  //         isMorning: hours < 12,
  //         isAfternoon: hours >= 12 && hours < 18,
  //         isEvening: hours >= 18
  //       }
        
  //     }
  // };

//2
  // export default {
  //   name: 'app',
  //     data() {
  //       return {
  //         hours: new Date().getHours()
  //       }
        
  //     }
  // };

  //3
  // export default {
  //   name: 'app',
  //     data() {
  //       return {
  //         dogs: ['Rex', 'Rover', 'Henrietta', 'Alan']
  //       }
        
  //     }
  // };

  //Looping in Templates

  //4
  // export default {
  //   name: 'app',
  //     data() {
  //       return {
  //         dogs: ['Rex', 'Rover', 'Henrietta', 'Alan']
  //       }
        
  //     }
  // };

  //5
  // export default {
  //   name: 'app',
  //     data() {
  //       return {
  //         averageRent: {
  //             london: 1650,
  //             paris: 1730,
  //             NYC: 3680
  //         }
  //       }
        
  //     }
  // };


//Methods
//6
  // export default {
  //   name: 'app',
  //     data() {
  //       return {
  //         status: 2
  //       }
  //     },
  //     methods: {
  //         statusFromId(id) {
  //           const status = ({
  //             0: 'Asleep',
  //             1: 'Eating',
  //             2: 'Learning Vue'
  //           })[id];
  //             return status || 'Unknown status: ' + id;
  //         }
  //     }
  // }

//This
//7
  // export default {
  //   name: 'app',
  //     data() {
  //       return {
  //         numbers: [-5, 0, 2, -1, 1, 0.5]
  //       }
  //     },
  //     methods: {
  //       getPositiveNumbers() {
  //       return this.numbers.filter((number) => number >= 0);
  //       },
  //       getPositiveNumbersSum() {
  //       return this.getPositiveNumbers().reduce((sum, val) => sum + val);
  //       }
  //     }
  // }

//Computed
//8
  // export default {
  //   name: 'app',
  //   data() {
  //     return {
  //       numbers: [5, 8, 3]
  //     }
  //   },
  //   computed: {
  //     numberTotal: {
  //       get() {
  //       return numbers.reduce((sum, val) => sum + val);
  //       },
  //       set(newValue) {
  //       const oldValue = this.numberTotal;
  //       const difference = newValue - oldValue;
  //       this.numbers.push(difference).
  //       },
  //     }
  //   }
  // }

//Watchers
//9 
  // export default {
  //   name: 'app',
  //   data() {
  //     return {
  //       inputValue: '',
  //       oldInputValue: ''
  //     }
  //   },
  //   watch: {
  //     inputValue() {
  //       const newValue = this.inputValue;
  //       setTimeout(() => {
  //         this.oldInputValue = newValue;
  //       }, 5000);
  //     }
  //   }
  // }

//Filter
//10 
  // export default {
  //   name: 'app',
  //   data () {
  //     return {
  //       productOneCost: 998,
  //       productTwoCost: 2399,
  //       productThreeCost: 5300
  //     }
  //   },
  //   filters: {
  //     formatCost(value) {
  //     return '$' + (value / 100).toFixed(2);
  //     }
  //   }
  // }

//Inputs and Events
//11
  export default {
    name: 'app',
    data () {
      return {
        counter: 0
      }
    },
    methods: {
      increase() {
      this.counter++;
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
