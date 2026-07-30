const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { GoogleGenAI } = require("@google/genai");




const app = express();
const PORT = process.env.PORT ||3000;


const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/",(req,res,)=>{
   res.send("welcome to ai helper bot");

});



app.get("/joke",async(req,res)=>{
    try{
        const response = await ai.models.generateContent({
            model:"gemini-2.5-flash",
            contents:"Tell me one short funny joke."
        });
         res.json({
            message:response.text
         });
    }catch(error){
        console.log(error);
        res.status(500).json({
         message:"something went wrong."
        });
    }
});


app.get("/motivation",async(req,res)=>{
    try{
        const response = await ai.models.generateContent({
            model:"gemini-2.0-flash",
            contents:"Give me one short motivational quote."
        });

        res.json({
            message:response.text
        });

    }catch(error){
        console.log(error);
        // res.status(500).json({
        //     message:"something went wrong."
        // });
    }
})




app.get("/tip-of-the-day",async(req,res)=>{
    try{

        const response = await ai.models.generateContent({
            model:"gemini-2.5-flash",
            contents:"give me one useful study tip in one sentence."

        });

        res.json({
            message:response.text
        });

    }catch (error){
        console.error(error);
        res.status(500).json({
            message:"something went wrong."
        });
    }
});


app.listen(PORT,()=>{
   console.log(`server is running on http://localhost:${PORT}`);
});
