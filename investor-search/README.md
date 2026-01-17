# Simple Investor Search App

## Overview
A simple single-page application where users enter a sector and country to receive AI-generated investor suggestions.

## Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- AI API: OpenAI ChatGPT (gpt-3.5-turbo)

## How to Run

### Backend
1. Navigate to backend folder
2. Install dependencies:
   npm install
3. Create a `.env` file:
   OPENAI_API_KEY=your_api_key_here
4. Start server:
   node server.js

### Frontend
1. Open `frontend/index.html` in browser
2. Enter sector and country
3. Click **Search Investors**

## AI Prompt Used

## Security
- API key is stored securely in `.env`
- API calls are routed via backend
