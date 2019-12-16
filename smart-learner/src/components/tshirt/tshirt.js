import React, { useState } from 'react';
import { Link } from "react-router";
import './tshirt.css';
import Table from 'react-bootstrap/Table';
import ProductData from '../../data/product.json';
import Pagination from '../pagination/pagination';

const Tshirt = () => {
    const data = ProductData.items;
    const [currentPage, setCurrentPage] = useState(1);
    const [productPerPage] = useState(15);
    const [searchValue, setSearchValue] = useState('');

    //Get current product
    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    function searchingFor(term) {
        return function(data) {
            return data.sku.toLowerCase().includes(term.toLowerCase()) || data.price.toLowerCase().includes(term.toLowerCase()) || 
            data.brand.toLowerCase().includes(term.toLowerCase()) || data.description.toLowerCase().includes(term.toLowerCase()) || 
            data.long_description.toLowerCase().includes(term.toLowerCase()) || data.size.toLowerCase().includes(term.toLowerCase()) || 
            data.color.toLowerCase().includes(term.toLowerCase()) || data.in_stock.toLowerCase().includes(term.toLowerCase()) || !term;
        }
    }

    return (
        <div className="productContainer">
             <p class="te">  <Link to={"/"}>Go Back</Link></p>
            <h1 class="tt">Product Page Of <b>Smart Learner kool App</b></h1>
            <p>You are searching for {searchValue}</p>
            <input type="text" placeholder="Search your Item here"className="input" onChange={(event) => setSearchValue(event.target.value)} />
            <Table>
            <div class="warning-msg">
  <i class="fa fa-warning"></i>
  <b>Page is in Construction.</b>
</div>
            </Table>
            {searchValue ? '' : <Pagination productPerPage={productPerPage} totalProduct={data.length} paginate={paginate} /> }
         
        </div>
    )
}

export default Tshirt;