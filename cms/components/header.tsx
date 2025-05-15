"use client";
import { useState, useRef, useEffect } from "react";
import {
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/context/theme-context";
import Link from "next/link";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const closeAllDropdowns = () => {
    setNotificationsOpen(false);
    setLanguageOpen(false);
    setCartOpen(false);
  };
  const toggleDropdown = (dropdown: string) => {
    closeAllDropdowns();
    switch (dropdown) {
      case "notifications":
        setNotificationsOpen(!notificationsOpen);
        break;
      case "language":
        setLanguageOpen(!languageOpen);
        break;
      case "cart":
        setCartOpen(!cartOpen);
        break;
    }
  };

  return (
    <header className="w-full px-8">
      <div className="h-16 my-5 mx-auto bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700  flex items-center justify-between px-6 py-4 rounded-header transition-colors duration-200">
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-gray-300 hover:text-white">
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 15 15"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M1 2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm0 1h13v.925a.45.45 0 0 0-.241.07L7.5 7.967L1.241 3.995A.45.45 0 0 0 1 3.925zm0 1.908V12h13V4.908L7.741 8.88a.45.45 0 0 1-.482 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white">
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 15 15"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12.5 3h-10A1.5 1.5 0 0 0 1 4.5v5A1.5 1.5 0 0 0 2.5 11h5a.5.5 0 0 1 .354.146L10 13.294V11.5a.5.5 0 0 1 .5-.5h2A1.5 1.5 0 0 0 14 9.5v-5A1.5 1.5 0 0 0 12.5 3m-10-1h10A2.5 2.5 0 0 1 15 4.5v5a2.5 2.5 0 0 1-2.5 2.5H11v2.5a.5.5 0 0 1-.854.354L7.293 12H2.5A2.5 2.5 0 0 1 0 9.5v-5A2.5 2.5 0 0 1 2.5 2"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white">
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 15 15"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M4.5 1a.5.5 0 0 1 .5.5V2h5v-.5a.5.5 0 0 1 1 0V2h1.5A1.5 1.5 0 0 1 14 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 12.5v-9A1.5 1.5 0 0 1 2.5 2H4v-.5a.5.5 0 0 1 .5-.5M10 3v.5a.5.5 0 0 0 1 0V3h1.5a.5.5 0 0 1 .5.5V5H2V3.5a.5.5 0 0 1 .5-.5H4v.5a.5.5 0 0 0 1 0V3zM2 6v6.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V6zm5 1.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M9.5 7a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m1.5.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m.5 1.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M9 9.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M7.5 9a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M5 9.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M3.5 9a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M3 11.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m2.5-.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m1.5.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m2.5-.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white">
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 15 15"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M3 2.5a.5.5 0 0 1 .5-.5h5.586a.5.5 0 0 1 .353.146l2.415 2.415a.5.5 0 0 1 .146.353V12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5zM3.5 1A1.5 1.5 0 0 0 2 2.5v10A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V4.914a1.5 1.5 0 0 0-.44-1.06l-2.414-2.415A1.5 1.5 0 0 0 9.086 1zm1 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white">
           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 15 15"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="m6.98 1.252l-.022.05L5.588 4.6a.3.3 0 0 1-.253.184l-3.561.286l-.055.004l-.331.027l-.3.024a.3.3 0 0 0-.172.527l.23.196l.252.216l.041.036l2.713 2.324a.3.3 0 0 1 .097.297l-.83 3.475l-.012.053l-.077.323l-.07.294a.3.3 0 0 0 .448.326l.258-.158l.284-.173l.046-.028l3.049-1.863a.3.3 0 0 1 .312 0l3.049 1.863l.046.028l.284.173l.258.158a.3.3 0 0 0 .448-.326l-.07-.293l-.077-.324l-.013-.053l-.829-3.475a.3.3 0 0 1 .097-.297L13.562 6.1l.041-.036l.253-.216l.23-.196a.3.3 0 0 0-.172-.527l-.3-.024l-.332-.027l-.055-.004l-3.56-.286a.3.3 0 0 1-.254-.184L8.042 1.302l-.021-.05l-.128-.307l-.116-.279a.3.3 0 0 0-.554 0l-.116.279zm.52 1.352l-.99 2.38a1.3 1.3 0 0 1-1.096.797l-2.57.206l1.958 1.677a1.3 1.3 0 0 1 .418 1.29l-.598 2.507l2.2-1.344a1.3 1.3 0 0 1 1.356 0l2.2 1.344l-.598-2.508a1.3 1.3 0 0 1 .418-1.289l1.958-1.677l-2.57-.206a1.3 1.3 0 0 1-1.096-.797z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        <div
          className="flex items-center h-16 gap-4 justify-center"
          ref={dropdownRef}
        >
          <div className="relative">
            <button
              className="text-gray-400 hover:text-gray-100 dark:hover:text-white light:hover:text-gray-800 transition-colors"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M7.5 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5M2.197 2.197a.5.5 0 0 1 .707 0L4.318 3.61a.5.5 0 0 1-.707.707L2.197 2.904a.5.5 0 0 1 0-.707M.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm1.697 5.803a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707l-1.414 1.414a.5.5 0 0 1-.707 0M12.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm-1.818-2.682a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707L11.39 4.318a.5.5 0 0 1-.707 0M8 12.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0zm2.682-1.818a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 1 1-.707.707l-1.414-1.414a.5.5 0 0 1 0-.707M5.5 7.5a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M2.9.5a.4.4 0 0 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm3 3a.4.4 0 1 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm-4 3a.4.4 0 1 0-.8 0v.6H.5a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 0 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zM8.544.982l-.298-.04c-.213-.024-.34.224-.217.4q.211.305.389.632A6.602 6.602 0 0 1 2.96 11.69c-.215.012-.334.264-.184.417q.103.105.21.206l.072.066l.26.226l.188.148l.121.09l.187.131l.176.115q.18.115.37.217l.264.135l.26.12l.303.122l.244.086a6.6 6.6 0 0 0 1.103.26l.317.04l.267.02q.19.011.384.011a6.6 6.6 0 0 0 6.56-7.339l-.038-.277a6.6 6.6 0 0 0-.384-1.415l-.113-.268l-.077-.166l-.074-.148a6.6 6.6 0 0 0-.546-.883l-.153-.2l-.199-.24l-.163-.18l-.12-.124l-.16-.158l-.223-.2l-.32-.26l-.245-.177l-.292-.19l-.321-.186l-.328-.165l-.113-.052l-.24-.101l-.276-.104l-.252-.082l-.325-.09l-.265-.06zm1.86 4.318a7.6 7.6 0 0 0-.572-2.894a5.601 5.601 0 1 1-4.748 10.146a7.6 7.6 0 0 0 3.66-2.51a.749.749 0 0 0 1.355-.442a.75.75 0 0 0-.584-.732q.093-.174.178-.355A1.25 1.25 0 1 0 10.35 6.2q.052-.442.052-.9"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="relative">
            <button
              onClick={() => setSearchOpen(true)}
              className="text-gray-300 hover:text-white"
            >
              
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M10 6.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-.691 3.516a4.5 4.5 0 1 1 .707-.707l2.838 2.837a.5.5 0 0 1-.708.708z" clipRule="evenodd"/></svg>
            </button>
          </div>

          <div className="relative">
            <button
              onClick={() => toggleDropdown("cart")}
              className="relative text-gray-300 hover:text-white"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-indigo-500 text-xs text-white flex items-center justify-center">
                6
              </span>
            </button>
            {cartOpen && (
              <div className="absolute right-0 top-full z-30 mt-2 w-[500px] rounded-md dark:bg-[#0F172A] bg-white  py-2 shadow-lg">
                <div className="w-full max-w-[500px] dark:bg-[#0F172A] bg-white   dark:text-white text-[#605A75] rounded-lg overflow-hidden">
                  {/* Header */}
                  <div className="flex justify-between items-center p-5">
                    <h2 className="text-xl font-medium">My Cart</h2>
                    <span className="text-[#7367F0] font-medium">4 Items</span>
                  </div>

                  {/* Cart Items */}
                  <div className="divide-y divide-[#2a304a]">
                    {/* Apple Watch 5 */}
                    <div className="flex items-center p-4 gap-3">
                      <div className="w-12 h-12 bg-[#2a304a] rounded-md overflow-hidden flex items-center justify-center">
                        <img
                          src="/placeholder.svg?height=48&width=48"
                          alt="Apple Watch 5"
                          className="w-10 h-10 object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium">Apple watch 5</h3>
                        <p className="text-xs text-gray-400">By Apple</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="w-7 h-7 bg-[#7367F0] rounded flex items-center justify-center text-white">
                          <span className="text-lg font-bold">-</span>
                        </button>
                        <span className="w-5 text-center">2</span>
                        <button className="w-7 h-7 bg-[#7367F0] rounded flex items-center justify-center text-white">
                          <span className="text-lg font-bold">+</span>
                        </button>
                      </div>
                      <div className="w-20 text-right">
                        <span className="font-medium">$374.90</span>
                      </div>
                    </div>

                    {/* Google Home Mini */}
                    <div className="flex items-center p-4 gap-3">
                      <div className="w-12 h-12 bg-[#2a304a] rounded-md overflow-hidden flex items-center justify-center">
                        <img
                          src="/placeholder.svg?height=48&width=48"
                          alt="Google Home Mini"
                          className="w-10 h-10 object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium">
                          Google Home Mini
                        </h3>
                        <p className="text-xs text-gray-400">By Google</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="w-7 h-7 bg-[#7367F0] rounded flex items-center justify-center text-white">
                          <span className="text-lg font-bold">-</span>
                        </button>
                        <span className="w-5 text-center">14</span>
                        <button className="w-7 h-7 bg-[#7367F0] rounded flex items-center justify-center text-white">
                          <span className="text-lg font-bold">+</span>
                        </button>
                      </div>
                      <div className="w-20 text-right">
                        <span className="font-medium">$129.40</span>
                      </div>
                    </div>

                    {/* iPhone 11 Pro */}
                    <div className="flex items-center p-4 gap-3">
                      <div className="w-12 h-12 bg-[#2a304a] rounded-md overflow-hidden flex items-center justify-center">
                        <img
                          src="/placeholder.svg?height=48&width=48"
                          alt="iPhone 11 Pro"
                          className="w-10 h-10 object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium">iPhone 11 Pro</h3>
                        <p className="text-xs text-gray-400">By Apple</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="w-7 h-7 bg-[#7367F0] rounded flex items-center justify-center text-white">
                          <span className="text-lg font-bold">-</span>
                        </button>
                        <span className="w-5 text-center">2</span>
                        <button className="w-7 h-7 bg-[#7367F0] rounded flex items-center justify-center text-white">
                          <span className="text-lg font-bold">+</span>
                        </button>
                      </div>
                      <div className="w-20 text-right">
                        <span className="font-medium">$699.00</span>
                      </div>
                    </div>

                    {/* iMac Pro */}
                    <div className="flex items-center p-4 gap-3">
                      <div className="w-12 h-12 bg-[#2a304a] rounded-md overflow-hidden flex items-center justify-center">
                        <img
                          src="/placeholder.svg?height=48&width=48"
                          alt="iMac Pro"
                          className="w-10 h-10 object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium">iMac Pro</h3>
                        <p className="text-xs text-gray-400">By Apple</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="w-7 h-7 bg-[#7367F0] rounded flex items-center justify-center text-white">
                          <span className="text-lg font-bold">-</span>
                        </button>
                        <span className="w-5 text-center">1</span>
                        <button className="w-7 h-7 bg-[#7367F0] rounded flex items-center justify-center text-white">
                          <span className="text-lg font-bold">+</span>
                        </button>
                      </div>
                      <div className="w-20 text-right">
                        <span className="font-medium">$4,999.00</span>
                      </div>
                    </div>

                    {/* MacBook Pro (partially visible in the image) */}
                    <div className="flex items-center p-4 gap-3">
                      <div className="w-12 h-12 bg-[#2a304a] rounded-md overflow-hidden flex items-center justify-center">
                        <img
                          src="/placeholder.svg?height=48&width=48"
                          alt="MacBook Pro"
                          className="w-10 h-10 object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium">MacBook Pro</h3>
                        <p className="text-xs text-gray-400">By Apple</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="w-7 h-7 bg-[#7367F0] rounded flex items-center justify-center text-white">
                          <span className="text-lg font-bold">-</span>
                        </button>
                        <span className="w-5 text-center">1</span>
                        <button className="w-7 h-7 bg-[#7367F0] rounded flex items-center justify-center text-white">
                          <span className="text-lg font-bold">+</span>
                        </button>
                      </div>
                      <div className="w-20 text-right">
                        <span className="font-medium">$4,999.00</span>
                      </div>
                    </div>
                  </div>

                  {/* Total and Checkout */}
                  <div className="p-5 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Total:</span>
                      <span className="text-lg font-medium text-purple-400">
                        $10,999.00
                      </span>
                    </div>
                    <button className="w-full py-3 bg-[#7367F0] text-white rounded-border font-medium">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("notifications")}
              className="relative text-gray-300 hover:text-white"
            >
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 15 15"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M8.601 1.25a1.1 1.1 0 0 1-.8 1.06A4.5 4.5 0 0 1 12 6.8v3.45c0 .806.033 1.457.724 1.803A.5.5 0 0 1 12.5 13H8.161a1 1 0 1 1-1.323 0H2.5a.5.5 0 0 1-.224-.947c.691-.346.724-.997.724-1.803V6.8a4.5 4.5 0 0 1 4.2-4.49a1.1 1.1 0 1 1 1.401-1.06M7.5 3.3A3.5 3.5 0 0 0 4 6.8v3.5c0 .446.001 1.108-.3 1.7h7.6c-.301-.592-.3-1.254-.3-1.7V6.8a3.5 3.5 0 0 0-3.5-3.5"
                  clipRule="evenodd"
                />
              </svg>
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
                5
              </span>
            </button>
            {notificationsOpen && (
              <div className="absolute right-0 top-full z-30 mt-2 w-96 rounded-md dark:bg-[#0F172A] bg-white py-2 shadow-lg">
                <div className="w-full max-w-md dark:bg-[#0F172A] bg-white dark:text-white text-[#605A75] rounded-lg overflow-hidden">
                  {/* Header */}
                  <div className="flex justify-between items-center p-5">
                    <h2 className="text-xl font-medium">Notifications</h2>
                    <span className="text-[#7367F0] font-medium">6 New</span>
                  </div>

                  {/* Notifications List */}
                  <div className="divide-y divide-[#2a304a]">
                    {/* Notification 1 */}
                    <div className="flex items-start p-4 gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#2a304a] overflow-hidden flex-shrink-0">
                        <img
                          src="/placeholder.svg?height=40&width=40"
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-1">
                          <span className="font-medium">
                            Congratulation Sam
                          </span>
                          <span>🎉</span>
                          <span className="text-[#7367F0]">winner!</span>
                        </div>
                        <p className="text-xs text-gray-400">
                          Won the monthly best seller badge.
                        </p>
                      </div>
                    </div>

                    {/* Notification 2 */}
                    <div className="flex items-start p-4 gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#2a304a] overflow-hidden flex-shrink-0">
                        <img
                          src="/placeholder.svg?height=40&width=40"
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-1">
                          <span className="font-medium">New message</span>
                          <span className="text-[#7367F0]">received</span>
                        </div>
                        <p className="text-xs text-gray-400">
                          You have 10 unread messages
                        </p>
                      </div>
                    </div>

                    {/* Notification 3 */}
                    <div className="flex items-start p-4 gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#2a304a] overflow-hidden flex-shrink-0 flex items-center justify-center">
                        <span className="text-red-500 font-bold text-sm">
                          MD
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-1">
                          <span className="font-medium">Revised Order</span>
                          <span>👋</span>
                          <span className="text-[#7367F0]">checkout</span>
                        </div>
                        <p className="text-xs text-gray-400">
                          MD Inc. order updated
                        </p>
                      </div>
                    </div>

                    {/* System Notifications Header */}
                    <div className="flex justify-between items-center p-4">
                      <h3 className="font-medium">System Notifications</h3>
                      <div className="w-12 h-6 bg-[#7367F0] rounded-full relative">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>

                    {/* System Notification 1 */}
                    <div className="flex items-start p-4 gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-red-500 text-xs">×</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-1">
                          <span className="font-medium">Server down</span>
                          <span className="text-[#7367F0]">registered</span>
                        </div>
                        <p className="text-xs text-gray-400">
                          USA Server is down due to high CPU usage
                        </p>
                      </div>
                    </div>

                    {/* System Notification 2 */}
                    <div className="flex items-start p-4 gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-green-500 text-xs">✓</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-1">
                          <span className="font-medium">Sales report</span>
                          <span className="text-[#7367F0]">generated</span>
                        </div>
                        <p className="text-xs text-gray-400">
                          Last month sales report generated
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Read All Button */}
                  <div className="p-5">
                    <button className="w-full py-3 bg-[#7367F0] text-white rounded-border font-medium">
                      Read all notifications
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div
            className="flex items-center cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="text-right mr-3">
              <div className="text-sm font-medium flex items-center text-gray-700 dark:text-gray-200">
                John Doe
              </div>
              <div className="text-xs text-gray-400">Admin</div>
            </div>
            <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center overflow-hidden">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="User Avatar"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
          </div>

          {/* Dropdown Menu */}
          <div
            className={`${
              searchOpen ? "opacity-100" : "pointer-events-none opacity-0"
            } absolute left-0 top-0 z-20 flex h-16 w-full items-center bg-[#1a2036] px-4 transition-all duration-200 md:px-6`}
          >
            <div className="flex w-full items-center">
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5 text-gray-400"
                viewBox="0 0 15 15"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M10 6.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-.691 3.516a4.5 4.5 0 1 1 .707-.707l2.838 2.837a.5.5 0 0 1-.708.708z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="text"
                placeholder="Explore..."
                className="w-full bg-transparent text-white outline-none placeholder:text-gray-400"
                autoFocus={searchOpen}
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="ml-2 text-gray-400 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5z" clipRule="evenodd"/></svg>
              </button>
            </div>
          </div>
          {isDropdownOpen && (
            <div className="absolute right-0 top-12 w-48 mt-9 bg-white dark:bg-slate-800 rounded-md shadow-lg py-1 z-10 border border-gray-200 dark:border-slate-700 transition-all duration-200 transform origin-top-right mr-16">
              <a
                href="#"
                className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700"
              >
                
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M7.5.875a3.625 3.625 0 0 0-1.006 7.109c-1.194.145-2.218.567-2.99 1.328c-.982.967-1.479 2.408-1.479 4.288a.475.475 0 1 0 .95 0c0-1.72.453-2.88 1.196-3.612c.744-.733 1.856-1.113 3.329-1.113s2.585.38 3.33 1.113c.742.733 1.195 1.892 1.195 3.612a.475.475 0 1 0 .95 0c0-1.88-.497-3.32-1.48-4.288c-.77-.76-1.795-1.183-2.989-1.328A3.627 3.627 0 0 0 7.5.875M4.825 4.5a2.675 2.675 0 1 1 5.35 0a2.675 2.675 0 0 1-5.35 0" clipRule="evenodd"/></svg>
                Profile
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700"
              >
                
                <svg xmlns="http://www.w3.org/2000/svg" className="h- w-4 mr-2" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M7.07.65a.85.85 0 0 0-.828.662l-.238 1.05q-.57.167-1.08.448l-.91-.574a.85.85 0 0 0-1.055.118l-.606.606a.85.85 0 0 0-.118 1.054l.574.912q-.28.509-.447 1.079l-1.05.238a.85.85 0 0 0-.662.829v.857a.85.85 0 0 0 .662.829l1.05.238q.166.57.448 1.08l-.575.91a.85.85 0 0 0 .118 1.055l.607.606a.85.85 0 0 0 1.054.118l.911-.574q.51.28 1.079.447l.238 1.05a.85.85 0 0 0 .829.662h.857a.85.85 0 0 0 .829-.662l.238-1.05q.57-.166 1.08-.447l.911.574a.85.85 0 0 0 1.054-.118l.606-.606a.85.85 0 0 0 .118-1.054l-.574-.911q.282-.51.448-1.08l1.05-.238a.85.85 0 0 0 .662-.829v-.857a.85.85 0 0 0-.662-.83l-1.05-.237q-.166-.57-.447-1.08l.574-.91a.85.85 0 0 0-.118-1.055l-.606-.606a.85.85 0 0 0-1.055-.118l-.91.574a5.3 5.3 0 0 0-1.08-.448l-.239-1.05A.85.85 0 0 0 7.928.65zM4.92 3.813a4.5 4.5 0 0 1 1.795-.745L7.071 1.5h.857l.356 1.568a4.5 4.5 0 0 1 1.795.744l1.36-.857l.607.606l-.858 1.36c.37.527.628 1.136.744 1.795l1.568.356v.857l-1.568.355a4.5 4.5 0 0 1-.744 1.796l.857 1.36l-.606.606l-1.36-.857a4.5 4.5 0 0 1-1.795.743L7.928 13.5h-.857l-.356-1.568a4.5 4.5 0 0 1-1.794-.744l-1.36.858l-.607-.606l.858-1.36a4.5 4.5 0 0 1-.744-1.796L1.5 7.93v-.857l1.568-.356a4.5 4.5 0 0 1 .744-1.794L2.954 3.56l.606-.606zM9.026 7.5a1.525 1.525 0 1 1-3.05 0a1.525 1.525 0 0 1 3.05 0m.9 0a2.425 2.425 0 1 1-4.85 0a2.425 2.425 0 0 1 4.85 0" clipRule="evenodd"/></svg>
                Settings
              </a>
              <div className="border-t border-gray-200 dark:border-slate-700 my-1"></div>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-slate-700"
              >

                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M2.146 11.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 1 0-.708.708L5.793 7.5zm6 0a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 1 0-.708.708L11.793 7.5z" clipRule="evenodd"/></svg>
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
