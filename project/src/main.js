import Vue from 'vue';
import './plugins/fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  methods: {
    getJson(url) {
      return fetch(url)
        .then((result) => result.json())
        .catch((error) => {
          console.log(error);
        });
    },
    postJson(url, data) {
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((result) => result.json())
        .catch((error) => {
          this.$refs.error.setError(error);
        });
    },
    putJson(url, data) {
      return fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((result) => result.json())
        .catch((error) => {
          this.$refs.error.setError(error);
        });
    },
    deleteJson(url, data) {
      return fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((result) => result.json())
        .catch((error) => {
          this.$refs.error.setError(error);
        });
    },
  },
  render: (h) => h(App),
}).$mount('#app');
