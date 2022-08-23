import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card"
import { getAllCharacters, getAllSpecies } from "../../Actions/index";
import Paginado from "../Paginado/Paginado";
import Loading from "../Spiner/Spiner";
import Filters from "../Filters/Filters";
import "./Home-module.css"


export default function Home({page, setPage, nameCharacter, setStatusTrue, statusName, setStatusName}) {

    const dispatch = useDispatch()
    const getAllChar = useSelector(state => state.characters)

    const [pageSize] = useState(18);
    const [input, setInput] = useState(1);

    let lastCard = page * pageSize;
    let firstCard = lastCard - pageSize
    let currentPage = getAllChar.slice(firstCard, lastCard);

    useEffect(() => {
        if (getAllChar.length === 0) {
            dispatch(getAllCharacters())
        }
        dispatch(getAllSpecies())
    }, [dispatch])

    return (
        <div>
            <Filters setStatusName={setStatusName} statusName={statusName} setStatusTrue={setStatusTrue} nameCharacter={nameCharacter}/>
            <Paginado pageSize={pageSize} setInput={setInput} input={input} setPage={setPage} totalCount={getAllChar.length} page={page} />
            <br />
            <div className="CentradoCards">
                {
                    currentPage.length > 0 ? currentPage.map(j => {
                        return (
                            <Card key={j.id} id={j.id} name={j.name} status={j.status} species={j.species} gender={j.gender} image={j.image} created={j.created} />
                        )
                    }) : <Loading/>
                }
            </div>
        </div>
    )
}
