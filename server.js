const express = require('express');
const app = express();
const session = require('express-session');
const port = process.env.PORT || 3000;

const mainRoutes = require('./routes/main');
const commissionRoutes=require('./routes/commission');

require('dotenv').config({path: './config/.env'});
//test
app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: { 
            //10 minutes max age
            maxAge: 6000000
        },      
    })
)
app.set('view engine', 'ejs');



app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/", mainRoutes);
app.use("/commission", commissionRoutes)

app.listen(port, ()=>{
    console.log('Server running on port ' + port)
})

