import React, { Component } from 'react';
import './App.css';
import './float-label.css';
import Sad from '../src/assets/sad.png';
import Happy from '../src/assets/joy.png';
import SadFace from '../src/assets/sad-face.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const mountedStyle = { animation: "inAnimation 300ms ease-in" };
export default class Unsubscribe extends Component<{},{ showUnsubscribeScreen:boolean,showHappyScreen:boolean,showSadScreen:boolean}>{
  
    constructor(props:{}) {
        super(props)
    
        this.state = {
            showUnsubscribeScreen:true,
            showHappyScreen:false,
            showSadScreen:false
        }
    }
    showUnsubscribeScreen = ()=>{
        this.setState({showUnsubscribeScreen:true,
            showHappyScreen:false,
            showSadScreen:false});
    } 
    showHappyScreen = ()=>{
        this.setState({showUnsubscribeScreen:false,
            showHappyScreen:true,
            showSadScreen:false});
    } 
    showSadScreen = ()=>{
        this.setState({showUnsubscribeScreen:false,
            showHappyScreen:false,
            showSadScreen:true});
    } 
  render() {
      const {showUnsubscribeScreen,showHappyScreen,showSadScreen}=this.state;
    return (
      <div className="container-fluid text-center " style={{ margin: '2% auto',minHeight:'100vh'}  } >
         {showUnsubscribeScreen && <div style={mountedStyle}>
        <img style={{width:'100%'}} src={Sad} alt="Card image cap" />
       
        <h2 className="mt-3">Give us one more chance?</h2>
       <div className="row" style={{margin:'5% 0 10% 10%',width:'80%'}}>
           <div className="col">
        <button type="submit" className="btn btn-primary login_button" style={{ width: '100%',float:'right' ,marginRight:'10%' }} onClick={this.showHappyScreen}>Yes, Let's try it once again !</button>
        </div>
        <div className="col">
        <button type="submit" className="btn btn-primary login_button" style={{ width: '100%',float:'left',marginLeft:'10%' }}  onClick={this.showSadScreen} >No, I want to unsubscribe. </button>
        </div>
        </div>
        </div>}
       {showHappyScreen && <div style={mountedStyle}>
        <img style={{width:'100%'}} src={Happy} alt="Card image cap" />
       
        <h1 className="mt-3">Hurray !!</h1>
        <h3 className="mt-2">Thank you for staying with us !</h3>
        <button type="submit" className="btn btn-primary go_back" style={{ width: '50%' }} onClick={this.showUnsubscribeScreen}>Go Back</button>
        </div>}
        {showSadScreen && <div style={mountedStyle}>
        <img style={{width:'60%',padding:'2%'}} src={SadFace} alt="Card image cap" />
       
        <h1 className="mt-3">Alas !</h1>
        <h3 className="mt-2">We are sad to see you leave !</h3>
        <button type="submit" className="btn btn-primary go_back" style={{ width: '50%' }} onClick={this.showUnsubscribeScreen}>Go Back</button>
        </div>}
      </div>
    )
  }
}