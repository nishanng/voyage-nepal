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
export default {
  data() {
    return {
      results: null,
    };
  },
  props: {
    // Removed the query prop
  },
  // Removed the watch section
  methods: {
    // Removed performSearch method since it's not being used
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
