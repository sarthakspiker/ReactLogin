import React,{Component} from 'react';
import './App.css';
import './float-label.css';
import gmailLogo from '../src/gmail-icon.svg';
import outlookLogo from '../src/outlook-icon.svg';
import linkedinLogo from '../src/linkedin.svg';
export default class LoginSignuppage extends Component<{showSigninPage:any},{firstName:string,lastName:string ,telephone:string,userEmail:string,userPass:string}>{

  constructor(props:any) {
    super(props)
    this.state = {
      firstName:'',
      lastName:'',
      userEmail:'',
      telephone:'',
      userPass:''
    }
}
onHandleFirstnameChange = (e:any) => {
  let firstname:string = e.target.value;
if (firstname !== '') {
  this.setState({ firstName : firstname })
}
};
onHandleLastnameChange = (e:any) => {
  let lastname:string = e.target.value;
if (lastname !== '') {
  this.setState({ lastName: lastname })
}
};
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
onHandleTelephoneChange = (e:any) => {
  let telephone:string = e.target.value;
  let regexp = /^[0-9\b]+$/;
// if value is not blank, then test the regex
if (telephone === '' || regexp.test(telephone)) {
  this.setState({ telephone: telephone })
}
};
createAccount = () =>{
  console.log("Create Account for:" + this.state.userEmail +" with Pass:" + this.state.userPass);
}

 render(){  return(
     <div className="container">
      
    <p className="account_text">Have an account?<span className="signuplink" onClick={()=>this.props.showSigninPage()}> Sign In</span></p>
    <p className="benefit_text">Start benefiting<span className="signuplink"> free trial</span> from our tools right away</p>
    <form className="ma-left">
      
  <div className="form-group border-lable-flt">
    <input type="text" id="label-firstname"  className="form-control myinput " placeholder="Enter Firstname" value={this.state.firstName} onChange={this.onHandleFirstnameChange} required/>
    <label htmlFor="label-firstname">First Name</label>
  </div>  
  <div className="form-group border-lable-flt">
    <input type="text" id="label-lastname"  className="form-control myinput " placeholder="Enter Lastname" value={this.state.lastName} onChange={this.onHandleLastnameChange} required/>
    <label htmlFor="label-lastname">Last Name</label>
  </div>    
  <div className="form-group border-lable-flt">
    <input type="email" id="label-email"  className="form-control myinput " placeholder="example@mail.com" value={this.state.userEmail} onChange={this.onHandleEmailChange} required/>
    <label htmlFor="label-email">Email</label>
  </div>
  <div className="form-group border-lable-flt">
    <input type="tel" id="label-phone" name="telephone"  className="form-control myinput " placeholder="Phone Number" value={this.state.telephone} onChange={this.onHandleTelephoneChange} required/>
    <label htmlFor="label-email">Phone number</label>
  </div>
  <div className="form-group border-lable-flt">
    <input type="password" id="label-password" className="form-control myinput " placeholder="6+ Strong Alpha Numeric Characters" value={this.state.userPass} onChange={this.onHandlePasswordChange} required/>
    <label htmlFor="label-password">Password</label>
  </div>


<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
    By Clicking the create account button below you agree to our <span className="signuplink">terms of service and private statements</span>
  </label>
</div>

<button type="submit" className="btn btn-primary login_button" onClick={()=>this.createAccount()}>Create Account</button>
</form>

<div className="ma-left mt-2" style={{ height: '20px', borderBottom: '1px solid grey', textAlign: 'center'}}>
  <span style={{fontSize: 'x-small', backgroundColor:'white' ,color: 'blue', padding: '0 10px'}}>
    Or
  </span>
</div>
<div className="container row ma-left mt-3">
    <div className="col">
        <img className="social_icon" src={outlookLogo} alt="outlook login"></img>
    </div>
    <div className="col">
        <img className="social_icon" src={linkedinLogo} alt="linkedin login"></img>
    </div>
    <div className="col">
        <img className="social_icon" src={gmailLogo} alt="gmail login"></img>
    </div>
</div>
</div>

   ) 
 }
}