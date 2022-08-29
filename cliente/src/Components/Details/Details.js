import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterById, getRelacionEpisodes, getRelacionLocation, getRelacionOrigin, getRelacionOriginResidents, getRelacionEpisodesCharacterCap, getRelacionLocationResidents } from "../../Actions/index";
import Card from 'react-bootstrap/Card';
import Loading from "../Spiner/Spiner";
import "./Details-module.css"
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Details({ darkMode }) {

    const dispatch = useDispatch();
    const { id } = useParams();
    const [viewEpisodes, setViewEpisodes] = useState(false)
    const [viewLocation, setViewLocation] = useState(false)
    const [viewOrigin, setViewOrigin] = useState(false)

    const CharacterDetail = useSelector(state => state.details)
    const relacionEpisodios = useSelector(state => state.characterEpisodes)
    const relacionEpisodiosCharacterCap = useSelector(state => state.characterEpisodesCharacterCap)
    // const relacionLocation = useSelector(state => state.characterLocation)
    // const relacionLocationResidents = useSelector(state => state.characterLocationResidents)
    // const relacionOrigin = useSelector(state => state.characterOrigin)
    // const relacionOriginResidents = useSelector(state => state.characterOriginResidents)

    function handleClickCharacterCap(e) {
        e.preventDefault();
        dispatch(getRelacionEpisodesCharacterCap(e.target.value))
    }

    // function handleClickLocationResidents(e) {
    //     e.preventDefault();
    //     dispatch(getRelacionLocationResidents(e.target.value))
    // }

    // function handleClickOriginResidents(e) {
    //     e.preventDefault();
    //     dispatch(getRelacionOriginResidents(e.target.value))
    // }


    function handleViewEpisodes(e){
        e.preventDefault();
        if (viewEpisodes === true) {
            setViewEpisodes(false);
        } else {
            setViewEpisodes(true);
        }
    }

    function handleViewLocation(e){
        e.preventDefault();
        if (viewLocation === true) {
            setViewLocation(false);
        } else {
            setViewLocation(true);
        }
    }

    function handleViewOrigin(e){
        e.preventDefault();
        if (viewOrigin === true) {
            setViewOrigin(false);
        } else {
            setViewOrigin(true);
        }
    }

    useEffect(() => {
        dispatch(getCharacterById(id));
        dispatch(getRelacionEpisodes(id));
        // dispatch(getRelacionLocation(id));
        // dispatch(getRelacionOrigin(id));
    }, [dispatch, id])

    return (
        <div className="Ubicacion">
            {
                CharacterDetail.id ? <div className="centradoDetail">
                    <Card bg={darkMode === true ? "light" : "dark"} className="text-center">
                        <Card.Header id={darkMode === true ? null : "tittleDetails"} style={{ fontSize: "26px", paddingBottom: "20px" }} >{CharacterDetail.name}</Card.Header>
                        <div className="ContenedorDetail">
                            <div id="espacio1">
                                <img className="imagenDetail" src={CharacterDetail.image} alt="Imagen Rick Y Morty" />
                                <Card.Body>
                                    <ListGroup style={{width: "300px"}} variant={darkMode === true ? "primary" : "secondary"}>
                                        <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Status: {CharacterDetail.status}</ListGroup.Item>
                                        <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Specie: {CharacterDetail.species} </ListGroup.Item>
                                        <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Gender: {CharacterDetail.gender}</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </div>

                            <div id="espacio2">
                                <div id="groupButtons">
                                    <ButtonGroup aria-label="Basic example">
                                        <Button onClick={e => handleViewEpisodes(e)} variant="secondary">Episodios</Button>
                                        <Button onClick={e => handleViewLocation(e)} variant="secondary">Origin</Button>
                                        <Button onClick={e => handleViewOrigin(e)} variant="secondary">Locaciones</Button>
                                    </ButtonGroup>
                                </div>

                                <Dropdown.Menu show id="dropdowncentrado" variant={darkMode === true ? "light" : "dark"}>
                                   {viewEpisodes === true? <Card.Body id="dropdooown">
                                        {
                                            relacionEpisodios.length > 0 ? relacionEpisodios.map(e => {
                                                return (
                                                    <div key={e[0].id} >
                                                        <ListGroup variant={darkMode === true ? "primary" : "secondary"}>
                                                            <ListGroup.Item style={{ textDecoration: "none" }} variant={darkMode === true ? "primary" : "dark"}>Nombre: {e[0].name}</ListGroup.Item>
                                                            <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Temporada: {e[0].temporada}/ Capitulo:{e[0].capitulo}</ListGroup.Item>
                                                            <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Salio al aire: {e[0].air_date}</ListGroup.Item>
                                                            <Button value={e[0].id} onClick={e => handleClickCharacterCap(e)}>Character Cap</Button>
                                                            <br />
                                                        </ListGroup>
                                                    </div>
                                                )
                                            }) : <h5>No hay elementos a mostrar </h5 >
                                        } 
                                    </Card.Body> : <h5>Seleccione una opcion </h5 >} 
                                </Dropdown.Menu>


                                {/* <Dropdown >
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant={darkMode === true ? "primary" : "secondary"}>
                                        Origin
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu id="dropdooown" variant={darkMode === true ? "light" : "dark"}>
                                        {
                                            relacionOrigin.length > 0 ? relacionOrigin.map(e => {
                                                return (
                                                    <div key={e.id} >
                                                        <Dropdown.Item variant={darkMode === true ? "primary" : "dark"}>Nombre: {e.name}</Dropdown.Item>
                                                        <Dropdown.Item variant={darkMode === true ? "primary" : "dark"}>Tipo: {e.type}</Dropdown.Item>
                                                        <Dropdown.Item variant={darkMode === true ? "primary" : "dark"}>Dimension: {e.dimension}</Dropdown.Item>
                                                        <Button value={e.id} onClick={e => handleClickOriginResidents(e)}>Residentes</Button>
                                                        <Dropdown.Divider />
                                                    </div>
                                                )
                                            }) : null
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown >
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant={darkMode === true ? "primary" : "secondary"}>
                                        Locaciones
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu id="dropdooown" variant={darkMode === true ? "light" : "dark"}>
                                        {
                                            relacionLocation.length > 0 ? relacionLocation.map(e => {
                                                return (
                                                    <div key={e.id} >
                                                        <Dropdown.Item variant={darkMode === true ? "primary" : "dark"}>Nombre: {e.name}</Dropdown.Item>
                                                        <Dropdown.Item variant={darkMode === true ? "primary" : "dark"}>Tipo: {e.type}</Dropdown.Item>
                                                        <Dropdown.Item variant={darkMode === true ? "primary" : "dark"}>Dimension: {e.dimension}</Dropdown.Item>
                                                        <Button value={e.id} onClick={e => handleClickLocationResidents(e)}>Residentes</Button>
                                                        <Dropdown.Divider />
                                                    </div>
                                                )
                                            }) : null
                                        }
                                    </Dropdown.Menu>
                                </Dropdown> */}
                            </div>

                            <div className="espacio3">
                                <div className="imagenesDetails">
                                    {
                                        relacionEpisodiosCharacterCap.length > 0 ? relacionEpisodiosCharacterCap.map(e => {
                                            return (
                                                <div key={e[0].id}>
                                                    <a href={`/Details/${e[0].id}`}><img style={{ width: "100px", height: "100px" }} src={e[0].image} alt="Imagen Rick Y Morty" /></a>
                                                </div>

                                            )
                                        }) : null
                                    }
                                </div>

                                {/* <div className="imagenesDetails">
                                    {
                                        relacionOriginResidents.length > 0 ? relacionOriginResidents.map(e => {
                                            return (
                                                <div key={e[0].id}>
                                                    <a href={`/Details/${e[0].id}`}><img style={{ width: "100px", height: "100px" }} src={e[0].image} alt="Imagen Rick Y Morty" /></a>
                                                </div>

                                            )
                                        }) : null
                                    }
                                </div> */}

                                {/* <div className="imagenesDetails">
                                    {
                                        relacionLocationResidents.length > 0 ? relacionLocationResidents.map(e => {
                                            return (
                                                <div key={e[0].id}>
                                                    <a href={`/Details/${e[0].id}`}><img style={{ width: "100px", height: "100px" }} src={e[0].image} alt="Imagen Rick Y Morty" /></a>
                                                </div>

                                            )
                                        }) : null
                                    }
                                </div> */}

                            </div>
                        </div>
                        <Card.Footer className="text-muted">Creado el {CharacterDetail.createdDay} a las {CharacterDetail.createdTime}</Card.Footer>
                    </Card>

                </div > : <div className="CentradoDetailsLoading">
                    <Loading />
                </div>
            }
            <br /><br /> <br /><br />
        </div >
    )
}
