import type React from "react";
import { Inter } from "next/font/google";
import "../globals.css";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-gray-900 dark:text-white transition-colors duration-200 dark:bg-gray-900 bg-white`}
      >
        <ThemeProvider>
          <div className="flex min-h-screen">
            <div className="sticky top-0 h-screen">
              <Sidebar />
            </div>
            <div className="flex flex-col mx-auto w-full">
              <div className="sticky top-0 z-50 mt-2">
              <Header />
            </div>
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
