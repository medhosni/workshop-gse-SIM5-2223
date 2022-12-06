
import Game from "../Models/Game.js"



export  function getAll(req,res){
   Game
   .find({})
   .select('name')
  
   .then(docs =>{
    res.status(200).json(docs)
   })
   .catch(err =>{
    res.status(400).json(err)
   })
}

export  function getone(req,res){
Game
.findOne({"name":req.params.name})
.then(game =>{
    res.status(200).json(game)
   })
   .catch(err =>{
    res.status(400).json(err)
   })
}
   
export  function add(req,res){
  /*  Game
    .create({...req.body})
    .then(newGame =>{
        res.status(200).json(newGame)
       })
       .catch(err =>{
        res.status(400).json(err)
       })
*/
const game = new Game(req.body)
game
.save()
.then(newGame =>{
    res.status(200).json(newGame)
   })
   .catch(err =>{
    res.status(400).json(err)
   })
}

export  function updateGameelkol (req,res){
   
    Game
    .findOneAndUpdate({"name":req.params.name},{...req.body})
    .then(game =>{
     res.status(200).json(game)
    })
    .catch(err =>{
     res.status(400).json(err)
    })
}

export  function updateichtar (req,res){
   Game
   .findOneAndUpdate({"name":req.params.name},{"onSale":req.body.onSale})
   .then(game =>{
    res.status(200).json(game)
   })
   .catch(err =>{
    res.status(400).json(err)
   })
}

export  function deleteGame (req,res){
   /* Game
    .remove({'name':req.params.name})
    .then(game =>{
        res.status(200).json(game)
       })
       .catch(err =>{
        res.status(400).json(err)
       })
*/
Game
.findOneAndRemove({'name':req.params.name})
.then(game =>{
    res.status(200).json(game)
   })
   .catch(err =>{
    res.status(400).json(err)
   })


    }
