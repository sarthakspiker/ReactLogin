import React, {Component} from 'react';
import './App.css';
import './float-label.css';
import New from '../src/previewemail.gif';
import Emailgif from '../src/preview.gif'
import Tick from '../src/greentick2.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export default class AccountCreated extends Component <{showSigninPage:any},{}> {

 
render(){
    return(
     <div className="container-fluid text-center " style={{ width:'50%', margin:'2% auto'}} >
  
    

        <img className="card-top" src={Emailgif} alt="Card image cap"/>

 
    <h2 ><img className="greentick" src={Tick} alt="Card image cap" style={{display:'inline'}} /> Congratulations !!</h2>
    <h5>Your account has been successfully created.</h5>
    <p className="card-text center-center account_text">An email has been sent to your registered email ID. Please check your inbox and confirm your email to login.</p>
    <p className="account_text">Didn't recieve the mail? Check your spam folder or<span className="signuplink" > Send again</span></p>
    <button type="submit" className="btn btn-primary login_button" style={{width:'50%'}} onClick={()=>this.props.showSigninPage()} >Log In <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg></button>


  


    
   
</div>

   ) 
}
}