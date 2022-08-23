import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Details from "./Components/Details/Details";
import Navbar from "./Components/Navbar/Navbar"
import "./index.css"

function App() {

  const [page, setPage] = useState(1);

  const [nameCharacter, setNameCharacter] = useState("");

  return (
    <div>
      <Navbar setPage={setPage} nameCharacter={nameCharacter} setNameCharacter={setNameCharacter}/>
      <Routes>
        <Route exact path="/" element={<Home page={page} setPage={setPage} nameCharacter={nameCharacter}/>} />
        <Route exact path="/Details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
