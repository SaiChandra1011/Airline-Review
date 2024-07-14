require("dotenv").config();
const express = require("express");
const db = require("./db");
const morgan = require("morgan");
const app = express();

app.use(express.json());

// get all airlines
app.get("/api/v1/airlines", async (req,res)=>{

    try{
        const results =  await db.query("select * from airlines");
        console.log(results);
        res.status(200).json({
            status:"success",
            results:results.rows.length,
            data:{
                airlines:results.rows,
            },
        });
    }
    catch(err){
        console.log(err);

    }
});




// get particular airline
app.get("/api/v1/airlines/:id", async(req,res)=>{
    console.log(req.params.id);
    try{
        const results = await db.query("select * from airlines where id = $1" [req.params.id]);
        res.status(200).json({
            status:"succes",
            data:{
                airlines:results.rows[0],
            }
        });
    }
    catch(err){
        console.log(err);
    }



});

// create a airline
app.post("/api/v1/airlines", (req,res)=>{
    console.log(req.body);

    res.status(201).json({
        status:"succes",
        data:{
            airlines:"indigo",
        }
    });
});

// update airline
app.put("/api/v1/airlines/:id", (req,res)=>{
    console.log(req.params.id);
    console.log(req.body);

    res.status(200).json({
        status:"succes",
        data:{
            airlines:"indigo",
        }
    });
});


//delete airline
app.delete("/api/v1/airlines/:id", (res,req)=>{
    res.status(204).json({
        status : "succes",
    });
});


const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`server is up and listining on port ${port}`);
});
 