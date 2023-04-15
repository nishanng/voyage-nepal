<template>
    <div class="search-box">
      <h2>Travel Nepal with AI</h2>
      <input type="text" v-model="query" placeholder="Enter your search query" />
      <button @click="search">Search</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        query: ''
      };
    },
    methods: {
      async search() {
        try {
          const response = await axios.post('/api/query', { query: this.query });
          this.$router.push({ name: 'Results', params: { results: response.data } });
        } catch (error) {
          console.error('Error during search:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .search-box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  </style>
  