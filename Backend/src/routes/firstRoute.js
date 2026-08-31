import { Route, Router } from "express";

let firstRouter = Router();
firstRouter.route("/")
.post((req, res)=>{
    res.json("home post");
})
.get((req, res)=>{
    res.json("home get");
})
.patch((req, res)=>{
    res.json("home patch");
})
.delete((req, res)=>{
    res.json("home delete");
});

//url=>
//method=>

//post=>create
//get=>read
//update=>put/patch
//delete=>delete

export default firstRouter;