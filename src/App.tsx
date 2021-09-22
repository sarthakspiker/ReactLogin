import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Loginpage from './loginpage';
import Forgotpasspage from './forgotpasspage';
import LoginSignuppage from './loginsignuppage';
import AccountCreated from './accountcreated';

const mountedStyle = { animation: "inAnimation 300ms ease-in" };
export class App extends Component<{},{showSigninPage:boolean,showSignupPage:boolean,showForgetpassPage:boolean}>{
    
    constructor(props:{}) {
        super(props)
        this.state = {
            showSigninPage:true,
            showSignupPage:false,
            showForgetpassPage:false
        }
    }
    
    showSigninPage = ()=>{
        this.setState({showSignupPage:false,showSigninPage:true,showForgetpassPage:false});
    }
    showSignupPage = ()=>{
        this.setState({showSignupPage:true,showSigninPage:false,showForgetpassPage:false});
    }
    showForgetPassPage = ()=>{
        this.setState({showSignupPage:false,showSigninPage:false,showForgetpassPage:true});
    }
  
  render(){  
      const {showSigninPage,showSignupPage,showForgetpassPage} = this.state;
    return (

    <div className="container-fluid mycontainer" >
        {/* <AccountCreated></AccountCreated> */}
       <div className="row containerrow">
            <div className="col formdiv">
              { showSigninPage && <div style={mountedStyle}><Loginpage showSignupPage={this.showSignupPage} showForgetPassPage={this.showForgetPassPage} /></div>}
              { showSignupPage && <div style={mountedStyle}><LoginSignuppage showSigninPage={this.showSigninPage}/></div>}
              { showForgetpassPage && <div style={mountedStyle}><Forgotpasspage showSignupPage={this.showSignupPage} showSigninPage={this.showSigninPage}/></div>}
            
            </div>
            <div className="col imagediv" id="splitImage">
             
        </div>
        </div>
    </div>   
  );
}
}
export default App;