"use client";

import { useEffect, useRef, useState } from "react";
import { socket } from "../../../app/socket";
import "./chat.scss";

const Chat = () => {
  const [messages, setMessages] = useState<{ name: string; message: string }[]>(
    []
  );

  useEffect(() => {
    socket.on("receive-message", (data) => {
      setMessages((messages) => [...messages, data]);
    });

    return () => {
      socket.off("receive-message");
    };
  }, []);

  const sendMessage = (formData: FormData) => {
    const message = formData.get("message");
    socket.emit("send-message", { message });
    formData.set("message", "");
  };

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
