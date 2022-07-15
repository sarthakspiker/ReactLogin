import React, { Component } from 'react';
import './App.css';
import './float-label.css';

export default class SetPassPage extends Component<{ }, { pass: string, confirmPass: string }>{
   constructor(props: any) {
      super(props)
      this.state = {
         pass: '',
         confirmPass: ''
      }
   }
   onHandlePasswordChange = (e: any) => {
      let pass: string = e.target.value;
      let regexp = /^[0-9a-zA-Z\b]+$/;
      if (regexp.test(pass)) {
         this.setState({ pass: pass })
      }
   };
   onHandleConfirmPasswordChange = (e: any) => {
      let pass: string = e.target.value;
      let regexp = /^[0-9a-zA-Z\b]+$/;
      if (regexp.test(pass)) {
         this.setState({ confirmPass: pass })
      }
   };
   resetPassword = () => {
      const pass1 = this.state.pass;
      const pass2 = this.state.confirmPass;
      if (pass1 === pass2) {
         console.log("Pass:" + pass1 + " confirm Pass:" + pass2);
      }
   }
   render() {
      return (<div className="container-fluid">
         <form className="login_form">
            <h2> Welcome To<span className="signuplink"> DummyCompany</span></h2>
            <div className="inner_form_div">
               <div className="form-group border-lable-flt">
                  <input type="password" id="label-password" className="form-control myinput " placeholder="6+ Strong Alpha Numeric Characters" value={this.state.pass} onChange={this.onHandlePasswordChange} required />
                  <label htmlFor="label-password">Enter New Password</label>
               </div>
               <div className="form-group border-lable-flt">
                  <input type="password" id="label-password" className="form-control myinput " placeholder="Confirm Password" value={this.state.confirmPass} onChange={this.onHandleConfirmPasswordChange} required />
                  <label htmlFor="label-password">Confirm Password</label>
               </div>
            </div>
            <button type="submit" className="btn btn-primary login_button" onClick={() => this.resetPassword} >Set Password</button>
         </form>
      </div>
      )
   }
}