# VoyageNepal 🚀

VoyageNepal is an AI-powered travel companion web app for exploring Nepal. Built with Vue.js and Express.js, it leverages OpenAI's GPT-3 for valuable travel insights.

## Features

- AI-powered search for travel-related info
- Scalable and performance-optimized
- Responsive user interface

## Getting Started

### Prerequisites

- Node.js (v12.x or higher)
- npm (v6.x or higher)

### Installation

1. Clone the repo: `git clone https://github.com/your-username/voyage-nepal.git`
2. Change to the project directory: `cd voyage-nepal`
3. Install dependencies: `cd frontend && npm install`, `cd backend && npm install`
4. Set up environment variables in `.env.development` and `.env.production` (frontend) and `.env` (backend)

### Running the Application

1. Start the backend server: `cd backend && npm start`
2. Start the frontend dev server: `cd frontend && npm run serve`

## Deployment

1. Build the frontend: `cd frontend && npm run build`
2. Deploy frontend `dist` folder and backend to your preferred hosting providers.
3. Update `VUE_APP_API_ENDPOINT` in `.env.production` to point to the deployed backend API.

## Built With

- [Vue.js](https://vuejs.org/)
- [Express.js](https://expressjs.com/)
- [OpenAI API](https://www.openai.com/api/)
