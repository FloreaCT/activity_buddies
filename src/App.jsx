import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import { AuthContextProvider } from "./Auth/AuthContext";
import Main from "./Components/Main";
import SignIn from "./Components/Signin";
import ProtectedRoute from "./Components/ProtectedRoute";
import "./index.css";

//Define the App component
const App = () => {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <NavBar />
                <Main />
              </ProtectedRoute>
            }
          />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
};

export default App;
