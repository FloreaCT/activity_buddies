import React, { Fragment, useEffect, useState } from "react";
import Modal from "../../Utils/Modal";
import { UserAuth } from "../../Auth/AuthContext";
import {
  findAllBuddies,
  buddiesRequest,
  acceptFriend,
  deleteBuddy,
  blockBuddy,
} from "../../Services/BuddieService";
import Button from "../../Utils/Button";

const Buddies = () => {
  const [buddies, setBuddies] = useState([]);
  const [buddyRequest, setBuddyRequest] = useState([]);
  const [show, setShow] = useState(false);
  const [accept, setAccept] = useState(false);
  const { user } = UserAuth();

  const handleModalClose = () => {
    setShow(false);
  };

  useEffect(() => {
    const handleRequests = async () => {
      const requests = await buddiesRequest(user);
      setBuddyRequest(requests);
    };
    if (user && user.uid) {
      const unsubscribe = handleRequests(buddiesRequest(user));
      return () => {
        unsubscribe;
      };
    }

    setAccept(false);
  }, [user, show, accept]);

  useEffect(() => {
    const handleBuddies = async () => {
      const buddies = await findAllBuddies(user);
      if (buddies !== null && buddies !== undefined) {
        setBuddies(buddies);
      }
    };
    if (user && user.uid) {
      const unsubscribe = handleBuddies(buddiesRequest(user));
      return () => {
        unsubscribe;
      };
    }
    setAccept(false);
  }, [user, buddyRequest, accept]);

  const accepted = () => {
    setAccept(true);
  };

  return (
    <Fragment>
      <div className="flex justify-between border-2 px-10">
        <div className="self-center font-bold"> Buddies</div>
        <div className="self-center">
          <button
            type="button"
            className="text-white ml-0 mr-auto my-4 bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
            onClick={() => setShow(true)}
          >
            Add buddy
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center border-2 my-4">
        Friend requests:
        {buddyRequest.map((buddy, i) => {
          return (
            <div
              key={i}
              className="border-2 my-2 align-center text-center items-center justify-center w-[30vw]"
            >
              <div>{buddy.name}</div>
              <Button
                type={"button"}
                text={"Accept"}
                buttonStyles={
                  "text-white mr-4 mb-2 bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 mt-4"
                }
                onClick={() => acceptFriend(user, buddy.senderId, accepted)}
              />
              <Button
                type={"button"}
                text={"Block User"}
                buttonStyles={
                  "text-white mr-4 bg-red-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 mt-4"
                }
                onClick={() => blockBuddy(user.uid, buddy.senderId, accepted)}
              />
            </div>
          );
        })}
      </div>
      <Modal
        open={show}
        onClose={handleModalClose}
        register={"buddy"}
        userData={user}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4 text-center">
        {buddies ? (
          buddies.map((buddy, i) => {
            return (
              <div key={i} className="rounded border-2 pb-2">
                <img
                  className="h-auto h-20 w-20 m-auto mt-2 rounded-full"
                  src={buddy.photoURL}
                  alt=""
                />
                <p>Name: {buddy.displayName}</p>
                <p>University: {buddy.university}</p>
                <p>Email: {buddy.email}</p>
                <button
                  type="submit"
                  className="text-white mx-2 my-4 bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
                >
                  Send message
                </button>
                <button
                  type="submit"
                  className="text-white mx-2 bg-red-600 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
                  onClick={() => deleteBuddy(user.uid, buddy.uid, accepted)}
                >
                  Delete Buddy
                </button>
              </div>
            );
          })
        ) : (
          <div>Loading... </div>
        )}
      </div>
    </Fragment>
  );
};

export default Buddies;
