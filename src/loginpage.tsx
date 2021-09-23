import React, { Component } from 'react';
import './App.css';
import './float-label.css';

export default class Loginpage extends Component<{ showSignupPage: any, showForgetPassPage: any, showClientSigninPage: any }, { userEmail: string, userPass: string }>{

  constructor(props: any) {
    super(props)
    this.state = {
      userEmail: '',
      userPass: ''
    }
  }
  onHandleEmailChange = (e: any) => {
    let Email: string = e.target.value;
    this.setState({ userEmail: Email })
  };
  onHandlePasswordChange = (e: any) => {
    let pass: string = e.target.value;
    let regexp = /^[0-9a-zA-Z\b]+$/;
    if (regexp.test(pass)) {
      this.setState({ userPass: pass })
    }
  };
  loginAdvisor = () => {
    console.log("Login Advisor:" + this.state.userEmail + " with Pass:" + this.state.userPass);
  }

  render() {
    return (
      <div className="container-fluid">
        <p className="account_text">Don't have an account?<span className="signuplink" onClick={() => this.props.showSignupPage()}> Sign up</span></p>
        <form className="login_form">
          <h2> Welcome To<span className="signuplink"> BlueMind</span></h2>
          <div className="inner_form_div">
            <div className="form-group border-lable-flt">
              <input type="email" id="label-email" className="form-control myinput " placeholder="Enter Email" value={this.state.userEmail} onChange={this.onHandleEmailChange} required />
              <label htmlFor="label-email">Email</label>
            </div>
            <div className="form-group border-lable-flt">
              <input type="password" id="label-password" className="form-control myinput " placeholder="Password" value={this.state.userPass} onChange={this.onHandlePasswordChange} required />
              <label htmlFor="label-password">Password</label>
            </div>
          </div>
          <div className="forgot_div">
            <span className="forgot_pass" onClick={() => this.props.showForgetPassPage()} >Forgot password?</span>
          </div>
          <button type="submit" className="btn btn-primary login_button" onClick={() => this.loginAdvisor()}>Log In</button>
          <p className="account_text" style={{ marginTop: '10%' }}>Are you a Client?<span className="signuplink" onClick={() => this.props.showClientSigninPage()}> Client Log In</span>
            {/* <button type="submit" className="btn btn-outline-primary" style={{width:'50%', margin:'3%',display:'inline'}} onClick={()=>this.loginClient()} >Client Log In <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg></button> */}
          </p>
        </form>
      </div>
    )
  }
}