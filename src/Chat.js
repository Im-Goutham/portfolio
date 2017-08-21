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
          showMessageInput: true,
          showMainButtons: true,
          showSubMainButtons: false,
          buttonType: "",
          mainChatPadhu: true,
          padhuChat: false,
          positiveResponse: true,
          lastResponse: false,
          arrayCount: 0,
          work:[
                  [
                    "Cool! So first, I want to talk about STAKVIEW.",
                    "I started learning react js while working on this website.",
                    "Initially I worked only on front-end.",
                    "Gradually Im into backend also, used nodejs ,mongoDB,GraphQL and much more technologies while writing services for this website.",
                    "You can view the site here. Want to learn about The 'New Life Agency' App ?"
                  ],
                  [
                    "Great another app I worked on is New Life Agency.",
                    "For this app I wrote backend services.",
                    "I created a website to manage the data in the app for Admin.",
                    "You can view the app here. Want to learn about The 'Waleteros' App ?"
                  ],
                  [
                     "Great another app I have started working recently is Walateros.",
                     "Its very interesting and challenging app to work.",
                     "As it is a banking management app.",
                     "I have been working on backend for this app.",
                     "You can view this project here - and those are my projects!"
                  ]
          ],
          about:[

          ]
    }
  }

componentDidMount(){
  var self = this;
        var submit = document.getElementById("message_input");
      submit.addEventListener("keydown", function (e) {
       if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
           self.messageSent(e);
       }
      });
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
                $("#activeTyping").show();
               setTimeout(function() {
                   newMessage = {};
                   newMessage.type = "left";
                   if(message.match(/pad/i)){
                           heartTheme();
                           newMessage.text = message+" ..Nuv ante naku chala estam...Nekosam edhena..🌹🌹🌹";
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
                                 self.setState({padhuChat: true});
                         }
                         else {
                                newMessage.text = "To tell you a bit about myself, I'm a full stack developer from India.";
                                self.setState({padhuChat: false});
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



myProjects(message,count){
  var arrayCount = 0;
   if(count == 0){
       this.setState({arrayCount: 0});
   }
   else {
       this.setState({arrayCount: this.state.arrayCount+1});
       arrayCount = this.state.arrayCount+1;
   }
   var self = this;
   this.setState({buttonType:"work",showMainButtons:false,showSubMainButtons: true});
   var messages = this.state.messages;
   var newMessage = {};
   setTimeout(function() {
       newMessage = {};
       // client message pushing starts
       newMessage.type = "right";
       newMessage.text = message;
       messages.push(newMessage);
       self.setState({messages:messages},()=>{
           var elem = document.getElementById('messages');
           elem.scrollTop = elem.scrollHeight;
           var len = self.state.work[arrayCount].length;
            $("#activeTyping").show();
            pushWork();
            var subCount = 0;
            function pushWork(){
              setTimeout(function() {
                  var newMessage = {};
                  newMessage.type = "left";
                    console.log("arrayCount is "+arrayCount+" subCount is "+subCount);
                  console.log("work is "+JSON.stringify(self.state.work[arrayCount]));
                  newMessage.text = self.state.work[arrayCount][subCount];
                  messages.push(newMessage);
                  self.setState({messages: messages},()=>{
                  var elem = document.getElementById('messages');
                  elem.scrollTop = elem.scrollHeight;
                  subCount++;
                  if(self.state.work[arrayCount][subCount]){
                       pushWork();
                  }
                  else {
                        $("#activeTyping").hide();
                  }
                  });
               }, 3000);
            }

       })
     },500)
}

aboutMe(message){
   var self = this;
   this.setState({buttonType:"about",showMainButtons:false,showSubMainButtons: true});
   var messages = this.state.messages;
   var newMessage = {};
   setTimeout(function() {
       newMessage = {};
       // client message pushing starts
       newMessage.type = "right";
       newMessage.text = message;
       messages.push(newMessage);
       self.setState({messages:messages},()=>{
           var elem = document.getElementById('messages');
           elem.scrollTop = elem.scrollHeight;
       })
     },500)
}

getContact(message){
   var self = this;
   this.setState({buttonType:"contact",showMainButtons:false});
   var messages = this.state.messages;
   var newMessage = {};
   setTimeout(function() {
       newMessage = {};
       // client message pushing starts
       newMessage.type = "right";
       newMessage.text = message;
       messages.push(newMessage);
       self.setState({messages:messages},()=>{
           var elem = document.getElementById('messages');
           elem.scrollTop = elem.scrollHeight;
       })
     },500)
}

goToMain(message){
    var self = this;
    this.setState({buttonType:"",showMainButtons:true,showSubMainButtons: true,arrayCount:0})
    var messages = this.state.messages;
    var newMessage = {};
    setTimeout(function() {
        newMessage = {};
        // client message pushing starts
        newMessage.type = "right";
        newMessage.text = message;
        messages.push(newMessage);
        self.setState({messages:messages},()=>{
            var elem = document.getElementById('messages');
            elem.scrollTop = elem.scrollHeight;
        })
      },500)

}

// padhu related chat

withPadhu(message,response){
  var self = this;
  if(response == "negative"){
        this.setState({positiveResponse:false});
  }
  var messages = this.state.messages;
  var newMessage = {};
  setTimeout(function() {
      newMessage = {};
      // client message pushing starts
      newMessage.type = "right";
      newMessage.text = message;
      messages.push(newMessage);
      self.setState({messages:messages},()=>{
          var elem = document.getElementById('messages');
          elem.scrollTop = elem.scrollHeight;
            $("#activeTyping").show();
          setTimeout(function() {
              newMessage = {};
              newMessage.type = "left";
              if(response == "positive"){
                   newMessage.text = "Tnq.. padhu.. ardham chesknav.. lv u..";
              }
              else {
                   newMessage.text = "sare hate chey.. nve ga nane ga..";
              }
              messages.push(newMessage);
              $("#activeTyping").hide();
              self.setState({messages: messages},()=>{
              var elem = document.getElementById('messages');
              elem.scrollTop = elem.scrollHeight;
                setTimeout(function() {
                      self.setState({mainChatPadhu:false});
                },500);
              });
           }, 2000);
      })
    },500)
}


padhuResponse(message,response){
  var self = this;
  if(response == "negative"){
        this.setState({positiveResponse:false});
  }
  var messages = this.state.messages;
  var newMessage = {};
  setTimeout(function() {
      newMessage = {};
      // client message pushing starts
      newMessage.type = "right";
      newMessage.text = message;
      messages.push(newMessage);
      self.setState({messages:messages},()=>{
          var elem = document.getElementById('messages');
          elem.scrollTop = elem.scrollHeight;
            $("#activeTyping").show();
          setTimeout(function() {
              newMessage = {};
              newMessage.type = "left";
              newMessage.text = "sare bye mari tharuvatha....";
              messages.push(newMessage);
              $("#activeTyping").hide();
              self.setState({messages: messages},()=>{
              var elem = document.getElementById('messages');
              elem.scrollTop = elem.scrollHeight;
                setTimeout(function() {
                      self.setState({mainChatPadhu:false,lastResponse:true})
                },500)
              });
           }, 2000);
      })
    },500)
}

lastResponse(message){
      var self = this;
      var messages = this.state.messages;
      var newMessage = {};
      setTimeout(function() {
          newMessage = {};
          // client message pushing starts
          newMessage.type = "right";
          newMessage.text = message;
          messages.push(newMessage);
          self.setState({messages:messages,showMessageInput:true},()=>{
              var elem = document.getElementById('messages');
              elem.scrollTop = elem.scrollHeight;
              setTimeout(function() {
                  newMessage = {};
                  newMessage.type = "left";
                  newMessage.text = "😍😍😍😍😍😍";
                  messages.push(newMessage);
                  $("#activeTyping").hide();
                  self.setState({messages: messages},()=>{
                  var elem = document.getElementById('messages');
                  elem.scrollTop = elem.scrollHeight;
                  });
               }, 2000);
          })
        },500)
}

  render(){
    return(
      <div>
       <Header  title={"Chat"}/>
      <canvas id="canvas"></canvas>
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
                  (this.state.padhuChat == false)?(
                    (this.state.showMainButtons)?(
                              (this.state.showSubMainButtons)?(
                                  <div>
                                    <Button inverted color='red' onClick={this.myProjects.bind(this,"Your work")}>Your work</Button>
                                    <Button inverted color='orange' onClick={this.aboutMe.bind(this,"About you 💝")}>About you 💝</Button>
                                    <Button inverted color='yellow' onClick={this.getContact.bind(this,"Let's get together")}>Let's get together</Button>
                                  </div>
                              ):(
                                <div>
                                  <Button inverted color='red' onClick={this.myProjects.bind(this,"Absolutely",0)}>Absolutely</Button>
                                  <Button inverted color='orange' onClick={this.aboutMe.bind(this,"I want to know more about you.",0)}>I want to know more about you.</Button>
                                  <Button inverted color='yellow' onClick={this.getContact.bind(this,"I want to get together.",0)}>I want to get together.</Button>
                                </div>
                              )
                    ):(
                        (this.state.buttonType == "work")?(
                          <div>
                            <Button inverted color='yellow' onClick={this.myProjects.bind(this,"Sure")}>Sure</Button>
                            <Button inverted color='green' onClick={this.goToMain.bind(this,"Nah, I'm good")}>Nah, I'm good</Button>
                          </div>
                        ):(
                            (this.state.buttonType == "about")?(
                              <div>
                                <Button inverted color='orange' onClick={this.aboutMe.bind(this,"Sure")}>Sure</Button>
                                <Button inverted color='yellow' onClick={this.goToMain.bind(this,"Nah, I'm good")}>Nah, I'm good</Button>
                              </div>
                            ):(
                                (this.state.buttonType == "contact")?(
                                    <div>
                                      <Button inverted color='violet' onClick={this.getContact.bind(this,"Sure")}>Sure</Button>
                                      <Button inverted color='purple' onClick={this.goToMain.bind(this,"Nah, I'm good")}>Nah, I'm good</Button>
                                    </div>
                                ):(null)
                            )
                        )
                    )
                  ):(
                    (this.state.mainChatPadhu)?(
                        <div>
                          <Button inverted color='red' onClick={this.withPadhu.bind(this,"I understand.","positive")}>I understand.</Button>
                          <Button inverted color='orange' onClick={this.withPadhu.bind(this,"I still hate you.","negative")}>I still hate you.</Button>
                        </div>
                    ):(
                       (this.state.lastResponse == false)?(
                         (this.state.positiveResponse)?(
                             <Button inverted color='red' onClick={this.padhuResponse.bind(this,"lv u too..bye!")}><span id="padhuResponse">lv u too..bye!</span></Button>
                         ):(
                             null
                         )
                       ):(
                           (this.state.positiveResponse)?(
                               <Button inverted color='red' onClick={this.lastResponse.bind(this,"😘😘😘😘😘😘😘")}><span >😘😘😘😘😘😘😘</span></Button>
                           ):(
                               null
                           )
                       )

                    )
                  )
             )
         }
          </div>

  </div>
      </div>
    )
  }
}


