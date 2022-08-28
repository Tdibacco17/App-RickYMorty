import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterById, getRelacionEpisodes, getRelacionLocation, getRelacionLocationOrigin, getRelacionEpisodesCharacterCap, getRelacionLocationResidents } from "../../Actions/index";
import Card from 'react-bootstrap/Card';
import Loading from "../Spiner/Spiner";
import "./Details-module.css"
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Details({ darkMode }) {

    const dispatch = useDispatch();
    const { id } = useParams();

    const CharacterDetail = useSelector(state => state.details)
    const relacionEpisodios = useSelector(state => state.characterEpisodes)
    const relacionEpisodiosCharacterCap = useSelector(state => state.characterEpisodesCharacterCap)
    const relacionLocation = useSelector(state => state.characterLocation)
    const relacionLocationResidents = useSelector(state => state.characterLocationResidents)

    // const relacionLocationOrigin = useSelector(state => state.characterLocationOrigin)
    // console.log(relacionLocationOrigin)  
    function handleClickCharacterCap(e) {
        e.preventDefault();
        dispatch(getRelacionEpisodesCharacterCap(e.target.value))
    }

    function handleClickResidents(e) {
        e.preventDefault();
        dispatch(getRelacionLocationResidents(e.target.value))
    }

    useEffect(() => {
        dispatch(getCharacterById(id))
        dispatch(getRelacionEpisodes(id));
        dispatch(getRelacionLocation(id));
        // dispatch(getRelacionLocationOrigin(id));
    }, [dispatch, id])

    return (
        <div className="Ubicacion">
            {
                CharacterDetail.id ? <div className="centradoDetail">
                    <Card bg={darkMode === true ? "light" : "dark"} className="text-center">
                        <Card.Header id={darkMode === true ? null : "tittleDetails"} style={{ fontSize: "26px", paddingBottom: "20px" }} >{CharacterDetail.name}</Card.Header>
                        <div className="ContenedorDetail">
                            <div>
                                <img className="imagenDetail" src={CharacterDetail.image} alt="Imagen Rick Y Morty" />
                                <Card.Body>
                                    <ListGroup variant={darkMode === true ? "primary" : "secondary"}>
                                        <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Status: {CharacterDetail.status}</ListGroup.Item>
                                        <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Specie: {CharacterDetail.species} </ListGroup.Item>
                                        <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Gender: {CharacterDetail.gender}</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </div>
                            {/* <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Location Origin: {relacionLocationOrigin[0].name}</ListGroup.Item> */}
                            {/* <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Location: {relacionLocation[0].name}</ListGroup.Item> */}

                            <div>
                                <Dropdown >
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant={darkMode === true ? "primary" : "secondary"}>
                                        Episodios
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu id="dropdooown" variant={darkMode === true ? "light" : "dark"}>
                                        {
                                            relacionEpisodios.length > 0 ? relacionEpisodios.map(e => {
                                                return (
                                                    <div key={e[0].id} >
                                                        <Dropdown.Item variant={darkMode === true ? "primary" : "dark"}>Nombre: {e[0].name}</Dropdown.Item>
                                                        <Dropdown.Item variant={darkMode === true ? "primary" : "dark"}>Temporada: {e[0].temporada}/ Capitulo:{e[0].capitulo}</Dropdown.Item>
                                                        <Dropdown.Item variant={darkMode === true ? "primary" : "dark"}>Salio al aire: {e[0].air_date}</Dropdown.Item>
                                                        <Button value={e[0].id} onClick={e => handleClickCharacterCap(e)}>Character Cap</Button>
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
                                                        <Button value={e.id} onClick={e => handleClickResidents(e)}>Residentes</Button>
                                                        <Dropdown.Divider />
                                                    </div>
                                                )
                                            }) : null
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                            <div className="centradoimagenesDetails">
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

                                <div className="imagenesDetails">
                                    {
                                        relacionLocationResidents.length > 0 ? relacionLocationResidents.map(e => {
                                            return (
                                                <div key={e[0].id}>
                                                    <a href={`/Details/${e[0].id}`}><img style={{ width: "100px", height: "100px" }} src={e[0].image} alt="Imagen Rick Y Morty" /></a>
                                                </div>

                                            )
                                        }) : null
                                    }
                                </div>

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
