import express, { urlencoded } from "express"
import dotenv from "dotenv"
import DBConnect from "./utils/DBConnect"
import Razorpay from "razorpay"
import router from "./router/paymentRouter"
dotenv.config()
DBConnect()

export const instance=new Razorpay({
    key_id:process.env.RAZORPAY_KEY,
    key_secret:process.env.RAZORPAY_SECRET
})

const app=express()

app.use(express.json())
app.use(urlencoded({extended:true}))
app.use(express.static("public"))
app.use("/api",router)
app.get('/api/getKey', (req, res) => {
    // Ensure the environment variable is loaded
    if (!process.env.RAZORPAY_KEY) {
        return res.status(500).json({ error: 'RAZORPAY_KEY is not defined' });
    }
    res.status(200).json({ key: process.env.RAZORPAY_KEY });
});
app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})