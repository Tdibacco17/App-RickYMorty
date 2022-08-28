import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterById, getRelacionEpisodes,getRelacionLocation, getRelacionLocationOrigin } from "../../Actions/index";
import Card from 'react-bootstrap/Card';
import Loading from "../Spiner/Spiner";
import "./Details-module.css"
import ListGroup from 'react-bootstrap/ListGroup';


export default function Details({ darkMode }) {

    const dispatch = useDispatch();
    const { id } = useParams();

    const relacionEpisodios = useSelector(state => state.characterEpisodes)
    const relacionLocation = useSelector(state => state.characterLocation)
    const relacionLocationOrigin = useSelector(state => state.characterLocationOrigin)
    const CharacterDetail = useSelector(state => state.details)

    console.log(relacionEpisodios)
    // console.log(relacionLocationOrigin)
    // console.log(relacionLocation)
    useEffect(() => {
        dispatch(getCharacterById(id))
        dispatch(getRelacionEpisodes(id));
        dispatch(getRelacionLocationOrigin(id));
        dispatch(getRelacionLocation(id));
    }, [dispatch, id])

    return (
        <div className="Ubicacion">
            {
                CharacterDetail.id ? <div className="centradoDetail">
                    {/* <Card bg={darkMode === true ? "light" : "dark"}>
                        <div className="ContenedorDetail">
                            <div>
                                <img className="imagenDetail" src={CharacterDetail.image} alt="Imagen Rick Y Morty" />
                            </div>
                            <div className={darkMode === true ? "cuerpo" : "cuerpoDark"} >
                            <Card.Title style={{ fontSize: "26px", paddingBottom: "20px" }} >{CharacterDetail.name}</Card.Title>
                                <ListGroup  variant={darkMode === true ? "primary" : "secondary"}>
                                    <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Status: {CharacterDetail.status}</ListGroup.Item>
                                    <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Specie: {CharacterDetail.species} </ListGroup.Item>
                                    <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Gender: {CharacterDetail.gender}</ListGroup.Item>
                                </ListGroup>
                            </div>
                        </div>
                    </Card> */}



                    <Card bg={darkMode === true ? "light" : "dark"} className="text-center">
                        <Card.Header style={{ fontSize: "26px", paddingBottom: "20px" }} >{CharacterDetail.name}</Card.Header>
                        <div className="ContenedorDetail">
                            <div>
                                <img className="imagenDetail" src={CharacterDetail.image} alt="Imagen Rick Y Morty" />
                            </div>
                            <Card.Body>
                                <ListGroup variant={darkMode === true ? "primary" : "secondary"}>
                                    <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Status: {CharacterDetail.status}</ListGroup.Item>
                                    <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Specie: {CharacterDetail.species} </ListGroup.Item>
                                    <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Gender: {CharacterDetail.gender}</ListGroup.Item>


                                    <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Location Origin: {relacionLocationOrigin[0].name}</ListGroup.Item>
                                    <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Location: {relacionLocation[0].name}</ListGroup.Item>
                                    {
                                        relacionEpisodios.length > 0 ? relacionEpisodios.map(e => {
                                            return(
                                                <ListGroup.Item variant={darkMode === true ? "primary" : "dark"}>Temporada:{relacionEpisodios.temporada}/ Capitulo:{relacionEpisodios.capitulo}</ListGroup.Item>
                                                //<Card darkMode={darkMode} key={j.id} id={j.id} name={j.name} status={j.status} species={j.species} gender={j.gender} image={j.image} createdDay={j.createdDay} createdTime={j.createdTime} setStatusTrue={setStatusTrue} setSpeciesTrue={setSpeciesTrue} setGenderTrue={setGenderTrue} />
                                            )
                                        }) : null
                                    }
                                </ListGroup>
                            </Card.Body>
                        </div>
                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                    </Card>

                </div> : <div className="CentradoDetailsLoading">
                    <Loading />
                </div>
            }
            <br /><br /> <br /><br />
        </div >
    )
}
