import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Details from "./Components/Details/Details";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer"
import "./index.css"

function App() {

  const [page, setPage] = useState(1);

  const [nameCharacter, setNameCharacter] = useState("");

  const [statusTrue, setStatusTrue] = useState(false)
  const [statusName, setStatusName] = useState("All")

  const [speciesTrue, setSpeciesTrue] = useState(false)
  const [speciesName, setSpeciesName] = useState("All")

  const [genderTrue, setGenderTrue] = useState(false)
  const [genderName, setGenderName] = useState("All")

  return (
    <div>
      <Navbar
        setPage={setPage}
        nameCharacter={nameCharacter}
        setNameCharacter={setNameCharacter}
        statusTrue={statusTrue}
        setStatusTrue={setStatusTrue}
        statusName={statusName}
        setStatusName={setStatusName}
        speciesTrue={speciesTrue}
        setSpeciesTrue={setSpeciesTrue}
        speciesName={speciesName}
        setSpeciesName={setSpeciesName}
        genderTrue={genderTrue}
        setGenderTrue={setGenderTrue}
        genderName={genderName}
        setGenderName={setGenderName} />
      <Routes>
        <Route exact path="/" element={
          <Home
            page={page}
            setPage={setPage}
            nameCharacter={nameCharacter}
            setStatusTrue={setStatusTrue}
            statusName={statusName}
            setStatusName={setStatusName}
            setSpeciesTrue={setSpeciesTrue}
            speciesName={speciesName}
            setSpeciesName={setSpeciesName}
            setGenderTrue={setGenderTrue}
            genderName={genderName}
            setGenderName={setGenderName} />}
        />
        <Route exact path="/Details/:id" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
