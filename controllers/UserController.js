"use strict";
const UsersDB = require('../models/UsersDB');
const Users = require('../models/Users');
const { request } = require('express');

var usersDB = new UsersDB();

function getAllUsers(request,respond){
    usersDB.getAllUsers(function(error,result){
        if(error){
            respond.json(error);
        }else{
            respond.json(result);
            console.log("got all users");
        }
    })
};

function addUser(request,respond){
    var user = new Users(null,
        request.body.user_id,
        request.body.user_name,
        request.body.user_pass,
        request.body.user_email,
        request.body.user_contact,
        request.body.user_postal,
        request.body.user_pic);
    usersDB.addUser(user,function(error,result){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
            console.log("added user");
        }
    })
};

function delUser(request,respond){
    var usrID = request.params.id;
    usersDB.delUser(usrID,function(error,result){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
            console.log("deleted user",usrID);
        }
    })
}

function getUserById(request,respond){
    var usrID = request.params.id;
    usersDB.getUserById(usrID,function(error,result){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
            console.log("got user",usrID);
        }
    })
}

function editUser(request,respond){
    var IDD = parseInt(request.params.id);
    var user = new Users(
        IDD,
        request.body.user_id,
        request.body.user_name,
        request.body.user_pass,
        request.body.user_email,
        request.body.user_contact,
        request.body.user_postal,
        request.body.user_pic
    );
    usersDB.editUser(user,function(error,result){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
            console.log("user",IDD,"successfully updated")
        }
    })
}
function getLoginCred(request,respond){
    var userId = request.params.usrID;
    var pwd = request.body.password;
    var msg="";
    console.log("in user controller",userId);
    usersDB.getLoginCred(userId,function(error,result){
        if(error){
            throw error;
        }else{
            if(result.length>0){
                if(pwd == result[0].password){
                    msg="SUCCESS!!!";
                    console.log(msg);
                }else{
                    msg="FAIL!!!";
                    console.log(msg);
                }
            }else{
                msg="user not found"
            }
        }
        respond.json()
    })
}
function prepareMessage(msg){
    var obj = {"message":msg};
    console.log(obj);
    return obj;
}
module.exports = {getAllUsers,addUser,delUser,getUserById,editUser,getLoginCred,prepareMessage}