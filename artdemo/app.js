const express=require('express');
const app=express();

app.use(express.static('node_modules'));
app.use(express.static('public'));

app.use("/",(req,res)=>{
	res.render('index.html');
});

app.engine('html',require('express-art-template'));

app.listen(3000,()=>{
	console.log("runing...");  //启动node服务器
})