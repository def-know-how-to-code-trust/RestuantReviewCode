"use strict";
const RestuantDB = require('../models/RestuantDB');
var restuantDB = new RestuantDB();

function getAllRestuant(request,respond){
    restuantDB.getAllRestuant(function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
            console.log("got all the restuants")
        }
    })
}
function getRestuantByID(request,respond){
    var ID = request.params.id;
    restuantDB.getRestuantByID(ID,function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
            console.log("got res by id");
        }
    })
}
function getRestuantByResID(request,respond){
    var ResID = request.params.Resid;
    restuantDB.getRestuantByResID(ResID,function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
            console.log("got res by Res id");
        }
    })
}
function searchRestuantByName(request,respond){
    var NamePar = request.params.namepar;
    restuantDB.searchRestuantByName(NamePar,function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
            console.log("got res containing",NamePar);
        }
    })
}

module.exports={getAllRestuant,getRestuantByID,getRestuantByResID,searchRestuantByName};