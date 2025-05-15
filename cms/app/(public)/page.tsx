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

  const handleSubmit = (e:any) => {
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
              <label htmlFor="email" className="block text-sm font-medium text-[#a5b6ba] mb-1">
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
                <p className="mt-1 text-sm text-red-500">Please enter a valid email address</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#a5b6ba] mb-1 flex justify-between">
                <span>Password</span>
                <Link href="/forget" className="text-xs text-indigo-500 hover:underline">
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
                <p className="mt-1 text-sm text-green-500">Password is strong</p>
              )}
              {passwordTouched && !isPasswordValid && (
                <p className="mt-1 text-sm text-red-500">Minimum 6 characters required</p>
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
        </div>
      </div>
    </div>
  );
}
