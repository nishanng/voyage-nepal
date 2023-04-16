<template>
  <div class="search-results">
    <SearchBox />
    <div v-if="results" class="response-container">
      <h3>AI Response:</h3>
      <p>{{ results }}</p>
    </div>
  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue';

export default {
  components: {
    SearchBox,
  },
  props: {
    results: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.search-results {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
}

.response-container {
  max-width: 600px;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
}

h3 {
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
}
</style>
