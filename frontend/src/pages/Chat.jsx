import React, { useEffect, useState } from "react";
import axios from "axios";

const Chat = () => {
  const [chats, setChats] = useState([]);
  const fetchChats = async () => {
    const { data } = await axios.get("/api/chat");
    console.log("This is the data:", data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return <div>Chat</div>;
};

export default Chat;
