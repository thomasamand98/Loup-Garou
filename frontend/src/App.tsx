import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Player_Liste } from './components/Player_Liste';

let socket = new WebSocket("ws://localhost:3001");


/*function test(){
  const url="http://localhost:3001/hello";
  var myFetch = fetch(url);

  myFetch.then(function (response) {
    response.text().then(text => {console.log(text)});
  })
}*/


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
         
      </a>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Player_Liste></Player_Liste>
        </div>
        
      </header>
    </div>

  );
}

export default App;
