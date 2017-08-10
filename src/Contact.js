import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';



class Contact extends Component {
  constructor(){
    super();
    this.state={

    }
  }



  render(){
    return(
      <div>
       <Header  title={"Contact"}/>
       <div id="contact" className="content">
        <p>Here are the ways you can contact me:</p>
        <ul>
          <li><a href="https://www.facebook.com/Goutham.m15">Facebook</a>&nbsp;(@Goutham.m15)</li>
          <li><a href="mailto:gouthamrs4u@gmail.com">Email</a>&nbsp;(gouthamrs4u@gmail.com)</li>
          <li><a href="tel:+919849132032">Mobile</a>&nbsp;(+919849132032)</li>
        </ul>
        <p>The best way is always by Mobile.</p>
      </div>
      </div>
    )
  }
}


export default Contact;
