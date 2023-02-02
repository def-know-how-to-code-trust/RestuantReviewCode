"use strict";
var db = require('../db-connections');
class UsersDB{
    getAllUsers(callback){
        var sql = "SELECT * FROM restuant_review.users";
        db.query(sql,callback);
    }
    addUser(Users,callback){
        var sql = "INSERT INTO users(_id_user,user_id,user_name,user_pass,user_email,user_contact,user_postal,user_pic) VALUES(?,?,?,?,?,?,?,?)";
        return db.query(sql,[Users.getId(),
            Users.getUserId(),
            Users.getUserName(),
            Users.getUserPass(),
            Users.getUserEmail(),
            Users.getUserContact(),
            Users.getUserPostal(),
            Users.getUserPic()],callback);
    }
    delUser(ID,callback){
        var sql = "DELETE from restuant_review.users WHERE _id_user =?";
        return db.query(sql,[ID],callback);
    }
    getUserById(ID,callback){
        var sql = "SELECT * FROM restuant_review.users WHERE user_id =?";
        return db.query(sql,[ID],callback);
    }
    editUser(Users,callback){
        var sql = "UPDATE restuant_review.users SET user_id=?,user_name =?,user_pass=?,user_email=?,user_contact=?,user_postal=?,user_pic=? WHERE _id_user =?";
        return db.query(sql,[
            Users.getUserId(),
            Users.getUserName(),
            Users.getUserPass(),
            Users.getUserEmail(),
            Users.getUserContact(),
            Users.getUserPostal(),
            Users.getUserPic(),
            Users.getId()],callback);
    }
    getLoginCred(userid,callback){
        console.log("getLoginCred",userid);
        var sql = "SELECT user_pass FROM restuant_review.users WHERE user_id =?";
        return db.query(sql,[userid],callback);
    }
}
module.exports = UsersDB;