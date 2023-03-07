import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Sidebar.css'

const hideNavOnLinkClick = () => {
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  if(vw<1010){
    document.getElementById("nav").style.left="-50vw";
    let temp=document.getElementsByClassName("breadcrumbline");
    for(let i=0;i<temp.length;i++)
      temp[i].style.background="white";
  }

}

const breadCrumbClick = () => {
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  // const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  if(vw<1010){
    let temp=document.getElementsByClassName("breadcrumbline");
    if(document.getElementById("nav").style.left==="0px"){
      document.getElementById("nav").style.left="-50vw";
      for(let i=0;i<temp.length;i++)
      temp[i].style.background="white";
    }
    else{
      document.getElementById("nav").style.left="0px";
      for(let i=0;i<temp.length;i++)
      temp[i].style.background="black";
      
    }
  }
  
}
const Sidebar = () => {
  return (
    <nav className="nav" id="nav">
      <div id="breadcrumb" onClick={breadCrumbClick}>
        <div className="breadcrumbline"></div>
        <div className="breadcrumbline"></div>
        <div className="breadcrumbline"></div>
      </div>
      <ul>
        <li><Link to="/portfolio" className="link" onClick={hideNavOnLinkClick}>Home</Link></li>
        <li><Link to="/portfolio/about" className="link" onClick={hideNavOnLinkClick}>About</Link></li>
        <li><Link to="/portfolio" className="link" onClick={hideNavOnLinkClick}>Contact me</Link></li>
      </ul>
    </nav>
  )
}

export default Sidebar
