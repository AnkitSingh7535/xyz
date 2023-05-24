const express= require("express")
const app = express()


app.get("/",(req,res) =>{
res.send("hi this is get req")

app.post("/",(req,res) =>{
   res.send("hi this is post req")

})

})
const PORT = 3000
app.listen(PORT,()=>console.log("server is running at 3000")) 


 