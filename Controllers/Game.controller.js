
import Game from "../Models/Game.js"


var games = [new Game("dmc5",2019), new Game("re8",2021), new Game("nfs",2019)]
export  function getAll(req,res){
    res.status(200).json(games)
}

export  function getone(req,res){
    res.status(200).json(games.find(val => val.name == req.params.name))
}

export  function add(req,res){
    const game = new Game(req.body.name, req.body.year)
    games.push(game)
    res.status(200).json({message:"Created !", entity: game})
}
// todo
export  function updateGameelkol (req,res){
    let game = games.find(val => val.name == req.params.name)
    game.year = req.body.year
    game.name = req.body
    games[req.params.name] = game
    res.status(200).json({message:"Updated !",name: req.params.name})
}

export  function updateichtar (req,res){
    let game = games.find(val => val.name == req.params.name)
    game.year = req.body.year
    games[req.params.name].year = game.year
    res.status(200).json({message:"Updated !",name: req.params.name})
}
//todo
export  function deleteGame (req,res){
    let game = games.find(val => val.name == req.params.name)
    games.splice(games.indexOf(game),1)
    res.status(200).json({message:"Deleted !", games})
}
