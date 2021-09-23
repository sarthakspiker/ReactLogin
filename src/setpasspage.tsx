import React, {Component} from 'react';
import './App.css';
import './float-label.css';

export default class SetPassPage extends Component{

 
    render(){
        return(<div className="container-fluid">
      
        
        
        <form className="login_form">
           <h2> Welcome To<span className="signuplink"> BlueMind</span></h2>
           <div className="inner_form_div">
          
           <div className="form-group border-lable-flt">
    <input type="password" id="label-password" className="form-control myinput " placeholder="6+ Strong Alpha Numeric Characters"  required/>
    <label htmlFor="label-password">Enter New Password</label>
  </div>
  <div className="form-group border-lable-flt">
    <input type="password" id="label-password" className="form-control myinput " placeholder="Confirm Password"  required/>
    <label htmlFor="label-password">Confirm Password</label>
  </div>
       </div>
       <button type="submit" className="btn btn-primary login_button" >Set Password</button>
    </form>
    </div>
     
    
       ) 
    }
    }