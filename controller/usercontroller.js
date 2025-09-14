// import usersList from "../model/userModel.js";

import { userList } from "../model/userModel";

export function handleUsers(req,res){

    const userData = userList();

    console.log(userData);  
   res.render('user',{users:userData})
}