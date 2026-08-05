import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lala Sai Ram | A Place of Worship and Peace",
  description: "Welcome to the divine Lala Sai Ram. Explore daily timings, pujas, and spiritual events.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-gray-800 bg-[#FAFAF8]">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        
        {/* Global Floating Action Button for WhatsApp */}
        <Link 
          href="https://wa.me/919876543210" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:shadow-[#25D366]/50 transition-all duration-300 z-50 flex items-center justify-center group"
          aria-label="Chat on WhatsApp"
        >
          <span className="text-2xl leading-none">💬</span>
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-bold text-sm group-hover:ml-2 group-hover:mr-1">Chat with us</span>
        </Link>
      </body>
    </html>
  );
}
