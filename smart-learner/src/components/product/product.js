import React, { useState } from 'react';
import { Link } from "react-router";
import './product.css';
import Table from 'react-bootstrap/Table';
import ProductData from '../../data/product.json';
import Pagination from '../pagination/pagination';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const Product = () => {
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


       

        <div className="productContainer1">
             <div class="topnav">
        <a class="active" href="/"><font color="black">Home</font></a>
        <a href="#about"><font color="black">About</font></a>
        <a href="/"><font color="black">Contact</font></a>
        
        <div class="search-container">
        <input type="text"  size="70" placeholder="Search your Item here"className="input" onChange={(event) => setSearchValue(event.target.value)} />
            <img onclick="startDictation()" src="mic.png" />
        </div>
        </div>
          
           <center><h1 class="tt"><b>Product Page Of Smart Learner kool App</b></h1></center>
           <center><p>You are searching for <b>{searchValue}</b></p></center>
            <form id="labnol" method="get" action="transcript">
            
            </form>
           
           
                <tbody class="grid-container" >
                
                    
                    {
                    currentProducts.length > 0 ? currentProducts.filter(searchingFor(searchValue)).map((d, i) => {
                        const pages = Math.ceil((currentPage * productPerPage) + (i+1) - productPerPage);
                     
                        return (  

                                                   
                      
                            <td key={i} class="grid-item">                          
      
                           
        <div class="flip-card1">
            <div class="flip-card-inner1">
                 <div class="flip-card-front1">

                          <b class ="size"> {d.description}</b><br/><b>Size:</b> {d.size}<br/><b>Colour:</b> {d.color}<br/><b>Price:</b> {d.price}$<br/><font color="red"><b>{d.discount} % off</b></font>
   
                 </div>
                 <div class="flip-card-back1">
                  
                      <b>Description:</b>  {d.long_description}<br/><b>In Stock : </b>{d.in_stock} <br/><b>Brand:</b> {d.brand}

                 </div>
             </div>
         </div>
        
   
   
     </td>                         
                        )                             
                       }) : 
                    
                    <div>
                        <p>No Records Found...</p>
                    </div>
                  }
                  
                
                </tbody>
           
          
          {searchValue ? '' : <Pagination productPerPage={productPerPage} totalProduct={data.length} paginate={paginate} /> }
          <small>Designed by <a href="#" target="_blank"><font color="teal">IBM india</font></a></small>
        </div>
            
        
    )

}

export default Product;