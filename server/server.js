require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");
const morgan = require("morgan");
const app = express();

app.use(cors());
app.use(express.json());

// get all airlines
app.get("/api/v1/airlines", async (req,res)=>{

    try{
        const results =  await db.query("select * from airlines");
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
            },
        });
    }
    catch(err){
        console.log(err);
    }



});

// create a airline
app.post("/api/v1/airlines", async (req,res)=>{
    console.log(req.body);
    try{
        const results = await db.query("INSERT INTO airlines (airline_name, country_of_origin) values($1, $2) returning *",
             [req.body.airline_name, req.body.country_of_origin]);
             console.log(results);
             res.status(201).json({
                status:"succes",
                data:{
                    airlines:results.rows[0],
                },
            });
    }
    catch(err){
        console.log(err);
    }

});

// update airline
app.put("/api/v1/airlines/:id",async (req,res)=>{
    try{
        const results = await db.query("UPDATE airlines SET airline_name = $1 , countru_of_origin = $2 WHERE id = $4 returning *", [req.body.airline_name, 
            req.body.countru_of_origin, req.params.id ]);

            res.status(200).json({
                status:"succes",
                data:{
                    airlines:results.rows[0],
                },
            });
            console.log(results);
    }
    catch(err){
        console.log(err);

    }
    console.log(req.params.id);
    console.log(req.body);

});


//delete airline
app.delete("/api/v1/airlines/:id", async(res,req)=>{
    try{
        const results = db.query("DELETE FROM airlines where id = $1", [req.params.id]);
        res.status(204).json({
            status : "succes",
        });
    }
    catch(err){
        console.log(err);

    }

 
});


const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`server is up and listining on port ${port}`);
});
 