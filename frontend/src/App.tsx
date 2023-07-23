import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

let socket = new WebSocket("ws://localhost:3001");


function test(){
  const url="http://localhost:3001/hello";
  var myFetch = fetch(url);

  myFetch.then(function (response) {
    response.text().then(text => {console.log(text)});
  })
}


function send(pseudo:string) {
  socket.send(pseudo);
}





function App() {

  
  const init = () => {
      
    socket.onmessage = function(event) {
      console.log(`[message] Data received from server: ${event.data}`);
    };
  }
  
  useEffect(init, []);

  
  return (
    <div className="App">
      <a onClick={() => {send("toto")}} >
        <img src="https://viva.villeurbanne.fr/var/site/storage/images/_aliases/article_picture/5/8/1/9/319185-1-fre-FR/Joueradistance.jpg"></img>
      </a>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world
        </p>
        
      </header>
    </div>

  );
}

export default App;
