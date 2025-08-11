import express from 'express'
import cors from 'cors'
import './config/db.js';
import userRout from './routes/user.route.js';
import adminRouter from './routes/admin.route.js';

const app = express()
app.use(cors())
app.use(express.json());

app.use('/api/user',userRout)
app.use('/api/admin',adminRouter)

app.get('/hi',(req,res)=>{
    res.json({ message: 'Hello from backend!' });
})

app.listen(8080,()=>{
    console.log("App is running on port 8080");
})
