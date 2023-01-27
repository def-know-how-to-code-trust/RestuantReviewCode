"use strict"
class Users{
    constructor(id, userId, userName,userPassword,userEmail,userContact,userPostal,userPic){
        this.id = id;
        this.userId = userId;
        this.userName = userName;
        this.userPassword = userPassword;
        this.userEmail = userEmail;
        this.userContact = userContact;
        this.userPostal = userPostal;
        this.userPic = userPic;

    }

    getId() {return this.id;}
    getUserId() {return this.userId;}
    getUserName() {return this.userName;}
    getUserPass() {return this.userPassword;}
    getUserEmail() {return this.userEmail;}
    getUserContact() {return this.userContact;}
    getUserPostal() {return this.userPostal;}
    getUserPic() {return this.userPic;}

    setId(id) {this.id = id;}
    setUserId(userId) {this.userId = userId;}
    setUserName(userName) { this.userName = userName;}
    setUserPass(userPassword) { this.userPassword = userPassword;}
    setUserEmail(userEmail) {this.userEmail = userEmail;}
    setUserContact(userContact) {this.userContact = userContact;}
    setUserPostal(userPostal) {this.userPostal = userPostal;}
    setUserPic(userPic) {this.userPic = userPic;}

}

module.exports=Users;