import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "FanFuel | Fuel Your Passion, Fund Your Future",
  description: "Empowering creators to bring their projects to life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Add suppressHydrationWarning here */}
      <body 
        className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white"
        suppressHydrationWarning={true} 
      >
        <SessionWrapper>
          <Navbar />
          <div className="min-h-[calc(100vh-128px)]">
            {children}
          </div>    
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}