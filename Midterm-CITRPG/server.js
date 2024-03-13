const express = require("express");
const app = express();

app.use(express.static("html"));

app.get("/support",function(req,res){
    const age=112;
    res.json(age)
});

app.listen(3000, () => {
   console.log("Listening on port 3000");
});
