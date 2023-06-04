import React, { Fragment, useState } from "react";
import Modal from "../../Utils/Modal";

const Buddies = () => {
  const [buddies, setBuddies] = useState([]);
  const [show, setShow] = useState(false);

  const handleModalClose = () => {
    setShow(false);
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
      <Modal open={show} onClose={handleModalClose} register={"buddy"} />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4 text-center">
        <div className="rounded border-2 pb-2">
          <img
            className="h-auto h-20 w-20 m-auto rounded-lg"
            src="../public/img/profile-picture.jpg"
            alt=""
          />
          <p>Name: Constantin Florea</p>
          <p>University: Solent</p>
          <p>Email: youremail@gmail.com</p>
          <button
            type="submit"
            className="text-white mx-2 my-4 bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Send message
          </button>
          <button
            type="submit"
            className="text-white mx-2 bg-red-600 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Delete Buddy
          </button>
        </div>
        <div className="rounded border-2 pb-2">
          <img
            className="h-auto h-20 w-20 m-auto rounded-lg"
            src="../public/img/profile-picture.jpg"
            alt=""
          />
          <p>Name: Constantin Florea</p>
          <p>University: Solent</p>
          <p>Email: youremail@gmail.com</p>
          <button
            type="submit"
            className="text-white mx-2 my-4 bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Send message
          </button>
          <button
            type="submit"
            className="text-white mx-2 bg-red-600 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Delete Buddy
          </button>
        </div>
        <div className="rounded border-2 pb-2">
          <img
            className="h-auto h-20 w-20 m-auto rounded-lg"
            src="../public/img/profile-picture.jpg"
            alt=""
          />
          <p>Name: Constantin Florea</p>
          <p>University: Solent</p>
          <p>Email: youremail@gmail.com</p>
          <button
            type="submit"
            className="text-white mx-2 my-4 bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Send message
          </button>
          <button
            type="submit"
            className="text-white mx-2 bg-red-600 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Delete Buddy
          </button>
        </div>
        <div className="rounded border-2 pb-2">
          <img
            className="h-auto h-20 w-20 m-auto rounded-lg"
            src="../public/img/profile-picture.jpg"
            alt=""
          />
          <p>Name: Constantin Florea</p>
          <p>University: Solent</p>
          <p>Email: youremail@gmail.com</p>
          <button
            type="submit"
            className="text-white mx-2 my-4 bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Send message
          </button>
          <button
            type="submit"
            className="text-white mx-2 bg-red-600 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Delete Buddy
          </button>
        </div>
        <div className="rounded border-2 pb-2">
          <img
            className="h-auto h-20 w-20 m-auto rounded-lg"
            src="../public/img/profile-picture.jpg"
            alt=""
          />
          <p>Name: Constantin Florea</p>
          <p>University: Solent</p>
          <p>Email: youremail@gmail.com</p>
          <button
            type="submit"
            className="text-white mx-2 my-4 bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Send message
          </button>
          <button
            type="submit"
            className="text-white mx-2 bg-red-600 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Delete Buddy
          </button>
        </div>
        <div className="rounded border-2 pb-2">
          <img
            className="h-auto h-20 w-20 m-auto rounded-lg"
            src="../public/img/profile-picture.jpg"
            alt=""
          />
          <p>Name: Constantin Florea</p>
          <p>University: Solent</p>
          <p>Email: youremail@gmail.com</p>
          <button
            type="submit"
            className="text-white mx-2 my-4 bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Send message
          </button>
          <button
            type="submit"
            className="text-white mx-2 bg-red-600 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Delete Buddy
          </button>
        </div>
        <div className="rounded border-2 pb-2">
          <img
            className="h-auto h-20 w-20 m-auto rounded-lg"
            src="../public/img/profile-picture.jpg"
            alt=""
          />
          <p>Name: Constantin Florea</p>
          <p>University: Solent</p>
          <p>Email: youremail@gmail.com</p>
          <button
            type="submit"
            className="text-white mx-2 my-4 bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Send message
          </button>
          <button
            type="submit"
            className="text-white mx-2 bg-red-600 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Delete Buddy
          </button>
        </div>
        <div className="rounded border-2 pb-2">
          <img
            className="h-auto h-20 w-20 m-auto rounded-lg"
            src="../public/img/profile-picture.jpg"
            alt=""
          />
          <p>Name: Constantin Florea</p>
          <p>University: Solent</p>
          <p>Email: youremail@gmail.com</p>
          <button
            type="submit"
            className="text-white mx-2 my-4 bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Send message
          </button>
          <button
            type="submit"
            className="text-white mx-2 bg-red-600 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Delete Buddy
          </button>
        </div>
        <div className="rounded border-2 pb-2">
          <img
            className="h-auto h-20 w-20 m-auto rounded-lg"
            src="../public/img/profile-picture.jpg"
            alt=""
          />
          <p>Name: Constantin Florea</p>
          <p>University: Solent</p>
          <p>Email: youremail@gmail.com</p>
          <button
            type="submit"
            className="text-white mx-2 my-4 bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Send message
          </button>
          <button
            type="submit"
            className="text-white mx-2 bg-red-600 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Delete Buddy
          </button>
        </div>
        <div className="rounded border-2 pb-2">
          <img
            className="h-auto h-20 w-20 m-auto rounded-lg"
            src="../public/img/profile-picture.jpg"
            alt=""
          />
          <p>Name: Constantin Florea</p>
          <p>University: Solent</p>
          <p>Email: youremail@gmail.com</p>
          <button
            type="submit"
            className="text-white mx-2 my-4 bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Send message
          </button>
          <button
            type="submit"
            className="text-white mx-2 bg-red-600 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Delete Buddy
          </button>
        </div>
        <div className="rounded border-2 pb-2">
          <img
            className="h-auto h-20 w-20 m-auto rounded-lg"
            src="../public/img/profile-picture.jpg"
            alt=""
          />
          <p>Name: Constantin Florea</p>
          <p>University: Solent</p>
          <p>Email: youremail@gmail.com</p>
          <button
            type="submit"
            className="text-white mx-2 my-4 bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Send message
          </button>
          <button
            type="submit"
            className="text-white mx-2 bg-red-600 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Delete Buddy
          </button>
        </div>
        <div className="rounded border-2 pb-2">
          <img
            className="h-auto h-20 w-20 m-auto rounded-lg"
            src="../public/img/profile-picture.jpg"
            alt=""
          />
          <p>Name: Constantin Florea</p>
          <p>University: Solent</p>
          <p>Email: youremail@gmail.com</p>
          <button
            type="submit"
            className="text-white mx-2 my-4 bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Send message
          </button>
          <button
            type="submit"
            className="text-white mx-2 bg-red-600 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Delete Buddy
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Buddies;
