import React, { useState, useRef, useEffect } from 'react';
import { MdOutlineChat } from 'react-icons/md';
import { FaWindowClose } from "react-icons/fa";
import { MdSend } from "react-icons/md";
import axios from 'axios';

const Chatbot = ({toggleChat}) => {

  const [chatHistory, setChatHistory] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [conversationObject, setConversationObject] = useState(null);


  const inputRef = useRef(null);


  const chatRef = useRef(null);


  const handleInput = (e) => {
    setMessageInput(e.target.value);
  }

  const handleChatInput = async () => {
    const message = messageInput;
    console.log('Conversation Object: ',conversationObject)
    if(messageInput==='') return;

    else {
      setLoading(true);
      const apiResponse = await axios.post('/api/message', {
        message,
        conversation : conversationObject
      });
      
      const apiData = apiResponse?.data;
      if(apiResponse.status===403) {
        updateChatHistory(apiData?.text);
        return;
      }
   
      updateChatHistory(apiResponse?.data?.text)
      setMessageInput('')
    }
  }

  // Send message to chatbot
  const updateChatHistory = async (message) => {
    
    const newHistory = [
      ...chatHistory,
    ];
    

    newHistory.push({role : 'user', parts : [messageInput]})
    newHistory.push({role : 'model', parts : [message]});
    setChatHistory(newHistory);
    setLoading(false);
    
  };

  const initializeChatbot = async () => {
    setLoading(true)
    const apiResponse = await axios.post('/api/message', {
      message : '',
      conversation : null
    });
     console.log(apiResponse.data)
     console.log("yahan aaye kya");
    setChatHistory([
      {
        role : 'model',
        parts : ['Hi, I am HealthFit, your virtual health assistant. How can I help you today with your health-related queries?']
      }
    ]);
    setLoading(false);
    const initData = apiResponse.data;
    const newConversationObject = initData.conversation;

    console.log("yahan aaye kya");
     console.log(newConversationObject);
    setConversationObject(newConversationObject);
  }

  useEffect(()=> {
     initializeChatbot();
   
  }, [])

  return (
    <div className='fixed bottom-0 right-0 z-20'>

      <div
          className='fixed inset-0 bg-gray-900 bg-opacity-75 z-5'
          onClick={()=>{toggleChat()}}
        />

      <div ref={chatRef} className={`fixed bottom-10 right-10 backdrop-blur  duration-200 border-b  bg-zinc-900/500 border border-zinc-600 p-4 rounded-lg shadow-md z-70 font-Mono `}>
        <button onClick={()=>{toggleChat()}} className={` absolute -top-5 -right-5 z-10 text-red-500 p-2  font-mono`}>
          <FaWindowClose size={28} />
          </button>
     

<div className='flex flex-col gap-2 w-[23rem] h-96 overflow-y-auto snap-y'>
          {chatHistory.map((message, index) => (
            <div key={message.role + index} className={`flex ${message.role === 'user' ? 'justify-start' : 'justify-end'} snap-end`}>
            <div className={`text-xl p-2 rounded-lg ${message.role === 'user' ? ' text-white     bg-black' : '   bg-white text-black'}`}>
              {` ${message.parts}`}
            </div>
          </div>
            ))}
            {loading && <div className='text-center'></div>}
          
          </div>
          {/* <div className='flex items-center justify-between'>
            <input disabled={loading ? true : false}
              className='w-full border border-gray-300 px-3 py-2 text-gray-700 rounded-md mt-4 focus:outline-none'
              placeholder='Type your message'
              onKeyDown={(e) => (e.key === 'Enter' ? handleChatInput() : null)}
              onChange={handleInput}
              value={messageInput}
            /> */}
            <div className='flex items-center justify-between mt-4'>
          <input disabled={loading}
            ref={inputRef}
            className='w-full border border-gray-300 px-3 py-2 text-gray-700 rounded-md focus:outline-none'
            placeholder='Type your message'
            onKeyDown={(e) => (e.key === 'Enter' ? handleChatInput() : null)}
            onChange={handleInput}
            value={messageInput}
          />
            {/* <button
              className={`bg-[rgba(29,71,253,1)] px-4 py-2 text-white rounded-md shadow-md hover:bg-[#1d46fdd5] disabled:bg-slate-500 focus:outline-none ml-4 `} disabled={messageInput==='' || loading}
              onClick={() => handleChatInput()} 
            > */}
              <button
  className={`bg-gradient-to-r from-blue-500 to-green-400 px-4 py-2 text-white rounded-full shadow-lg hover:from-blue-600 hover:to-green-500 focus:outline-none ml-4`} 
  disabled={messageInput === '' || loading}
  onClick={handleChatInput}
>
  <MdSend size={24} />
              {/* <MdOutlineChat size={24}/> */}
            </button>
          </div>
        </div>

      {/* )} */}
    </div>
  );
};

export default Chatbot;