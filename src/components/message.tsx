import React from "react";
import "../index.css";

interface MessageProps {
  text: string;
  sender: "user" | "ia";
}

export const Message: React.FC<MessageProps> = ({ text, sender }) => {
 const isUser = sender === "user";
  return (
   <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[70%] p-3 rounded-2xl text-xl whitespace-pre-wrap break-words ${
          isUser ? "bg-blue-600 text-white" : "bg-lightGray text-black"
        }`}
      >
        {text}
      </div>
    </div>


  );
};
