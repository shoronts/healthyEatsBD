"use client"

import type { ReactNode } from "react"
import { useTheme } from "@/context/theme-context"

interface ContentCardProps {
  title: string
  icon?: ReactNode
  children: ReactNode
}

export default function ContentCard({ title, icon, children }: ContentCardProps) {
  const { theme } = useTheme()

  return (
    <div className="bg-slate-800 dark:bg-slate-800 light:bg-white rounded-lg p-6 mb-6 border border-slate-700 dark:border-slate-700 light:border-gray-200 transition-colors duration-200">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-medium dark:text-white light:text-gray-800">{title}</h2>
        {icon && <span className="ml-2">{icon}</span>}
      </div>
      <div className="text-sm">{children}</div>
    </div>
  )
}
