<template>
  <div class="search-box">
    <h2>Your AI companion for Travel</h2>
    <div class="input-wrapper">
      <div class="input-container">
        <input type="text" v-model="query" placeholder="Search for places,hotels,routes, etc....." />
        <div class="search-icon" @click="search">
          <span>✈</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      query: '',
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
    },
  },
};
</script>

<style scoped>
.search-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

h2 {
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.input-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

.input-container {
  position: relative;
  display: flex;
  flex-grow: 1;
}

input {
  border: none;
  border-radius: 4px;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  outline: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  flex-grow: 1;
  transition: box-shadow 0.3s ease-in-out;
}

input:hover {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

input:focus {
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
}

.search-icon {
  position: absolute;
  top: 0;
  right: 0;
  width: 3rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3a86ff;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.search-icon:hover {
  background-color: #2a63cc;
}

.search-icon span {
  font-size: 1.5rem;
  color: #fff;
}

button:focus {
  outline: none;
}
</style>
