"use strict";
var db = require('../db-connections');
class ReviewsDB{
    getAllReviews(callback){
        var sql ="SELECT * FROM restuant_review.reviews";
        db.query(sql,callback);
    }
    addReview(review,callback){
        var sql = "INSERT INTO reviews(_id_review, revi_res_id, revi_user_id, revi_id, revi_user_name, revi_review, revi_rating, revi_dateposted, revi_price_range, revi_review_pic) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?,?)";
        return db.query(sql, [review.getId()
            ,review.getRestuantId()
            , review.getUserId()
            , review.getReviewId()
            ,  review.getUsername()
            , review.getReview()
            , review.getRating()
            , review.getDatePosted()
            , review.getPriceRange()
            , review.getReviewPic()],callback);
    }
    editReview(review,callback){
        var sql = "UPDATE restuant_review.reviews SET revi_review = ?, revi_datePosted = ?, revi_review_pic = ?, revi_price_range = ? WHERE _id_review =?";
        return db.query(sql, [review.getReview()
            ,review.getDatePosted()
            ,review.getPriceRange()
            ,review.getReviewPic()
            , review.getId()],callback);
    }
    delReview(reviewID,callback){
        var sql = "DELETE from restuant_review.reviews WHERE _id_review =?";
        return db.query(sql,[reviewID],callback);
    }
    getReviewsByRes(resID,callback){
        var sql ="SELECT * FROM restuant_review.reviews WHERE revi_res_id =?";
        db.query(sql,[resID],callback);
    }
    getReviewByResADV(res_ID,hmm,callback){
        if (hmm =="a"){
            var sql ="SELECT * FROM restuant_review.reviews WHERE revi_res_id =? ORDER BY revi_rating ASC";
            db.query(sql,[res_ID],callback);
        }
        else{
            var sql ="SELECT * FROM restuant_review.reviews WHERE revi_res_id =? ORDER BY revi_rating DESC";
            db.query(sql,[res_ID],callback);
        }
    }
    getReviewAvgByResID(res_ID,callback){
        var sql ="SELECT AVG(revi_rating) FROM restuant_review.reviews WHERE revi_res_id =?";
        db.query(sql,[res_ID],callback);
    }

}

module.exports = ReviewsDB;