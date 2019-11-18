import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    messageCount: 10,
    messages: []
  },
  getters: {
    unread: (state) => state.filter((message) => !message.read),
    unreadFrom: (state, getters) => getters.unread
    .map((message) => message.user.name)
  },
  mutations: {
    addMessage(state, newMessage) {
      state.messages.push(newMessage);
    },
    addMessages(state, newMessages) {
      state.messages.push(...newMessages);
      }
  },
  actions: {
    getMessages(context) {
      fetch('/api/new-messages')
      .then((res) => res.json())
      .then((data) => {
        if (data.messages.length) {
        context.commit('addMessages', data.messages);
        }
      });
    }
  }
  // modules: {
  // }
})
