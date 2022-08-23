import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { getStatus } from "../../Actions/index"
import { useDispatch } from "react-redux";

export default function Filters({nameCharacter}) {

    const dispatch= useDispatch()

    function handleState(e){
        e.preventDefault();
        dispatch(getStatus({status: e.target.name, nameCharacter}))
    }

    return (
        <div>
            <DropdownButton  id="dropdown-basic-button" title="Status Character">
                <Dropdown.Item name="All" onClick={(e)=> handleState(e)}>All</Dropdown.Item>
                <Dropdown.Item name="Alive" onClick={(e)=> handleState(e)}>Alive</Dropdown.Item>
                <Dropdown.Item name="Dead" onClick={(e)=> handleState(e)} >Dead</Dropdown.Item>
                <Dropdown.Item name="Unknown" onClick={(e)=> handleState(e)}>Unknown</Dropdown.Item>
            </DropdownButton>

        </div>
    )
}