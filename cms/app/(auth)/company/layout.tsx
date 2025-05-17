"use client";
// app/layout.tsx or wherever your RootLayout is
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const navItems = [
    { label: "General Details", href: "#" },
    { label: "Settings", href: "/company" },
    { label: "Payments", href: "/company/payments" },
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-gray-900 dark:bg-slate-900 dark:text-white transition-colors duration-200`}>
        <div className="flex items-center gap-5 mb-6 p-1 text-black dark:text-white">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-1 rounded hover:bg-green-100 ${
                pathname === item.href ? "bg-green-500 text-white" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        {children}
      </body>
    </html>
  );
}
