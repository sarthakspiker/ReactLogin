import React, {Component} from 'react';
import './App.css';
import './float-label.css';

export default class ClientLogin extends Component{

 
    render(){
        return(<div className="container-fluid">
      
        <p className="account_text">Not a client?<span className="signuplink" > Advisor Login</span></p>
        
        <form className="login_form">
           <h2> Welcome To<span className="signuplink"> BlueMind</span></h2>
           <div className="inner_form_div">
          
      <div className="form-group border-lable-flt">
        <input type="email" id="label-email"  className="form-control myinput " placeholder="Enter Email" required/>
        <label htmlFor="label-email">Email</label>
      </div>
       </div>
       <button type="submit" className="btn btn-primary login_button" >Client Log In</button>
    </form>
    </div>
     
    
       ) 
    }
    }