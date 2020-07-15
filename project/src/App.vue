<template>
  <div id="app">
    <headerMain />
    <router-view class="container"></router-view>
    <footerMain />
  </div>
</template>

<script>
import headerMain from '@/components/headerMain.vue';
import footerMain from '@/components/footerMain.vue';

export default {
  name: 'App',
  components: {
    headerMain,
    footerMain,
  },
};
</script>

<style>

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Lato, sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #222222;
}
</style>
