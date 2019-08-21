
const express=require('express');
//创建路由容器
const router=express.Router();




//将路由挂在到router路由容器内
router.get("/student",(req,res)=>{

});







/*module.exports=(app)=>{
	console.log(app);
	app.get("/",(req,res)=>{
   fs.readFile("./db.json","utf8",(err,data)=>{
   	 if(err){
   	 	return res.status(500).send(err+"Server error");
   	 }
   
   	console.log(data);//string类型
   	 var student=JSON.parse(data).students;//.students;
     console.log("student="+student);
     res.render('index.html',{
      "students":student,
      "names":["a","b","c"]

	})

   })
   
	
});
}*/