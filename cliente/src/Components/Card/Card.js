import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import "./Card-module.css";

export default function Cards({ id, name, status, species, gender, image, created }) {
    return (
        <Card className="Tarjetas">
            <Card.Img variant="top" src={image} alt="Imagen Rick Y Morty" />
            <Card.Body className="Fondo">
                <Card.Title style={{ fontSize: "15.5px" }} >{name}</Card.Title>
                <Card.Text style={{ fontSize: "13.5px" }}>
                   Status: {status} /
                   Species: {species}
                </Card.Text>
                <Link to={`/Details/${id}`} ><Button variant="primary">Go to Details</Button></Link>
            </Card.Body>
        </Card>
    )
}