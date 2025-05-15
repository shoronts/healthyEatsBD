"use client"
import { useState } from "react"
import Header from "./header"
import ContentCard from "./content-card"
import Footer from "./footer"
import { Home, Mail, Lock, Rocket, BarChart2, Settings, Users } from "lucide-react"
import { ThemeProvider } from "@/context/theme-context"

export default function Dashboard() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)

  const navItems = [
    { icon: Home, label: "Home", active: true, href: "#" },
    { icon: Mail, label: "Second Page", active: false, href: "/secondPage" },
    { icon: BarChart2, label: "Analytics", active: false, href: "#" },
    { icon: Users, label: "Users", active: false, href: "#" },
    { icon: Settings, label: "Settings", active: false, href: "#" },
  ]

  return (
    // <ThemeProvider>
    //   <div className="flex h-screen bg-slate-900 dark:bg-slate-900 light:bg-gray-50 text-gray-100 dark:text-gray-100 light:text-gray-800 transition-colors duration-200">

    //     <div className="flex flex-col flex-1 overflow-hidden">
    //       <Header />

    //       <main className="flex-1 overflow-y-auto p-6 bg-slate-900 dark:bg-slate-900 light:bg-gray-50 transition-colors duration-200">
    //         <ContentCard title="Kick start your project" icon={<Rocket className="h-5 w-5 text-red-400" />}>
    //           <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 mb-4">
    //             All the best for your new project.
    //           </p>
    //           <p className="text-gray-400 dark:text-gray-400 light:text-gray-600">
    //             Please make sure to read our{" "}
    //             <a href="#" className="text-indigo-400 hover:underline">
    //               Template Documentation
    //             </a>{" "}
    //             to understand where to go from here and how to use our template.
    //           </p>
    //         </ContentCard>

    //         <ContentCard title="Want to integrate JWT?" icon={<Lock className="h-5 w-5 text-yellow-400" />}>
    //           <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 mb-4">
    //             We carefully crafted JWT flow so you can implement JWT with ease and with minimum efforts.
    //           </p>
    //           <p className="text-gray-400 dark:text-gray-400 light:text-gray-600">
    //             Please read our{" "}
    //             <a href="#" className="text-indigo-400 hover:underline">
    //               JWT Documentation
    //             </a>{" "}
    //             to get more out of JWT authentication.
    //           </p>
    //         </ContentCard>
    //       </main>

    //       <Footer />
    //     </div>
    //   </div>
    // </ThemeProvider>
    <></>
  )
}
