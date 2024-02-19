import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import { Suspense } from "react";
import { SessionProvider } from "next-auth/react";
import AuthProvider from "./auth/Provider";

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
      <body className={inter.className}>
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
