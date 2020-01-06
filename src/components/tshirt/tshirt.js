import React from 'react';
import { Table, Button, Alert } from 'react-bootstrap';



class tshirt extends React.Component {
  render(){
  return (

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
        <a href="/" class="btn_1">Home Page</a>
       
       <p class="pull-left">
						<small >&copy; All Rights Reserved.  </small> 
						<small>Designed by <a href="#" target="_blank"><font color="teal">IBM india</font></a></small>
					</p>
      </header>
    </div>
     
  );
}
}
export default tshirt;



















