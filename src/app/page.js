"use client"

import { useRef } from "react";
require("dotenv").config();

console.log(process.env.OPENAI_API_KEY);
import { useEffect,useState } from "react";
import Chatbot from "../components/Chatbot";
import { HeartIcon } from '@heroicons/react/outline';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const headRef = useRef();
//  const yo = process.env.NEXT_PUBLIC_CHATBOT;



  const toggleChat = () => {
    console.log('toggleChat')
    setIsOpen(!isOpen)
  }

  const handleResume = async () => {
    toggleChat();

  }


  return (
    <div>
     
      <main
        className={`flex min-h-screen max-w-[100vw] flex-col items-center justify-center px-4 md:px-20 lg:px-24  py-10 lg:py-24 relative`}
      >
        {/* <div onClick={handleResume} className={`absolute w-16 md:w-24 aspect-square object-contain bottom-10 right-6 bg-transparent cursor-pointer text-white hover:scale-110 animate-spin-slow hover:animate-spin-slower`}>
          <img src="/Health.png" alt="hire me" className={`h-full`}/>
        </div> */}

<div onClick={handleResume} className="absolute w-16 md:w-24 aspect-square object-contain bottom-10 right-6 bg-transparent cursor-pointer text-red-500 hover:scale-110 animate-spin-slow hover:animate-spin-slower">
  <HeartIcon className="h-full" />
</div>
      
        {isOpen ? <Chatbot toggleChat={toggleChat} /> : null}
      
      </main>
    </div>
  );
}