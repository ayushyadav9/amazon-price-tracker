const express = require('express')
const mongoose = require('mongoose')
const Authroute = require("./routes/auth");




const app = express()
let port =8000
app.use(express.urlencoded({ extended: true }))

const db = 'mongodb+srv://ayush:admin@cluster0.1i4go.mongodb.net/amazondb?retryWrites=true&w=majority'
mongoose.connect(db,{ useNewUrlParser: true,useUnifiedTopology: true})
    .then((result) => {
      console.log("Connected to database")
      app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`))
    })
    .catch((err) => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World!')
})


// app.use("/user", userauth);
app.use("/user", Authroute);






// app.post('/products', (req,res) => {
//   if(req.method=='POST'){
//     res.send('Posted')
//     console.log(req.body);
//   }
// })

// app.get('/products', (req,res) => {
//   if(req.method=='GET'){
//     res.send('Get')
//   } 
// })

// app.get('/products/:name', (req,res) => {
//   if(req.method=='GET'){
//     res.send('Product Name: '+req.params.name )
//   } 
// })











// app.get('/add',(req,res)=>{
//   const user = new User({
//     username: 'Ayush1fsf',
//     email:'ayushyadav935@gmail.co1m2fd',
//     password:'saas',
//     password2:"dsad"
//   })
//   user.save()
//     .then((result)=> res.send(result))
//     .catch((err)=>console.log(err))
// })

