<!-- SearchResults.vue -->
<template>
  <div class="search-results">
    <SearchBox @search-completed="handleSearchCompleted" />
    <div v-if="results" class="response-container">
      <h3>AI Response:</h3>
      <p>
        <span v-for="(word, index) in words" :key="index" :style="{ animationDelay: index * 100 + 'ms' }" class="animated-word">{{ word }}&nbsp;</span>
      </p>
    </div>
  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue';

export default {
  components: {
    SearchBox,
  },
  data() {
    return {
      results: '',
    };
  },
  computed: {
    words() {
      return this.results.split(' ');
    },
  },
  methods: {
    handleSearchCompleted(searchResults) {
      this.results = searchResults;
    },
  },
};
</script>

<!---Styling -->

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

.animated-word {
  display: inline-block;
  opacity: 0;
  animation: fadeIn 0.5s ease-in forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(1rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
