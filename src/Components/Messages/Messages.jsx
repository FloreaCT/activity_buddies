import React, { useEffect, useState } from "react";
import Message from "./Message";
import { useContext } from "react";
import { ChatContext } from "./ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../Config/firebase";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });
    return () => {
      unSub();
    };
  }, [data.chatId]);

  return (
    <div className="overflow-scroll overflow-x-hidden flex-1 bg-white p-2 text-black bg-cover bg-center bg-[url(/img/background.jpg)]">
      {messages.map((text, index) => (
        <Message key={index} text={text} />
      ))}
    </div>
  );
};

export default Messages;
