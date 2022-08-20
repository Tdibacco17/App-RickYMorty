import React from "react";
import logoRyM from "../../Imagenes/logo ricky y morty 1.png"

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-custom-colors bg-dark">
                <div class="container-fluid">
                    <a href="/Home" class="navbar-brand"><img src={logoRyM} style={{ width: "5rem" }} alt="Imagen Rick Y Morty"  /></a>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}