import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Details from "./Components/Details/Details";
import Navbar from "./Components/Navbar/Navbar";
import "./index.css"
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
