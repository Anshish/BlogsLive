require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const blogRoutes=require('./routes/blogRoutes');
// const dotenv=require("dotenv");
// const Blog=require('./models/blog');

const app=express();

const dbURI=`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.2gzry.mongodb.net/node?retryWrites=true&w=majority`;
// mongoose.connect(dbURI)
//     .then((result)=>app.listen(3000))
//     .catch((err)=>console.log(err));

mongoose.connect(dbURI);

app.set('view engine','ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.redirect('/blogs');
});


app.get('/about',(req,res)=>{
    res.render('about',{title:'About'});
});


app.use(blogRoutes);


app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
});

// app.listen(3000,function(){
//   console.log("server started");
// })


let port=process.env.PORT;
if(port==null || port==""){
  port=3000;
}

app.listen(port, function() {
  console.log("Server has started.")
});
