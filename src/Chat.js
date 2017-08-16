import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ChatBubble from 'react-chat-bubble';
import Header from './Header';

class Chat extends Component {
  constructor(){
    super();
    this.state={
      messages: [{
              "type" : 0,
              "image": "http://www.holifestival.org/images/holi-image-4-big.jpg",
              "text": "Hello! Good Morning!"
          }, {
              "type": 1,
              "image": "https://destinos-impresionesaerea.netdna-ssl.com/assets/.thumbs/images/paquetes/wine-colors-music-fest/wine-colors-music-fest.jpg",
              "text": "Hello! Good Afternoon!"
          }]
    }
  }



  render(){
    return(
      <div>
       <Header  title={"Chat"}/>


       <div className="chat_window">
         <div className="top_menu">
           <div className="buttons">
             <div className="button close"  ></div>
             <div className="button minimize"  ></div>
             <div className="button maximize" ></div>
           </div>
           <div className="title">Chat</div>
         </div>
         <ul className="messages">
      <li className="message left appeared">
        <div className="avatar" ></div>
        <div className="text_wrapper">
          <div className="text">Hello Philip! :)</div>
        </div>
      </li>
      <li className="message right appeared">
        <div className="avatar"  ></div>
        <div className="text_wrapper">
          <div className="text">Hi Sandy! How are you?</div>
        </div>
      </li>
      <li className="message left appeared">
        <div className="avatar" ></div>
        <div className="text_wrapper">
          <div className="text">I'm fine, thank you!</div>
        </div>
      </li>
    </ul>
         <div className="bottom_wrapper clearfix">
           <div className="message_input_wrapper"><input className="message_input" placeholder="Type your message here..." /></div>
           <div className="send_message">
             <div className="icon" />
             <div className="text">Send</div>
           </div>
         </div>
       </div>

      </div>
    )
  }
}


export default Chat;
