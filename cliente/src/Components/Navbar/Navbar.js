import React, { useEffect, useState, useContext } from "react";
import { useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoRyM from "../../Imagenes/logo.png"
import "./Navbar-module.css"
import { getSearchbar, getFilter } from "../../Actions/index"
import { Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import DarkMOdeContext from "../../Context/context";

export default function Header({ setPage, nameCharacter, setNameCharacter, statusTrue, setStatusTrue, statusName, setStatusName, speciesTrue, setSpeciesTrue, speciesName, setSpeciesName, genderTrue, setGenderTrue, genderName, setGenderName }) {

    const {darkMode, setDarkMode} = useContext(DarkMOdeContext)
    
    const dispatch = useDispatch()
    let navigate = useNavigate();

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    function handleInputChange(e) {
        setNameCharacter(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (nameCharacter.length === 0 || nameCharacter[0] === ' ') {
            swal('Ohh no!', 'No se permiten espacios en la primera posición', 'warning');
        } else if (statusTrue === false && speciesTrue === false && genderTrue === false) {
            setStatusTrue(false);
            setSpeciesTrue(false);
            setGenderTrue(false);
            navigate('/')
            dispatch(getSearchbar(nameCharacter));
            setPage(1)
        } else {
            setStatusTrue(false);
            setSpeciesTrue(false);
            setGenderTrue(false);
            dispatch(getFilter({ status: statusName, species: speciesName, gender: genderName, nameCharacter }));
            setPage(1)
        }
    }

    function handleReloadClick(e) {
        e.preventDefault();
        setStatusName("All");
        setSpeciesName("All");
        setGenderName("All");
        setStatusTrue(false);
        setSpeciesTrue(false);
        setGenderTrue(false);
        navigate('/');
        dispatch(getSearchbar(""));
        setNameCharacter("");
        setPage(1)
    }

    function handleEnter(e) {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }

    function handleDark(e) {
        e.preventDefault();
        if (darkMode === true) {
            setDarkMode(false)
            localStorage.setItem("dark-Mode", "false")
        } else {
            setDarkMode(true)
            localStorage.setItem("dark-Mode", "true")
        }
    }

    return (
        <div>
            <Navbar bg={darkMode === true ? "light" : "dark"} expand="lg">
                <Container fluid >
                        <Link to="/"><img src={logoRyM} style={{ width: "3.2rem", }} alt="Imagen Rick Y Morty" /></Link> 
                    <h5 className={darkMode === true ? "titulo" : "titulo2"}>Rick Y Morty App</h5>
                    <Navbar.Toggle id={darkMode === true ? null : "Cuadradito"} aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        <button onClick={e => handleDark(e)} className={darkMode === true ? "BontonLightMode" : "BontonDarkMode"} >{darkMode === true ? <IoMoonOutline className="DarkIcon" /> : <IoSunnyOutline className="LightIcon" />}</button>
                        <Button id={darkMode === true ? "boton1" : "boton1Dark"} onClick={(e) => handleReloadClick(e)} type="button" variant={darkMode === true ? "outline-primary" : "outline-secondary"}>Reload</Button>
                        <Form.Control
                            type="text"
                            placeholder="Search..."
                            id={darkMode === true ? "inputNavbar" : "inputNavbarDark"}
                            aria-label="Search"
                            onChange={(e) => handleInputChange(e)}
                            style={{ width: '250px', marginLeft: '8px', marginRight: '8px' }}
                            value={nameCharacter}
                            onKeyPress={handleEnter}
                        />
                        <Button id={darkMode === true ? "boton2" : "boton2Dark"} onClick={(e) => handleSubmit(e)} type="button" variant={darkMode === true ? "outline-primary" : "outline-secondary"}>Search</Button>
                        {
                            width <= 991 && <Button id={darkMode === true ? "boton3" : "boton3Dark"} onClick={(e) => handleReloadClick(e)} type="button" variant={darkMode === true ? "outline-primary" : "outline-secondary"}>Reload</Button>
                        }
                        {
                            width <= 991 && <button onClick={e => handleDark(e)} className={darkMode === true ? "BontonLightMode2" : "BontonDarkMode2"} >{darkMode === true ? <IoMoonOutline className="DarkIcon2" /> : <IoSunnyOutline className="LightIcon2" />}</button>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}