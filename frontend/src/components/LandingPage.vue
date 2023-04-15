<template>
    <div class="landing-page">
      <h1>VoyageNepal 🚩</h1>
      <SearchBox />
    </div>
  </template>
  
  <script>
  import SearchBox from './SearchBox.vue';
  
  export default {
    components: {
      SearchBox
    }
  };
  </script>
  
  <style scoped>
  .landing-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f8f9fa;
  }
  </style>
  