"use client"; // This must be at the very top

import { Inter } from "next/font/google";
import "../globals.css";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      console.log("Dark mode:", isDarkMode);
      setDark(isDarkMode);
    }
  }, []);

  return (
    <html lang="en" className={dark ? "dark" : "light"}>
      <body className={inter.className}>
        {/* <h2>Header</h2> */}
        {children}
      </body>
    </html>
  );
}
