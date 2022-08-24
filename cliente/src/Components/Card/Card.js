import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import {useNavigate } from 'react-router-dom';
import "./Card-module.css";

export default function Cards({ id, name, status, species, gender, image, created, setStatusTrue, setSpeciesTrue, setGenderTrue }) {

    let navigate = useNavigate();

    function handleDetail(e) {
        e.preventDefault();
        setStatusTrue(false);
        setSpeciesTrue(false);
        setGenderTrue(false);
        navigate(`/Details/${id}`)
    }

    return (
        <Card className="Tarjetas">
            <Card.Img variant="top" src={image} alt="Imagen Rick Y Morty" />
            <Card.Body className="Fondo">
                <Card.Title style={{ fontSize: "15.5px" }} >{name}</Card.Title>
                <Card.Text style={{ fontSize: "13.5px" }}>
                   Status: {status} /
                   Species: {species} /
                   Gender : {gender}
                </Card.Text>
                <Button onClick={(e) => handleDetail(e)} variant="primary">Go to Details</Button>
            </Card.Body>
        </Card>
    )
}