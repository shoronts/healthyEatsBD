import banner from "@/public/register-v2-dark.svg";
import Image from "next/image"
import Link from "next/link";
export default function page() {
  return (
    <>
    <div className="min-h-screen flex flex-col lg:flex-row">
  {/* Left Image - shown only on large screens */}
  <div className="hidden lg:flex lg:w-[65%] items-center bg-[#161D31] justify-center ">
    <Image src={banner} alt="registration-img" className="object-contain" />
  </div>

  {/* Right Form */}
  <div className="w-full lg:w-[35%] flex items-center justify-center px-4 py-8  bg-[#283046]">
    <div className="w-full max-w-lg">
      <h2 className="text-2xl font-normal mb-2 text-[#d0d2d6]">Adventure starts here 🚀</h2>
      <p className="text-sm font-light text-[#d0d2d6] my-4">
        Make your app management easy and fun!
      </p>
      <form className="space-y-4 mt-2" action="index.html" method="POST">
  {/* <!-- Username --> */}
  <div>
    <label htmlFor="register-username" className="block text-sm font-medium text-[#a5b6ba] mb-1">
      Username
    </label>
    <input
      className="w-full px-3 py-2 bg-[#283046] border border-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded-border"
      id="register-username"
      type="text"
      name="register-username"
      placeholder="johndoe"
      aria-describedby="register-username"
      autoFocus
      tabIndex={1}
    />
  </div>

  {/* <!-- Email --> */}
  <div>
    <label htmlFor="register-email" className="block text-sm font-medium text-[#a5b6ba] mb-1">
      Email
    </label>
    <input
      className="w-full px-3 py-2 bg-[#283046] border border-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded-border"
      id="register-email"
      type="text"
      name="register-email"
      placeholder="john@example.com"
      aria-describedby="register-email"
      tabIndex={2}
    />
  </div>
{/* 
  <!-- Password --> */}
  <div>
    <label htmlFor="register-password" className="block text-sm font-medium text-[#a5b6ba] mb-1">
      Password
    </label>
    <div className="relative">
      <input
        className="w-full px-3 py-2 bg-[#283046] border border-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded-border"
        id="register-password"
        type="password"
        name="register-password"
        placeholder="············"
        aria-describedby="register-password"
        tabIndex={3}
      />
      <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 cursor-pointer">
        {/* <!-- Replace with an actual eye icon or a button --> */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      </span>
    </div>
  </div>

  {/* <!-- Privacy Policy --> */}
  <div>
    <label className="flex items-center space-x-2 text-sm text-gray-700">
      <input
        type="checkbox"
        className="mt-1.5 h-5 w-5 bg-[#283046] text-indigo-600 border-[#283046] rounded focus:ring-indigo-500 rounded-border"
        id="register-privacy-policy"
        tabIndex={4}
      />
      <span className="text-[#a5b6ba]">
        I agree to
        <a href="#" className="text-indigo-600 hover:underline">&nbsp;privacy policy &amp; terms</a>
      </span>
    </label>
  </div>

  {/* <!-- Submit Button --> */}
  <button
    type="submit"
    className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md transition duration-200"
    tabIndex={5}
  >
    Sign up
  </button>
</form>

      <p className="text-center mt-4 text-sm">
        <Link href="/" className="text-[#a5b6ba] hover:underline">
          Already have an account?  <span className="text-indigo-600 hover:underline">&nbsp; Sign in instead &amp; </span>
        </Link>
      </p>

      <div className="relative flex items-center my-3">
  <div className="flex-grow border-t border-gray-500"></div>
  <span className="mx-4 text-sm text-gray-500">or</span>
  <div className="flex-grow border-t border-gray-500"></div>
</div>
<div className="flex justify-center gap-4 mt-4">
  {/* <!-- Facebook --> */}
  <a href="#" className="p-3 rounded-3xl bg-blue-600 hover:bg-blue-700 transition text-white">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12a10 10 0 1 0-11.6 9.87v-6.99h-2.1v-2.88h2.1v-2.2c0-2.07 1.23-3.21 3.1-3.21.9 0 1.84.16 1.84.16v2.03h-1.04c-1.03 0-1.35.64-1.35 1.3v1.56h2.3l-.37 2.88h-1.93v6.99A10 10 0 0 0 22 12z"/>
    </svg>
  </a>

  {/* <!-- Twitter --> */}
  <a href="#" className="p-3 rounded-3xl bg-sky-500 hover:bg-sky-600 transition text-white">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 0 0 1.88-2.37 8.53 8.53 0 0 1-2.71 1.04 4.26 4.26 0 0 0-7.26 3.88A12.09 12.09 0 0 1 3.15 4.6a4.26 4.26 0 0 0 1.32 5.68 4.24 4.24 0 0 1-1.93-.53v.05a4.26 4.26 0 0 0 3.42 4.17 4.3 4.3 0 0 1-1.93.07 4.27 4.27 0 0 0 3.98 2.96A8.54 8.54 0 0 1 2 19.54a12.07 12.07 0 0 0 6.54 1.92c7.85 0 12.14-6.5 12.14-12.14 0-.19 0-.38-.01-.57A8.64 8.64 0 0 0 24 4.56a8.38 8.38 0 0 1-2.54.7z"/>
    </svg>
  </a>

  {/* <!-- Email --> */}
  <a href="#" className="p-3 rounded-3xl bg-red-500 hover:bg-red-600 transition text-white">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 13.5L1.5 6.75V6a1.5 1.5 0 0 1 1.5-1.5h18A1.5 1.5 0 0 1 22.5 6v.75L12 13.5zM1.5 8.25V18A1.5 1.5 0 0 0 3 19.5h18a1.5 1.5 0 0 0 1.5-1.5V8.25L12 15.75 1.5 8.25z"/>
    </svg>
  </a>

  {/* <!-- GitHub --> */}
  <a href="#" className="p-3 rounded-3xl bg-gray-800 hover:bg-gray-900 transition text-white">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.29 3.44 9.77 8.2 11.36.6.11.82-.26.82-.57v-2.2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.76.09-.75.09-.75 1.21.09 1.84 1.25 1.84 1.25 1.08 1.84 2.84 1.31 3.53 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.48-1.34-5.48-5.98 0-1.32.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.49 11.49 0 0 1 6 0C17.99 5.9 19 6.22 19 6.22c.66 1.64.24 2.86.12 3.16.77.84 1.24 1.91 1.24 3.23 0 4.65-2.81 5.67-5.48 5.97.43.37.81 1.1.81 2.22v3.3c0 .32.22.69.83.57C20.56 22.27 24 17.79 24 12.5 24 5.87 18.63.5 12 .5z"/>
    </svg>
  </a>
</div>

    </div>
  </div>
</div>

    </>
  )
}
