import React from 'react';
import './App.css';
function Registrationpage(){
   return(
     <div className="container">
      
    <p className="account_text">Don't have an account?<span className="signuplink"> Sign up</span></p>
    
    <form className="login_form">
       <h2> Welcome To<span className="signuplink"> Blue Mind</span></h2>
       <div className="inner_form_div">
    <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label htmlFor="floatingInput">Email address</label>
</div>
<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
  <label htmlFor="floatingPassword">Password</label>
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
export default Registrationpage;