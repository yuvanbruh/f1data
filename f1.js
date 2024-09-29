
const express= require("express")
const mongoose= require("mongoose")
const bodyParser= require("body-parser")
const app =express()
const port= 3007
const uri =`mongodb://localhost:27017/f1data`
app.set(`view engine`,`ejs`)
app.use(express.json())
const main = async()=>{
    await mongoose.connect(uri)
    const schemist = new mongoose.Schema({
        driver_number: Number,
                broadcast_name: String,
                full_name: String,
                name_acronym: String,
                team_name: String,
                team_colour: String,
                first_name: String,
                last_name: String,
                headshot_url: String,  
                country_code: String,
                session_key: Number,
                meeting_key: Number, 
    })
    const yuvan = await mongoose.model("ferdinand",schemist)
    app.get("/",(req,res)=>{
        res.render("index")
    })
    app.post("/generate",async(req,res)=>{
        const reiceveddata = req.body
        console.log(reiceveddata);
        await yuvan.create(reiceveddata)
    })}
    app.listen(port,()=>{
})
main()