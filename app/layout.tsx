import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import { Suspense } from "react";
import { SessionProvider } from "next-auth/react";
import AuthProvider from "./auth/Provider";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500']
})

// Custom font
const poppins = localFont({
  src: '../public/fonts/poppins-regular-webfont.woff2',
  variable: '--font-poppins'
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme='winter' >
      <body className={poppins.variable} >
        <AuthProvider>
          <NavBar />
          
          <main className="p-5" suppressHydrationWarning={true}>
              {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
