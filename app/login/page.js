"use client"
import React, { useEffect } from 'react'
import { useSession, signIn } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Login = () => {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session) {
            router.push('/dashboard')
        }
    }, [session, router]);

    return (
        /* Changed min-h to screen and adjusted padding to ensure it fills the gap */
        <div className='relative text-white min-h-screen flex flex-col items-center justify-center bg-black bg-[radial-gradient(#ffffff11_1px,transparent_1px)] [background-size:30px_30px] pb-24'>
            
            <div className="container mx-auto px-6 flex flex-col items-center relative z-10">
                {/* Modern Badge */}
                <div className="inline-flex items-center gap-2 bg-gray-900/50 border border-gray-800 px-4 py-1.5 rounded-full text-sm text-gray-400 mb-8">
                   <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                   Secure Authentication
                </div>

                <div className="w-full max-w-md bg-gray-900/40 border border-gray-800 p-10 md:p-14 rounded-[3rem] shadow-2xl backdrop-blur-md text-center">
                    
                    <h1 className='font-extrabold text-4xl md:text-5xl mb-4 tracking-tight'>
                        Welcome <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Back</span>
                    </h1>
                    <p className='text-gray-400 mb-12 text-base'>
                        Log in to FanFuel and continue fueling your creative journey.
                    </p>

                    <div className="flex flex-col gap-5 w-full items-center">
                        
                        {/* GitHub Button */}
                        <button 
                            onClick={() => signIn("github")}
                            className="group relative flex items-center justify-center w-full bg-white text-black font-bold rounded-2xl px-6 py-4 text-sm transition-all hover:bg-gray-200 active:scale-95 shadow-xl shadow-white/5"
                        >
                            <img 
                                src="https://www.svgrepo.com/show/512317/github-142.svg" 
                                className="h-6 w-6 mr-3 transition-transform group-hover:rotate-12" 
                                alt="Github" 
                            />
                            Continue with Github
                        </button>

                        {/* Google Button */}
                        {/* <button 
                            disabled
                            className="flex items-center justify-center w-full bg-gray-900/50 text-gray-500 border border-gray-800 rounded-2xl px-6 py-4 text-sm font-semibold cursor-not-allowed opacity-40 transition-all"
                        >
                            <img src="https://www.svgrepo.com/show/355037/google-icon.svg" className="h-5 w-5 mr-3 grayscale" alt="Google" />
                            Continue with Google
                        </button> */}

                    </div>

                    <p className="mt-12 text-xs text-gray-600 italic">
                        "Your passion deserves to be fueled."
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login