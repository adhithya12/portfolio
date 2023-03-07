import React from 'react'
import '../css/Common.css'
import '../css/About.css'
const toggleInnerSection = (id) =>{
  let idObj=document.getElementById(id).getElementsByClassName("innersection")[0];
  if(idObj.style.display==="none"){
    idObj.style.display="block";
    document.getElementById(id+"Icon").innerHTML="-";
  }
  else{
    idObj.style.display="none";
    document.getElementById(id+"Icon").innerHTML="+";
  }
}
const About = () => {
  return (
    <div className='pagebody'>
      <div className='section' id="experience" onClick={()=>{toggleInnerSection("experience")}}>
        <div className='heading'>
          Experience <span id = "experienceIcon">+</span>
        </div>
        <div className='innersection'>
          <div className='heading'>Zoho - Member Technical staff</div>
          <p></p>
        </div>
        <div className='innersection'>
          <div className='heading'>Infosys - Senior System Engineer</div>
          <p></p>
        </div>
        <div className='innersection'>
          <div className='heading'>Infosys - System Engineer</div>
          <p></p>
        </div>
      </div>
      <div className='section' id="trainings" onClick={()=>{toggleInnerSection("trainings")}}>
        <div className='heading'>
          Trainings/Internship <span id = "trainingsIcon">+</span>
        </div>
        <div className='innersection'>
          <div className='heading'>Moolya - Software tester</div>
          <p>Trained in debugging, manual testing and Web development</p>
          <p>Created dynamic web pages</p>
          <p>Debugged multiple codes to find out failures.</p>
          <p>Have done API testing for multiple APIs</p>
          <p>Skills: </p>
          <ul>
            <li>HTML, CSS, JS, JQuery, Bootstrap</li>
            <li>PHP</li>
            <li>Postman</li>
            <li>Xmind</li>
          </ul>
        </div>
        <div className='innersection'>
          <div className='heading'>Zoho - Incubation</div>
          <p>Trained in Web development</p>
          <p>Created a chat application, where we can register ourselves into it and chat with other users one on one.</p>
          <p>Created a searching application, where a user can upload files and search files containing a particular keyword. Here, an admin can access all files and user will have access restrictions.</p>
          <p>Skills: </p>
          <ul>
            <li>HTML, CSS, JS, JQuery</li>
            <li>Java, Servlets and JSPs</li>
            <li>ElasticSearch</li>
            <li>Apache tomcat</li>
          </ul>
        </div>
      </div>
      <div className='section' id="education" onClick={()=>{toggleInnerSection("education")}}>
        <div className='heading'>
          Education <span id = "educationIcon">+</span>
        </div>
        <div className='innersection'>
          <div className='heading'>Bachelor's Degree</div>
          <p>From Mookambigai College of Engineering, Kalamavur, Pudukkottai.</p>
          <p>Specialized in Computer Science and Engineering with a CGPA of 7.1</p>
        </div>
        <div className='innersection'>
          <div className='heading'> All India Senior's Secondary Certificate Examination (AISSCE) (12TH grade)</div>
          <p>Completed AISSCE in 2016 in Computer Science group with 66%</p>
        </div>
        <div className='innersection'>
          <div className='heading'>All India Secondary School Examination (AISSE) (10TH grade)</div>
          <p>Completed AISSE in 2014 with a CGPA of 7.4 </p>
        </div>
      </div>
    </div>
  )
}

export default About
