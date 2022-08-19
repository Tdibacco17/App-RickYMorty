import React from "react";
import "./Card-module.css";

export default function Card({id, name, status, species, gender, image,created}){

    return(
        <div key={id} className="Card">
            <h4>{name}</h4>
            {/* <h4>{status}</h4>
            <h4>{species}</h4>
            <h4>{gender}</h4> */}
            <img src={image} alt="Imagen Rick Y Morty"/>
            {/* <h4>{created}</h4> */}
        </div>
    )
}