"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import banner from "@/public/login-v2-dark.svg";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = password.length >= 6;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setEmailTouched(true);
    setPasswordTouched(true);

    if (isEmailValid && isPasswordValid) {
      console.log("Form submitted:", { email, password });
      // Perform login logic
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Image */}
      <div className="hidden lg:flex lg:w-[65%] items-center bg-[#161D31] justify-center">
        <Image src={banner} alt="login-banner" className="object-contain" />
      </div>

      {/* Right Form */}
      <div className="w-full lg:w-[35%] flex items-center justify-center px-4 py-8 bg-[#283046]">
        <div className="w-full max-w-lg">
          <h2 className="text-2xl font-normal mb-2 text-[#d0d2d6]">
            Welcome to Vuexy! 👋
          </h2>
          <p className="text-sm font-light text-[#d0d2d6] my-4">
            Please sign-in to your account and start the adventure
          </p>

          <form className="space-y-4 mt-2" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#a5b6ba] mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className={`block w-full py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer ${
                  emailTouched
                    ? isEmailValid
                      ? "border-green-600 focus:border-green-600"
                      : "border-red-600 focus:border-red-600"
                    : "border-gray-300 focus:border-[#7367F0]"
                }`}
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setEmailTouched(true)}
              />
              {emailTouched && isEmailValid && (
                <p className="mt-1 text-sm text-green-500">Email looks good!</p>
              )}
              {emailTouched && !isEmailValid && (
                <p className="mt-1 text-sm text-red-500">
                  Please enter a valid email address
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#a5b6ba] mb-1 flex justify-between"
              >
                <span>Password</span>
                <Link
                  href="/forget"
                  className="text-xs text-indigo-500 hover:underline"
                >
                  Forgot Password?
                </Link>
              </label>
              <input
                id="password"
                type="password"
                className={`block w-full py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer ${
                  passwordTouched
                    ? isPasswordValid
                      ? "border-green-600 focus:border-green-600"
                      : "border-red-600 focus:border-red-600"
                    : "border-gray-300 focus:border-[#7367F0]"
                }`}
                placeholder="············"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setPasswordTouched(true)}
              />
              {passwordTouched && isPasswordValid && (
                <p className="mt-1 text-sm text-green-500">
                  Password is strong
                </p>
              )}
              {passwordTouched && !isPasswordValid && (
                <p className="mt-1 text-sm text-red-500">
                  Minimum 6 characters required
                </p>
              )}
            </div>

            {/* Remember Me */}
            <div>
              <label className="flex items-center space-x-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="h-5 w-5 bg-[#283046] text-indigo-600 border-[#283046] rounded"
                />
                <span className="text-[#a5b6ba]">Remember me</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md transition duration-200"
            >
              Sign In
            </button>
          </form>

          {/* Signup Link */}
          <p className="text-center mt-4 text-sm">
            <Link href="/register" className="text-[#a5b6ba] hover:underline">
              New on our platform? Create an account
            </Link>
          </p>

          {/* Divider */}
          <div className="relative flex items-center my-3">
            <div className="flex-grow border-t border-gray-500"></div>
            <span className="mx-4 text-sm text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-500"></div>
          </div>

          {/* Add your social buttons here */}
          <div className="flex justify-center gap-4 mt-4">
            {/* <!-- Facebook --> */}
            <a
              href="#"
              className="p-3 rounded-3xl bg-blue-600 hover:bg-blue-700 transition text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12a10 10 0 1 0-11.6 9.87v-6.99h-2.1v-2.88h2.1v-2.2c0-2.07 1.23-3.21 3.1-3.21.9 0 1.84.16 1.84.16v2.03h-1.04c-1.03 0-1.35.64-1.35 1.3v1.56h2.3l-.37 2.88h-1.93v6.99A10 10 0 0 0 22 12z" />
              </svg>
            </a>

            {/* <!-- Twitter --> */}
            <a
              href="#"
              className="p-3 rounded-3xl bg-sky-500 hover:bg-sky-600 transition text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 0 0 1.88-2.37 8.53 8.53 0 0 1-2.71 1.04 4.26 4.26 0 0 0-7.26 3.88A12.09 12.09 0 0 1 3.15 4.6a4.26 4.26 0 0 0 1.32 5.68 4.24 4.24 0 0 1-1.93-.53v.05a4.26 4.26 0 0 0 3.42 4.17 4.3 4.3 0 0 1-1.93.07 4.27 4.27 0 0 0 3.98 2.96A8.54 8.54 0 0 1 2 19.54a12.07 12.07 0 0 0 6.54 1.92c7.85 0 12.14-6.5 12.14-12.14 0-.19 0-.38-.01-.57A8.64 8.64 0 0 0 24 4.56a8.38 8.38 0 0 1-2.54.7z" />
              </svg>
            </a>

            {/* <!-- Email --> */}
            <a
              href="#"
              className="p-3 rounded-3xl bg-red-500 hover:bg-red-600 transition text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 13.5L1.5 6.75V6a1.5 1.5 0 0 1 1.5-1.5h18A1.5 1.5 0 0 1 22.5 6v.75L12 13.5zM1.5 8.25V18A1.5 1.5 0 0 0 3 19.5h18a1.5 1.5 0 0 0 1.5-1.5V8.25L12 15.75 1.5 8.25z" />
              </svg>
            </a>

            {/* <!-- GitHub --> */}
            <a
              href="#"
              className="p-3 rounded-3xl bg-gray-800 hover:bg-gray-900 transition text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.29 3.44 9.77 8.2 11.36.6.11.82-.26.82-.57v-2.2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.76.09-.75.09-.75 1.21.09 1.84 1.25 1.84 1.25 1.08 1.84 2.84 1.31 3.53 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.48-1.34-5.48-5.98 0-1.32.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.49 11.49 0 0 1 6 0C17.99 5.9 19 6.22 19 6.22c.66 1.64.24 2.86.12 3.16.77.84 1.24 1.91 1.24 3.23 0 4.65-2.81 5.67-5.48 5.97.43.37.81 1.1.81 2.22v3.3c0 .32.22.69.83.57C20.56 22.27 24 17.79 24 12.5 24 5.87 18.63.5 12 .5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
