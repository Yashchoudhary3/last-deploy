import  express  from "express";
import mongoose from "mongoose";
import cors from 'cors'
import answerRoutes from './routes/Answers.js'
import userRoutes from './routes/users.js'
import questionRoutes from './routes/Question.js'
import dotenv from 'dotenv'
const app = express();
app.use(express.json({limit: "30mb" , extended: true}))
app.use(express.urlencoded({limit: "30mb" , extended: true}))
app.use(cors());
dotenv.config();g

app.get('/',(req,res) => {
    res.send("this is a stack overflow clone API")
})
app.use('/user' , userRoutes)
app.use('/questions' , questionRoutes)
app.use('/answer' ,answerRoutes)
const PORT = process.env.PORT || 5000
// const CONNECTION_URL = "mongodb+srv://admin:admin@stack-overflow-clone.rplm9xc.mongodb.net/?retryWrites=true&w=majority"
// const CONNECTION_URL ="mongodb+srv://admin:admin@stack-overflow-clone.a01sts3.mongodb.net/?retryWrites=true&w=majority"
// mongoose.connect( CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true})
// .then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
// .catch((err) => console.log(err.message))


// const PORT= process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server Running on the PORT ${PORT}`)
})


// const DB_URL = process.env.CONNECTION_URL
const DATABASE_URL = process.env.CONNECTION_URL
mongoose.connect(DATABASE_URL,{useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("MongoDB database connected")
}).catch((error)=>{
    console.log(error)
})