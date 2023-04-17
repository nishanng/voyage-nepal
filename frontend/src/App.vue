<!-- App.vue -->
<template>
  <div id="app">
    <Search />
  </div>
</template>

<script>
import Search from './components/Search.vue';

export default {
  name: 'App',
  components: {
    Search,
  },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
</style>
