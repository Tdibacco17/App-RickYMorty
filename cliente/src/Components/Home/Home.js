import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card"
import { getAllCharacters } from "../../Actions/index";
import "./Home-module.css"

export default function Home() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCharacters())
    }, [dispatch])
    const getAlllChar = useSelector(state => state.characters)



    return (
        <div className="CentradoCards">
            {
                getAlllChar.length > 0 ? getAlllChar.map(j => {
                    return (
                        <Card key={j.id} id={j.id} name={j.name} status={j.status} species={j.species} gender={j.gender} image={j.image} created={j.created} />
                    )
                }) : "Loading..."
            }
        </div>
    )
}
