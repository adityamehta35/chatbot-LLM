# HealthFit Chatbot

Welcome to the Health-Related Chatbot repository! This chatbot is built using Next.js and Tailwind CSS integrated with OpenAI LLM API to provide accurate and helpful health-related information. This README file will guide you through the features, setup, and usage of the application.

## Video Walkthrough

https://www.youtube.com/watch?v=zrvHiqNyi_k

## Introduction

The Health-Related Chatbot is designed to assist users with their health-related queries by leveraging the capabilities of the OpenAI LLM API. This chatbot provides reliable information on various health topics, helping users make informed decisions about their well-being.

### Specific Domain

The application focuses on general health and wellness, providing information on topics such as nutrition, exercise, mental health, preventive care, and chronic conditions.

### User Base

The target user base includes individuals seeking reliable health information, such as:
- Health enthusiasts
- Individuals managing chronic conditions
- People looking to improve their lifestyle
- General public interested in health and wellness
- Nurses and Doctors can use this to access relevant data quickly and efficiently to enhance patient care and education.

## Scope of Queries

The chatbot handles a wide range of health-related queries, including but not limited to:
- Daily health habits and routines
- Stress management techniques
- Sleep patterns and their impact on health
- Nutrition and diet advice
- Exercise routines and fitness goals
- Mental health practices and awareness
- Preventive health measures and screenings
- Managing chronic illnesses
- Health education and public health issues

## Usefulness of Responses

### For the Selected User Base

The responses provided by the chatbot are:
- **Informative:** Offering evidence-based information and practical advice.
- **Supportive:** Encouraging users to adopt healthy habits and seek professional help when necessary.
- **Empowering:** Helping users make informed decisions about their health.
- **Timely:** Providing up-to-date information on various health topics.

## Installation

## Creating an OpenAI API Key

To use the Health-Related Chatbot, you'll need to create a secret API key from OpenAI. Follow these steps to obtain your API key:

1. **Sign Up or Log In:**
   - Go to the [OpenAI website](https://www.openai.com/).
   - If you don't have an account, click on "Sign Up" to create a new account. If you already have an account, click on "Log In" and enter your credentials.

2. **Navigate to the API Keys Section:**
   - Once logged in, go to the dashboard.
   - Click on your profile icon at the top-right corner of the page.
   - Select "API Keys" from the dropdown menu.

3. **Create a New API Key:**
   - In the API Keys section, click on the "Create new secret key" button.
   - Enter a name for your API key to help you remember its purpose (e.g., "Health Chatbot Key").
   - Click on "Create Key."

4. **Copy the API Key:**
   - After creating the key, you will see it displayed on the screen. **Copy this key immediately** as you won't be able to see it again.
   - Store this key in a secure place, such as a password manager.

By following these steps, you will have your OpenAI API key set up and ready to be used with the Health-Related Chatbot.

To set up the Health-Related Chatbot locally, follow these steps:

1. Clone the repository:
   git clone "repo link" Using HTTPS or Using SSH
2. Install Dependencies:
   npm install
3. Set up environment variables:
   Create a .env.local file in the root directory and add your OpenAI API key:
   NEXT_PUBLIC_CHATBOT = your_openai_api_key
4. Run the project:
   npm run dev

## USER TESTING

User - What are some healthy habits I can incorporate into my daily routine?

HealthFit - You can include habits like regular exercise, balanced diet, staying hydrated, getting enough sleep, managing stress, and practicing mindfulness. For personalized advice, consult a healthcare professional.

User - How does chronic stress impact physical health?

HealthFit - Chronic stress can lead to various health issues like high blood pressure, heart disease, weakened immune system, insomnia, digestive problems, and mental health issues. It's important to manage stress through relaxation techniques and seeking support. Consult a healthcare provider for individualized guidance.
   
User - Why is getting 7-8 hours of sleep important for my health?

HealthFit - Getting 7-8 hours of sleep is crucial for overall health as it helps in brain function, emotional well-being, immune function, weight management, and overall physical health. Adequate sleep supports cognitive function, memory consolidation, and better mood regulation. It also allows the body to repair and rejuvenate.

User - what is temperature outside?

HealthFit - If you have any health-related questions, feel free to ask!
