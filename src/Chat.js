import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import $ from "jquery";
import { Button, Segment } from 'semantic-ui-react'
import Header from './Header';

class Chat extends Component {
  constructor(){
    super();
    this.state={
      messages: [{
              "type" : "left",
              "image": "http://www.holifestival.org/images/holi-image-4-big.jpg",
              "text": "Hi there! I'm Goutham. What's your name?"
          }],
          showMessageInput: true
    }
  }


messageSent(){
    var self = this;
    var newMessage = {};
    var message = document.getElementById('message_input').value;
    document.getElementById('message_input').value= "";
    if(message.trim() != ""){
         this.setState({clientName:message});
         var messages = this.state.messages;
         setTimeout(function() {
             newMessage = {};
             // client message pushing starts
             newMessage.type = "right";
             newMessage.text = message;
             messages.push(newMessage);
             self.setState({messages:messages},()=>{
               var elem = document.getElementById('messages');
               elem.scrollTop = elem.scrollHeight;
               setTimeout(function() {
                   newMessage = {};
                   newMessage.type = "left";
                   if(message.match(/pad/i)){
                           newMessage.text = message+" love you..Nuv ante naku chala estam...Nekosam edhena..🌹🌹🌹";
                   }
                   else {
                          newMessage.text = message+", that's a fantastic name!";
                   }
                   messages.push(newMessage);
                   self.setState({messages: messages},()=>{
                     $("#activeTyping").show();
                     var elem = document.getElementById('messages');
                     elem.scrollTop = elem.scrollHeight;
                     setTimeout(function() {
                         newMessage = {};
                         newMessage.type = "left";
                         if(message.match(/pad/i)){
                                 newMessage.text = "Ninu chala ana..Kani avani premathone...💓💓💓";
                         }
                         else {
                                newMessage.text = "To tell you a bit about myself, I'm a full stack developer from India.";
                         }
                         messages.push(newMessage);
                          $("#activeTyping").hide();
                         self.setState({messages: messages},()=>{
                          $("#activeTyping").show();
                          var elem = document.getElementById('messages');
                          elem.scrollTop = elem.scrollHeight;
                           setTimeout(function() {
                               newMessage = {};
                               newMessage.type = "left";
                               if(message.match(/pad/i)){
                                       newMessage.text = "Ardham chesko nve vnav naku....sorry😘😘😘";
                               }
                               else {
                                      newMessage.text = "Want to hear about my work?";
                               }
                               messages.push(newMessage);
                               $("#activeTyping").hide();
                               self.setState({messages: messages,showMessageInput:false},()=>{
                               var elem = document.getElementById('messages');
                               elem.scrollTop = elem.scrollHeight;
                               });
                            }, 2000);
                         });
                      }, 2000);
                   });
                }, 2000);
             });
          }, 500);

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
         <ul className="messages" id="messages">

         {
             (this.state.messages.length > 0)?(
                  this.state.messages.map((message,key)=>{
                    console.log("text is ...."+message.text);
                        return <li className={"message appeared "+message.type}>
                                  <div className="avatar" ></div>
                                  <div className="text_wrapper">
                                    <div className="text">{message.text}</div>
                                  </div>
                                </li>
                  })
             ):(null)
         }
    </ul>

          <div className="bottom_wrapper clearfix">
          <div id="activeTyping" style={{display:'none'}}>Goutham is typing...</div>
          {
              (this.state.showMessageInput)?(
                <div>
                  <div className="message_input_wrapper"><input className="message_input" id="message_input" placeholder="Type your message here..." /></div>
                  <div className="send_message"  onClick={this.messageSent.bind(this)}>
                    <div className="icon" ></div>
                    <div className="text">Send</div>
                  </div>
                </div>
             ):(
                 <div>
                   <Button inverted color='red'>Absolutely</Button>
                   <Button inverted color='orange'>I want to know more about you.</Button>
                   <Button inverted color='yellow'>I want to get together.</Button>
                 </div>
             )
         }
          </div>

  </div>
      </div>
    )
  }
}


export default Chat;
