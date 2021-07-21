const express = require('express');
const app = new express();

let loginDetails = [];

function get_month(month_input) {
  
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];  
    month_text = "Invalid Month";
    for (let i = 0; i < months.length; i++) {
        if (month_input-1==i){
            month_text = months[i];
        }  
    }
    // console.log(month_input, month_text)
    return month_text   // The function returns the product of p1 and p2
}

app.get("/",(req,res)=>{
    res.send("Welcome to the express server")
})

app.get("/loginDetails",(req,res)=>{
    res.send(JSON.stringify(loginDetails));
})

app.post("/login/:name",(req,res)=>{
    loginDetails.push({"name":req.params.name,"login_time":new Date()});
    res.send(req.params.name + ", You are logged in!")
})

app.get("/:name",(req,res)=>{
    res.send("Hello "+req.params.name)
})

app.get("/fetch_month/:num",(req,res)=>{
    res.send("The month fetched is, " + get_month(req.params.num))
})


app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})

