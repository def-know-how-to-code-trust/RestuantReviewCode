"use strict";
const ReviewsDB = require('../models/ReviewsDB');
const Review = require('../models/Review');
const { request } = require('express');

var reviewsDB = new ReviewsDB();

function getAllReviews(request, respond){
    reviewsDB.getAllReviews(function(error, result){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
            console.log("got all reviews");
        }
    })
};

function addReview(request,respond){
    var now = new Date();
    console.log(now);
    var review = new Review(null
        ,request.body.revi_res_id
        ,request.body.revi_user_id
        ,request.body.revi_id
        ,request.body.revi_user_name
        ,request.body.revi_review
        ,request.body.revi_rating
        ,now.toDateString()
        ,request.body.revi_price_range
        ,request.body.revi_review_pic);
    reviewsDB.addReview(review,function(error,result){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
            console.log("review added");
        }
    })
};

function editReview(request,respond){
    console.log("edit rew controller called")
    var now = new Date();
    var reviewID = parseInt(request.params.id);
    var review = new Review(reviewID,
    null,null,null,null
    ,request.body.revi_review
    ,request.body.revi_rating
    ,now.toDateString()
    ,request.body.revi_review_pic
    ,request.body.revi_price_range);
    console.log(review);
    reviewsDB.editReview(review,function(error,result){
        if (error){
            respond.json(error);
            console.log(error);
            console.log(now);
        }
        else{
            respond.json(result);
            console.log(now);
            console.log("review"+reviewID+"edited");
        }
    })

}

function delReview(request,respond){
    var reviewID = request.params.id;
    reviewsDB.delReview(reviewID,function(error,result){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
            console.log("review"+reviewID+"deleted");
        }
    })
}

function getReviewsByRes(request, respond){
    var ResID = request.params.id;
    reviewsDB.getReviewsByRes(ResID,function(error, result){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
            console.log("got review by res ID");
        }
    })
};

function getReviewByResASC(request,respond){
    var ResID = request.params.id;
    reviewsDB.getReviewByResADV(ResID,"a",function(error,result){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
            console.log("got review by res ID sorted by ASC");
        }
    })
}

function getReviewByResDESC(request,respond){
    var ResID = request.params.id;
    reviewsDB.getReviewByResADV(ResID,"d",function(error,result){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
            console.log("got review by res ID sorted by DESC");
        }
    })
}

function getReviewAvgByResID(request,respond){
    var ResID = request.params.id;
    reviewsDB.getReviewAvgByResID(ResID,function(error,result){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
            console.log(result);
        }
    })
}

module.exports = {getAllReviews,addReview,editReview,delReview,getReviewsByRes,getReviewByResDESC,getReviewByResASC,getReviewAvgByResID};