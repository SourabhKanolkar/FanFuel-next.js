import PaymentPage from "@/components/PaymentPage";
import React from "react";
import { notFound } from "next/navigation"
import connectDB from "@/db/connectDb";
import User from "@/models/User";

const Username = async ({ params }) => {
  await connectDB( )
  const { username } = await params;
  let u=await User.findOne({username:username});
  if(!u){
    return notFound();
  }

  

  return (
    <>
     <PaymentPage username={username} />
    </>
  );
};
 

export default Username;
