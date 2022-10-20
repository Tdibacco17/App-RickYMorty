import React, {useContext} from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { getFilter } from "../../Actions/index"
import { useDispatch } from "react-redux";
import "./Filters-module.css"

import DarkMOdeContext from "../../Context/context";

export default function Filters({ setPage, nameCharacter, setStatusTrue, statusName, setStatusName, setSpeciesTrue, speciesName, setSpeciesName, setGenderTrue, genderName, setGenderName }) {

    const {darkMode} = useContext(DarkMOdeContext)
    const dispatch = useDispatch()

    function handleState(e) {
        e.preventDefault();
        if (speciesName === "All" && genderName === "All") {
            setStatusName(e.target.name);
            dispatch(getFilter({ status: e.target.name, species: "All", gender: "All", nameCharacter }));
            setPage(1)
            e.target.name === "All" ? setStatusTrue(false) : setStatusTrue(true);
        } else if (speciesName === "All" && genderName !== "All") {
            setStatusName(e.target.name);
            dispatch(getFilter({ status: e.target.name, species: "All", gender: genderName, nameCharacter }));
            setPage(1)
            e.target.name === "All" ? setStatusTrue(false) : setStatusTrue(true);
        } else if (speciesName !== "All" && genderName === "All") {
            setStatusName(e.target.name);
            dispatch(getFilter({ status: e.target.name, species: speciesName, gender: "All", nameCharacter }));
            setPage(1)
            e.target.name === "All" ? setStatusTrue(false) : setStatusTrue(true);
        } else {
            setStatusName(e.target.name);
            dispatch(getFilter({ status: e.target.name, species: speciesName, gender: genderName, nameCharacter }));
            setPage(1)
            e.target.name === "All" ? setStatusTrue(false) : setStatusTrue(true);
        }
    }

    function handleSpecies(e) {
        e.preventDefault();
        if (statusName === "All" && genderName === "All") {
            setSpeciesName(e.target.name);
            dispatch(getFilter({ status: "All", species: e.target.name, gender: "All", nameCharacter }));
            setPage(1)
            e.target.name === "All" ? setSpeciesTrue(false) : setSpeciesTrue(true);
        } else if (statusName === "All" && genderName !== "All") {
            setSpeciesName(e.target.name);
            dispatch(getFilter({ status: "All", species: e.target.name, gender: genderName, nameCharacter }));
            setPage(1)
            e.target.name === "All" ? setSpeciesTrue(false) : setSpeciesTrue(true);
        } else if (statusName !== "All" && genderName === "All") {
            setSpeciesName(e.target.name);
            dispatch(getFilter({ status: statusName, species: e.target.name, gender: "All", nameCharacter }));
            setPage(1)
            e.target.name === "All" ? setSpeciesTrue(false) : setSpeciesTrue(true);
        } else {
            setSpeciesName(e.target.name);
            dispatch(getFilter({ status: statusName, species: e.target.name, gender: genderName, nameCharacter }));
            setPage(1)
            e.target.name === "All" ? setSpeciesTrue(false) : setSpeciesTrue(true);
        }
    }

    function handleGender(e) {
        if (statusName === "All" && speciesName === "All") {
            setGenderName(e.target.name);
            dispatch(getFilter({ status: "All", species: "All", gender: e.target.name, nameCharacter }));
            setPage(1)
            e.target.name === "All" ? setGenderTrue(false) : setGenderTrue(true);
        } else if (statusName === "All" && speciesName !== "All") {
            setGenderName(e.target.name);
            dispatch(getFilter({ status: "All", species: speciesName, gender: e.target.name, nameCharacter }));
            setPage(1)
            e.target.name === "All" ? setGenderTrue(false) : setGenderTrue(true);
        } else if (statusName !== "All" && speciesName === "All") {
            setGenderName(e.target.name);
            dispatch(getFilter({ status: statusName, species: "All", gender: e.target.name, nameCharacter }));
            setPage(1)
            e.target.name === "All" ? setGenderTrue(false) : setGenderTrue(true);
        } else {
            setGenderName(e.target.name);
            dispatch(getFilter({ status: statusName, species: speciesName, gender: e.target.name, nameCharacter }));
            setPage(1)
            e.target.name === "All" ? setGenderTrue(false) : setGenderTrue(true);
        }
    }

    return (
        <div className="filterContainer">
            <div className="filtroStatus">
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant={darkMode === true ? "primary" : "secondary"}>
                        Status Filter
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant={darkMode === true ? "light" : "dark"}>
                        <Dropdown.Item name="All" onClick={(e) => handleState(e)}>All</Dropdown.Item>
                        <Dropdown.Item name="Alive" onClick={(e) => handleState(e)}>Alive</Dropdown.Item>
                        <Dropdown.Item name="Dead" onClick={(e) => handleState(e)} >Dead</Dropdown.Item>
                        <Dropdown.Item name="Unknown" onClick={(e) => handleState(e)}>Unknown</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <div className="filtroSpecies">
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant={darkMode === true ? "primary" : "secondary"}>
                        Species Filter
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant={darkMode === true ? "light" : "dark"}>
                        <Dropdown.Item name="All" onClick={(e) => handleSpecies(e)}>All</Dropdown.Item>
                        <Dropdown.Item name="Human" onClick={(e) => handleSpecies(e)}>Human</Dropdown.Item>
                        <Dropdown.Item name="Alien" onClick={(e) => handleSpecies(e)}>Alien</Dropdown.Item>
                        <Dropdown.Item name="Humanoid" onClick={(e) => handleSpecies(e)}>Humanoid</Dropdown.Item>
                        <Dropdown.Item name="unknown" onClick={(e) => handleSpecies(e)}>unknown</Dropdown.Item>
                        <Dropdown.Item name="Poopybutthole" onClick={(e) => handleSpecies(e)}>Poopybutthole</Dropdown.Item>
                        <Dropdown.Item name="Mythological Creature" onClick={(e) => handleSpecies(e)}>Mythological Creature</Dropdown.Item>
                        <Dropdown.Item name="Animal" onClick={(e) => handleSpecies(e)}>Animal</Dropdown.Item>
                        <Dropdown.Item name="Cronenberg" onClick={(e) => handleSpecies(e)}>Cronenberg</Dropdown.Item>
                        <Dropdown.Item name="Disease" onClick={(e) => handleSpecies(e)}>Disease</Dropdown.Item>
                        <Dropdown.Item name="Robot" onClick={(e) => handleSpecies(e)}>Robot</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <div className="filtroGeneros">
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant={darkMode === true ? "primary" : "secondary"}>
                        Gender Filter
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant={darkMode === true ? "light" : "dark"}>
                    <Dropdown.Item name="All" onClick={(e) => handleGender(e)}>All</Dropdown.Item>
                    <Dropdown.Item name="Female" onClick={(e) => handleGender(e)}>Female</Dropdown.Item>
                    <Dropdown.Item name="Male" onClick={(e) => handleGender(e)}>Male</Dropdown.Item>
                    <Dropdown.Item name="Genderless" onClick={(e) => handleGender(e)} >Genderless</Dropdown.Item>
                    <Dropdown.Item name="Unknown" onClick={(e) => handleGender(e)}>Unknown</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}