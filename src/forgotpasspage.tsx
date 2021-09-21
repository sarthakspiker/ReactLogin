import React from 'react';
import './App.css';
import './float-label.css';
function Forgotpasspage(){
   return(
     <div className="container">
      
    <p className="account_text">Don't have an account?<span className="signuplink"> Sign up</span></p>
    
    <form className="login_form">
       <h2> Welcome To<span className="signuplink"> Blue Mind</span></h2>
       <p className="forgot_text" >Forgot your password ?<span className="black_text" > No worries we can help</span></p>
       <div className="inner_form_div">
      
  <div className="form-group border-lable-flt">
    <input type="email" id="label-email"  className="form-control myinput form-control-lg" placeholder="Enter Email" required/>
    <label htmlFor="label-email">Email</label>
  </div>
  

</div>
<button type="submit" className="btn btn-primary login_button">Reset</button>
<button type="submit" className="btn btn-primary login_button">Log In</button>
</form>
</div>

   ) 
}
export default Forgotpasspage;