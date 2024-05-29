const express= require('express')
const mysql= require('mysql2')
const cors= require('cors')
const app=express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'amil',
    database: 'Coin'
  });
  app.get('/coins',(req,res)=>{
    console.log('erorr')

    connection.query('SELECT * FROM coins',(err,data)=>{
      console.log('12')
      if(!err){
        res.status(200).json(data)
      }else{
        res.status(404).json('error')
        console.log('erorr')
      }
    })
  })
  app.listen(5000, (err) => {
    if (!err) {
        console.log('Server is going on')
    }
})