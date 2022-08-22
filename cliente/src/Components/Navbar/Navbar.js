import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import logoRyM from "../../Imagenes/logo ricky y morty 1.png"
import "./Navbar-module.css"
// import titulo from "../../Imagenes/titutlo.png"
import { getSearchbar } from "../../Actions/index"
import { Link, useNavigate } from "react-router-dom";

export default function Header() {

    const dispatch = useDispatch()
    const [nameCharacter, setNameCharacter] = useState("");
    let navigate = useNavigate();

    function handleInputChange(e) {
        setNameCharacter(e.target.value);
        console.log(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (nameCharacter.length > 0 && nameCharacter[0] !== ' '){
            navigate('/')
            dispatch(getSearchbar(nameCharacter));
            setNameCharacter("");
        }
    }

    function handleReloadClick(e) {
        e.preventDefault();
        navigate('/')
        dispatch(getSearchbar(""));
        setNameCharacter("");
    }


    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Link to="/"><img src={logoRyM} style={{ width: "5rem" }} alt="Imagen Rick Y Morty" /></Link>
                    <h5 className="titulo">Rick Y Morti App</h5>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        <Button id="boton1" onClick={(e) => handleReloadClick(e)} type="button" variant="outline-primary">Reload</Button>
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e) => handleInputChange(e)}
                            style={{ width: '250px', marginLeft: '8px' }}
                            value={nameCharacter}
                        />
                        <Button id="boton2" onClick={(e) => handleSubmit(e)} type="button" variant="outline-primary">Search</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}