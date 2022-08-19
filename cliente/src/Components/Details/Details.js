import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterById } from "../../Actions/index"
import { Link } from "react-router-dom";
import "./Details-module.css"

export default function Details() {

    const dispatch = useDispatch();
    const { id } = useParams();
    const CharacterDetail = useSelector(state => state.details)

    useEffect(() => {
        dispatch(getCharacterById(id))
    }, [dispatch, id])



    return (
        <div>
            <Link to="/"><button>Back</button></Link>
            {
                CharacterDetail.id ?
                    <div className="ContenedorDetail">
                        <div className="CardDetail">
                            <div>
                                <img src={CharacterDetail.image} alt="Imagen Rick Y Morty" />
                            </div>
                            <div>
                                <h2>{CharacterDetail.name}</h2>
                                <h4>{CharacterDetail.status}</h4>
                                <h4>{CharacterDetail.species}</h4>
                                <h4>{CharacterDetail.gender}</h4>
                                <h4>{CharacterDetail.created}</h4>
                            </div>
                        </div>
                    </div> : "Loading"
            }
        </div>
    )
}