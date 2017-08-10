import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';

class Chat extends Component {
  constructor(){
    super();
    this.state={

    }
  }



  render(){
    return(
      <div>
       <Header  title={"Chat"}/>
       <div id="about" className="content">
          <p style={{marginTop:50,textAlign:'center'}}>🚧 Under Construction 🚧</p>
       </div>
      </div>
    )
  }
}


export default Chat;
