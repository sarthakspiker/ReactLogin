import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Loginpage from './loginpage';
import Forgotpasspage from './forgotpasspage';
import LoginSignuppage from './loginsignuppage';
import AccountCreated from './accountcreated';

const mountedStyle = { animation: "inAnimation 300ms ease-in" };
export class App extends Component<{},{showSigninPage:boolean,showSignupPage:boolean,showForgetpassPage:boolean,showSuccessPage:boolean,showBanner:boolean}>{
    
    constructor(props:{}) {
        super(props)
        this.state = {
            showSigninPage:true,
            showSignupPage:false,
            showForgetpassPage:false,
            showSuccessPage:false,
            showBanner:true
        }
    }
    
    showSigninPage = ()=>{
        this.setState({showSignupPage:false,showSigninPage:true,showForgetpassPage:false,showSuccessPage:false,showBanner:true});
    }
    showSignupPage = ()=>{
        this.setState({showSignupPage:true,showSigninPage:false,showForgetpassPage:false,showSuccessPage:false,showBanner:true});
    }
    showForgetPassPage = ()=>{
        this.setState({showSignupPage:false,showSigninPage:false,showForgetpassPage:true,showSuccessPage:false,showBanner:true});
    }
    showSuccessPage = ()=>{
        this.setState({showSignupPage:false,showSigninPage:false,showForgetpassPage:false,showSuccessPage:true,showBanner:false});
    }  
  render(){  
      const {showSigninPage,showSignupPage,showForgetpassPage,showSuccessPage,showBanner} = this.state;
    return (
        <div>
        { showBanner &&
        <div className="container-fluid mycontainer" >
       <div className="row containerrow">
            <div className="col formdiv">
              { showSigninPage && <div style={mountedStyle}><Loginpage showSignupPage={this.showSignupPage} showForgetPassPage={this.showForgetPassPage} /></div>}
              { showSignupPage && <div style={mountedStyle}><LoginSignuppage showSigninPage={this.showSigninPage} showSuccessPage={this.showSuccessPage}/></div>}
              { showForgetpassPage && <div style={mountedStyle}><Forgotpasspage showSignupPage={this.showSignupPage} showSigninPage={this.showSigninPage}/></div>}
            </div>
            <div className="col imagediv" id="splitImage"/>

        </div>
        {/* { showSuccessPage && <div style={mountedStyle}><AccountCreated showSigninPage={this.showSigninPage}/></div>} */}
    </div>}
    
    { showSuccessPage && <div style={mountedStyle}><AccountCreated showSigninPage={this.showSigninPage}/></div>}
    </div>
  );
}
}
export default App;