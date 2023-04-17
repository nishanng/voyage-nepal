<template>
    <div class="search-container">
      <div v-if="!searchStarted" class="landing-page">
        <h2>Your AI companion for Travel</h2>
        <div class="input-wrapper">
          <div class="input-container">
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Search for places, hotels, routes and more....."
              @keyup.enter="search"
            />
            <div class="search-icon" @click="search">
              <span>✈</span>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="search-results">
        <div class="chat-container">
          <div
            v-for="(response, index) in responses"
            :key="index"
            class="wrapper"
            :class="{ ai: !response.user, user: response.user }"
          >
            <div class="chat">
              <div class="profile">
                <img
                  :src="!response.user ? botImg : userImg"
                  :alt="!response.user ? 'bot' : 'user'"
                />
              </div>
              <div class="message" :id="response.uniqueId">{{ response.text }}</div>
            </div>
          </div>
          <div v-if="isLoading" class="loader"></div>
        </div>
        <form @submit.prevent="search" @keyup.enter.prevent="search">
          <div class="input-container">
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Type your message..."
            />
            <div class="search-icon" @click="search">
              <span>✈</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import api from '../api';
  import botImg from '@/assets/bot.svg';
  import userImg from '@/assets/user.svg';
  
  export default {
    data() {
      return {
        searchQuery: '',
        searchStarted: false,
        responses: [],
        isLoading: false,
        botImg,
        userImg,
      };
    },
    methods: {
      generateUniqueId() {
        const timestamp = Date.now();
        const randomNumber = Math.random();
        const hexadecimalString = randomNumber.toString(16);
  
        return `id-${timestamp}-${hexadecimalString}`;
      },
      async search() {
        if (!this.searchQuery) return;
        this.searchStarted = true;
  
        const userResponse = {
          user: true,
          text: this.searchQuery,
          uniqueId: this.generateUniqueId(),
        };
        this.responses.push(userResponse);
  
        const botResponse = {
          user: false,
          text: '',
          uniqueId: this.generateUniqueId(),
        };
        this.responses.push(botResponse);
  
        this.isLoading = true;
        try {
          const response = await api.search(this.searchQuery);
          const aiResponse = response.data[0].text;
  
          this.$set(botResponse, 'text', aiResponse);
        } catch (error) {
          console.error('Error during search:', error);
          this.$set        (botResponse, 'text', 'Something went wrong');
      } finally {
        this.isLoading = false;
      }
      this.searchQuery = '';
    },
  },
};
</script>

<style scoped>
/* Add your existing styles here and include the following new styles: */

.chat-container {
  overflow: auto;
  max-height: 60vh;
  margin-bottom: 1rem;
}

.wrapper {
  display: flex;
  margin-bottom: 0.5rem;
}

.wrapper.ai {
  flex-direction: row;
}

.wrapper.user {
  flex-direction: row-reverse;
}

.chat {
  display: flex;
  align-items: flex-end;
}

.profile {
  width: 24px;
  height: 24px;
  margin: 0 0.5rem;
}

.profile img {
  width: 100%;
  height: 100%;
}

.message {
  background-color: #f1f1f1;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 14px;
}

.loader {
  height: 24px;
  width: 24px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3498db;
  border-radius: 50%;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

  