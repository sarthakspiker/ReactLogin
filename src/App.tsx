import React, {Component} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Loginpage from './loginpage';
import Forgotpasspage from './forgotpasspage';
import LoginSignuppage from './loginsignuppage';
import Registrationpage from './registrationpage';

const mountedStyle = { animation: "inAnimation 300ms ease-in" };
export class App extends Component<{},{hideReg:boolean}>{
    
    constructor(props:{}) {
        super(props)

        this.state = {
            hideReg : true
        }
    }
    
    Register = ()=>{
        console.log("I will Register");
        this.setState({hideReg:false});
    }
  
  render(){  
      const {hideReg} = this.state;
    return (

    <div className="container-fluid mycontainer" >
       <div className="row containerrow">
            <div className="col formdiv">
              { hideReg && <div style={mountedStyle}><Loginpage Register={this.Register}/></div>}
              { !hideReg && <div style={mountedStyle}><Registrationpage/></div>}
            </div>
            <div className="col imagediv">
             
        </div>
        </div>
    </div>   
  );
}
}
export default App;