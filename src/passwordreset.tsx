import React, {Component} from 'react';
import './App.css';
import './float-label.css';
import New from '../src/previewemail.gif';
import Tick from '../src/greentick2.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export default class PasswordReset extends Component <{showSigninPage:any},{}> {

 
render(){
    return(
     <div className="container-fluid mycontainer" style={{paddingTop:'10%'}}>
     <div className="row containerrow">
  <div className="col">
  <img className="card-top" src={New} alt="Card image cap"/>
  </div>
  <div className="col" style={{paddingTop:'10%'}}>
    <h2><img className="greentick" src={Tick} alt="Card image cap" style={{display:'inline'}} />Congratutations!</h2>
    <p className="card-text center-center">Please check you mailbox to find the password reset URL and the steps.</p>
    <button type="submit" className="btn btn-primary login_button" onClick={()=>this.props.showSigninPage()} >Log In</button>
  </div>
</div>

    
   
</div>

   ) 
}
}