"use client";

import { useEffect, useRef, useState } from "react";
import "./chat.scss";

const Chat = () => {
  const [messages] = useState<{ name: string; message: string }[]>([]);

  const sendMessage = () => {};

  const messagesRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat">
      <ul className="chat__messages" ref={messagesRef}>
        {messages.map((msg, idx) => (
          <li key={idx} className="message">
            {msg.name}:<span className="message__content">{msg.message}</span>
          </li>
        ))}
      </ul>
      <form action={sendMessage} className="chat__create-message">
        <input type="text" name="message" className="form-textfield" />
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
