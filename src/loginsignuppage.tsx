import React from 'react';
import './App.css';
import './float-label.css';
import gmailLogo from '../src/gmail-icon.svg';
import outlookLogo from '../src/outlook-icon.svg';
import linkedinLogo from '../src/linkedin.svg';
export default function LoginSignuppage({showSigninPage}:{showSigninPage:any}){
   return(
     <div className="container">
      
    <p className="account_text">Have an account?<span className="signuplink" onClick={()=>showSigninPage()}> Sign In</span></p>
    <p className="benefit_text">Start benefiting<span className="signuplink"> free trial</span> from our tools right away</p>
    <form className="ma-left">
      
  <div className="form-group border-lable-flt">
    <input type="text" id="label-firstname"  className="form-control myinput " placeholder="Enter Firstname" required/>
    <label htmlFor="label-firstname">First Name</label>
  </div>  
  <div className="form-group border-lable-flt">
    <input type="text" id="label-lastname"  className="form-control myinput " placeholder="Enter Lastname" required/>
    <label htmlFor="label-lastname">Last Name</label>
  </div>    
  <div className="form-group border-lable-flt">
    <input type="email" id="label-email"  className="form-control myinput " placeholder="example@mail.com" required/>
    <label htmlFor="label-email">Email</label>
  </div>
  <div className="form-group border-lable-flt">
    <input type="number" id="label-phone"  className="form-control myinput "  placeholder="Phone Number" required/>
    <label htmlFor="label-phone">Phone number</label>
  </div>
  <div className="form-group border-lable-flt">
    <input type="password" id="label-password" className="form-control myinput " placeholder="6+ Strong Alpha Numeric Characters" required/>
    <label htmlFor="label-password">Password</label>
  </div>


<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
    By Clicking the create account button below you agree to our <span className="signuplink">terms of service and private statements</span>
  </label>
</div>

<button type="submit" className="btn btn-primary login_button">Create Account</button>
</form>

<div className="ma-left mt-2" style={{ height: '20px', borderBottom: '1px solid grey', textAlign: 'center'}}>
  <span style={{fontSize: 'x-small', backgroundColor:'white' ,color: 'blue', padding: '0 10px'}}>
    Or
  </span>
</div>
<div className="container row ma-left mt-3">
    <div className="col">
        <img className="social_icon" src={outlookLogo}></img>
    </div>
    <div className="col">
        <img className="social_icon" src={linkedinLogo}></img>
    </div>
    <div className="col">
        <img className="social_icon" src={gmailLogo}></img>
    </div>
</div>
</div>

   ) 

   
 
}