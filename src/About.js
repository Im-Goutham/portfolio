import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';


class About extends Component {
  constructor(){
    super();
    this.state={

    }
  }



  render(){
    return(
      <div>
       <Header title={"About"}/>
       <div id="about" className="content">
          <p>I'm Goutham, a broken heart 💔 Developer. I do a lot of different things but majority of the time I'm a full stack developer.</p>
          <p>I completed my education in year 2016 and soon after it started my career as a software developer.</p>
          <p>At my current company I have been into some projects. You can view most of the finished pieces of work on the <NavLink to="/work">Work page</NavLink>.</p>
          <p>Apart from that I’m most likely listening songs, watching some code stuff on YouTube, roaming around on by bike, or watching the cricket.</p>
          <p>I’m nearly always available for something, so if you ever feel like I’m the man for the job, then check out the <NavLink to="/contact">Contact page</NavLink> where you can find the best place to do so!</p>
       </div>
      </div>
    )
  }
}


export default About;
