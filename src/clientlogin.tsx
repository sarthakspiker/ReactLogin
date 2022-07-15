import React, { Component } from 'react';
import './App.css';
import './float-label.css';

export default class ClientLogin extends Component<{ showSigninPage: any,showClientsuccesspage:any }, { userEmail: string }>{
   constructor(props: any) {
      super(props)
      this.state = {
         userEmail: ''
      }
   }
   onHandleEmailChange = (e: any) => {
      let Email: string = e.target.value;
      this.setState({ userEmail: Email })
   };
   loginClient = () => {
      console.log("Login Client:" + this.state.userEmail + " with Pass:");
      this.props.showClientsuccesspage();
   }

   render() {
      return (<div className="container-fluid">
         <p className="account_text">Not a client?<span className="signuplink" onClick={() => this.props.showSigninPage()}> Advisor Login</span></p>
         <form className="login_form">
            <h2> Welcome To<span className="signuplink"> DummyCompany</span></h2>
            <div className="inner_form_div">
               <div className="form-group border-lable-flt">
                  <input type="email" id="label-email" className="form-control myinput " placeholder="Enter Email" required />
                  <label htmlFor="label-email">Email</label>
               </div>
            </div>
            <button type="submit" className="btn btn-primary login_button" onClick={() => this.loginClient()}>Client Log In</button>
         </form>
      </div>
      )
   }
}