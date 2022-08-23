import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { getStatus, getSpecies } from "../../Actions/index"
import { useDispatch, useSelector } from "react-redux";
import "./Filters-module.css"

export default function Filters({ nameCharacter, setStatusTrue, statusName, setStatusName }) {

    const dispatch = useDispatch()
    const allSpecies = useSelector(state => state.species)
    const allCharacters = useSelector(state => state.characters)

    function handleState(e) {
        e.preventDefault();
        setStatusTrue(true);
        setStatusName(e.target.name)
        dispatch(getStatus({ status: e.target.name, nameCharacter }))
    }
    

    async function handleSpecies(e){
        e.preventDefault();
        dispatch(getSpecies({
            status: statusName,
            nameCharacter,
            species: e.target.name
        }))
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
                    {
                        allSpecies.length > 0 ? allSpecies.map(j => {
                            return(
                                <Dropdown.Item key={j} name={j} onClick={(e) => handleSpecies(e)}>{j}</Dropdown.Item>
                            )
                        }) : null
                        }
                </DropdownButton>

            </div>
        </div>
    )
}