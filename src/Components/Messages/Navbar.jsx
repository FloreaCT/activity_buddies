import React, { useContext } from "react";
import { UserAuth } from "../../Auth/AuthContext";
import { getAuth, signInAnonymously, updateProfile } from "firebase/auth";
import { auth } from "../../Config/firebase";
const Navbar = () => {
  const { user } = UserAuth();

  const loginAndUpdate = async () => {
    // You need to pass the authentication instance as param
    let { abc } = await signInAnonymously(auth);

    // Passing user's object as first param and updating it
    await updateProfile(abc, {
      photoURL: "/img/profile-picture.jpg",
    });
  };

  if (!user.photoURL) {
    loginAndUpdate();
  }

  return (
    <div className="flex justify-between items-center bg-yellow-500 p-4">
      <div className="flex m-auto items-center">
        <img
          src={user.photoURL}
          className="inline-block rounded-full w-8 h-8 mr-4"
        />
        <div className="inline-block font-medium">
          <span>{user.displayName}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
