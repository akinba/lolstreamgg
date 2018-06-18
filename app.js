const app	= require("express")();
app.set("view engine", "ejs");


app.get("/",(req,res)=>{
	res.send('Haziriiim');
});

app.listen(3000, process.env.IP, function(){
    console.log("Haziriiim...");
});