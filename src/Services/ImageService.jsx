import React, { Fragment, useEffect, useState } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  updateMetadata,
} from "firebase/storage";
import { storageRef } from "../Config/firebase";
import Button from "../Utils/Button";

const ImageService = ({
  userId,
  handleImageUrl,
  disableButton,
  setIsDisabled,
}) => {
  // Define state variables for the file, image URL, metadata, and whether to hide the
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [metaData, setMetaData] = useState({});
  const [isHidden, setIsHidden] = useState(false);

  // Handle selecting a file from Google Drive
  const handleGoogleFile = async (event) => {
    const file = event.target.files[0];
    setFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
    setMetaData({
      contentType: file.type,
      customMetadata: {
        userId: userId,
        description: "Event image",
      },
    });
  };

  // Show the image upload button when the component mounts
  useEffect(() => {
    setIsHidden(false);
  }, []);

  // Generate a unique file name for the uploaded image
  const generateFileName = (file) => {
    const timestamp = Date.now();
    const randomNumber = Math.floor(Math.random() * 1000000);
    const extension = file.name.split(".").pop();
    disableButton(true);
    setTimeout(() => disableButton(false), 2000);
    return `${timestamp}-${randomNumber}.${extension}`;
  };

  // Handle submitting the image to Firebase Storage
  const handleSubmit = async () => {
    const fileName = generateFileName(file);
    const fileRef = ref(storageRef, fileName);
    await uploadBytes(fileRef, file);
    await updateMetadata(fileRef, metaData);
    const downloadUrl = await getDownloadURL(fileRef);
    downloadUrl
      ? handleImageUrl(downloadUrl)
      : console.log("Something went wrong");
  };
  // Render the ImageService component
  return (
    <Fragment>
      <div className="flex m-auto items-center">
        <label htmlFor="fileInput"></label>
        <input
          className={isHidden ? "hidden" : ""}
          type="file"
          accept="image/*"
          id="fileInput"
          onChange={(e) => {
            handleGoogleFile(e);
          }}
        />
        {imageUrl && (
          <img src={imageUrl} alt="Preview" className="h-[25vh] m-auto my-2" />
        )}
      </div>
      {/*Button to handle the upload image*/}
      <div className="flex mt-2 m-auto">
        <Button
          type="button"
          text="Upload image"
          onClick={() => {
            handleSubmit();
            setTimeout(() => {
              setIsHidden(true);
            }, 2000);
          }}
          buttonStyles={
            isHidden
              ? "hidden"
              : "text-white m-auto bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm mb-4 px-4 py-2"
          }
        />
      </div>
    </Fragment>
  );
};

export default ImageService;
