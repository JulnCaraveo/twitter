const user=require("./../models/user")

class userservice{
    static create(id,username,name){
        return new user(id,username,name,"sin bio")
        
    }
    get getInfo(){
        return userInfoInList[0]=this.id
    }
}
module.exports=userservice