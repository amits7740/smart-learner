import React, { useState } from 'react';
import './search.css';
import Table from 'react-bootstrap/Table';
import ProductData from '../../data/product.json';
import Pagination from '../pagination/pagination';

const Search = () => {
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
            console.log("x", data);
            return data.sku.toLowerCase().includes(term.toLowerCase()) || data.price.toLowerCase().includes(term.toLowerCase()) || 
            data.brand.toLowerCase().includes(term.toLowerCase()) || data.description.toLowerCase().includes(term.toLowerCase()) || 
            data.long_description.toLowerCase().includes(term.toLowerCase()) || data.size.toLowerCase().includes(term.toLowerCase()) || 
            data.color.toLowerCase().includes(term.toLowerCase()) || data.in_stock.toLowerCase().includes(term.toLowerCase()) || !term;
        }
    }

    return (
        <div>
            <p>You are searching for {searchValue}</p>
            <input type="text" onChange={(event) => setSearchValue(event.target.value)} />
            <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Sku</th>
                        <th>Brand</th>
                        <th>Description</th>
                        <th>Long Description</th>
                        <th>Price</th>
                        <th>Size</th>
                        <th>Color</th>
                        <th>In Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {currentProducts.filter(searchingFor(searchValue)).map((d, i) => {
                        const pages = Math.ceil((currentPage * productPerPage) + (i+1) - productPerPage);
                        return (
                            <tr key={i}>
                                <td>
                                    {pages}
                                </td>
                                <td>
                                    {d.sku}
                                </td>
                                <td>
                                    {d.brand}
                                </td>
                                <td>
                                    {d.description}
                                </td>
                                <td>
                                    {d.long_description}
                                </td>
                                <td>
                                    {d.price}
                                </td>
                                <td>
                                    {d.size}
                                </td>
                                <td>
                                    {d.color}
                                </td>
                                <td>
                                    {d.in_stock}
                                </td>
                            </tr>
                        )                             
                    })}
                </tbody>
            </Table>
            {searchValue ? '' : <Pagination productPerPage={productPerPage} totalProduct={data.length} paginate={paginate} /> }
        </div>
    )
}

export default Search;