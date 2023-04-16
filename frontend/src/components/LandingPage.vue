<template>
  <div class="landing-page">
    <div class="content-box">
      <h1>VoyageNepal <span>🏕️</span></h1>
      <SearchBox />
    </div>
  </div>
</template>

<script>
import SearchBox from './SearchBox.vue';

export default {
  components: {
    SearchBox,
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
::-webkit-scrollbar {
  width: 4px; /* decrease the width of the scrollbar */
  background-color: #1c1c1c; /* set the background color of the scrollbar */
}

/* Track */
::-webkit-scrollbar-track {
  background-color: #1c1c1c; /* set the background color of the scrollbar track */
}

/* Handle */
::-webkit-scrollbar-thumb {
  background-color: #4d4d4d;
  border-radius: 3px;
  height: 20px; /* decrease the height of the scrollbar thumb */
}

/* On hover */
::-webkit-scrollbar-thumb:hover {
  background-color: #7f7f7f;
}


</style>
