import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { getFilter } from "../../Actions/index"
import { useDispatch, useSelector } from "react-redux";
import "./Filters-module.css"

export default function Filters({ page, setPage, nameCharacter, setNameCharacter, statusTrue, setStatusTrue, statusName, setStatusName, speciesTrue, setSpeciesTrue, speciesName, setSpeciesName }) {

    const dispatch = useDispatch()
    const allSpecies = useSelector(state => state.species)

    function handleState(e) {
        e.preventDefault();
        if (statusName === "All") {
            if (speciesName === "All") {
                setStatusName(e.target.name);
                dispatch(getFilter({ status: e.target.name, species: "All", nameCharacter }));
                setPage(1)
                e.target.name === "All" ? setStatusTrue(false) : setStatusTrue(true);
            } else {
                setStatusName(e.target.name);
                dispatch(getFilter({ status: e.target.name, species: speciesName, nameCharacter }));
                setPage(1)
                e.target.name === "All" ? setStatusTrue(false) : setStatusTrue(true);
            }
        } else {
            if (speciesName === "All") {
                setStatusName(e.target.name);
                dispatch(getFilter({ status: e.target.name, species: "All", nameCharacter }));
                setPage(1)
                e.target.name === "All" ? setStatusTrue(false) : setStatusTrue(true);
            } else {
                setStatusName(e.target.name);
                dispatch(getFilter({ status: e.target.name, species: speciesName, nameCharacter }));
                setPage(1)
                e.target.name === "All" ? setStatusTrue(false) : setStatusTrue(true);
            }
        }
    }

    function handleSpecies(e) {
        e.preventDefault();
        if (speciesName === "All") {
            if (statusName === "All") {
                setSpeciesName(e.target.name);
                dispatch(getFilter({ status: "All", species: e.target.name, nameCharacter }));
                setPage(1)
                e.target.name === "All" ? setSpeciesTrue(false) : setSpeciesTrue(true);
            } else {
                setSpeciesName(e.target.name);
                dispatch(getFilter({ status: statusName, species: e.target.name, nameCharacter }));
                setPage(1)
                e.target.name === "All" ? setSpeciesTrue(false) : setSpeciesTrue(true);
            }
        } else {
            if (statusName === "All") {
                setSpeciesName(e.target.name);
                dispatch(getFilter({ status: "All", species: e.target.name, nameCharacter }));
                setPage(1)
                e.target.name === "All" ? setSpeciesTrue(false) : setSpeciesTrue(true);
            } else {
                setSpeciesName(e.target.name);
                dispatch(getFilter({ status: statusName, species: e.target.name, nameCharacter }));
                setPage(1)
                e.target.name === "All" ? setSpeciesTrue(false) : setSpeciesTrue(true);
            }
        }
    }

    function handleGender(e) {
        e.preventDefault();
        setPage(1);

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
                        <Dropdown.Item name="Genderless" onClick={(e) => handleGender(e)} >Dead</Dropdown.Item>
                        <Dropdown.Item name="Unknown" onClick={(e) => handleGender(e)}>Unknown</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
        </div>
    )
}