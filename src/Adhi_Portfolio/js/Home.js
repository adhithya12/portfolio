import React from 'react';
import Propic from '../images/propic.png';
import '../css/Home.css'

const Home = () => {
  return (
    <div className="maininfo">
        <p id="name">ADHITHYA PRAHLADH VENKATRAMAN</p>
        <p id="role">FULL STACK DEVELOPER</p>
        <div class="CV"><button>Download CV</button><button>TEST BTN</button></div>
        <br></br>
        <img id="pic" src={Propic} alt="profilepicture"></img>
    </div>
  )
}

export default Home
