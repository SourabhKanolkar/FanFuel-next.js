"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDb"
import User from "@/models/User"
import { NextResponse } from "next/server"



export const initiate=async (amount,to_user,paymentform)=>{
              
       await connectDB();
         
       // fetch the secret of the user who is getting the payment
         let user=await User.findOne({username: to_user});
        const secret=user.razorpaysecret

       var instance=new Razorpay({key_id:user.razorpayid,
        key_secret:secret
       })

       let options={
        amount:Number.parseInt(amount),
        currency:"INR"

       }

       let x=await instance.orders.create(options);

       //create a payment object which shows a pending payment in database
       await Payment.create({oid:x.id,amount:amount/100,to_user:to_user,name:paymentform.name,message:paymentform.message})

       return x;
}

export const fetchuser=async(username)=>{
       await connectDB();
       let u=await User.findOne({username: username}).lean();
     const user = JSON.parse(JSON.stringify(u));
       return user;
}

export const fetchpayments=async (username)=>{
       await connectDB();
       //find all payments sorted in  decending order of amount and flateeen onjectIds
       let p=await Payment.find({to_user:username,done:true}).sort({amount:-1}).limit(10).lean();
       const payments = JSON.parse(JSON.stringify(p));
       return payments;
}

export const updateProfile=async(data,oldusername)=>{
       await connectDB();
       let ndata=Object.fromEntries(data);
       //if the username is avalable
       if(oldusername !== ndata.username){
        let u=await User.findOne({username: ndata.username});
        if(u){
              return {error:"Username already exists"}
        }
           await User.updateOne({email:ndata.email},ndata);
           //now update all the usernames in payment table
           await Payment.updateMany({to_user:oldusername},{to_user:ndata.username});
       }
       else{
            await User.updateOne({email:ndata.email},ndata);
       }

       
    
}