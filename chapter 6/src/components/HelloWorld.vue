<template>
  <div class="hello">
    <p>Messages: {{ messageCount }}</p>
    <!-- <p>Messages: {{ messages.length }}<a @click.prevent="handleUpdate">(update)</a></p>
    <form @submit="handleSubmit">...</form> -->
  </div>
</template>



<script>
import { mapState, mapGetters } from 'vuex';
export default {
  name: 'HelloWorld',
  data () {
    return {
      formData: {}
    }
  },
  computed: mapState({
    messageCount: (state) => state.messageCount,
    }),
  ...mapGetters({
    unreadMessages: 'unread',
    unreadMessagesFrom: 'unreadFrom'
    }),
  mounted() {
    this.$store.dispatch('getMessages');
  },
  methods: {
    handleSubmit() {
    this.$store.commit('addMessage', this.formData);
    },
    handleUpdate() {
    this.$store.dispatch('getMessages');
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
