import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from 'react';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shopping Website",
  description: "The most enjoyable address of online shopping",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className} >
          <Header/>
          {children}
          <Footer/>
        </body>
    </html>
    
  );
}
