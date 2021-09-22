import React, {Component} from 'react';
import './App.css';
import './float-label.css';
import New from '../src/previewemail.gif';
import Tick from '../src/greentick2.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export default class AccountCreated extends Component <{showSigninPage:any},{}> {

 
render(){
    return(
     <div className="container-fluid mycontainer" style={{paddingTop:'10%'}}>
     <div className="row containerrow">
  <div className="col">
  <img className="card-top" src={New} alt="Card image cap"/>
  </div>
  <div className="col" style={{paddingTop:'10%'}}>
    <h2><img className="greentick" src={Tick} alt="Card image cap" style={{display:'inline'}} />Congratulations !!</h2>
    <h4>Your account has been successfully created.</h4>
    <p className="card-text center-center account_text">An email has been sent to your registered email ID. Please confirm your email to login.</p>
    <button type="submit" className="btn btn-primary login_button" onClick={()=>this.props.showSigninPage()} >Log In</button>
  </div>
</div>

    
   
</div>

   ) 
}
}