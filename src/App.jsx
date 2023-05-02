import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import { AuthContextProvider } from "./Auth/AuthContext";
import SignIn from "./Components/Signin";
import ProtectedRoute from "./Components/ProtectedRoute";
import "./index.css";

const App = () => {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <NavBar />
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
