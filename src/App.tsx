import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';

import Loginpage from '../src/loginpage';

function App() {
  return (

    <body >
    <div className="container-fluid mycontainer" >
       <div className="row containerrow">
            <div className="col formdiv">
              <Loginpage></Loginpage>
            </div>
            <div className="col imagediv">
             
        </div>
        </div>
    </div>   
    </body> 
  );
}

export default App;
