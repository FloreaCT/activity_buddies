import React, { useContext, useState } from "react";
import { ChatContext } from "./ChatContext";
import { UserAuth } from "../../Auth/AuthContext";
import { db } from "../../Config/firebase";
import {
  Timestamp,
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { v4 as uuid } from "uuid";

const Input = () => {
  const [text, setText] = useState("");

  const { user } = UserAuth();
  const { data } = useContext(ChatContext);

  const handleSend = async () => {

    await updateDoc(doc(db, "chats", data.chatId), {
      messages: arrayUnion({
        id: uuid(),
        text,
        senderId: user.uid,
        date: Timestamp.now(),
      }),
    });

    await updateDoc(doc(db, "userChats", user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    setText("");
  };
  const handleEnter = (e) => {

    if (e.key == "Enter") {
      setText(e.target.value);
      handleSend();
    }
  };
  return (
    <div className="flex flex-row h-12 bg-white gap-2">
      <input
        value={text}
        type="text"
        placeholder="Type something..."
        className="w-full text-black"
        onKeyDown={(e) => handleEnter(e)}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <div className="m-auto">
        <button
          tabIndex={0}
          onClick={() => {
            handleSend();
          }}
          className="bg-blue-700 p-2 mr-2 rounded-md text-gray-100"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Input;
