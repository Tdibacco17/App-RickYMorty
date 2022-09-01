import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';
import "./Card-module.css";
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch } from "react-redux";
import { CleanDetails } from "../../Actions/index"

export default function Cards({ darkMode, id, name, status, species, gender, image, setStatusTrue, setSpeciesTrue, setGenderTrue }) {

    let navigate = useNavigate();
    let dispatch = useDispatch()

    function handleDetail(e) {
        e.preventDefault();
        setStatusTrue(false);
        setSpeciesTrue(false);
        setGenderTrue(false);
        dispatch(CleanDetails(""));
        navigate(`/Details/${id}`);
    }

    return (
        <Card bg={darkMode === true ? "light" : "dark"} className={darkMode === true ? "Tarjetas" : "TarjetasDark"}>
            <Card.Img variant="top" src={image} alt="Imagen Rick Y Morty" />
            <Card.Body className="Fondo">
                <div style={{height: "40px"}}>
                    <Card.Title style={{ fontSize: "15.5px", paddingBottom: "5px" }} >{name}</Card.Title>
                </div>
                <ListGroup id="CardText" style={{ fontSize: "13.5px" }} variant={darkMode === true ? "primary" : "secondary"}>
                    <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Status: {status}</ListGroup.Item>
                    <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Specie: {species} </ListGroup.Item>
                    <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Gender: {gender}</ListGroup.Item>
                    <Button style={{ borderRadius: "0px 0px 5px 5px" }} onClick={(e) => handleDetail(e)} variant={darkMode === true ? "primary" : "secondary"}>Go to Details</Button>
                </ListGroup>
            </Card.Body>
        </Card>
    )
}