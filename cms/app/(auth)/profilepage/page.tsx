import Image from "next/image"
import {FileText } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-5">
      {/* Header with gradient background */}
        <div className="shadow-sm">
          <div className="relative h-64 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500">
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="dark:bg-gray-800 bg-white border border-gray-200 dark:border-gray-700">
          <div className="relative z-10 flex items-end h-full px-8 pb-6">
          <div className="flex items-center gap-6 w-full">
            {/* Profile Avatar */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-4 border-white/20 overflow-hidden bg-gray-800">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="John Doe"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* User Info */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">John Doe</h1>
              <div className="flex items-center gap-6 text-gray-800 dark:text-white">
                <div className="flex items-center gap-2">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M7.5.875a3.625 3.625 0 0 0-1.006 7.109c-1.194.145-2.218.567-2.99 1.328c-.982.967-1.479 2.408-1.479 4.288a.475.475 0 1 0 .95 0c0-1.72.453-2.88 1.196-3.612c.744-.733 1.856-1.113 3.329-1.113s2.585.38 3.33 1.113c.742.733 1.195 1.892 1.195 3.612a.475.475 0 1 0 .95 0c0-1.88-.497-3.32-1.48-4.288c-.77-.76-1.795-1.183-2.989-1.328A3.627 3.627 0 0 0 7.5.875M4.825 4.5a2.675 2.675 0 1 1 5.35 0a2.675 2.675 0 0 1-5.35 0" clipRule="evenodd"/></svg>
                  <span>UX Designer</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"/></svg>
                  <span>Vatican City</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="M5.616 21q-.691 0-1.153-.462T4 19.385V6.615q0-.69.463-1.152T5.616 5h1.769V3.308q0-.233.153-.386t.385-.153t.386.153t.153.386V5h7.154V3.27q0-.214.143-.358t.357-.143t.356.143t.144.357V5h1.769q.69 0 1.153.463T20 6.616v12.769q0 .69-.462 1.153T18.384 21zm0-1h12.769q.23 0 .423-.192t.192-.424v-8.768H5v8.769q0 .23.192.423t.423.192M5 9.615h14v-3q0-.23-.192-.423T18.384 6H5.616q-.231 0-.424.192T5 6.616zm0 0V6zm7 4.539q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.539t-.54.23m-4 0q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.539t-.54.23m8 0q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.539t-.54.23M12 18q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.54T12 18m-4 0q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.54T8 18m8 0q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.54T16 18"/></svg>
                  <span>Joined April 2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>

      {/* Navigation Tabs */}
      <div className="bg-white dark:bg-gray-800 my-6">
        <div className="">
          <div className="flex gap-8">
            <button className="flex items-center gap-2 rounded-xl text-white bg-[#7367F0] px-4 h-11">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M7.5.875a3.625 3.625 0 0 0-1.006 7.109c-1.194.145-2.218.567-2.99 1.328c-.982.967-1.479 2.408-1.479 4.288a.475.475 0 1 0 .95 0c0-1.72.453-2.88 1.196-3.612c.744-.733 1.856-1.113 3.329-1.113s2.585.38 3.33 1.113c.742.733 1.195 1.892 1.195 3.612a.475.475 0 1 0 .95 0c0-1.88-.497-3.32-1.48-4.288c-.77-.76-1.795-1.183-2.989-1.328A3.627 3.627 0 0 0 7.5.875M4.825 4.5a2.675 2.675 0 1 1 5.35 0a2.675 2.675 0 0 1-5.35 0" clipRule="evenodd"/></svg>
              Profile
            </button>
            <button className="flex items-center gap-2 px-4 py-4 dark:text-gray-400 text-gray-800 dark:hover:text-white hover:text-gray-700 h-11">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="4"><path fill="currentColor" d="M19 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14"/><path d="M32.608 7A7 7 0 0 1 36 13a7 7 0 0 1-3.392 6"/><path fill="currentColor" d="M4 40.8V42h30v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496C27.92 28 25.68 28 21.2 28h-4.4c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C4 34.08 4 36.32 4 40.8"/><path d="M44 42v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496"/></g></svg>
              Teams
            </button>
            <button className="flex items-center gap-2 px-4 py-4 dark:text-gray-400 text-gray-800 dark:hover:text-white hover:text-gray-700 h-11">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="M5 15h4v4H5zM5 5h4v4H5zm10 0h4v4h-4z" opacity=".3"/><path fill="currentColor" d="M3 11h8V3H3zm2-6h4v4H5zM3 21h8v-8H3zm2-6h4v4H5zm8-12v8h8V3zm6 6h-4V5h4zm0 10h2v2h-2zm-6-6h2v2h-2zm2 2h2v2h-2zm-2 2h2v2h-2zm2 2h2v2h-2zm2-2h2v2h-2zm0-4h2v2h-2zm2 2h2v2h-2z"/></svg>
              Projects
            </button>
            <button className="flex items-center gap-2 px-4 py-4 dark:text-gray-400 text-gray-800 dark:hover:text-white hover:text-gray-700 h-11">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="M15.729 3.884c1.434-1.44 3.532-1.47 4.693-.304c1.164 1.168 1.133 3.28-.303 4.72l-2.423 2.433a.75.75 0 0 0 1.062 1.059l2.424-2.433c1.911-1.919 2.151-4.982.303-6.838c-1.85-1.857-4.907-1.615-6.82.304L9.819 7.692c-1.911 1.919-2.151 4.982-.303 6.837a.75.75 0 1 0 1.063-1.058c-1.164-1.168-1.132-3.28.303-4.72z"/><path fill="currentColor" d="M14.485 9.47a.75.75 0 0 0-1.063 1.06c1.164 1.168 1.133 3.279-.303 4.72l-4.847 4.866c-1.435 1.44-3.533 1.47-4.694.304c-1.164-1.168-1.132-3.28.303-4.72l2.424-2.433a.75.75 0 0 0-1.063-1.059l-2.424 2.433c-1.911 1.92-2.151 4.982-.303 6.838c1.85 1.858 4.907 1.615 6.82-.304l4.847-4.867c1.911-1.918 2.151-4.982.303-6.837"/></svg>
              Connections
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex gap-8 py-6">
        {/* Left Sidebar */}
        <div className="w-[30%] space-y-8 border border-gray-200 dark:border-gray-800 p-7 rounded">
          {/* About Section */}
          <div className="">
            <h3 className="text-xl font-normal dark:text-gray-400 text-gray-400 uppercase tracking-wider mb-4">ABOUT</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2 dark:text-gray-300 text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M7.5.875a3.625 3.625 0 0 0-1.006 7.109c-1.194.145-2.218.567-2.99 1.328c-.982.967-1.479 2.408-1.479 4.288a.475.475 0 1 0 .95 0c0-1.72.453-2.88 1.196-3.612c.744-.733 1.856-1.113 3.329-1.113s2.585.38 3.33 1.113c.742.733 1.195 1.892 1.195 3.612a.475.475 0 1 0 .95 0c0-1.88-.497-3.32-1.48-4.288c-.77-.76-1.795-1.183-2.989-1.328A3.627 3.627 0 0 0 7.5.875M4.825 4.5a2.675 2.675 0 1 1 5.35 0a2.675 2.675 0 0 1-5.35 0" clipRule="evenodd"/></svg>
                <span className="text-[16px]">Full Name:</span>
                <span className="text-gray-800 dark:text-white text-[14px]">John Doe</span>
              </div>
              <div className="flex items-center gap-3 dark:text-gray-300 text-gray-800">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                <span className="text-[16px]">Status:</span>
                <span className="text-gray-800 dark:text-white text-[14px]">Active</span>
              </div>
              <div className="flex items-center gap-3 dark:text-gray-300 text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" d="m13.5 4l-3 3L7 2L3.5 7l-3-3v6.5A1.5 1.5 0 0 0 2 12h10a1.5 1.5 0 0 0 1.5-1.5Z"/></svg>
                <span className="text-[16px]">Role:</span>
                <span className="text-gray-800 dark:text-white text-[14px]">Developer</span>
              </div>
              <div className="flex items-center gap-3 dark:text-gray-300 text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20"><path fill="currentColor" d="M3.5 2.75a.75.75 0 0 0-1.5 0v14.5a.75.75 0 0 0 1.5 0v-4.392l1.657-.348a6.45 6.45 0 0 1 4.271.572a7.95 7.95 0 0 0 5.965.524l2.078-.64A.75.75 0 0 0 18 12.25v-8.5a.75.75 0 0 0-.904-.734l-2.38.501a7.25 7.25 0 0 1-4.186-.363l-.502-.2a8.75 8.75 0 0 0-5.053-.439l-1.475.31z"/></svg>
                <span className="text-[16px]">Country:</span>
                <span className="text-gray-800 dark:text-white text-[14px]">USA</span>
              </div>
              <div className="flex items-center gap-3 dark:text-gray-300 text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M2 5h14M9 2v3m4 0q-2 8-9 11m2-7q2 4 6 6m1 7l5-11l5 11m-1.4-3h-7.2"/></svg>
                <span className="text-[16px]">Languages:</span>
                <span className="text-gray-800 dark:text-white text-[14px]">English</span>
              </div>
            </div>
          </div>

          {/* Contacts Section */}
          <div>
            <h3 className="text-xs font-semibold dark:text-gray-400 text-gray-400 uppercase tracking-wider mb-4">CONTACTS</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 dark:text-gray-300 text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="M16 11V8h-3V6h3V3h2v3h3v2h-3v3zm3.95 10q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"/></svg>
                <span className="text-[16px]">Contact:</span>
                <span className="text-gray-800 text-[14px] dark:text-white">(123) 456-7890</span>
              </div>
              <div className="flex items-center gap-3 dark:text-gray-300 text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="M2 22V9q0-.825.588-1.413Q3.175 7 4 7h2V4q0-.825.588-1.413Q7.175 2 8 2h12q.825 0 1.413.587Q22 3.175 22 4v8q0 .825-.587 1.412Q20.825 14 20 14h-2v3q0 .825-.587 1.413Q16.825 19 16 19H5Zm6-10h8V9H8Zm-4 5h12v-3H8q-.825 0-1.412-.588Q6 12.825 6 12V9H4Zm14-5h2V4H8v3h8q.825 0 1.413.587Q18 8.175 18 9Z"/></svg>
                <span className="text-[16px]">Skype:</span>
                <span className="text-gray-800 text-[14px] dark:text-white">john.doe</span>
              </div>
              <div className="flex items-center gap-3 dark:text-gray-300 text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 8l-10 5L2 8"/></g></svg>
                <span className="text-[16px]">Email:</span>
                <span className="text-gray-800 text-[14px] dark:text-white">john.doe@example.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 border p-7 rounded border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="M15.86 4.39v15c0 1.67 1.14 2.61 2.39 2.61c1.14 0 2.39-.79 2.39-2.61V4.5c0-1.54-1.14-2.5-2.39-2.5s-2.39 1.06-2.39 2.39M9.61 12v7.39C9.61 21.07 10.77 22 12 22c1.14 0 2.39-.79 2.39-2.61v-7.28c0-1.54-1.14-2.5-2.39-2.5S9.61 10.67 9.61 12m-3.86 5.23c1.32 0 2.39 1.07 2.39 2.38a2.39 2.39 0 1 1-4.78 0c0-1.31 1.07-2.38 2.39-2.38"/></svg>
            <h2 className="text-xl font-semibold text-white">Activity Timeline</h2>
          </div>

          <div className="space-y-6">
            {/* Timeline Item 1 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full" />
                <div className="w-px h-16 bg-gray-700 mt-2" />
              </div>
              <div className="flex-1 -mt-9">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-medium text-[16px]">12 Invoices have been paid</h4>
                  <span className="text-xs dark:text-gray-400 text-gray-800">12 min ago</span>
                </div>
                <p className="dark:text-gray-400 text-gray-800 text-sm mb-3">Invoices have been paid to the company</p>
                <div className="flex items-center gap-2 text-sm">
                  <FileText className="w-4 h-4 text-red-500" />
                  <span className="dark:text-gray-300 text-gray-800">invoices.pdf</span>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <div className="w-px h-20 bg-gray-700 mt-2" />
              </div>
              <div className="flex-1 -mt-9">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-medium text-[16px]">Client Meeting</h4>
                  <span className="text-xs dark:text-gray-400 text-gray-800">45 min ago</span>
                </div>
                <p className="dark:text-gray-400 text-gray-800 text-sm mb-3">Project meeting with john @10:15am</p>
                <div className="flex items-center gap-2">
                  <div className="text-sm">
                    <span className="text-white">Lester McCarthy</span>
                    <span className="dark:text-gray-400 text-gray-800"> (Client)</span>
                    <br />
                    <span className="dark:text-gray-400 text-gray-800 text-xs">CEO of Pixinvent</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-cyan-500 rounded-full" />
              </div>
              <div className="flex-1 -mt-9">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-medium text-[16px]">Create a new project for client</h4>
                  <span className="text-xs dark:text-gray-400 text-gray-800">2 Day Ago</span>
                </div>
                <p className="dark:text-gray-400 text-gray-800 text-sm mb-3">6 team members in a project</p>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs dark:text-gray-300 text-gray-800">
                    +3
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="pb-8">
        <div className="flex gap-8">
          {/* Left Sidebar Extension - Overview */}
          <div className="w-[30%] space-y-8 border border-gray-200 dark:border-gray-800 p-7 rounded">
            <div className="mb-8">
              <h3 className="text-xs font-semibold dark:text-gray-400 text-gray-400 uppercase tracking-wider mb-4">OVERVIEW</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 dark:text-gray-300 text-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                  <span className="text-[16px]">Task Completed:</span>
                  <span className="text-white">13.5k</span>
                </div>
                <div className="flex items-center gap-3 dark:text-gray-300 text-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="M19 19h4v2h-2v2h-2zm-2-6h4v4h-2v-2h-2zm-4 0h2v2h2v6h-2v-2h-2zM3 3h6v6H3zm2 2v2h2V5zm10-2h6v6h-6zm2 2v2h2V5zM3 15h6v6H3zm2 2v2h2v-2z" opacity=".3"/><path fill="currentColor" d="M1 1h10v10H1zm2 2v6h6V3z"/><path fill="currentColor" fillRule="evenodd" d="M5 5h2v2H5z"/><path fill="currentColor" d="M13 1h10v10H13zm2 2v6h6V3z"/><path fill="currentColor" fillRule="evenodd" d="M17 5h2v2h-2z"/><path fill="currentColor" d="M1 13h10v10H1zm2 2v6h6v-6z"/><path fill="currentColor" fillRule="evenodd" d="M5 17h2v2H5z"/><path fill="currentColor" d="M23 19h-4v4h-6V13h1h-1v6h2v2h2v-6h-2v-2h-1h3v2h2v2h2v-4h2zm0 2v2h-2v-2z"/></svg>
                  <span className="text-[16px]">Projects Completed:</span>
                  <span className="text-white">146</span>
                </div>
                <div className="flex items-center gap-3 dark:text-gray-300 text-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87m-3-12a4 4 0 0 1 0 7.75"/></g></svg>
                  <span className="text-[16px]">Connections:</span>
                  <span className="text-white">897</span>
                </div>
              </div>
            </div>
          </div>

          {/* Connections Section */}
          <div className="flex-1 max-w-md border border-gray-200 dark:border-gray-800 rounded p-7">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Connections</h2>
              <button className="dark:text-gray-400 text-gray-800 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              {[
                { name: "Cecilia Payne", connections: "45 Connections", avatar: "CP" },
                { name: "Curtis Fletcher", connections: "1.32k Connections", avatar: "CF" },
                { name: "Alice Stone", connections: "125 Connections", avatar: "AS" },
                { name: "Darrell Barnes", connections: "456 Connections", avatar: "DB" },
                { name: "Eugenia Moore", connections: "1.2k Connections", avatar: "EM" },
              ].map((person, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50">
                  {/* <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback className="bg-gray-700 text-white">{person.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-white font-medium">{person.name}</h4>
                      <p className="dark:text-gray-400 text-gray-800 text-sm">{person.connections}</p>
                    </div>
                  </div>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1">
                    <Users className="w-3 h-3 mr-1" />
                  </Button> */}
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <button className="text-purple-400 hover:text-purple-300 text-sm">View all connections</button>
            </div>
          </div>

          {/* Teams Section */}
          <div className="flex-1 max-w-md border border-gray-200 dark:border-gray-800 rounded p-7">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Teams</h2>
              <button className="dark:text-gray-400 text-gray-800 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              {[
                {
                  name: "React Developers",
                  members: "72 Members",
                  badge: "Developer",
                  badgeColor: "bg-red-500",
                  icon: "⚛️",
                },
                {
                  name: "Support Team",
                  members: "122 Members",
                  badge: "Support",
                  badgeColor: "bg-purple-500",
                  icon: "🎧",
                },
                {
                  name: "UI Designers",
                  members: "7 Members",
                  badge: "Designer",
                  badgeColor: "bg-cyan-500",
                  icon: "🎨",
                },
                {
                  name: "Vue.js Developers",
                  members: "289 Members",
                  badge: "Developer",
                  badgeColor: "bg-red-500",
                  icon: "✅",
                },
                {
                  name: "Digital Marketing",
                  members: "24 Members",
                  badge: "Marketing",
                  badgeColor: "bg-gray-500",
                  icon: "❌",
                },
              ].map((team, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-lg">
                      {team.icon}
                    </div>
                    <div>
                      <h4 className="dark:text-white text-gray-500 font-medium">{team.name}</h4>
                      <p className="dark:text-gray-400 text-gray-800 text-sm">{team.members}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs text-white ${team.badgeColor}`}>{team.badge}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <button className="text-purple-400 hover:text-purple-300 text-sm">View all teams</button>
            </div>
          </div>
        </div>

        {/* Project List Section */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Project List</h2>
            <div className="relative rounded">
              <input
                type="text"
                placeholder="Search Project"
                className="bg-gray-300 dark:bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 w-64"
              />
            </div>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-200 dark:bg-gray-700">
                <tr>
                  <th className="text-left p-4 text-gray-800 dark:text-gray-300 font-medium">
                    <input type="checkbox" className="rounded border-gray-600" />
                  </th>
                  <th className="text-left p-4 text-gray-800 dark:text-gray-300 font-medium">PROJECT</th>
                  <th className="text-left p-4 text-gray-800 dark:text-gray-300 font-medium">LEADER</th>
                  <th className="text-left p-4 text-gray-800 dark:text-gray-300 font-medium">TEAM</th>
                  <th className="text-left p-4 text-gray-800 dark:text-gray-300 font-medium">PROGRESS</th>
                  <th className="text-left p-4 text-gray-800 dark:text-gray-300 font-medium">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Website SEO",
                    date: "10 May 2021",
                    leader: "Eileen",
                    progress: 38,
                    teamCount: 4,
                    icon: "WS",
                    iconBg: "bg-gray-600",
                  },
                  {
                    name: "Social Banners",
                    date: "03 Jan 2021",
                    leader: "Owen",
                    progress: 45,
                    teamCount: 2,
                    icon: "🌐",
                    iconBg: "bg-blue-600",
                  },
                  {
                    name: "Logo Designs",
                    date: "12 Aug 2021",
                    leader: "Keith",
                    progress: 92,
                    teamCount: 1,
                    icon: "🎨",
                    iconBg: "bg-orange-500",
                  },
                  {
                    name: "IOS App Design",
                    date: "19 Apr 2021",
                    leader: "Merline",
                    progress: 56,
                    teamCount: 1,
                    icon: "📱",
                    iconBg: "bg-orange-500",
                  },
                  {
                    name: "Figma Dashboards",
                    date: "08 Apr 2021",
                    leader: "Harmonia",
                    progress: 25,
                    teamCount: 3,
                    icon: "🎯",
                    iconBg: "bg-red-500",
                  },
                  {
                    name: "Crypto Admin",
                    date: "29 Sept 2021",
                    leader: "Allyson",
                    progress: 36,
                    teamCount: 1,
                    icon: "🛡️",
                    iconBg: "bg-orange-500",
                  },
                  {
                    name: "Create Website",
                    date: "20 Mar 2021",
                    leader: "Georgie",
                    progress: 72,
                    teamCount: 3,
                    icon: "⭕",
                    iconBg: "bg-cyan-500",
                  },
                ].map((project, index) => (
                  <tr key={index} className="border-t border-gray-700 hover:bg-gray-300">
                    <td className="p-4">
                      <input type="checkbox" className="rounded border-gray-600" />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs ${project.iconBg}`}
                        >
                          {project.icon}
                        </div>
                        <div>
                          <h4 className="text-gray-500 dark:text-white  font-medium">{project.name}</h4>
                          <p className="dark:text-gray-400 text-gray-800 text-sm">{project.date}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 dark:text-gray-400 text-gray-800">{project.leader}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-1">
                    
                        {project.teamCount > 3 && (
                          <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs text-gray-300">
                            +{project.teamCount - 3}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 bg-gray-700 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${project.progress}%` }} />
                        </div>
                        <span className=" dark:text-gray-400 text-gray-800 dark:text-white text-sm">{project.progress}%</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <button className="dark:text-gray-400 text-gray-800 hover:text-white">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Pagination */}
            <div className="flex items-center justify-between p-4 border-t border-gray-700">
              <div className="dark:text-gray-400 text-gray-800 text-sm">Showing 1 to 7 of 10 entries</div>
              <div className="flex items-center gap-2">
                <button className="p-2 dark:text-gray-400 text-gray-800 hover:text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="p-2 dark:text-gray-400 text-gray-800 hover:text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="px-3 py-1 bg-purple-600 text-white rounded">1</button>
                <button className="px-3 py-1 dark:text-gray-400 text-gray-800 hover:text-white rounded">2</button>
                <button className="p-2 dark:text-gray-400 text-gray-800 hover:text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button className="p-2 dark:text-gray-400 text-gray-800 hover:text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
