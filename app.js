const express = require('express');
const app = express();
const port = 3000;

// Middleware:
function timeCheck (req, res, next)
{
    let date = new Date();
    let hours = date.getHours();
    let days = date.getDay();

    if (days >= 2 && days <=5 && hours >= 9 && hours <= 17)
    {
        next();
    }else
    {
        res.sendFile(__dirname + '/views/4-ErrorPage/ErrorPage.html');
        console.log(hours, days);
    }
};


app.use(express.static('public'));
app.use(timeCheck);

// Route:
app.get('/', function(req, res){
    res.sendFile( __dirname + '/views/1-Home/home.html' );
});

app.get('/service', (req,res)=>{
    res.sendFile( __dirname + '/views/2-Services/services.html');
});

app.get('/contact', (req, res)=>{
    res.sendFile( __dirname + '/views/3-Contact/contact.html' );
});


app.listen(port, ()=>{
    console.log(`You are listen in port at:"http://localhost:%s"`, port);
});