var HeartsBackground = {
  heartHeight: 60,
  heartWidth: 64,
  hearts: [],
  heartImage: 'http://i58.tinypic.com/ntnw5.png',
  maxHearts: 8,
  minScale: 0.4,
  draw: function() {
    this.setCanvasSize();
    this.ctx.clearRect(0, 0, this.w, this.h);
    for (var i = 0; i < this.hearts.length; i++) {
      var heart = this.hearts[i];
      heart.image = new Image();
      heart.image.style.height = heart.height;
      heart.image.src = this.heartImage;
      this.ctx.globalAlpha = heart.opacity;
      this.ctx.drawImage (heart.image, heart.x, heart.y, heart.width, heart.height);
    }
    this.move();
  },
  move: function() {
    for(var b = 0; b < this.hearts.length; b++) {
      var heart = this.hearts[b];
      heart.y += heart.ys;
      if(heart.y > this.h) {
        heart.x = Math.random() * this.w;
        heart.y = -1 * this.heartHeight;
      }
    }
  },
  setCanvasSize: function() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.w = this.canvas.width;
    this.h = this.canvas.height;
  },
  initialize: function() {
    this.canvas = $('#canvas')[0];

    if(!this.canvas.getContext)
      return;

    this.setCanvasSize();
    this.ctx = this.canvas.getContext('2d');

    for(var a = 0; a < this.maxHearts; a++) {
      var scale = (Math.random() * (1 - this.minScale)) + this.minScale;
      this.hearts.push({
        x: Math.random() * this.w,
        y: Math.random() * this.h,
        ys: Math.random() + 1,
        height: scale * this.heartHeight,
        width: scale * this.heartWidth,
        opacity: scale
      });
    }

    setInterval($.proxy(this.draw, this), 30);
  }
};

function heartTheme(){
      HeartsBackground.initialize();
}


export default Chat;
