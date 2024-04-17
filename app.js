const express = require('express')
const app= express();

// --------------- Basic settings -------------------- 
app.listen(8000);  // port fir listen
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded())


app.get('/',(req,res)=>{
    res.render('loginPage')
})