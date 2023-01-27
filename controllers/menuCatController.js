"use strict";
const { json } = require('express');
const menuCatDB = require('../models/menuCatDB');
const restDB = require('../models/RestuantDB');
var MenuCatDb = new menuCatDB();
var RestDB = new restDB();
var resArray =[];
var restArr =[];
function getAllMenuCat(request,respond){
    MenuCatDb.getAllMenuCat(function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
            console.log("got them data")
        }
    })
}
function getMenCatByRes(request,respond){
    var restID = request.params.restID;
    MenuCatDb.getMenCatByRes(restID,function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
            console.log("got them menu cat by res id");
        }
    })
}
function getResByMenuCatInc(request,respond){
    var category = request.params.cate;
    var menuCat =("menu_"+category);
    MenuCatDb.getResByMenucatADV(menuCat,"yes",function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
            console.log("Res by menucat exclusive gotten");
        }
    })
}
function getResByMenuCatExc(request,respond){
    var category = request.params.cate;
    var menuCat =("menu_"+category);
    MenuCatDb.getResByMenucatADV(menuCat,"no",function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
            console.log("Res by menucat exclusive gotten");
        }
    })
}


module.exports = {getAllMenuCat,getMenCatByRes,getResByMenuCatInc,getResByMenuCatExc};