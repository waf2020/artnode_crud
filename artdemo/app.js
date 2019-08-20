
const fs=require('fs');
const express=require('express');
const app=express();
const router=require('./router.js')

app.use(express.static('node_modules'));
app.use(express.static('public'));

router(app);


app.engine('html',require('express-art-template'));

app.listen(3000,()=>{
	console.log("runing...");  //启动node服务器
})