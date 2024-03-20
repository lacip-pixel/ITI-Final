const express = require("express");
const app = express();

app.use(express.static("."));

app.get("/support",function(req,res){
    
    const team = ["Hamid", "Laci"];

    res.json(team)
});

app.listen(3000, () => {
   console.log("Listening on port 3000");
});
