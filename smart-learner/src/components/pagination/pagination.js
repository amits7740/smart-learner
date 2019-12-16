import React from 'react';
import './pagination.css';

const Pagination = ({ productPerPage, totalProduct, paginate }) => {
    const pageNumbers = [];

    for(let i=1; i<= Math.ceil(totalProduct / productPerPage); i++) {
        pageNumbers.push(i);
       
    }
    
    return (
        <div>
            <ul className="pagination">
                {pageNumbers.map((number, i) => (
                    <li key={i} onClick={() => paginate(number)} className={ number[i] === number ? "active" : "page-item"}>
                        {number}
                    </li>
                ))}
            </ul>
        </div>
    )
    
} 

export default Pagination;