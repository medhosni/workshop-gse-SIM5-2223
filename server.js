import{ createServer } from 'http'
import  express  from 'express';
import { readFile } from 'fs';
import { join, dirname } from 'path';
import {fileURLToPath} from 'url';



const app = express();
const hostname = '127.0.0.1';
const port = process.env.PORT || 9090;


// declaration de la classe Game 


class Game{
    constructor(name , year){
        this.name= name;
        this.year=year; 
    }
}

app.get('/',(req,res)=>{
res.status(200).json('hello world ');

})


app.get('/games/:name',(req,res)=>{
    res.status(200).json(`the name of the game is ${req.params.name} `);
    
    })



    app.get('/entity',(req,res)=>{
        
        const game = new Game("dmc5",2019);
        res.status(200).json(game);
        
        })


    app.get('/secret',(req,res)=>{
        res.status(401).json('');
        
        })
app.listen(port,hostname,()=>{
    console.log(`server on http://${ hostname }:${ port }`);
    
    })

/*
const server = createServer((req , res )=>{
res.statusCode=200
res.setHeader('Content-type','text/plain');
res.end('Hello 4 SIM 5');


})


server.listen(port,hostname,()=>{
console.log(`server on http://${ hostname }:${ port }`);

})*/


//excercice


app.get('/game', (req, res) => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    readFile(join(__dirname, 'SteamGames.json'), function(err, data) {
      if(!err) {
        const list = JSON.parse(data);
        let games = [];
        for(let i = 0; i < list.length; i++) {
          games.push(new Game(list[i].Game, list[i].Year, list[i].GameLink));
        }
        res.status(200).json(games);
      }else {
        res.status(404).json({ error : err });
      }
    });
  });
  
  app.get('/game/select/:year', (req, res) => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    readFile(join(__dirname, 'SteamGames.json'), function(err, data) {
      if(!err) {
        const list = JSON.parse(data);
        let games = [];
        for(let i = 0; i < list.length; i++) {
          games.push(new Game(list[i].Game, list[i].Year, list[i].GameLink));
        }
        res.status(200).json(games.filter(val => val.year > req.params.year));
      }else {
        res.status(404).json({ error : err });
      }
    });
  });
  
  app.get('/game/:name', (req, res) => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    readFile(join(__dirname, 'SteamGames.json'), function(err, data) {
      if(!err) {
        const list = JSON.parse(data);
        let games = [];
        for(let i = 0; i < list.length; i++) {
          games.push(new Game(list[i].Game, list[i].Year, list[i].GameLink));
        }
        res.status(200).json({ url : games.find(val => val.name == req.params.name).url });
      }else {
        res.status(404).json({ error : err });
      }
    });
  });
  