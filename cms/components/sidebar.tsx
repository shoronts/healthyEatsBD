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
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-[#FFFFFF] dark:bg-slate-800 text-slate-900 dark:text-white transition-all duration-300 ease-in-out ${
          shouldExpand ? "w-72" : "w-20"
        } flex flex-col border-r border-slate-300 dark:border-slate-700`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Logo and Toggle */}
        <div className="flex items-center justify-between px-3 py-4">
          <div className="flex items-center">
            <div className="h-9 w-9 rounded-full bg-indigo-400 flex items-center justify-center">
              <span className="text-slate-800 text-xl font-bold">V</span>
            </div>
            <span
              className={`ml-2 text-xl font-bold text-indigo-500 transition-opacity duration-300 ${
                shouldExpand ? "opacity-100" : "opacity-0"
              }`}
            >
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
                href="/dashboard"
                className="flex items-center gap-3 py-3 px-4 text-slate-700 dark:text-gray-300 hover:bg-teal-900 hover:text-white hover:font-semibold dark:hover:bg-slate-700 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M2.8 1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 0 0 1.04 2.15c-.04.174-.04.37-.04.6v2.5c0 .229 0 .426.041.6A1.5 1.5 0 0 0 2.15 6.96c.174.04.37.04.6.04h2.5c.229 0 .426 0 .6-.041A1.5 1.5 0 0 0 6.96 5.85c.04-.174.04-.37.04-.6v-2.5c0-.229 0-.426-.041-.6A1.5 1.5 0 0 0 5.85 1.04C5.676 1 5.48 1 5.25 1zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 0 1 .37.37c.01.042.013.108.013.416v2.4c0 .308-.003.374-.014.417a.5.5 0 0 1-.37.37C5.575 5.996 5.509 6 5.2 6H2.8c-.308 0-.374-.003-.417-.014a.5.5 0 0 1-.37-.37C2.004 5.575 2 5.509 2 5.2V2.8c0-.308.003-.374.014-.417a.5.5 0 0 1 .37-.37M9.8 1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 0 0 8.04 2.15c-.04.174-.04.37-.04.6v2.5c0 .229 0 .426.041.6A1.5 1.5 0 0 0 9.15 6.96c.174.04.37.04.6.04h2.5c.229 0 .426 0 .6-.041a1.5 1.5 0 0 0 1.11-1.109c.04-.174.04-.37.04-.6v-2.5c0-.229 0-.426-.041-.6a1.5 1.5 0 0 0-1.109-1.11c-.174-.04-.37-.04-.6-.04zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 0 1 .37.37c.01.042.013.108.013.416v2.4c0 .308-.004.374-.014.417a.5.5 0 0 1-.37.37c-.042.01-.108.013-.416.013H9.8c-.308 0-.374-.003-.417-.014a.5.5 0 0 1-.37-.37C9.004 5.575 9 5.509 9 5.2V2.8c0-.308.003-.374.014-.417a.5.5 0 0 1 .37-.37M2.75 8h2.5c.229 0 .426 0 .6.041A1.5 1.5 0 0 1 6.96 9.15c.04.174.04.37.04.6v2.5c0 .229 0 .426-.041.6a1.5 1.5 0 0 1-1.109 1.11c-.174.04-.37.04-.6.04h-2.5c-.229 0-.426 0-.6-.041a1.5 1.5 0 0 1-1.11-1.109c-.04-.174-.04-.37-.04-.6v-2.5c0-.229 0-.426.041-.6A1.5 1.5 0 0 1 2.15 8.04c.174-.04.37-.04.6-.04m.05 1c-.308 0-.374.003-.417.014a.5.5 0 0 0-.37.37C2.004 9.425 2 9.491 2 9.8v2.4c0 .308.003.374.014.417a.5.5 0 0 0 .37.37c.042.01.108.013.416.013h2.4c.308 0 .374-.004.417-.014a.5.5 0 0 0 .37-.37c.01-.042.013-.108.013-.416V9.8c0-.308-.003-.374-.014-.417a.5.5 0 0 0-.37-.37C5.575 9.004 5.509 9 5.2 9zm7-1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 0 0 8.04 9.15c-.04.174-.04.37-.04.6v2.5c0 .229 0 .426.041.6a1.5 1.5 0 0 0 1.109 1.11c.174.041.371.041.6.041h2.5c.229 0 .426 0 .6-.041a1.5 1.5 0 0 0 1.109-1.109c.041-.174.041-.371.041-.6v-2.5c0-.229 0-.426-.041-.6A1.5 1.5 0 0 0 12.85 8.04c-.174-.04-.37-.04-.6-.04zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 0 1 .37.37c.01.042.013.108.013.416v2.4c0 .308-.004.374-.014.417a.5.5 0 0 1-.37.37c-.042.01-.108.013-.416.013H9.8c-.308 0-.374-.004-.417-.014a.5.5 0 0 1-.37-.37C9.004 12.575 9 12.509 9 12.2V9.8c0-.308.003-.374.014-.417a.5.5 0 0 1 .37-.37" clipRule="evenodd"/></svg>
                <span
                  className={`transition-all duration-300 whitespace-nowrap ${
                    shouldExpand
                      ? "opacity-100 w-auto"
                      : "opacity-0 w-0 overflow-hidden"
                  }`}
                >
                  Dashboard
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/foreCast"
                className="flex items-center gap-3 py-3 px-4 text-slate-700 dark:text-gray-300 hover:bg-teal-900 hover:text-white hover:font-semibold dark:hover:bg-slate-700 transition-all"
              >
                {/* <Mail className="h-6 w-7" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M11.5 1a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-1 0v-12a.5.5 0 0 1 .5-.5m-2 2a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-1 0v-10a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-1 0v-10a.5.5 0 0 1 .5-.5m-8 1a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0v-9a.5.5 0 0 1 .5-.5m-4 1a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8a.5.5 0 0 1 .5-.5m6 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8a.5.5 0 0 1 .5-.5m-4 2a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0v-6a.5.5 0 0 1 .5-.5" clipRule="evenodd"/></svg>
                <span
                  className={`transition-all duration-300 whitespace-nowrap ${
                    shouldExpand
                      ? "opacity-100 w-auto"
                      : "opacity-0 w-0 overflow-hidden"
                  }`}
                >
                  Forecast
                </span>
              </Link>
              </li>
              <li>
              <Link
                href="/orders"
                className="flex items-center gap-3 py-3 px-4 text-slate-700 dark:text-gray-300 hover:bg-teal-900 hover:text-white hover:font-semibold dark:hover:bg-slate-700 transition-all"
              >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 15 15"><g fill="currentColor"><rect width="1" height="1" x="7" y="5.025" rx=".5"/><rect width="1" height="1" x="7" y="3.025" rx=".5"/><rect width="1" height="1" x="7" y="7.025" rx=".5"/><rect width="1" height="1" x="7" y="13.025" rx=".5"/><rect width="1" height="1" x="7" y="1.025" rx=".5"/><rect width="1" height="1" x="13" y="7.025" rx=".5"/><rect width="1" height="1" x="5" y="7.025" rx=".5"/><rect width="1" height="1" x="3" y="7.025" rx=".5"/><rect width="1" height="1" x="9" y="7.025" rx=".5"/><rect width="1" height="1" x="11" y="7.025" rx=".5"/><rect width="1" height="1" x="7" y="9.025" rx=".5"/><rect width="1" height="1" x="7" y="11.025" rx=".5"/><rect width="1" height="1" x="1" y="7.025" rx=".5"/><path fillRule="evenodd" d="M1 1.5a.5.5 0 0 1 .5-.5H6v1H2v4H1zM13 2H9V1h4.5a.5.5 0 0 1 .5.5V6h-1zM1 13.5V9h1v4h4v1H1.5a.5.5 0 0 1-.5-.5m12-.5V9h1v4.5a.5.5 0 0 1-.5.5h-4v-1z" clipRule="evenodd"/></g></svg>
                <span
                  className={`transition-all duration-300 whitespace-nowrap ${
                    shouldExpand
                      ? "opacity-100 w-auto"
                      : "opacity-0 w-0 overflow-hidden"
                  }`}
                >
                  Order
                </span>
              </Link>
            </li>
                          <li>
              <Link
                href="/inventory"
                className="flex items-center gap-3 py-3 px-4 text-slate-700 dark:text-gray-300 hover:bg-teal-900 hover:text-white hover:font-semibold dark:hover:bg-slate-700 transition-all"
              >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 15 15"><g fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M2 3.25C2 2.56 2.56 2 3.25 2h8.5c.69 0 1.25.56 1.25 1.25v2.5C13 6.44 12.44 7 11.75 7h-8.5C2.56 7 2 6.44 2 5.75v-2.5zM3.25 3a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25h-8.5zM4 9.25C4 8.56 4.56 8 5.25 8h4.5c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25h-4.5C4.56 13 4 12.44 4 11.75v-2.5z" fill="currentColor"/></g></svg>
                <span
                  className={`transition-all duration-300 whitespace-nowrap ${
                    shouldExpand
                      ? "opacity-100 w-auto"
                      : "opacity-0 w-0 overflow-hidden"
                  }`}
                >
                  Inventory
                </span>
              </Link>
            </li>
              <li>
              <Link
                href="/productPrice"
                className="flex items-center gap-3 py-3 px-4 text-slate-700 dark:text-gray-300 hover:bg-teal-900 hover:text-white hover:font-semibold dark:hover:bg-slate-700 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M7.754 1.82a.5.5 0 0 0-.508 0l-5.5 3.25a.5.5 0 0 0 0 .86l5.5 3.25a.5.5 0 0 0 .508 0l5.5-3.25a.5.5 0 0 0 0-.86zM7.5 8.17L2.983 5.5L7.5 2.83l4.517 2.67zm-5.246.15a.5.5 0 0 0-.508.86l5.5 3.25a.5.5 0 0 0 .508 0l5.5-3.25a.5.5 0 1 0-.508-.86L7.5 11.42z" clipRule="evenodd"/></svg>
                <span
                  className={`transition-all duration-300 whitespace-nowrap ${
                    shouldExpand
                      ? "opacity-100 w-auto"
                      : "opacity-0 w-0 overflow-hidden"
                  }`}
                >
                  Products
                </span>
              </Link>
            </li>
              <li>
              <Link
                href="/customers"
                className="flex items-center gap-3 py-3 px-4 text-slate-700 dark:text-gray-300 hover:bg-teal-900 hover:text-white hover:font-semibold dark:hover:bg-slate-700 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M7.5.875a3.625 3.625 0 0 0-1.006 7.109c-1.194.145-2.218.567-2.99 1.328c-.982.967-1.479 2.408-1.479 4.288a.475.475 0 1 0 .95 0c0-1.72.453-2.88 1.196-3.612c.744-.733 1.856-1.113 3.329-1.113s2.585.38 3.33 1.113c.742.733 1.195 1.892 1.195 3.612a.475.475 0 1 0 .95 0c0-1.88-.497-3.32-1.48-4.288c-.77-.76-1.795-1.183-2.989-1.328A3.627 3.627 0 0 0 7.5.875M4.825 4.5a2.675 2.675 0 1 1 5.35 0a2.675 2.675 0 0 1-5.35 0" clipRule="evenodd"/></svg>
                <span
                  className={`transition-all duration-300 whitespace-nowrap ${
                    shouldExpand
                      ? "opacity-100 w-auto"
                      : "opacity-0 w-0 overflow-hidden"
                  }`}
                >
                  Customers
                </span>
              </Link>
            </li>

                          <li>
              <Link
                href="/deleveryPartners"
                className="flex items-center gap-3 py-3 px-4 text-slate-700 dark:text-gray-300 hover:bg-teal-900 hover:text-white hover:font-semibold dark:hover:bg-slate-700 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24"><path fill="currentColor" d="M17 15q-1.05 0-1.775-.725T14.5 12.5t.725-1.775T17 10t1.775.725t.725 1.775t-.725 1.775T17 15m-5 4v-.4q0-.6.313-1.112t.887-.738q.9-.375 1.863-.562T17 16t1.938.188t1.862.562q.575.225.888.738T22 18.6v.4q0 .425-.288.713T21 20h-8q-.425 0-.712-.288T12 19m-2-7q-1.65 0-2.825-1.175T6 8t1.175-2.825T10 4t2.825 1.175T14 8t-1.175 2.825T10 12m-8 5.2q0-.85.425-1.562T3.6 14.55q1.5-.75 3.113-1.15T10 13q.875 0 1.75.15t1.75.35l-.85.85l-.85.85q-.45-.125-.9-.162T10 15q-1.45 0-2.838.35t-2.662 1q-.25.125-.375.35T4 17.2v.8h6v.975q0 .325.125.588t.35.437H4q-.825 0-1.412-.587T2 18zm8-7.2q.825 0 1.413-.587T12 8t-.587-1.412T10 6t-1.412.588T8 8t.588 1.413T10 10"/></svg>
                <span
                  className={`transition-all duration-300 whitespace-nowrap ${
                    shouldExpand
                      ? "opacity-100 w-auto"
                      : "opacity-0 w-0 overflow-hidden"
                  }`}
                >
                  Delivery Partners
                </span>
              </Link>
            </li>

                          <li>
              <Link
                href="/locations"
                className="flex items-center gap-3 py-3 px-4 text-slate-700 dark:text-gray-300 hover:bg-teal-900 hover:text-white hover:font-semibold dark:hover:bg-slate-700 transition-all"
              >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21.325q-.35 0-.7-.125t-.625-.375Q9.05 19.325 7.8 17.9t-2.087-2.762t-1.275-2.575T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 1.125-.437 2.363t-1.275 2.575T16.2 17.9t-2.875 2.925q-.275.25-.625.375t-.7.125M12 16q.425 0 .738-.312t.312-.738t-.312-.737T12 13.9t-.737.313t-.313.737t.313.738T12 16m.025-3.1q.3 0 .513-.213t.212-.512q0-.2.1-.437t.275-.438q.125-.125.3-.288t.375-.362q.525-.525.788-1.05t.262-1.05q0-1.125-.85-1.838T12 6q-.85 0-1.588.438T9.326 7.65q-.125.275-.025.563t.375.412t.563.025t.412-.375q.2-.375.563-.6T12 7.45q.525 0 .938.325t.412.825q0 .425-.2.75t-.775.8q-.25.2-.425.375t-.3.375q-.175.275-.275.55t-.1.525q0 .35.2.638t.55.287M12 19.35q3.05-2.8 4.525-5.087T18 10.2q0-2.725-1.737-4.462T12 4T7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35M12 10"/></svg>
                <span
                  className={`transition-all duration-300 whitespace-nowrap ${
                    shouldExpand
                      ? "opacity-100 w-auto"
                      : "opacity-0 w-0 overflow-hidden"
                  }`}
                >
                  Location
                </span>
              </Link>
            </li>

                          <li>
              <Link
                href="/reports"
                className="flex items-center gap-3 py-3 px-4 text-slate-700 dark:text-gray-300 hover:bg-teal-900 hover:text-white hover:font-semibold dark:hover:bg-slate-700 transition-all"
              >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M3.309 1a1 1 0 0 0-.894.553L1.053 4.276A.5.5 0 0 0 1 4.5V13a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.053-.224l-1.362-2.723A1 1 0 0 0 11.691 1zm0 1H7v2H2.309zM8 4V2h3.691l1 2zm-.5 1H13v8H2V5zm-2 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" clipRule="evenodd"/></svg>
                <span
                  className={`transition-all duration-300 whitespace-nowrap ${
                    shouldExpand
                      ? "opacity-100 w-auto"
                      : "opacity-0 w-0 overflow-hidden"
                  }`}
                >
                  Reports
                </span>
              </Link>
            </li>

                          <li>
              <Link
                href="/users"
                className="flex items-center gap-3 py-3 px-4 text-slate-700 dark:text-gray-300 hover:bg-teal-900 hover:text-white hover:font-semibold dark:hover:bg-slate-700 transition-all"
              >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M7.499 0C6.326 0 5.36.39 4.738 1.194C4.238 1.839 4 2.682 4 3.634h1c0-.79.197-1.4.528-1.828c.388-.5 1.024-.806 1.97-.806c.859 0 1.465.265 1.86.686c.4.426.642 1.074.642 1.95V6H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1V3.636c0-1.055-.293-1.974-.912-2.634C9.465.338 8.57 0 7.498 0M3 7h9v6H3z" clipRule="evenodd"/></svg>
                <span
                  className={`transition-all duration-300 whitespace-nowrap ${
                    shouldExpand
                      ? "opacity-100 w-auto"
                      : "opacity-0 w-0 overflow-hidden"
                  }`}
                >
                  Access
                </span>
              </Link>
            </li>


            
          </ul>
        </nav>
      </div>
    </div>
    
  );
}
