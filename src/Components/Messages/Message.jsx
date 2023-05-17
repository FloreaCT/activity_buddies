import React, { useContext, useEffect, useRef, useState } from "react";
import { ChatContext } from "./ChatContext";
import { UserAuth } from "../../Auth/AuthContext";

const Message = ({ text }) => {
  const [date, setDate] = useState([]);
  const { user } = UserAuth();
  const { data } = useContext(ChatContext);
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [text]);

  useEffect(() => {
    setDate(new Date(text.date.seconds * 1000).toLocaleString().split(","));
    console.log(date);
  }, []);

  return (
    <div
      ref={ref}
      className={
        text.senderId === data.user.uid
          ? "flex items-center flex-row-reverse gap-6 mb-6"
          : "flex items-center gap-6 mb-6"
      }
    >
      <div className="flex flex-col items-center font-300">
        <img
          src={
            text.senderId === data.user.uid ? data.user.photoURL : user.photoURL
          }
          className="h-10 w-10 object-cover rounded-full"
        />
        <span>{date[0]?.toString()}</span>
        <span>{date[1]?.toString()}</span>
      </div>
      <div className={"max-w-[80%] flex flex-col gap-4"}>
        <p
          className={
            text.senderId === data.user.uid
              ? "bg-purple-100 px-4 py-2 rounded-tr-none rounded-xl order-last break-words"
              : "bg-green-100 px-4 py-2 rounded-tl-none rounded-xl break-words"
          }
        >
          {text.text}
        </p>
      </div>
    </div>
  );
};

export default Message;
