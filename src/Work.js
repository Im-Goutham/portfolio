import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';



class Work extends Component {
  constructor(){
    super();
    this.state={

    }
  }



  render(){
    return(
      <div>
       <Header title={"Work"}/>
       <div id="work" className="content">
      <div className="workitem">
         <h3 style={{color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(81, 164, 220)'}}> <a href="http://chrishannah.me/keep-track/">StakView</a></h3>
         <p className="meta">
           <strong>Type: </strong> Website<br />
           <strong>Technologies Used: </strong>Reactjs, nodejs, MongoDB, GraphQL
         </p>
         <p><a href="https://stakview.myappdemo.us"><img src="gifs/stakview.gif" id="workitemimg" /></a></p> <p>A website to get information about products from amazon and group them to a stak and publish.</p> </div>
      </div>
      </div>
    )
  }
}


export default Work;
