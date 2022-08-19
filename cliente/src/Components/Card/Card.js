import React from "react";
import "./Card-module.css";

export default function Card({ id, name, status, species, gender, image, created }) {
    return (   
        <div className="Card">
            <h4>{name}</h4>
            {/* <h4>{status}</h4>
            <h4>{species}</h4>
            <h4>{gender}</h4> */}
            <a href={`/Details/${id}`}><img src={image} alt="Imagen Rick Y Morty" /></a>
            {/* <h4>{created}</h4> */}
        </div>
    )
}