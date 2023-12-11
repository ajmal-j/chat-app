import React, { useEffect, useState } from "react";
import axios from "axios";
import './chat.css'

export const Chat = () => {
  const [data, setData] = useState([]);
  async function getChat() {
    const { data } = await axios.get("/api/chat");
    setData(data);
    console.log(data);
  }
  useEffect(() => {
    getChat();
  }, []);
  return (
    <div className="body">
      {data.map((chat) => (
        <p key={chat._id}>{chat.chatName}</p>
      ))}
    </div>
  );
};
