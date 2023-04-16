<template>
  <div class="results">
    <h1>Results</h1>
    <div v-if="results">
      <p>{{ results }}</p>
      <!-- Display the results in a formatted manner -->
    </div>
    <button @click="$router.push('/')">New Search</button>
  </div>
</template>

<script>
import api from '@/api';

export default {
  name: 'SearchResults',
  props: {
    results: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.results {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
