"use client"
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { IoSend } from "react-icons/io5";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import  ChatBubble  from '../_components/ChatBubble'

const ChatInterface = () => {
  const router = useRouter();
  const [messages, setMessages] = useState([{
    text: 'Ada yang bisa saya bantu ?', sender: 'dokter'
  }]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      
      const userMessage = newMessage.trim();
      setNewMessage('');
  
      setTimeout(() => {
        if (userMessage === 'anak saya tidak nafsu makan ?') {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: 'bapak bisa mencoba untuk memberi suplemen', sender: 'dokter' },
          ]);
        } else {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: 'baik terima kasih', sender: 'dokter' },
          ]);
        }
      }, 2000); // 2000 milliseconds = 2 seconds delay
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full">
      <div className="flex items-center w-full py-3 shadow-md fixed top-0 z-10 bg-white">
        <button onClick={() => { router.back() }}>
          <FaArrowLeft className="ml-8" />
        </button>
        <div className="grow flex justify-start items-center gap-6 ml-6">
          <Image
            src={'/expert/sinaga.png'}
            width={0}
            height={0}
            alt={'Dr. Ferdinant Sinaga'}
            unoptimized={true}
            className="w-12 aspect-square rounded-lg object-cover"
          />
          <p className="text-xl font-rubik text-center mr-12 w-full">
            Parent Asistance
          </p>
        </div>
      </div>
      <div className="grow overflow-y-auto w-full mt-20 mb-16 p-4">
        {messages.map((message, index) => (
          <ChatBubble key={index} text={message.text} sender={message.sender} />
        ))}
      </div>
      <div className="fixed bottom-0 w-full bg-[#6E34B8] py-5 z-10 flex justify-center items-center">
        <input
          type="text"
          className="w-3/4 p-2 rounded-l-lg"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          className="bg-[#9038FF] text-white p-3 rounded-r-lg"
          onClick={handleSendMessage}
        >
          <IoSend />
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
