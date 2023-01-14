import Users from "../../../model/registerSchema"
const bcrypt = require('bcrypt')

async function handler(req,res){
    if(req.method === 'POST'){
        try {
            const{username, password} = req.body
         const userID =   Users.findOne({username})
         const validUser = await bcrypt.compare(password, userID.password)

        } catch (error) {
            console.log(error)
        }
    }
}

export default handler