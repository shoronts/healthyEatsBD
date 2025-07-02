
import type React from "react";
import "../globals.css";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ClientProvider } from "@/context/client-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div>
          <ClientProvider>
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
          </ClientProvider>
        </div>

      </body>
    </html>
  );
}
