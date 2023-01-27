"use strict"
class Review{
    constructor(id, restuantId, userId, reviewId, username, review, rating, datePosted, priceRange, reivewPic){
        this.id = id;
        this.restuantId = restuantId;
        this.userId = userId;
        this.review = review
        this.reviewId = reviewId;
        this.username = username;
        this.rating = rating;
        this.datePosted = datePosted;
        this.priceRange = priceRange;
        this.reivewPic = reivewPic;
    }

    getId() {return this.id;}
    getRestuantId() {return this.restuantId;}
    getUserId() {return this.userId;}
    getReviewId() {return this.reviewId;}
    getReview() {return this.review;}
    getUsername() {return this.username;}
    getRating() {return this.rating;}
    getDatePosted() {return this.datePosted;}
    getPriceRange() {return this.priceRange;}
    getReviewPic() {return this.reivewPic;}

    setRestuantId(restuantId){
        this.restuantId=restuantId;
    }
    setUserId(userId){
        this.userId=userId;
    }
    setReview(review){
        this.review=review;
    }
    setUsername(username){
        this.username=username;
    }
    setRating(rating){
        this.rating=rating;
    }
    setDatePosted(datePosted){
        this.datePosted=datePosted;
    }
    setPriceRange(priceRange){
        this.priceRange=priceRange;
    }
    setReviewPic(reivewPic){
        this.reivewPic =reivewPic;
    }
    setReviewId(reviewId){
        this.reviewId = reviewId;
    }
}

module.exports=Review;