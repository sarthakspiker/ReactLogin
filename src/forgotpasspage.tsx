import React, { Component } from 'react';
import './App.css';
import './float-label.css';
export default class Forgotpasspage extends Component<{showSignupPage:any,showSigninPage:any,showPasswordResetPage:any},{userEmail:string}>{
  constructor(props:any) {
    super(props)
    this.state = {
      userEmail:''
    }
  }
  onHandleEmailChange = (e:any) => {
    let Email:string = e.target.value;
  if (Email !== '') {
    this.setState({ userEmail : Email })
  }
  };
  resetPassword = () =>{
    console.log("Reset Password for:" + this.state.userEmail);
    this.props.showPasswordResetPage();
  }
  render(){   return(
     <div className="container">
      
    <p className="account_text">Don't have an account?<span className="signuplink" onClick={()=>this.props.showSignupPage()}> Sign up</span></p>
    
    <form className="login_form">
       <h2> Welcome To<span className="signuplink"> BlueMind</span></h2>
       <p className="forgot_text" >Forgot your password ?<span className="black_text" > No worries we can help</span></p>
       <div className="inner_form_div">
      
  <div className="form-group border-lable-flt">
    <input type="email" id="label-email"  className="form-control myinput" placeholder="Enter Email" value={this.state.userEmail} onChange={this.onHandleEmailChange} required/>
    <label htmlFor="label-email">Email</label>
  </div>
  

</div>
<button type="submit" className="btn btn-primary login_button" onClick={()=>this.resetPassword()}>Reset</button>
<button className="btn btn-primary login_button" onClick={()=>this.props.showSigninPage()}>Log In</button>
</form>
</div>

   ) 
}
}