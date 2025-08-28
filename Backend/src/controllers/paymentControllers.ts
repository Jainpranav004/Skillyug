import crypto from 'crypto'
import { Payment } from "../model/paymentModel";
import { instance } from "../index.js";
import { Request,Response } from 'express';

export const checkout=async (req:Request,res:Response)=>{
    const  options={
        amount:Number(req.body.amount)*100,
        currency:"INR"
    }

    const order=await instance.orders.create(options)

    res.status(200).json({
        // id:order._id,
        success:"true",
        order
    })
}

export const paymentVerification=async(req:Request,res:Response)=>{
    const {razorpay_payment_id,razorpay_order_id,razorpay_signature}=req.body;
    console.log(req.body);
    

    const body=razorpay_order_id+'|'+razorpay_payment_id

    const expectedSignature=crypto.
    createHmac('sha256',process.env.RAZORPAY_SECRET as string).
    update(body.toString()).
    digest('hex')

    const isAuthentic= expectedSignature===razorpay_signature
    if(isAuthentic){
        await Payment.create({
            razorpay_order_id:razorpay_order_id,
            razorpay_payment_id:razorpay_payment_id,
            razorpay_signature:razorpay_signature
        })
        res.redirect(
            `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
          );
    }else{
        res.status(400).json({
            success:"false",
            payment:"failed"
        })
    }
}