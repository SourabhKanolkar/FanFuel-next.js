import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-48">
        {/* Unified Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full max-w-6xl h-[600px] bg-purple-600/20 blur-[120px] rounded-full"></div>

        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-900/50 border border-gray-800 px-4 py-1.5 rounded-full text-sm text-gray-400 mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Join 500+ creators today
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            Fuel My <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Passion</span>
            <img className="inline-block ml-4 w-12 md:w-20 invertImg drop-shadow-2xl" src="/tea.gif" alt="tea" />
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            The ultimate space where creators meet community. Empower your 
            journey with direct funding from the people who love your work.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/login">
              <button className="h-14 px-10 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transition-all active:scale-95">
                Start Your Journey
              </button>
            </Link>
            <Link href="/about">
              <button className="h-14 px-10 rounded-2xl border border-gray-800 bg-gray-900/30 text-white font-semibold hover:bg-gray-800 transition-all">
                How it Works
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Dotted Divider Transition */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

      {/* Features Section */}
      <section className="py-24 bg-[radial-gradient(#ffffff11_1px,transparent_1px)] [background-size:30px_30px]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Empower Your Creativity</h2>
            <p className="text-gray-400">Everything you need to turn your supporters into patrons.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="group relative p-8 rounded-3xl bg-gray-900/40 border border-gray-800 hover:border-purple-500/50 transition-all">
              <div className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 border border-gray-700">
                <img className="bg-slate-400 rounded-full p-2" width={40} src="/man.gif" alt="man" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Direct Support</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your fans are ready to help. Give them a way to contribute to your growth without middle-men.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group relative p-8 rounded-3xl bg-gray-900/40 border border-gray-800 hover:border-blue-500/50 transition-all scale-105 shadow-2xl shadow-blue-500/10">
              <div className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 border border-gray-700">
                <img className="bg-slate-400 rounded-full p-2" width={40} src="/coin.gif" alt="coin" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Seamless Payments</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Accepting contributions is easier than ever with integrated secure payment gateways.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group relative p-8 rounded-3xl bg-gray-900/40 border border-gray-800 hover:border-purple-500/50 transition-all">
              <div className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 border border-gray-700">
                <img className="bg-slate-400 rounded-full p-2" width={40} src="/group.gif" alt="group" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Build Community</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Turn followers into patrons. Foster a loyal fan base that fuels your future projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-white mb-12">FanFuel is Built Using...</h2>
          <div className="w-full max-w-4xl p-2 rounded-[2rem] bg-gradient-to-b from-gray-700 to-gray-900 border border-gray-800 shadow-2xl">
            <div className="relative aspect-video rounded-[1.5rem] overflow-hidden">
              <iframe 
                className="absolute inset-0 w-full h-full shadow-inner"
                src="https://www.youtube.com/embed/xnOwOBYaA3w" 
                title="YouTube video player" 
                frameBorder="0" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}