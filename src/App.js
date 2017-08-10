import React, { Component } from 'react';
import Header from './Header';


class App extends Component {
  render() {
    return (
        <div className="container">
          <Header />
           <div id="home" className="content">
              <p>Hi.... </p>
              <p>This is my portfolio giving you a brief info about me ,the skills I have,the projects I have done.</p>
              <p>I have been into software career since 1 year.I'm currently working as a full stack developer in StellentSoft Pvt Ltd(India).My main project at the minute is a ecommerce site called <a href="https://stakview.myappdemo.us" id="stakview">stakview</a>.</p>
              <p>I like to <a href="https://www.facebook.com/Goutham.m15" id="facebook">share useless information</a> in facebook, you can connect with me here.</p>
           </div>
        </div>
    );
  }
}

export default App;
