

import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import LoaderClient from './components/loaderclient';


export const metadata = {
  title: "Ajilogba Ayomide — Full-Stack Developer",
  description:
    "Ajilogba Ayomide is a passionate Full-Stack Developer building responsive, high-performance web applications with modern technologies like Next.js, React, and Node.js.",
  keywords: [
    "Ajilogba Ayomide",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer Portfolio",
    "Frontend Engineer",
    "Backend Developer",
  ],
  authors: [{ name: "Ajilogba Ayomide", url: "https://github.com/itsmideeth" }],
  creator: "Ajilogba Ayomide",
  publisher: "Ajilogba Ayomide",

  openGraph: {
    title: "Ajilogba Ayomide — Full-Stack Developer",
    description:
      "Explore the portfolio of Ajilogba Ayomide, a skilled Full-Stack Developer crafting exceptional digital experiences.",
    url: "https://your-future-domain.vercel.app", // change after deployment
    siteName: "Ajilogba Ayomide Portfolio",
    images: [
      {
        url: "https://github.com/itsmideeth", // can replace with custom OG image later
        width: 1200,
        height: 630,
        alt: "Ajilogba Ayomide Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ajilogba Ayomide — Full-Stack Developer",
    description:
      "Portfolio of Ajilogba Ayomide showcasing modern full-stack web applications and UI craftsmanship.",
    creator: "@mide_on_base", // optional
    images: ["https://github.com/itsmideeth"],
  },

  alternates: {
    canonical: "https://your-future-domain.vercel.app", // your final domain
  },

  icons: {
    icon: "/avatar.jpg",
    shortcut: "/avatar.jpg",
    apple: "/apple-touch-icon.png", // optional if you have one
  },
};



export default function RootLayout({ children }) {
  

  return (
    
    <html lang="en" suppressHydrationWarning >
      <head >
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      
      <body className="flex flex-col min-h-screen transition-colors font-satoshi dark:bg-[#121212]">

<LoaderClient><Navbar />
  
      <main className="flex-grow pt-24">{children}</main>

<Footer/> 
</LoaderClient>
      </body>
      
    </html>
    
      
  );
  
}
// ...existing code...