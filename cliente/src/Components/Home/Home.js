import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card"
import { getAllCharacters } from "../../Actions/index";
import Paginado from "../Paginado/Paginado";
import Loading from "../Spiner/Spiner";
import Filters from "../Filters/Filters";
import Carrusel from "../Carousel/Carousel";
import "./Home-module.css"

export default function Home({ darkMode, statusTrue, genderTrue, speciesTrue, page, setPage, nameCharacter, setStatusTrue, statusName, setStatusName, setSpeciesTrue, speciesName, setSpeciesName, setGenderTrue, genderName, setGenderName }) {

    const dispatch = useDispatch()
    const getAllChar = useSelector(state => state.characters)

    const [pageSize] = useState(12);
    const [input, setInput] = useState(1);

    let lastCard = page * pageSize;
    let firstCard = lastCard - pageSize
    let currentPage = getAllChar.slice(firstCard, lastCard);

    useEffect(() => {
        if (getAllChar.length === 0) {
            dispatch(getAllCharacters())
        }
    }, [dispatch])


    return (
        <div>
            <Carrusel />
            {currentPage.length === 0 ? null : <Filters
                className="Filtros"
                darkMode={darkMode}
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
            {currentPage.length === 0 ? null : <Paginado darkMode={darkMode} pageSize={pageSize} setInput={setInput} input={input} setPage={setPage} totalCount={getAllChar.length} page={page} />}
            <div className="CentradoCards">
                {
                    currentPage.length > 0 ? currentPage.map(j => {
                        return (
                            <Card darkMode={darkMode} key={j.id} id={j.id} name={j.name} status={j.status} species={j.species} gender={j.gender} image={j.image} createdDay={j.createdDay} createdTime={j.createdTime} setStatusTrue={setStatusTrue} setSpeciesTrue={setSpeciesTrue} setGenderTrue={setGenderTrue} />
                        )
                    }) : <div>
                        {(statusTrue === true && genderTrue === true && speciesTrue === true && currentPage.length === 0) ||
                            (genderTrue === true && speciesTrue === true && currentPage.length === 0) ||
                            (genderTrue === true && statusTrue === true && currentPage.length === 0) ||
                            (statusTrue === true && speciesTrue === true && currentPage.length === 0) ?
                            (<h4 style={{ color: "white" }}><br /><br />No se encontraron Personajes</h4>) :<Loading/>}
                    </div>
                }
            </div>
            {currentPage.length === 0 ? null : <Paginado darkMode={darkMode} pageSize={pageSize} setInput={setInput} input={input} setPage={setPage} totalCount={getAllChar.length} page={page} />}
            <br /><br /><br /><br /><br />
        </div>
    )
}
