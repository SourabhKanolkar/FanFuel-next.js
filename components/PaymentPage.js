"use client";
import React, { useEffect, useState } from "react";
import Script from "next/script";
import { initiate, fetchuser, fetchpayments } from "@/actions/useractions";
import { useSession } from "next-auth/react";
import { ToastContainer, toast } from 'react-toastify';

import { useSearchParams, useRouter } from "next/navigation";

const PaymentPage = ({ username }) => {
  const [paymentform, setPaymentform] = useState({ name: "", message: "", amount: "" });
  const [currentuser, setCurrentuser] = useState();
  const [payments, setPayments] = useState([]);
  const searchParams = useSearchParams();
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
  if (currentuser) {
    // 🚫 Block access if Razorpay not setup
    if (!currentuser.razorpayid || !currentuser.razorpaysecret) {
      toast.error("⚠️ Please complete Razorpay setup first!");

      // redirect to dashboard
      router.push("/dashboard");
    }
  }
}, [currentuser]);

  useEffect(() => {
    if (searchParams.get("paymentdone") === "true") {
      toast.success('🦄 Payment Successful!', {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
      });
      router.push(`/${username}`)
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  const getData = async () => {
    let u = await fetchuser(username);
    setCurrentuser(u);
    let dbpayments = await fetchpayments(username);
    setPayments(dbpayments);
  }
  const totalRaised = payments.reduce((a, b) => a + b.amount, 0) ;

  const pay = async (amount) => {
    let a = await initiate(amount, username, paymentform);
    let orderId = a.id;
    var options = {
      key: currentuser.razorpayid,
      amount: amount,
      currency: "INR",
      name: "FanFuel",
      description: "Support Creator",
      order_id: orderId,
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        name: session?.user?.name || "",
        email: session?.user?.email || "",
      },
      theme: { color: "#3399cc" },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  if (!currentuser) {
    return <div className="text-white text-center py-20 bg-black min-h-screen">Loading Creator...</div>;
  }

  return (
    <div className="min-h-screen bg-black bg-[radial-gradient(#ffffff11_1px,transparent_1px)] [background-size:30px_30px] text-white">
      <ToastContainer />
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      
      {/* Cover & Profile Section */}
      <div className="relative w-full">
        <img
          className="object-cover w-full h-48 md:h-[350px]"
          src={currentuser.coverpic || "/cover_placeholder.jpg"}
          alt="cover"
        />
        {/* Centered Profile Picture with Glass Border */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 p-1 bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl">
          <img
            className="object-cover w-24 h-24 md:w-32 md:h-32 rounded-xl"
            src={currentuser.profilepic || "/avatar_placeholder.png"}
            alt="profile"
          />
        </div>
      </div>

      {/* User Info Section */}
      <div className="info flex flex-col items-center mt-16 mb-12 px-4 text-center">
        <h1 className="font-extrabold text-2xl md:text-4xl tracking-tight">@{username}</h1>
        <p className="text-gray-400 mt-2 text-sm md:text-lg">Help <span className="text-white font-medium">{username}</span> fuel their passion!</p>
        
        <div className="flex gap-4 mt-4 text-gray-500 text-xs md:text-sm bg-gray-900/50 border border-gray-800 px-4 py-2 rounded-full">
          <span>{payments.length} Payments</span>
          <span className="text-gray-700">•</span>
          <span className="text-purple-400 font-bold">₹{totalRaised}  Raised</span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Supporters Leaderboard */}
          <div className="supportes bg-gray-900/40 backdrop-blur-md rounded-[2.5rem] p-8 border border-gray-800 shadow-2xl">
            <h2 className="text-xl md:text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="w-2 h-6 bg-blue-500 rounded-full"></span>
              Top Supporters
            </h2>
            <ul className="space-y-6">
              {payments.length === 0 && <li className="text-gray-500 italic text-center py-10">No payments yet. Be the first to fuel!</li>}
              {payments.slice(0, 10).map((p, i) => (
                <li key={i} className="flex gap-4 items-start p-3 hover:bg-gray-800/30 rounded-2xl transition-all">
                  <div className="bg-gray-800 p-2 rounded-full">
                    <img className="invertImg" width={28} src="/user.png" alt="avatar" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm md:text-base font-medium">
                      <span className="text-blue-400">{p.name}</span> donated <span className="text-white font-bold">₹{p.amount}</span>
                    </span>
                    <p className="text-gray-500 text-xs md:text-sm mt-1 italic">"{p.message}"</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Card */}
          <div className="makePayment relative bg-gray-900/40 backdrop-blur-md rounded-[2.5rem] p-8 border border-gray-800 shadow-2xl">
            {/* Subtle glow behind payment card */}
            <div className="absolute -z-10 top-0 left-0 w-full h-full bg-purple-600/5 blur-[80px]"></div>
            
            <h2 className="text-xl md:text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="w-2 h-6 bg-purple-500 rounded-full"></span>
              Fuel the Creativity
            </h2>
            
            <div className="flex flex-col gap-4">
              <div className="space-y-1">
                <input
                  onChange={handleChange}
                  name="name"
                  value={paymentform.name}
                  type="text"
                  className="w-full p-4 rounded-2xl bg-gray-800/50 border border-gray-700 focus:border-purple-500 outline-none transition-all placeholder:text-gray-600"
                  placeholder="Your Name"
                />
              </div>
              
              <div className="space-y-1">
                <input
                  onChange={handleChange}
                  name="message"
                  value={paymentform.message}
                  type="text"
                  className="w-full p-4 rounded-2xl bg-gray-800/50 border border-gray-700 focus:border-purple-500 outline-none transition-all placeholder:text-gray-600"
                  placeholder="Leave a message"
                />
              </div>

              <div className="space-y-1">
                <input
                  onChange={handleChange}
                  name="amount"
                  value={paymentform.amount}
                  type="number"
                  className="w-full p-4 rounded-2xl bg-gray-800/50 border border-gray-700 focus:border-purple-500 outline-none transition-all placeholder:text-gray-600 font-bold"
                  placeholder="Enter Amount (₹)"
                />
              </div>

              <button
                type="button"
                onClick={() => pay(Number.parseInt(paymentform.amount) * 100)}
                disabled={!paymentform.name || !paymentform.amount || paymentform.amount < 1}
                className="mt-4 w-full h-14 text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] disabled:opacity-30 disabled:grayscale font-bold rounded-2xl transition-all active:scale-95"
              >
                Send Fuel ☕
              </button>
            </div>

            {/* Quick Presets */}
            <div className="mt-8">
              <p className="text-gray-500 text-xs font-semibold mb-4 uppercase tracking-wider text-center">Quick Fuel</p>
              <div className="grid grid-cols-3 gap-3">
                {[10, 20, 50].map((amt) => (
                  <button
                    key={amt}
                    className="bg-gray-800/50 hover:bg-gray-800 p-4 rounded-2xl border border-gray-700 text-sm font-bold transition-all hover:border-purple-500/50"
                    onClick={() => pay(amt * 100)}
                  >
                    ₹{amt}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PaymentPage;