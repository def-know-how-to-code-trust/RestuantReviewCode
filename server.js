var express = require("express");
var restuantController = require('./controllers/restuantController');
var reviewController = require('./controllers/reviewController');
var userController = require('./controllers/UserController');
var menuCatController = require('./controllers/menuCatController');
const { application } = require("express");
var app =express();
app.use(express.static("./public"));
app.use(express.json());//link to json from client


//review functions

app.route('/comments/getall').get(reviewController.getAllReviews);
app.route('/comments/get/:id').get(reviewController.getReviewsByRes);
app.route('/comments/add').post(reviewController.addReview);
app.route('/comments/update/:id').put(reviewController.editReview);
app.route('/comments/delete/:id').delete(reviewController.delReview);
app.route('/comments/get/desc/:id').get(reviewController.getReviewByResDESC);
app.route('/comments/get/asc/:id').get(reviewController.getReviewByResASC);
app.route('/comments/get/avg/:id').get(reviewController.getReviewAvgByResID);
//restruant functions
app.route('/restuant').get(restuantController.getAllRestuant);
app.route('/restuant/get/:id').get(restuantController.getRestuantByID);
app.route('/restuant/getbyres/:Resid').get(restuantController.getRestuantByResID);
app.route('/restuant/search/:namepar').get(restuantController.searchRestuantByName);
//user functions

app.route('/users/getall').get(userController.getAllUsers);
app.route('/users/get/:id').get(userController.getUserById);
app.route('/users/add').post(userController.addUser);
app.route('/users/del/:id').delete(userController.delUser);
app.route('/users/update/:id').put(userController.editUser);
app.route('/users/login').post(userController.getLoginCred);
//MenuCat functions

app.route('/menucat/getall').get(menuCatController.getAllMenuCat);
app.route('/menucat/get/:restID').get(menuCatController.getMenCatByRes);
app.route('/menucat/yes/:cate').get(menuCatController.getResByMenuCatInc);
app.route('/menucat/no/:cate').get(menuCatController.getResByMenuCatExc);


//start the nodejs to listen for incoming request
app.listen(8080,"127.0.0.1");
console.log("web server running @ localhost");// output to console
