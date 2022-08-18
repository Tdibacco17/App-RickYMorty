import React, { useEffect }from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharacters } from "../../Actions/index";

export default function Home() {

    const dispatch = useDispatch()

    const getAlllChar = useSelector(state => state.characters)
    console.log(getAlllChar)

    useEffect(() => {
        dispatch(getAllCharacters())
    }, [dispatch])


    return (
        <div>
            {
                getAlllChar.length > 0 ? getAlllChar.map(e => e.map(j => {
                    return (
                        <div>
                            <h4>Nombre: {j.name}</h4>
                        </div>
                    )
                })) : "Loading..."
            }
        </div>
    )
}