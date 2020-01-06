import React from 'react';
import logo from '../../../src/images/logo.svg';
import './home.css';
import { Link } from "react-router";
import Flippy, { FrontSide, BackSide } from 'react-flippy';

class Home extends React.Component {
  render(){
  return (
<div>

        <div class="container-fluid">
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-11">
                    <nav class="navbar navbar-expand-lg navbar-light">
                      <a href="/" class="btn_1">Home</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="menu_icon"><i class="fas fa-bars"></i></span>
                        </button>

                        <div class="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                  ---------
                                <a href="/tshirt" class="btn_1">Contact</a>
                                </li>
                                
                              
                            </ul>
                        </div>
                     
                               
                              
                           
                    </nav>
                </div>
            </div>
        </div>
        
  

  
   
    <section class="banner_part" >
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-7">
                <div class="banner_slider">
                    <div class="single_banner_slider">
                        <div class="banner_text">
                            <div class="banner_text_iner">
                                <h5>Kool Web Store</h5>
                                <h1>Fashion Collection 2020</h1>
                                <a href="/product" class="btn_1">product Page</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<footer class="footer_part">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-sm-6 col-lg-2">
                    <div class="single_footer_part">
                        <h4>Category</h4>
                        <ul class="list-unstyled">
                            <li><a href="#">Male</a></li>
                            <li><a href="#">Female</a></li>
                            <li><a href="#">Shoes</a></li>
                            <li><a href="#">Fashion</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-2">
                    <div class="single_footer_part">
                        <h4>Company</h4>
                        <ul class="list-unstyled">
                            <li><a href="/tshirt">About</a></li>
                            <li><a href="">News</a></li>
                            <li><a href="">FAQ</a></li>
                            <li><a href="/tshirt">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="single_footer_part">
                        <h4>Address</h4>
                        <ul class="list-unstyled">
                            <li><a href="#">DLF 2, IBM, kolkata</a></li>
                            <li><a href="#">+91 7070763939</a></li>
                            <li><font color="white">amits121@in.ibm.com</font></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="single_footer_part">
                        <h4>Newsletter</h4>
                        <div id="mc_embed_signup">
                         
                        </div>
                        <div class="social_icon">
                            <a href="#"><i class="ti-facebook"></i></a>
                            <a href="#"><i class="ti-twitter-alt"></i></a>
                            <a href="#"><i class="ti-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <div class="copyright_text">
                        
Copyright &copy; All rights reserved | IBM INDIA <i class="ti-heart" aria-hidden="true"></i> by <a href="#" target="_blank">Smart-Learner</a>

                    </div>
                </div>
            </div>
        </div>
    </footer>



















</div>
























/*
   
    <div className="App">
      <header className="App-header">
      <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img class="p12"src="logo.jpg" />
    </div>
    <div class="flip-card-back">
      <h1>Anamika</h1> 
      <p>anamika_chatterjee@in.ibm.com</p> 
      <p>Coach</p>
    </div>
  </div>
</div>

      <p className="paragraph">
         Smart Learner
        </p>

        <p1><b><font color="red">kool web Store</font></b></p1>
        <p><a rel="Anamika Chatterjee" href="https://w3.ibm.com/bluepages/profile.html?uid=121822744" target="_blank"><font color="Black">Anamika Chatterjee(anamika_chatterjee@in.ibm.com) Team Coach</font></a></p>

        <p><a rel="Sayantan Roy" href="https://w3.ibm.com/bluepages/profile.html?uid=00902V744" target="_blank"><font color="Black">Sayantan Roy(sayroy1@in.ibm.com) Team Captain</font></a></p>
        <div className="teammembers">
          <table id="customers">
            <tbody>
                <tr>
                    <td><a rel="Amit Singh" href="https://w3.ibm.com/bluepages/profile.html?uid=000GRQ744" target="_blank">Amit Singh(amits121@in.ibm.com)</a></td>
                    <td><a rel="Hara Jena" href="https://w3.ibm.com/bluepages/profile.html?uid=09574J744" target="_blank">Hara Jena(harajena@in.ibm.com)</a></td>
                </tr>
                <tr>
                    <td><a rel="Siri chandana" href="https://w3.ibm.com/bluepages/profile.html?uid=0004O8744" target="_blank">Siri Chandana(snandan1@in.ibm.com)</a></td>
                    <td><a rel="Abhipsa" href="https://w3.ibm.com/bluepages/profile.html?uid=0644F8744" target="_blank">Abhipsa(abhipc94@in.ibm.com)</a></td>
                </tr>
            </tbody>
          </table>
        </div>
        <p><b><font color="black">Want to see the Product page? </font></b> <Link to={"/product"}><font color="red">Click Here</font></Link></p>
        <p><b><font color="black">Want to see the tshirt page? </font></b> <Link to={"/tshirt"}><font color="red">tshirt</font></Link></p>
        <p class="pull-left">
						<small >&copy; All Rights Reserved.  </small> 
						<small>Designed by <a href="#" target="_blank"><font color="teal">IBM india</font></a></small>
					</p>
      </header>
    </div>

*/


      
    );
  }
  }
  export default Home;
