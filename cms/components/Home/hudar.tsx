'use client'

import { useState } from "react"
import Link from "next/link"
import {
  Bell,
  Calendar,
  CheckCircle,
  FileText,
  Flag,
  Mail,
  MessageSquare,
  Moon,
  Search,
  ShoppingCart,
  Star,
  User,
  X,
} from "lucide-react"

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  const closeAllDropdowns = () => {
    setNotificationsOpen(false)
    setLanguageOpen(false)
    setProfileOpen(false)
    setCartOpen(false)
  }

  const toggleDropdown = (dropdown: string) => {
    closeAllDropdowns()
    switch (dropdown) {
      case "notifications":
        setNotificationsOpen(!notificationsOpen)
        break
      case "language":
        setLanguageOpen(!languageOpen)
        break
      case "profile":
        setProfileOpen(!profileOpen)
        break
      case "cart":
        setCartOpen(!cartOpen)
        break
    }
  }

  return (
    <div className="relative">
      <nav className="flex h-16 w-full items-center justify-between bg-[#1a2036] px-4 md:px-6">
        {/* Left side icons */}
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-gray-300 hover:text-white"><Mail className="h-5 w-5" /></Link>
          <Link href="#" className="text-gray-300 hover:text-white"><MessageSquare className="h-5 w-5" /></Link>
          <Link href="#" className="text-gray-300 hover:text-white"><Calendar className="h-5 w-5" /></Link>
          <Link href="#" className="text-gray-300 hover:text-white"><FileText className="h-5 w-5" /></Link>
          <Link href="#" className="text-gray-300 hover:text-white"><Star className="h-5 w-5" /></Link>
        </div>

        {/* Search Bar */}
        <div className={`${searchOpen ? "opacity-100" : "pointer-events-none opacity-0"} absolute left-0 top-0 z-20 flex h-16 w-full items-center bg-[#1a2036] px-4 transition-all duration-200 md:px-6`}>
          <div className="flex w-full items-center">
            <Search className="mr-2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Explore..."
              className="w-full bg-transparent text-white outline-none placeholder:text-gray-400"
              autoFocus={searchOpen}
            />
            <button onClick={() => setSearchOpen(false)} className="ml-2 text-gray-400 hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">

          {/* Language */}
          <div className="relative">
            <button onClick={() => toggleDropdown("language")} className="flex items-center space-x-1 text-gray-300 hover:text-white">
              <Flag className="mr-1 h-4 w-4" />
              <span className="hidden md:inline">English</span>
            </button>
            {languageOpen && (
              <div className="absolute right-0 top-full z-30 mt-1 w-48 rounded-md bg-[#283046] py-1 shadow-lg">
                {["English", "French", "German", "Portuguese"].map((lang) => (
                  <button key={lang} className="flex w-full items-center rounded-md px-3 py-2 text-left text-white hover:bg-[#343d55]">
                    <Flag className="mr-2 h-4 w-4" />
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme */}
          <button className="text-gray-300 hover:text-white">
            <Moon className="h-5 w-5" />
          </button>

          {/* Search */}
          <button onClick={() => setSearchOpen(true)} className="text-gray-300 hover:text-white">
            <Search className="h-5 w-5" />
          </button>

          {/* Cart */}
          <div className="relative">
            <button onClick={() => toggleDropdown("cart")} className="relative text-gray-300 hover:text-white">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-indigo-500 text-xs text-white flex items-center justify-center">6</span>
            </button>
            {cartOpen && (
              <div className="absolute right-0 top-full z-30 mt-2 w-64 rounded-md bg-[#283046] py-2 shadow-lg">
                <div className="px-4 py-2 text-white">You have 6 items in your cart</div>
                <div className="border-t border-gray-700 px-4 py-2">
                  <Link href="#" className="text-indigo-400 hover:underline">View Cart</Link>
                </div>
              </div>
            )}
          </div>

          {/* Notifications */}
          <div className="relative">
            <button onClick={() => toggleDropdown("notifications")} className="relative text-gray-300 hover:text-white">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">5</span>
            </button>
            {notificationsOpen && (
              <div className="absolute right-0 top-full z-30 mt-2 w-80 rounded-md bg-[#283046] py-2 shadow-lg">
                <div className="px-4 py-2 text-white font-semibold">Notifications</div>
                <div className="max-h-60 overflow-y-auto divide-y divide-gray-700">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-start gap-2 px-4 py-3 hover:bg-[#343d55]">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                      <div className="text-white text-sm">
                        <p className="font-medium">Update {i}</p>
                        <p className="text-gray-400">You have a new system update available.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative">
            <button onClick={() => toggleDropdown("profile")} className="flex items-center text-white">
              <img src="/avatar.jpg" alt="Avatar" className="h-8 w-8 rounded-full border-2 border-white" />
              <div className="ml-2 text-left hidden md:block">
                <div className="text-sm font-semibold">John Doe</div>
                <div className="text-xs text-gray-400">Admin</div>
              </div>
              <span className="ml-1 h-2 w-2 rounded-full bg-green-500" />
            </button>
            {profileOpen && (
              <div className="absolute right-0 top-full z-30 mt-2 w-48 rounded-md bg-[#283046] py-2 shadow-lg">
                <Link href="#" className="block px-4 py-2 text-white hover:bg-[#343d55]">Profile</Link>
                <Link href="#" className="block px-4 py-2 text-white hover:bg-[#343d55]">Settings</Link>
                <div className="border-t border-gray-700 my-1" />
                <Link href="#" className="block px-4 py-2 text-red-400 hover:bg-[#343d55]">Logout</Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}
