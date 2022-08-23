import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { getFilter } from "../../Actions/index"
import { useDispatch, useSelector } from "react-redux";
import "./Filters-module.css"

export default function Filters({page, setPage, nameCharacter, setNameCharacter, statusTrue, setStatusTrue, statusName, setStatusName, speciesTrue, setSpeciesTrue, speciesName, setSpeciesName}) {

    const dispatch = useDispatch()
    const allSpecies = useSelector(state => state.species)

    function handleState(e) {
        e.preventDefault();
        setStatusName(e.target.name)
        setStatusTrue(true);
        dispatch(getFilter({ status: e.target.name, species: "All", nameCharacter }))

        // dispatch(getFilter({ status: e.target.name, species: speciesName, nameCharacter }))

    }

    function handleSpecies(e) {
        e.preventDefault();
        setSpeciesName(e.target.name)
        setSpeciesTrue(true);
        dispatch(getFilter({ status: "All", species: e.target.name, nameCharacter }))

        // dispatch(getFilter({ status: statusName, species: e.target.name, nameCharacter }))

    }

    return (
        <div className="filterContainer">
            <div className="filtroStatus">
                <DropdownButton id="dropdown-basic-button" title="Status Character">
                    <Dropdown.Item name="All" onClick={(e) => handleState(e)}>All</Dropdown.Item>
                    <Dropdown.Item name="Alive" onClick={(e) => handleState(e)}>Alive</Dropdown.Item>
                    <Dropdown.Item name="Dead" onClick={(e) => handleState(e)} >Dead</Dropdown.Item>
                    <Dropdown.Item name="Unknown" onClick={(e) => handleState(e)}>Unknown</Dropdown.Item>
                </DropdownButton>
            </div>
            <div className="filtroSpecies">
                <DropdownButton id="dropdown-basic-button" title="Species Character">
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
        </div>
    )
}