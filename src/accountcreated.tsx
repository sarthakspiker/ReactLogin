import React, {Component} from 'react';
import './App.css';
import './float-label.css';
import New from '../src/previewemail.gif';
import Tick from '../src/greentick2.gif';

export default class AccountCreated extends Component {

 
render(){
    return(
     <div className="container-fluid mycontainer">
     <div className="card mb-3">
  <img className="card-img-top" src={New} alt="Card image cap"/>
  <div className="card-body">
  <img className="greentick" src={Tick} alt="Card image cap"/>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
   
  </div>
</div>

    
   
</div>

   ) 
}
}