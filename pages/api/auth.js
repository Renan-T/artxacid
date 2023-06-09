import connect from "../../lib/mongodb";
import User from "../../model/userSchema"

connect()

export default async function handler(req, res){
   const {email,password} = req.body
   const user = await User.findOne({email,password})
   if(!user){
    return res.status(401).redirect('/login')
   }
   else {
    res.redirect('/admin')
   }
}