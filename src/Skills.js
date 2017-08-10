import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';


class Skills extends Component {
  constructor(){
    super();
    this.state={

    }
  }



  render(){
    return(
      <div>
       <Header  title={"Skills"}/>
       <div id="contact" className="content">
        <p>Here are the skills I am goot at:</p>
        <div className="row">
        <div className="col-md-6">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Bootstrap & css</li>
            <li>Ajax</li>
          </ul>
        </div>
        <div className="col-md-6">
          <ul>
            <li>React js</li>
            <li>REDUX(currently learning)</li>
            <li>Node js</li>
            <li>MongoDB</li>
            <li>Webpack</li>
            <li>GraphQL</li>
          </ul>
        </div>
        </div>
        <p>Here are the tools I use:</p>
        <div className="col-md-12">
          <ul>
            <li>GIT</li>
            <li>Atom</li>
          </ul>
        </div>
      </div>
      </div>
    )
  }
}


export default Skills;
