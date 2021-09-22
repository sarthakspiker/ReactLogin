import React, {Component} from 'react';
import './App.css';
import './float-label.css';

export default class Loginpage extends Component <{showSignupPage:any,showForgetPassPage:any},{userEmail:string,userPass:string}>{

  constructor(props:any) {
    super(props)
    this.state = {
      userEmail:'',
      userPass:''
    }
}
onHandleEmailChange = (e:any) => {
  let Email:string = e.target.value;
if (Email !== '') {
  this.setState({ userEmail : Email })
}
};
onHandlePasswordChange = (e:any) => {
  let pass:string = e.target.value;
  let regexp = /^[0-9a-zA-Z\b]+$/;
// if value is not blank, then test the regex
if (pass === '' || regexp.test(pass)) {
  this.setState({ userPass: pass })
}
};
loginAdvisor = () =>{
console.log("Login Advisor:" + this.state.userEmail +" with Pass:" + this.state.userPass);
}
loginClient = () =>{
  console.log("Login Client:" + this.state.userEmail +" with Pass:" + this.state.userPass);
}
render(){return(
     <div className="container">
      
    <p className="account_text">Don't have an account?<span className="signuplink" onClick={()=>this.props.showSignupPage()}> Sign up</span></p>
    
    <form className="login_form">
       <h2> Welcome To<span className="signuplink"> BlueMind</span></h2>
       <div className="inner_form_div">
      
  <div className="form-group border-lable-flt">
    <input type="email" id="label-email"  className="form-control myinput form-control-lg" placeholder="Enter Email" value={this.state.userEmail} onChange={this.onHandleEmailChange} required/>
    <label htmlFor="label-email">Email</label>
  </div>
  <div className="form-group border-lable-flt">
    <input type="password" id="label-password" className="form-control myinput form-control-lg" placeholder="Password" value={this.state.userPass} onChange={this.onHandlePasswordChange} required/>
    <label htmlFor="label-password">Password</label>
  </div>

</div>
<div className="forgot_div">
<span className="forgot_pass" onClick={()=>this.props.showForgetPassPage()} >Forgot password?</span>
</div>
<button type="submit" className="btn btn-primary login_button" onClick={()=>this.loginAdvisor()}>Advisor Log In</button>
<button type="submit" className="btn btn-primary login_button" onClick={()=>this.loginClient()}>Client Log In</button>
</form>
</div>

   ) 
}
}