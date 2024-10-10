"use client";

import { useEffect, useState } from "react";
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

  return (
    <div className="chat">
      <ul>
        {messages.map((msg, i) => (
          <li key={i}>
            <strong>{msg.name}</strong> : {msg.message}
          </li>
        ))}
      </ul>
      <form action={sendMessage}>
        <input type="text" name="message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
