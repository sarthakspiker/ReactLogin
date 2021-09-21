import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';

import Loginpage from '../src/loginpage';
import Registrationpage from './registrationpage';

function App() {
  return (

    <body >
    <div className="container-fluid mycontainer" >
       <div className="row">
            <div className="col formdiv">
              <div style={{display:''}}>  
              <Loginpage></Loginpage>
              </div>
              <div style={{display:'none'}}>
              <Registrationpage></Registrationpage>
              </div>
            </div>
            <div className="col imagediv">
             
        </div>
        </div>
    </div>   
    </body> 
  );
}

export default App;
