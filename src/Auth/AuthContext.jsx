import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../Config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "@firebase/auth";
import { doc, getDoc } from "firebase/firestore";

// Create a new context for the user authentication state
const UserContext = createContext();

// Create a new component that provides the user authentication state to its children
export const AuthContextProvider = ({ children }) => {
  // Define state variables for the current user and the user data from the database
  const [user, setUser] = useState({});
  const [dbUser, setDbUser] = useState({});

  // Define a function to sign in with Google
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // Define a function to create a new user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Define a function to sign in with email and password
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Define a function to sign out the current user
  const logout = () => {
    return signOut(auth);
  };

  // Use the useEffect hook to listen for changes in the authentication state
  useEffect(() => {
    // Call the onAuthStateChanged method to listen for changes in the authentication state
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // Update the user state variable with the current user
      setUser(currentUser);

      // Define an async function to fetch the user data from the database
      const fetchData = async () => {
        if (currentUser) {
          // Call the getDoc method to get the user document from the database
          const dbUser = await getDoc(doc(db, "users", currentUser.uid));
          // Update the dbUser state variable with the user data from the database
          setDbUser(dbUser.data());
        }
      };
      // Call the fetchData function to fetch the user data from the database
      fetchData();
    });
    // Return a cleanup function that unsubscribes from the onAuthStateChanged listener
    return () => {
      unsubscribe();
    };
  }, []);

  // Provide the user authentication state to its children using the UserContext.Provider component
  return (
    <UserContext.Provider
      value={{ googleSignIn, createUser, user, dbUser, logout, signIn }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Create a new component that uses the UserContext to access the user authentication state
export const UserAuth = () => {
  return useContext(UserContext);
};
