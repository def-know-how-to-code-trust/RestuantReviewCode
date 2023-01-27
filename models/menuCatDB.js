"use strict"
var db = require('../db-connections');
class menuCatDB{
    getAllMenuCat(callback){
        var sql = "SELECT * from restuant_review.menucat"
        db.query(sql,callback);
    }
    getMenCatByRes(restId,callback){
        var sql = "SELECT * FROM restuant_review.menucat WHERE menu_res_id =?"
        return db.query(sql,[restId],callback);
    }
    getResByMenucatADV(menuCat,hmm,callback){
        if(hmm == "yes"){
            var sql = ("SELECT * FROM restuant_review.restruant INNER JOIN restuant_review.menucat ON menucat.menu_res_id=restruant.res_ID WHERE "+menuCat+"=1");
            return db.query(sql,callback);
        }else{
            var sql = ("SELECT * FROM restuant_review.restruant INNER JOIN restuant_review.menucat ON menucat.menu_res_id=restruant.res_ID WHERE "+menuCat+"=0");
            return db.query(sql,callback);
        }
    }

}

module.exports = menuCatDB;