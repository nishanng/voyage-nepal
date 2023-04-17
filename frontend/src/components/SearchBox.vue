<!-- SearchBox.vue -->
<template>
  <div class="search-box">
    <h2>Your AI companion for Travel</h2>
    <div class="input-wrapper">
      <div class="input-container">
        <input
          type="text"
          v-model="userInput"
          placeholder="Search for places, hotels, routes and more....."
          @keyup.enter="handleSubmit"
        />
        <div class="search-icon" @click="handleSubmit">
          <span>✈</span>
        </div>
      </div>
    </div>
    <div id="chat_container" class="chat-container"></div>
  </div>
</template>

<script>
import api from "@/api.js";

export default {
  data() {
    return {
      userInput: "",
      chatContainer: null,
    };
  },
  methods: {
    chatStripe(sender, message, cssClass) {
      const msgDiv = document.createElement("div");
      msgDiv.classList.add("msg", cssClass);
      msgDiv.innerHTML = `<span class="msg-${sender}">${message}</span>`;
      this.chatContainer.appendChild(msgDiv);
    },
    loader() {
      const loader = document.createElement("div");
      loader.classList.add("loader");
      this.chatContainer.appendChild(loader);
    },
    async handleSubmit() {
      if (this.userInput.trim() !== "") {
        this.chatStripe("user", this.userInput, "user-msg");

        this.userInput = "";

        this.loader();

        try {
          const response = await api.search(this.userInput);

          this.chatContainer.removeChild(this.chatContainer.lastChild);

          const aiResponse = response.data.text.trim();
          this.chatStripe("bot", aiResponse, "bot-msg");
        } catch (error) {
          console.error("Error during search:", error);
        }
      }
    },
  },
  mounted() {
    this.chatContainer = document.getElementById("chat_container");
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
  transition: background-color 0.3  s ease-in-out;
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

.chat-container {
  margin-top: 1rem;
  width: 100%;
  max-width: 600px;
  background-color: #f5f5f5;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow-y: auto;
}

.msg {
  margin: 0.5rem 0;
}
.msg-user, .msg-bot {
  display: inline-block;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
}
.msg-user {
  background-color: #3a86ff;
  color: #fff;
}
.msg-bot {
  background-color: #f0f0f0;
  color: #333;
}

.loader {
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
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

