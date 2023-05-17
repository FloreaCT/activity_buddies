import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "./ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="flex-2 ">
      <div className="flex flex-col h-full bg-purple-400 text-gray-200 text-center">
        <div>
          <span className="my-2">{data?.user?.displayName}</span>
        </div>
        <Messages />
        <Input />
      </div>
    </div>
  );
};

export default Chat;
