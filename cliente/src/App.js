import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Details from "./Components/Details/Details";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/" element={<Home />} />
        <Route path="/Details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
