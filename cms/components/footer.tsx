"use client";
import { useTheme } from "@/context/theme-context";
import Link from "next/link";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="">
      <div className="h-16 w-[100%] bg-white dark:bg-slate-800 light:bg-white border-t border-slate-700 dark:border-slate-700 light:border-gray-200 flex items-center justify-between px-6 text-xs text-gray-400 transition-colors duration-200">
        <div>COPYRIGHT © {new Date().getFullYear()}. All rights Reserved</div>
        <div className="flex items-center gap-1">
          <p>Hand-crafted & Made with</p>{" "}
          <Link className="text-indigo-400" href={"https://squaretechit.com/"}>
            SquireTech IT
          </Link>
        </div>
      </div>
    </footer>
  );
}
