"use client"

import { Heart } from "lucide-react"
import { useTheme } from "@/context/theme-context"

export default function Footer() {
  const { theme } = useTheme()

  return (
    <footer className="px-8">
      <div className="h-16 w-[100%] bg-slate-800 dark:bg-slate-800 light:bg-white border-t border-slate-700 dark:border-slate-700 light:border-gray-200 flex items-center justify-between px-6 text-xs text-gray-400 transition-colors duration-200">
      <div>
        COPYRIGHT © 2025{" "}
        <a href="#" className="text-indigo-400 hover:underline">
          Pixinvent
        </a>
        . All rights Reserved
      </div>
      <div className="flex items-center">
        Hand-crafted & Made with <Heart className="h-4 w-4 text-red-500 mx-1 fill-current" />
      </div>
    </div>
    </footer>
  )
}
