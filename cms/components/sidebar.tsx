"use client";

import { useState } from "react";
import { Users } from "lucide-react";
import Link from "next/link";

export default function HeaderWithSidebar() {
  const [expanded, setExpanded] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [active,setActive]=useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const shouldExpand = expanded || isHovering;
  const handleActive=()=>setActive(!active);
  return (
    <div className="flex h-auto">
      {/* Sidebar */}
      <div
        className={`bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-all duration-300 ease-in-out ${
          shouldExpand ? "w-72" : "w-20"
        } flex flex-col border-r border-slate-300 dark:border-slate-700`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Logo and Toggle */}
        <div className="flex items-center justify-between px-5 py-4">
          <div className="flex items-center">
            <div className="h-9 w-9 rounded-full bg-indigo-400 flex items-center justify-center">
              <span className="text-slate-800 text-xl font-bold">V</span>
            </div>
            <span
              className={`ml-2 text-xl font-bold text-indigo-500 transition-opacity duration-300 ${
                shouldExpand ? "opacity-100" : "opacity-0"
              }`}
            >
              Vuexy
            </span>
          </div>
          {shouldExpand && (
  <button onClick={() => { handleToggle(); handleActive(); }}>
    {active ? (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#8076E3]" viewBox="0 0 15 15">
        <path fill="currentColor" fillRule="evenodd" d="M.877 7.5a6.623 6.623 0 1 1 13.246 0a6.623 6.623 0 0 1-13.246 0M7.5 1.827a5.673 5.673 0 1 0 0 11.346a5.673 5.673 0 0 0 0-11.346" clipRule="evenodd" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#8076E3]" viewBox="0 0 15 15">
        <path fill="currentColor" fillRule="evenodd" d="M7.5.877a6.623 6.623 0 1 0 0 13.246A6.623 6.623 0 0 0 7.5.877M1.827 7.5a5.673 5.673 0 1 1 11.346 0a5.673 5.673 0 0 1-11.346 0m6.546 0a.873.873 0 1 1-1.745 0a.873.873 0 0 1 1.745 0m.95 0a1.823 1.823 0 1 1-3.645 0a1.823 1.823 0 0 1 3.645 0" clipRule="evenodd" />
      </svg>
    )}
  </button>
)}

        </div>

        {/* Navigation */}
        <nav className="flex-1 mt-4">
          <ul>
            <li>
              <Link
                href="/"
                className="flex items-center gap-4 py-3 px-4 text-slate-700 dark:text-gray-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M7.08.222a.6.6 0 0 1 .84 0l6.75 6.64a.6.6 0 0 1-.84.856L13 6.902V12.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5V6.902l-.83.816a.6.6 0 1 1-.84-.856zm.42 1.27L12 5.918V12h-2V8.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V12H3V5.918zM7 12h2V9H7z" clipRule="evenodd"/></svg>
                <span
                  className={`transition-all duration-300 whitespace-nowrap ${
                    shouldExpand
                      ? "opacity-100 w-auto"
                      : "opacity-0 w-0 overflow-hidden"
                  }`}
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex items-center gap-4 py-3 px-4 text-slate-700 dark:text-gray-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all"
              >
                {/* <Mail className="h-6 w-7" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-7" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M1 2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm0 1h13v.925a.45.45 0 0 0-.241.07L7.5 7.967L1.241 3.995A.45.45 0 0 0 1 3.925zm0 1.908V12h13V4.908L7.741 8.88a.45.45 0 0 1-.482 0z" clipRule="evenodd"/></svg>
                <span
                  className={`transition-all duration-300 whitespace-nowrap ${
                    shouldExpand
                      ? "opacity-100 w-auto"
                      : "opacity-0 w-0 overflow-hidden"
                  }`}
                >
                  Inbox
                </span>
              </Link>
              <Link
                href="/"
                className="flex items-center gap-4 py-3 px-4 text-slate-700 dark:text-gray-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all"
              >
                <Users className="h-6 w-7" />
                <span
                  className={`transition-all duration-300 whitespace-nowrap ${
                    shouldExpand
                      ? "opacity-100 w-auto"
                      : "opacity-0 w-0 overflow-hidden"
                  }`}
                >
                  Analysis
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
