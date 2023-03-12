import React from 'react';
import '../css/Home.css'
import resume from '../OtherFiles/Adhithya_Prahladh_Resume.docx'

const Home = () => {
  return (
    <div className="bodyreplica">
      <div className="maininfo">
        <p id="name">ADHITHYA PRAHLADH VENKATRAMAN</p>
        <p id="role">FULL STACK DEVELOPER</p>
        <div class="CV"><a href={resume} download="resume.docx"><button>Download CV</button></a><button>TEST BTN</button></div>
        <br></br>
      </div>
    </div>
  )
}

export default Home
