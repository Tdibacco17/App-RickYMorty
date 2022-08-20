import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterById } from "../../Actions/index";
import Card from 'react-bootstrap/Card';
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
            {
                CharacterDetail.id ? <div className="ContenedorDetail">
                    <Card>
                        <div className="CardDetail">
                            <Card.Img variant="top" src={CharacterDetail.image} alt="Imagen Rick Y Morty" />
                                <Card.Body>
                                    <Card.Title>{CharacterDetail.name}</Card.Title>
                                    <Card.Text>
                                            <h5>{CharacterDetail.status}</h5>
                                            <h5>{CharacterDetail.species}</h5>
                                            <h5>{CharacterDetail.gender}</h5>
                                            <h5>{CharacterDetail.created}</h5>
                                    </Card.Text>
                                </Card.Body>
                        </div>
                    </Card>
                </div> : "Loading"
            }
            
        </div>
    )
}