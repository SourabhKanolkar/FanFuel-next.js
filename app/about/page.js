import React from 'react'

const About = () => {
  return (
    <div className='container mx-auto px-4 py-12 md:py-20 text-white'>
      {/* Hero Section */}
      <div className='flex flex-col items-center text-center mb-20'>
        <h1 className='text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
          Fueling the Future of Creativity
        </h1>
        <p className='text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed'>
          FanFuel is a community-driven platform designed to bridge the gap between creators and their most dedicated fans. 
          We believe that passion shouldn't be limited by funding.
        </p>
      </div>

      {/* Mission Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24'>
        <div className='space-y-6'>
          <h2 className='text-3xl font-bold'>Our Mission</h2>
          <p className='text-gray-300 text-lg'>
            In a world where algorithms often dictate success, FanFuel puts the power back into the hands of the people. 
            Whether you are a developer, artist, writer, or streamer, our goal is to provide a seamless way for your 
            community to support your journey directly.
          </p>
          <div className='flex gap-4'>
            <div className='bg-gray-900 border border-gray-800 p-4 rounded-xl'>
              <span className='text-blue-500 font-bold text-2xl'>0%</span>
              <p className='text-sm text-gray-400'>Platform Friction</p>
            </div>
            <div className='bg-gray-900 border border-gray-800 p-4 rounded-xl'>
              <span className='text-purple-500 font-bold text-2xl'>Direct</span>
              <p className='text-sm text-gray-400'>Creator Payouts</p>
            </div>
          </div>
        </div>
        <div className='relative'>
           <div className='absolute inset-0 bg-blue-500/20 blur-3xl rounded-full'></div>
           <img src="/tea.gif" alt="Fueling Passion" className='relative mx-auto w-48 md:w-64 invertImg' />
        </div>
      </div>

      {/* Features/How it works */}
      <div className='mb-24'>
        <h2 className='text-3xl font-bold text-center mb-12'>Why FanFuel?</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors'>
            <h3 className='text-xl font-bold mb-3'>For Creators</h3>
            <p className='text-gray-400'>Create your personalized page, share your story, and start receiving support from your followers in minutes.</p>
          </div>
          <div className='bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-colors'>
            <h3 className='text-xl font-bold mb-3'>Seamless Payments</h3>
            <p className='text-gray-400'>Integrated with Razorpay for secure, fast, and easy transactions. Support your favorites with just a few clicks.</p>
          </div>
          <div className='bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors'>
            <h3 className='text-xl font-bold mb-3'>Transparent History</h3>
            <p className='text-gray-400'>Every contribution is tracked. Build trust with your fans through a public leaderboard and payment history.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className='bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-gray-700 p-8 md:p-16 rounded-3xl text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-6'>Ready to Fuel Your Project?</h2>
        <p className='text-gray-300 mb-8 max-w-xl mx-auto'>
          Join hundreds of creators who are already turning their passion into a sustainable career.
        </p>
        <button className='bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition-all active:scale-95'>
          Get Started Now
        </button>
      </div>
    </div>
  )
}

export default About