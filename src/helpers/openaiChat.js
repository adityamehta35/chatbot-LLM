// import { Configuration, OpenAIApi } from "openai";

import OpenAI from 'openai';
console.log('ythhtty');
let conversation = [];
const openAiApiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: openAiApiKey // This is also the default, can be omitted
});

export function initializeChat(message) {
   
  const initHistory = [
    { role: 'user', content: message },
    { role: 'assistant', content: 'Hi, I am HealthFit, your virtual health assistant. How can I help you today with your health-related queries?' },
  ];

 
  conversation = { history: initHistory };

  return conversation;
}

export async function sendMessage(message) {
  const response = {
    text: 'Something went wrong',
    conversation: null,
  };

  if (!conversation) {
    console.log('Conversation Error');
    return response;
  }

  try {
    conversation.history.push({ role: 'user', content: message });
  
    console.log("status btao guys");
    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: conversation.history,
  
    });

   
    const reply = chatCompletion.choices[0].message.content;
    console.log(reply);
    conversation.history.push({ role: 'assistant', content: reply });

    response.text = reply;
    response.conversation = conversation;
    return response;
  } catch (error) {
    console.log(error);
    response.conversation = conversation;
    return response;
  }
}