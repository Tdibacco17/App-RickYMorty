import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterById } from "../../Actions/index";
import Card from 'react-bootstrap/Card';
import Loading from "../Spiner/Spiner";
import "./Details-module.css"
import ListGroup from 'react-bootstrap/ListGroup';

export default function Details({ darkMode }) {

    const dispatch = useDispatch();
    const { id } = useParams();
    const CharacterDetail = useSelector(state => state.details)

    useEffect(() => {
        dispatch(getCharacterById(id))
    }, [dispatch, id])

    return (
        <div className="Ubicacion">
            {
                CharacterDetail.id ? <div className="centradoDetail">
                    <Card bg={darkMode === true ? "light" : "dark"}>
                        <div className="ContenedorDetail">
                            <div>
                                <img className="imagenDetail" src={CharacterDetail.image} alt="Imagen Rick Y Morty" />
                            </div>
                            <div className={darkMode === true ? "cuerpo" : "cuerpoDark"} >
                            <Card.Title style={{ fontSize: "26px", paddingBottom: "20px" }} >{CharacterDetail.name}</Card.Title>
                                <ListGroup  variant={darkMode === true ? "primary" : "secondary"}>
                                    <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Status: {CharacterDetail.status}</ListGroup.Item>
                                    <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Specie: {CharacterDetail.species} </ListGroup.Item>
                                    <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Gender: {CharacterDetail.gender}</ListGroup.Item>
                                    <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Gender: {CharacterDetail.created}</ListGroup.Item>
                                </ListGroup>
                            </div>
                        </div>
                    </Card>
                </div> : <div className="CentradoDetailsLoading">
                    <Loading />
                </div>
            }
            <br /><br />
        </div>
    )
}
