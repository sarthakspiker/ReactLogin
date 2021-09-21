import React from 'react';
import './App.css';
import './float-label.css';
function Loginpage(){
   return(
     <div className="container">
      
    <p className="account_text">Don't have an account?<span className="signuplink"> Sign up</span></p>
    
    <form className="login_form">
       <h2> Welcome To<span className="signuplink"> Blue Mind</span></h2>
       <div className="inner_form_div">
      
  <div className="form-group border-lable-flt">
    <input type="email" id="label-email"  className="form-control myinput form-control-lg" placeholder="Enter Email" required/>
    <label htmlFor="label-email">Email</label>
  </div>
  <div className="form-group border-lable-flt">
    <input type="password" id="label-password" className="form-control myinput form-control-lg" placeholder="Password" required/>
    <label htmlFor="label-password">Password</label>
  </div>

</div>
<div className="forgot_div">
<a className="forgot_pass">Forgot password?</a>
</div>
<button type="submit" className="btn btn-primary login_button">Log In</button>
</form>
</div>

   ) 
}
export default Loginpage;