import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { getFilter } from "../../Actions/index"
import { useDispatch, useSelector } from "react-redux";
import "./Filters-module.css"

export default function Filters({ page, setPage, nameCharacter, setNameCharacter, statusTrue, setStatusTrue, statusName, setStatusName, speciesTrue, setSpeciesTrue, speciesName, setSpeciesName, genderTrue, setGenderTrue, genderName, setGenderName }) {

    const dispatch = useDispatch()
    const allSpecies = useSelector(state => state.species)

    console.log("estado STATUS:", statusName)
    console.log("estado SPECIE:",speciesName)
    console.log("estado GENDER:",genderName)
    console.log("estado NAME:",nameCharacter)

    console.log("STATUS:", statusTrue)
    console.log("SPECIE:",speciesTrue)
    console.log("GENDER:",genderTrue)
    console.log("NAME:",nameCharacter)

    function handleState(e) {
        e.preventDefault();
        if (statusName === "All") {
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
        } else {
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
    }

    function handleSpecies(e) {
        e.preventDefault();
        if (speciesName === "All") {
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
        } else {
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
    }

    function handleGender(e) {
        if (genderName === "All") {
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
        } else {
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
    }

    return (
        <div className="filterContainer">
            <div className="filtroStatus">
                <DropdownButton id="dropdown-basic-button" title="Status Filter">
                    <Dropdown.Item name="All" onClick={(e) => handleState(e)}>All</Dropdown.Item>
                    <Dropdown.Item name="Alive" onClick={(e) => handleState(e)}>Alive</Dropdown.Item>
                    <Dropdown.Item name="Dead" onClick={(e) => handleState(e)} >Dead</Dropdown.Item>
                    <Dropdown.Item name="Unknown" onClick={(e) => handleState(e)}>Unknown</Dropdown.Item>
                </DropdownButton>
            </div>
            <div className="filtroSpecies">
                <DropdownButton id="dropdown-basic-button" title="Species Filter">
                    <Dropdown.Item name="All" onClick={(e) => handleSpecies(e)}>All</Dropdown.Item>
                    {
                        allSpecies.length > 0 ? allSpecies.map(j => {
                            return (
                                <Dropdown.Item key={j} name={j} onClick={(e) => handleSpecies(e)}>{j}</Dropdown.Item>
                            )
                        }) : null
                    }
                </DropdownButton>
            </div>
            <div className="filtroGeneros">
                <div className="filtroStatus">
                    <DropdownButton id="dropdown-basic-button" title="Gender Filter">
                        <Dropdown.Item name="All" onClick={(e) => handleGender(e)}>All</Dropdown.Item>
                        <Dropdown.Item name="Female" onClick={(e) => handleGender(e)}>Female</Dropdown.Item>
                        <Dropdown.Item name="Male" onClick={(e) => handleGender(e)}>Male</Dropdown.Item>
                        <Dropdown.Item name="Genderless" onClick={(e) => handleGender(e)} >Genderless</Dropdown.Item>
                        <Dropdown.Item name="Unknown" onClick={(e) => handleGender(e)}>Unknown</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
        </div>
    )
}