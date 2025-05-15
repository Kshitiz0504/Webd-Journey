const express = require("express");
const app = express();

const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());

app.get("/", function(req, res) {
    // write logic
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i = 0; i<johnKidneys.length; i++) {
        if(johnKidneys[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys+1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
    
})

app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    });
    res.json({
        msg: "Done"
    })
})

app.put("/", function(req, res){
    for(let i = 0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

// removing all the unhealthy kidneys
app.delete("/", function(req, res){

    // you should return a 411
    // only if atleast one unhealthy kidney is there do this, else return 411
    let atLeastOneUnhealthyKidney = false;
    for(let i=0; i<users[0].kidneys.length; i++) {
        if(!users[0].kidneys[i].healthy) {
            atLeastOneUnhealthyKidney = true;
        }
    }

    if(atLeastOneUnhealthyKidney) {
    const newKidneys = [];
    for(let i=0; i<users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy) {
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({msg: "Done"});
    } else {
        res.status(411).json({
            msg: "You have no unhealthy kidneys"
        });
    }
})


app.listen(3000);