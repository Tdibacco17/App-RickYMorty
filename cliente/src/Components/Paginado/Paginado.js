import React, {useContext} from 'react';
import Button from 'react-bootstrap/Button';
import "./Paginado-module.css"

import DarkMOdeContext from '../../Context/context';

export default function Paginado({ page, pageSize, setPage, totalCount, setInput, input }) {

    const {darkMode} = useContext(DarkMOdeContext)
    
    const totalPages = Math.ceil(totalCount / pageSize);
    
    const prevPage = () => {
        setInput(input - 1)
        setPage(page - 1)
    }

    const nextPage = () => {
        setInput(input + 1)
        setPage(page + 1)
    }

    const firstPage = () => {
        setInput(1);
        setPage(1);
    }

    const lastPage = () => {
        setInput(totalPages);
        setPage(totalPages);
    }

    return (
        <div className='Paginado'>
            <Button variant={darkMode === true ? "outline-primary" : "outline-secondary"} disabled={page === 1 || page < 1} onClick={firstPage}>First</Button>
            <Button variant={darkMode === true ? "outline-primary" : "outline-secondary"} disabled={page === 1 || page < 1} onClick={prevPage}>Prev</Button>
            <h6> {page} / {totalPages}</h6>
            <Button variant={darkMode === true ? "outline-primary" : "outline-secondary"} disabled={page === totalPages || page > totalPages} onClick={nextPage}>Next</Button>
            <Button variant={darkMode === true ? "outline-primary" : "outline-secondary"} disabled={page === totalPages || page > totalPages} onClick={lastPage}>Last</Button>
        </div>
    )
}
