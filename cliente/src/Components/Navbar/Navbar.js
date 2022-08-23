import React from "react";
import { useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import logoRyM from "../../Imagenes/logo.png"
import "./Navbar-module.css"
// import titulo from "../../Imagenes/titutlo.png"
import { getSearchbar, getFilter } from "../../Actions/index"
import { Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';

export default function Header({ setPage, nameCharacter, setNameCharacter, statusTrue, setStatusTrue, statusName, setStatusName }) {

    const dispatch = useDispatch()
    let navigate = useNavigate();

    function handleInputChange(e) {
        setNameCharacter(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (nameCharacter.length === 0 || nameCharacter[0] === ' ') {
            swal('Ohh no!', 'No se permiten espacios en la primera posición', 'warning');
        } else if (statusTrue === true) {
            setStatusTrue(false);
            dispatch(getFilter({ status: statusName, nameCharacter }))
        } else if (statusName === "Alive" || statusName === "Dead" || statusName === "Unknown" ) {
            setStatusName("")
            dispatch(getFilter({ status: statusName, nameCharacter }))
        } else {
            navigate('/')
            dispatch(getSearchbar(nameCharacter));
            // setNameCharacter("");  si lo activono me filtra con la busqueda
            setPage(1)
        }
    }

    function handleReloadClick(e) {
        e.preventDefault();
        setStatusName("");
        setStatusTrue(false);
        navigate('/');
        dispatch(getSearchbar(""));
        setNameCharacter("");
    }

    function handleEnter(e) {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }

    return (
        <div>
            <Navbar id="ContentNavbar" bg="light" expand="lg">
                <Container fluid>
                    <Link to="/"><img src={logoRyM} style={{ width: "3.2rem", }} alt="Imagen Rick Y Morty" /></Link>
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
                            onKeyPress={handleEnter}
                        />
                        <Button id="boton2" onClick={(e) => handleSubmit(e)} type="button" variant="outline-primary">Search</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}