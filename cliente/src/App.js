import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Details from "./Components/Details/Details";
import Navbar from "./Components/Navbar/Navbar"
import "./index.css"

function App() {

  const [page, setPage] = useState(1);

  const [nameCharacter, setNameCharacter] = useState("");

  const [statusTrue, setStatusTrue] = useState(false)
  const [statusName, setStatusName] = useState("")

  return (
    <div>
      <Navbar
        setPage={setPage}
        nameCharacter={nameCharacter}
        setNameCharacter={setNameCharacter}
        statusTrue={statusTrue}
        setStatusTrue={setStatusTrue}
        statusName={statusName}
        setStatusName={setStatusName} />
      <Routes>
        <Route exact path="/" element={
          <Home
            page={page}
            setPage={setPage}
            nameCharacter={nameCharacter}
            setStatusTrue={setStatusTrue}
            statusName={statusName}
            setStatusName={setStatusName}/>} />
        <Route exact path="/Details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
