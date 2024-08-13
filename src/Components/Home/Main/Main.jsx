import React from 'react';
import './Main.css';
import Grid_img from '../../../assets/Images/BG/Grid.png'
import LOGO from '../3D_Logo/Ecell3D';
import LOGOMobile from "../3D_Logo_Mobile/3DMobile"

const Main = () => {
  return (
    <div className="main-content">
      <img src={Grid_img} alt="" style={{position:'absolute',width:'100%',bottom:"0", height:"60svh"}}/>
      <div className="main-text">
        <div className="content-text">
          <div className="main-head">E-CELL</div>
        <div className="moto">
          <div className="moto1">DARE TO <span>DREAM</span>,</div>
          <div className="moto1">VENTURE TO <span>SUCCEED</span></div>
        </div>
        <div className="small-text">
          <div className="sub-small-text">Welcome to the Entrepreneur Cell of IIIT Naya Raipur,</div>
          <div className="sub-small-text">where dreams take flight and ventures succeed. Join</div>
          <div className="sub-small-text">us in shaping tomorrow's innovations!</div>
        </div>
        </div>
      </div>
      <div className="main-logo"><LOGO /></div>
      <div className="main-logo-mobile"><LOGOMobile/></div>
      <div className="small-text-mobile">
          <div className="sub-small-text-mobile">Welcome to the Entrepreneur Cell of IIIT Naya Raipur,</div>
          <div className="sub-small-text-mobile">where dreams take flight and ventures succeed. Join</div>
          <div className="sub-small-text-mobile">us in shaping tomorrow's innovations!</div>
        </div>
    </div>
  );
};

export default Main;
