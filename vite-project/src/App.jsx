import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Welcome from "./pages/Welcome";
import HomePage from "./pages/Home";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/welcome" element={<Welcome />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
