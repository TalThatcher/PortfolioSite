const path = require('path')
module.exports ={
    getIndex: (req, res)=>{
       res.sendFile(path.resolve(__dirname + "/../views/index.html"))       
    }
}