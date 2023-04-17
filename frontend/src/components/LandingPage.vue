<template>
  <div class="landing-page">
    <div class="content-box">
      <h1>VoyageNepal <span>🏕️</span></h1>
      <Search />
    </div>
  </div>
</template>

<script>
import Search from './Search.vue';

export default {
  components: {
    Search,
  },
};
</script>

<style scoped>
.landing-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: linear-gradient(135deg, #1e0808 0%, #313165 100%);
  font-family: 'Poppins', sans-serif;
}

.content-box {
  background-color: #eae6e6;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}
h1 span {
  font-size: 3rem;
}
h2 {
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

/* Style the scrollbar for webkit browsers */
@media screen and (min-width: 900px) {
  body {
    overflow: hidden;
  }
}

::-webkit-scrollbar {
  width: 4px;
  background-color: #1c1c1c;
}

::-webkit-scrollbar-track {
  background-color: #1c1c1c;
}

::-webkit-scrollbar-thumb {
  background-color: #4d4d4d;
  border-radius: 3px;
  height: 20px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #7f7f7f;
}

</style>
