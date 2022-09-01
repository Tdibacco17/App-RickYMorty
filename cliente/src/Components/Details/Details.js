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

    const [viewImgEpisodes, setViewImgEpisodes] = useState(false)
    const [viewImgLocation, setViewImgLocation] = useState(false)
    const [viewImgOrigin, setViewImgOrigin] = useState(false)

    const CharacterDetail = useSelector(state => state.details)

    const relacionEpisodios = useSelector(state => state.characterEpisodes)
    const relacionEpisodiosCharacterCap = useSelector(state => state.characterEpisodesCharacterCap)

    const relacionLocation = useSelector(state => state.characterLocation)
    const relacionLocationResidents = useSelector(state => state.characterLocationResidents)

    const relacionOrigin = useSelector(state => state.characterOrigin)
    const relacionOriginResidents = useSelector(state => state.characterOriginResidents)

    function handleClickCharacterCap(e) {
        e.preventDefault();
        dispatch(getRelacionEpisodesCharacterCap(e.target.value));
        setViewImgEpisodes(true);
    }

    function handleClickLocationResidents(e) {
        e.preventDefault();
        dispatch(getRelacionLocationResidents(e.target.value));
        setViewImgLocation(true);

    }

    function handleClickOriginResidents(e) {
        e.preventDefault();
        dispatch(getRelacionOriginResidents(e.target.value));
        setViewImgOrigin(true);
    }

    function handleViewEpisodes(e) {
        e.preventDefault();
        setViewLocation(false);
        setViewOrigin(false);
        setViewImgLocation(false);
        setViewImgOrigin(false);
        setViewImgEpisodes(false);
        if (viewEpisodes === true) {
            setViewEpisodes(false);
        } else {
            setViewEpisodes(true);
        }
    }

    function handleViewOrigin(e) {
        e.preventDefault();
        setViewEpisodes(false);
        setViewLocation(false);
        setViewImgLocation(false);
        setViewImgOrigin(false);
        setViewImgEpisodes(false);
        if (viewOrigin === true) {
            setViewOrigin(false);
        } else {
            setViewOrigin(true);
        }
    }

    function handleViewLocation(e) {
        e.preventDefault();
        setViewEpisodes(false);
        setViewOrigin(false);
        setViewImgLocation(false);
        setViewImgOrigin(false);
        setViewImgEpisodes(false);
        if (viewLocation === true) {
            setViewLocation(false);
        } else {
            setViewLocation(true);
        }
    }


    useEffect(() => {
        dispatch(getCharacterById(id));
        dispatch(getRelacionEpisodes(id));
        dispatch(getRelacionLocation(id));
        dispatch(getRelacionOrigin(id));
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
                                    <ListGroup id="datosDetail" variant={darkMode === true ? "primary" : "secondary"}>
                                        <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Status: {CharacterDetail.status}</ListGroup.Item>
                                        <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Specie: {CharacterDetail.species} </ListGroup.Item>
                                        <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Gender: {CharacterDetail.gender}</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </div>

                            <div id="espacio2">
                                <div id="groupButtons">
                                    <ButtonGroup aria-label="Basic example">
                                        <Button id="tamañogroupButtons" onClick={e => handleViewEpisodes(e)} variant={darkMode === true ? "primary" : "secondary"}>Episodes</Button>
                                        <Button id="tamañogroupButtons" onClick={e => handleViewOrigin(e)} variant={darkMode === true ? "primary" : "secondary"}>Origin</Button>
                                        <Button id="tamañogroupButtons" onClick={e => handleViewLocation(e)} variant={darkMode === true ? "primary" : "secondary"}>Location</Button>
                                    </ButtonGroup>
                                </div>
                                {
                                    viewEpisodes === true ? <Dropdown.Menu show id="dropdowncentrado" variant={darkMode === true ? "light" : "dark"}>
                                        <Card.Body id="dropdooown">
                                            {
                                                relacionEpisodios.length > 0 ? relacionEpisodios.map(e => {
                                                    return (
                                                        <div key={e[0].id} >
                                                            <ListGroup variant={darkMode === true ? "primary" : "secondary"}>
                                                                <ListGroup.Item style={{ textDecoration: "none" }} variant={darkMode === true ? "primary" : "dark"}>Name: {e[0].name}</ListGroup.Item>
                                                                <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Season {e[0].temporada} - Chapter {e[0].capitulo}</ListGroup.Item>
                                                                <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Air date: {e[0].air_date}</ListGroup.Item>
                                                                <Button style={{ borderRadius: "0px 0px 5px 5px" }} variant={darkMode === true ? "primary" : "secondary"} value={e[0].id} onClick={e => handleClickCharacterCap(e)}>Character Cap</Button>
                                                                <br />
                                                            </ListGroup>
                                                        </div>
                                                    )
                                                }) : 
                                                <div className="CentradoDetailsLoading">
                                                    <Loading />
                                                </div>
                                            }
                                        </Card.Body>
                                    </Dropdown.Menu> : viewLocation === true ? <Dropdown.Menu show id="dropdowncentrado" variant={darkMode === true ? "light" : "dark"}>
                                        <Card.Body id="dropdooown">
                                            {
                                                relacionLocation.length > 0 ? relacionLocation.map(e => {
                                                    return (
                                                        <div key={e.id} >
                                                            <ListGroup variant={darkMode === true ? "primary" : "secondary"}>
                                                                <ListGroup.Item style={{ textDecoration: "none" }} variant={darkMode === true ? "primary" : "dark"}>Name: {e.name}</ListGroup.Item>
                                                                <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Type: {e.type}</ListGroup.Item>
                                                                <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Dimension: {e.dimension}</ListGroup.Item>
                                                                <Button style={{ borderRadius: "0px 0px 5px 5px" }} variant={darkMode === true ? "primary" : "secondary"} value={e.id} onClick={e => handleClickLocationResidents(e)}>Residents</Button>
                                                                <br />
                                                            </ListGroup>
                                                        </div>
                                                    )
                                                }) : relacionEpisodios.length > 0 && relacionLocation.length === 0 ? <h5>There are no items to view</h5 > :
                                                    <div className="CentradoDetailsLoading">
                                                        <Loading />
                                                    </div>

                                            }
                                        </Card.Body>
                                    </Dropdown.Menu> : viewOrigin === true ? <Dropdown.Menu show id="dropdowncentrado" variant={darkMode === true ? "light" : "dark"}>

                                        <Card.Body id="dropdooown">
                                            {
                                                relacionOrigin.length > 0 ? relacionOrigin.map(e => {
                                                    return (
                                                        <div key={e.id} >
                                                            <ListGroup variant={darkMode === true ? "primary" : "secondary"}>
                                                                <ListGroup.Item style={{ textDecoration: "none" }} variant={darkMode === true ? "primary" : "dark"}>Name: {e.name}</ListGroup.Item>
                                                                <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Type: {e.type}</ListGroup.Item>
                                                                <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Dimension: {e.dimension}</ListGroup.Item>
                                                                <Button style={{ borderRadius: "0px 0px 5px 5px" }} variant={darkMode === true ? "primary" : "secondary"} value={e.id} onClick={e => handleClickOriginResidents(e)}>Residents</Button>
                                                                <br />
                                                            </ListGroup>
                                                        </div>
                                                    )
                                                }) :  relacionEpisodios.length > 0 && relacionOrigin.length === 0 ? <h5>There are no items to view</h5 > :
                                                    <div className="CentradoDetailsLoading">
                                                        <Loading />
                                                    </div>
                                            }
                                        </Card.Body>

                                    </Dropdown.Menu> : <div id={darkMode === true ? "centradoH5" : "centradoH5Dark"}><h5 style={{ fontSize: "16px" }}>Select option</h5 > </div>
                                }
                            </div>

                            <div className="espacio3">
                                {
                                    viewImgEpisodes === true ? <div className="imagenesDetails">
                                        {
                                            relacionEpisodiosCharacterCap.length > 0 ? relacionEpisodiosCharacterCap.map(e => {
                                                return (
                                                    <div key={e[0].id}>
                                                        <a href={`/Details/${e[0].id}`}><img style={{ width: "100px", height: "100px" }} src={e[0].image} alt="Imagen Rick Y Morty" /></a>
                                                    </div>

                                                )
                                            }) : <div className="loadingimagenes"><Loading /></div>
                                        }
                                    </div> : viewImgLocation === true ? <div className="imagenesDetails">
                                        {
                                            relacionLocationResidents.length > 0 ? relacionLocationResidents.map(e => {
                                                return (
                                                    <div key={e[0].id}>
                                                        <a href={`/Details/${e[0].id}`}><img style={{ width: "100px", height: "100px" }} src={e[0].image} alt="Imagen Rick Y Morty" /></a>
                                                    </div>

                                                )
                                            }) : <div className="loadingimagenes"><Loading /></div>
                                        }
                                    </div> : viewImgOrigin === true ? <div className="imagenesDetails">
                                        {
                                            relacionOriginResidents.length > 0 ? relacionOriginResidents.map(e => {
                                                return (
                                                    <div key={e[0].id}>
                                                        <a href={`/Details/${e[0].id}`}><img style={{ width: "100px", height: "100px" }} src={e[0].image} alt="Imagen Rick Y Morty" /></a>
                                                    </div>

                                                )
                                            }) : <div className="loadingimagenes"><Loading /></div>
                                        }
                                    </div> : <div className="espacio3">
                                        <div className="imagenesDetailsVacio" />
                                    </div>
                                }
                            </div>
                        </div>
                        <Card.Footer className="text-muted">Created {CharacterDetail.createdDay} at {CharacterDetail.createdTime}</Card.Footer>
                    </Card >

                </div > : <div className="CentradoDetailsLoading">
                    <Loading />
                </div>
            }
            <br /><br /> <br /><br />
        </div >
    )
}
