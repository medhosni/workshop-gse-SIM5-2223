import express from "express";

import{getAll,getone,deleteGame,add,updateGameelkol,updateichtar} from "../Controllers/Game.controller.js"
const router = express.Router()
/*

router.get("/",getAll)
router.post("/",add)
router.get("/:name",getone)
router.patch("/:name",updateichtar)
router.put("/:name",updateGameelkol)
router.delete("/:name",deleteGame)
*/

router.route('/')
.post(add)
.get(getAll);

router.route('/:name')
.get(getone)
.patch(updateichtar)
.put(updateGameelkol)
.delete(deleteGame);


export default router;