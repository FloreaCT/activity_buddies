// Initialize Firestore
import { initializeApp, firestore } from "firebase-admin";
initializeApp();

// Get a reference to the Firestore collection
const filesCollection = firestore().collection("files");

// Define a function to create a new file document in Firestore
const createFileDocument = async (name, type, size, owner) => {
  const docRef = await filesCollection.add({
    name,
    type,
    size,
    owner,
  });
  return docRef.id;
};


// Define a function to handle file uploads
const handleFileUpload = async (file, owner) => {
    // Generate a unique ID for the file
    const fileId = admin.firestore().collection("files").doc().id;
  
    // Create a new document in Firestore with the metadata about the file
    const fileName = file.originalname;
    const fileType = file.mimetype;
    const fileSize = file.size;
    const fileOwner = owner;
    const fileId = await createFileDocument(fileName, fileType, fileSize, fileOwner);
  
    // Store the file data in Google Cloud Storage
    const bucket = admin.storage().bucket();
    const fileData = file.buffer;
    const fileOptions = {
      metadata: {
        contentType: fileType,
      },
    };
    const fileRef = bucket.file(fileId);
    await fileRef.save(fileData, fileOptions);
  
    // Return the ID of the new file document
    return fileId;
  };


  const handleFileDownload = async (fileId) => {
    // Get the metadata about the file from Firestore
    const fileDoc = await filesCollection.doc(fileId).get();
    const fileName = fileDoc.data().name;
    const fileType = fileDoc.data().type;
  
    // Get the file data from Google Cloud Storage
    const bucket = admin.storage().bucket();
    const fileRef = bucket.file(fileId);
    const [fileData] = await fileRef.download();
  
    // Return the file data to the user
    return {
      data: fileData,
      name: fileName,
      type: fileType,
    };
  };