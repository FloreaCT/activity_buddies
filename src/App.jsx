import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import "./index.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element="" />
        <Route path="*" element={<div>Page not found!</div>} />
      </Routes>
    </Router>
  );
}

export default App;
