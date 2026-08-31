import {Route, Router} from "express";

let nameRouter = Router();
nameRouter.route("/")
.post((req,res)=>{
    res.json("name post")
})
.get((req,res)=>{
    res.json("name get")
})
.patch((req,res)=>{
    res.json("name patch")
})
.delete((req,res)=>{
    res.json("name delete")
});

export default nameRouter;