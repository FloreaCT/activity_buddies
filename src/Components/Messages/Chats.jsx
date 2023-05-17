import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../../Config/firebase";
import { UserAuth } from "../../Auth/AuthContext";
import { ChatContext } from "./ChatContext";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { dispatch } = useContext(ChatContext);
  const { user } = UserAuth();

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", user.uid), (doc) => {
        const data = doc.data();
        const chatArray = Object.entries(data).map(([id, chat]) => ({
          id,
          ...chat,
        }));
        setChats(chatArray);
      });
      return () => {
        unsub();
      };
    };
    user.uid && getChats();
  }, [user.uid]);

  const handleSelect = (user) => {
    dispatch({ type: "CHANGE_USER", payload: user });
  };

  return (
    <div className="">
      {chats
        ?.sort((a, b) => {
          b.date - a.date;
        })
        .map((chat) => (
          <div
            key={chat.id}
            onClick={() => handleSelect(chat.userInfo)}
            className="p-4 flex gap-4 cursor-pointer hover:bg-blue-400"
          >
            <img
              src={chat.userInfo.photoURL}
              className="h-10 w-10 object-cover rounded-full"
            />
            <div className="items-center">
              <span className="font-bold">{chat.userInfo.displayName}</span>
              <p className="text-gray-100">{chat.lastMessage?.text}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chats;
