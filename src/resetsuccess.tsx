import React, {Component} from 'react';
import './App.css';
import './float-label.css';
import New from '../src/previewemail.gif';
import Resetgif from '../src/reset.gif'
import Tick from '../src/greentick2.gif';


export default class ResetSuccess extends Component  {

 
render(){
    return(
     <div className="container-fluid text-center " style={{ width:'50%', margin:'2% auto'}} >
  
    

        <img className="card-top" src={Resetgif} alt="Card image cap"/>

 
    <h2 ><img className="greentick" src={Tick} alt="Card image cap" style={{display:'inline'}} /> Congratulations !!</h2>
    <h5>Your Password has been reset successfully.</h5>
   
    <button type="submit" className="btn btn-primary login_button" style={{width:'50%'}}  >Back to Home <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg></button>


  


    
   
</div>

   ) 
}
}