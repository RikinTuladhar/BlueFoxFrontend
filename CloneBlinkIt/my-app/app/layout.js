// app/layout.js
import Head from 'next/head';
import localFont from "next/font/local";
import ProviderRedux from "@/providers/ProviderRedux";
import './globals.css';

const geistSans = localFont({ 
  src: "./fonts/GeistVF.woff", 
  variable: "--font-geist-sans", 
  weight: "100 900",
});

const geistMono = localFont({ 
  src: "./fonts/GeistMonoVF.woff", 
  variable: "--font-geist-mono", 
  weight: "100 900",
});

export const metadata = { 
  title: "Blinkit Clone Project", 
  description: "It's one of the biggest quick commerce web apps in India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>{metadata.title}</title>
      </Head>
      <ProviderRedux>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {children}
        </body>
      </ProviderRedux>
    </html>
  );
}
