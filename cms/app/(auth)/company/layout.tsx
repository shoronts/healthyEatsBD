// app/(auth)/company/layout.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { label: "General Details", href: "#" },
    { label: "Settings", href: "/company" },
    { label: "Payments", href: "/company/payments" },
  ];

  return (
    <div className="p-4">
      <div className="flex items-center gap-5 mb-6 p-1 text-black dark:text-white">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`px-3 py-1 rounded hover:bg-green-100 ${
              pathname === item.href ? "bg-teal-600 text-white" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
      {children}
    </div>
  );
}
