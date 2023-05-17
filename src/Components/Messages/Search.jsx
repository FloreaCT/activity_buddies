import React, { useState, useContext } from "react";
import { searchFriend, handleChats } from "../../Services/MessagesService";
import { ChatContext } from "./ChatContext";

const Search = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const { dispatch } = useContext(ChatContext);

  const handleSearch = async (user) => {
    const friends = await searchFriend(user);
    friends ? setUser(friends) : "";
  };

  const handleKey = (e) => {
    if (!e.target.value) {
      setUser(null);
      setUserName("");
    } else {
      e.code === "Enter" && handleSearch(e.target.value);
    }
  };

  const handleSelect = async (user) => {
    console.log(user);
    const chats = handleChats(user);
    dispatch({ type: "CHANGE_USER", payload: user });
    setUser(null);
    setUserName("");
  };

  return (
    <div className="border-2">
      <div className="searchform">
        <input
          type="text"
          className="block w-full bg-blue-200 outline-none placeholder-black"
          placeholder="Find a user"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={(e) => handleKey(e)}
          value={userName}
        />
        {error && <span>No user found</span>}
        {user &&
          user.map((friend, i) => {
            return (
              <div
                className="p-4 flex gap-4 cursor-pointer hover:bg-red-300"
                onClick={() => handleSelect(friend)}
                key={i}
              >
                <img
                  src={friend.photoURL}
                  className="h-10 w-10 object-cover rounded-full"
                />
                <div className="flex items-center">
                  <span>{friend.displayName}</span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Search;
