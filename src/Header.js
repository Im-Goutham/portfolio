import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


class Header extends Component {
  constructor(){
    super();
    this.state={

    }
  }



  render(){
    return(
      <div id="header">
       <h1 style={{marginBottom: 30}}>
         <span className="title"><NavLink to="/">Goutham </NavLink><h2>{this.props.title}</h2><span className="blinking-cursor">⎢</span></span>
       </h1>
       <div id="navigation">
      <ul>
        <li><NavLink to="/about">👦 About</NavLink></li>
        <li><NavLink to="/work">💻 Work</NavLink></li>
        <li><NavLink to="/skills">🎮 Skills</NavLink></li>
        {/*
          <li><NavLink to="/skills">📓 Resume</NavLink></li>
        */}
        <li><NavLink to="/chat">💬 Chat</NavLink></li>
        <li><NavLink to="/contact">☎️ Contact</NavLink></li>
      </ul>
    </div>
     </div>
    )
  }
}


export default Header;
