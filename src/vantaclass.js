import React, { Component } from 'react';
import './App.css';
import TRUNK from '../node_modules/vanta/dist/vanta.trunk.min';
import p5Min from './p5.min.js';
import newBanner from '../src/assets/newBanner.png';

const elem = (document.compatMode === "CSS1Compat") ?
  document.documentElement :
  document.body;

var height = elem.clientHeight;
export default class Vantaclass extends Component {


  constructor(props) {
    super(props)
    this.vantaRef = React.createRef()
  }

  componentDidMount() {
    this.vantaEffect = TRUNK({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: height,
      scale: 1.00,
      scaleMobile: 1.00,
      color: '#3c3c79',
      backgroundColor: '#030334',
      spacing: 4.50,
      chaos: 4.00,
      p5: p5Min

    })
  }


  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return <div className='vanta' ref={this.vantaRef}>

      <img src={newBanner} style={{ height: '100vh' }}></img>
    </div>
  }

}


