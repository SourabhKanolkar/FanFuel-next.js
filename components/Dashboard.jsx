"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { updateProfile, fetchuser } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify'
import { signIn } from "next-auth/react";


const Dashboard = () => {
    const { data: session, status,update } = useSession()
    const router = useRouter()
    const [form, setform] = useState({})

    useEffect(() => {
        if (status === "authenticated") {
            getData();
        }
        if (status === "unauthenticated") {
            router.push('/login')
        }
    }, [status, router])

    const getData = async () => {
        if (session?.user?.name) {
            let u = await fetchuser(session.user.name);
            setform(u)
        }
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const handelSubmit = async (formData) => {
        await updateProfile(formData, session.user.name);
        toast.success('🚀 Profile Updated!', {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
        });
        //  await signIn("github", { redirect: false });
        
         await update({
        ...session,
        user: {
            ...session.user,
            name: formData.get("username"),
        },
    });
    toast("Profile Updated")

         // 🔥 redirect using NEW username
        router.push(`/${formData.get("username")}`);
    }

    return (
        <>
            <ToastContainer />
            <div className='relative min-h-screen text-white bg-black bg-[radial-gradient(#ffffff11_1px,transparent_1px)] [background-size:30px_30px] pb-20'>
                
                <div className='container mx-auto py-12 px-4 md:px-0 relative z-10'>
                    <div className='text-center mb-12'>
                        <h1 className='text-3xl md:text-5xl font-extrabold tracking-tight mb-4'>
                            Manage your <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Creator Profile</span>
                        </h1>
                        <p className='text-gray-400 text-sm md:text-base'>Customize how your fans see and support your passion.</p>
                    </div>

                    <form className="max-w-3xl mx-auto bg-gray-900/40 border border-gray-800 p-8 md:p-14 rounded-[2.5rem] shadow-2xl backdrop-blur-md" action={handelSubmit}>
                        
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {/* Name */}
                            <div className='space-y-2'>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 ml-1">Full Name</label>
                                <input value={form.name || ""} onChange={handleChange} type="text" name='name' id="name" placeholder="Enter your name" className="block w-full p-3.5 bg-gray-800/50 border border-gray-700 rounded-2xl text-white text-sm focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 outline-none transition-all" />
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 ml-1">Email Address</label>
                                <input value={form.email || ""} onChange={handleChange}  type="email" name='email' id="email" placeholder="email@example.com" className="block w-full p-3.5 bg-gray-800/50 border border-gray-700 rounded-2xl text-white text-sm focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 outline-none transition-all" />
                            </div>
                        </div>

                        {/* Username */}
                        <div className='my-6 space-y-2'>
                            <label htmlFor="username" className="block text-sm font-semibold text-gray-300 ml-1">Public Username</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">fanfuel.com/</span>
                                <input value={form.username || ""} onChange={handleChange} type="text" name='username' id="username" className="block w-full p-3.5 pl-28 bg-gray-800/50 border border-gray-700 rounded-2xl text-white text-sm focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 outline-none transition-all" />
                            </div>
                        </div>

                        {/* Visuals Grid */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className="space-y-2">
                                <label htmlFor="profilepic" className="block text-sm font-semibold text-gray-300 ml-1">Profile Image URL</label>
                                <input value={form.profilepic || ""} onChange={handleChange} type="text" name='profilepic' id="profilepic" className="block w-full p-3.5 bg-gray-800/50 border border-gray-700 rounded-2xl text-white text-sm focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 outline-none transition-all" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="coverpic" className="block text-sm font-semibold text-gray-300 ml-1">Cover Image URL</label>
                                <input value={form.coverpic || ""} onChange={handleChange} type="text" name='coverpic' id="coverpic" className="block w-full p-3.5 bg-gray-800/50 border border-gray-700 rounded-2xl text-white text-sm focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 outline-none transition-all" />
                            </div>
                        </div>

                        {/* Payment Credentials */}
                        <div className='mt-8 pt-8 border-t border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className="space-y-2">
                                <label htmlFor="razorpayid" className="block text-sm font-semibold text-gray-300 ml-1">Razorpay Client ID</label>
                                <input value={form.razorpayid || ""} onChange={handleChange} type="text" name='razorpayid' id="razorpayid" className="block w-full p-3.5 bg-gray-900/80 border border-gray-700 rounded-2xl text-white text-sm focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="razorpaysecret" className="block text-sm font-semibold text-gray-300 ml-1">Razorpay Secret</label>
                                <input value={form.razorpaysecret || ""} onChange={handleChange} type="text" name='razorpaysecret' id="razorpaysecret" className="block w-full p-3.5 bg-gray-900/80 border border-gray-700 rounded-2xl text-white text-sm focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all" />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-10">
                            <button type="submit" className="w-full h-14 text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl font-bold text-base hover:shadow-[0_0_25px_rgba(147,51,234,0.4)] transition-all active:scale-[0.98]">
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Dashboard