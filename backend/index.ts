import express, { Express, Request, Response } from 'express';
import cors from "cors";
import * as http from 'http';
import * as WebSocket from 'ws';

const app: Express = express();
const port = 3001;

app.use(cors());

const server = http.createServer(app);

const webSocketServer = new WebSocket.Server({server});
webSocketServer.on('connection', 
     (webSocket: WebSocket)=>{
       webSocket.on('message', (message: string) =>
       {
          console.log("Message from client :: "+ message);
          webSocket.send("Echo :: " + message);
     });

     let time = 0;
     webSocket.send("Welcome to chat !!");
     
     setInterval(()=>{
      time+= 1;
       webSocket.send("time passed : "+time);
     }, 1000)
});



app.get('/hello', (req: Request, res: Response) => {
  res.send('Hello');
});

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});



