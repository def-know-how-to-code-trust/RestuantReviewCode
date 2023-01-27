"use strict";
var db = require('../db-connections');
class RestuantDb{
    getAllRestuant(callback){
        var sql = "SELECT * from restuant_review.restruant";
        db.query(sql,callback);
    }
    getRestuantByID(ID,callback){
        var sql = "SELECT * FROM restuant_review.restruant WHERE _id_res =?";
        return db.query(sql,[ID],callback);
    }
    getRestuantByResID(ResID,callback){
        var sql = "SELECT * FROM restuant_review.restruant WHERE res_ID =?";
        return db.query(sql,[ResID],callback);
    }
    searchRestuantByName(namePar,callback){
        var sql = ("SELECT * FROM restuant_review.restruant WHERE res_name LIKE '%"+namePar+"%'");
        return db.query(sql,callback);
    }
    updateResAvgStar(ResID,callback){
        var sql = "SELECT AVG(revi_rating) AS avg FROM restuant_review.reviews INNER JOIN restuant_review.restruant ON "
    }
}
module.exports=RestuantDb;