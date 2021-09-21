import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';

import Loginpage from '../src/loginpage';
import Forgotpasspage from './forgotpasspage';
import LoginSignuppage from './loginsignuppage';
import Registrationpage from './registrationpage';

function App() {
  return (

    <body >
    <div className="container-fluid mycontainer" >
       <div className="row containerrow">
            <div className="col formdiv">
              <Forgotpasspage></Forgotpasspage>
              {/* <Loginpage></Loginpage> */}
              {/* <LoginSignuppage></LoginSignuppage> */}
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
