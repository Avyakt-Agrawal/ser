var express=require('express');
var cors =require('cors');
var bodyParser=require('body-parser');
var app=express();
const mongoose=require('mongoose');
const port =  4000;

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended:false
    })
)
const mongoURI='mongodb+srv://warlock:bruno2310@cluster0.9neki.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(
    mongoURI,
    {
        useNewUrlParser:true
    }
)



var routes = require('./routes/routes')
app.use('/routes',routes)

app.listen(port,function(){
    console.log('server is running a port:'+port)
})