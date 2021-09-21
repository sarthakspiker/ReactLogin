import React, {Component} from 'react';
import { isPropertySignature } from 'typescript';
import './App.css';
import './float-label.css';

export class Registrationpage extends Component{

  constructor(props:any) {
    super(props)

    this.state = {

    }
}
 signUp(){
  console.log("test");
}
  render(){ return(
     <div className="container">
      
    <p className="account_text">Don't have an account?<span className="signuplink" onClick={this.signUp}> Sign up</span></p>
    
    <form className="login_form">
       <h2> Welcome To<span className="signuplink"> Red Mind</span></h2>
       <div className="inner_form_div">
      
  <div className="form-group border-lable-flt">
    <input type="email" id="label-em"  className="form-control myinput form-control-lg" placeholder="Enter Email" required/>
    <label htmlFor="label-email">Email</label>
  </div>
  <div className="form-group border-lable-flt">
    <input type="password" id="label-pass" className="form-control myinput form-control-lg" placeholder="Password" required/>
    <label htmlFor="label-password">Password</label>
  </div>

</div>
<div className="forgot_div">
<a className="forgot_pass" href="#">Forgot password?</a>
</div>
<button type="submit" className="btn btn-primary login_button">Log In</button>
</form>
</div>

   ) 
}
}
export default Registrationpage;