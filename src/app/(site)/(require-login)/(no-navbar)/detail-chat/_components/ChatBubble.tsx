import React from 'react';

const ChatBubble = ({ text, sender }: {text : string, sender: string}) => {
  return (
    <div className={`flex ${sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-xs break-words px-4 py-2 rounded-lg shadow-md ${
          sender === 'user' ? 'bg-[#9038FF] text-white' : 'bg-gray-200 text-black'
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default ChatBubble;
