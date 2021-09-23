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
      <div className="container-fluid text-center " style={{ width:'50%', margin:'2% auto'}} >
  
    

      <img className="card-top" src={New} alt="Card image cap"/>


  <h2 ><img className="greentick" src={Tick} alt="Card image cap" style={{display:'inline'}} /> Recovery email sent !</h2>
  <h5>Retrieve your account in just 1 step.</h5>
  <p className="card-text center-center account_text">Please check your mailbox to find the password reset URL and the steps.</p>
  <p className="account_text">Didn't recieve the mail? Check your spam folder or<span className="signuplink" > Send again</span></p>
  <button type="submit" className="btn btn-primary login_button" style={{width:'50%'}} onClick={()=>this.props.showSigninPage()} >Back to Home <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg></button>





  
 
</div>
 

   ) 
}
}