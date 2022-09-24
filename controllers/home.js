const path = require('path')
require('dotenv').config({path: './config/.env'});
module.exports ={
    getIndex: (req, res)=>{
        console.log(process.env.STATUS === "false")
       res.render(path.resolve(__dirname + "/../views/index.ejs"),{status:process.env.STATUS})       
    }
}