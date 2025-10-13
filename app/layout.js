
import Link from 'next/link';
import { motion } from 'framer-motion';


import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { ThemeProvider } from './providers/ThemeProvider';

export const metadata = {
  title: 'Ajilogba Ayomide — Full-Stack Developer',
  description: 'Full Stack Developer Portfolio',
};

export default function RootLayout({ children }) {


  return (
    
    <html lang="en" suppressHydrationWarning  >
      <head>
         <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      
      <body className={`font-satoshi bg-[#FAFAFB] dark:bg-gray-900 text-[#0B1220] min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  <Navbar />
  
        <main className="pt-24 ">{children}</main>

<Footer/>
     </ThemeProvider>
      </body>
      
    </html>
      
  );
}
// ...existing code...