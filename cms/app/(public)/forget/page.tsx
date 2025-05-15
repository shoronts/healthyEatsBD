"use client";
import { useState } from "react";
import banner from "@/public/forgot-password-v2-dark.svg";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email) {
      setError("Email is required.");
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    } else {
      setSuccess("Reset link sent successfully!");
      // here will be the api
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="hidden lg:flex lg:w-[65%] items-center bg-[#161D31] justify-center ">
        <Image src={banner} alt="registration-img" className="object-contain" />
      </div>

      <div className="w-full lg:w-[35%] flex items-center justify-center px-4 py-8  bg-[#283046]">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-2 text-[#D0D2D6]">
            Forgot Password? 🔒
          </h2>
          <p className="text-sm text-[#D0D2D6] my-4">
            Enter your email and we'll send you instructions to reset your
            password
          </p>

          <form className="space-y-4" onSubmit={submitForm} autoComplete="off">
            <div className="relative z-0">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                className={`
    block w-full py-2.5 px-0 text-sm text-white 
    bg-transparent border-0 border-b-2 appearance-none 
    focus:outline-none focus:ring-0 peer
    placeholder-transparent 
    ${
      error
        ? "border-red-600 focus:border-red-600"
        : success
        ? "border-green-600 focus:border-green-600"
        : "border-gray-300 focus:border-[#7367F0]"
    }
  `}
                placeholder="Email"
              />

              <label
                htmlFor="email"
                className={`absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
                  error
                    ? "text-red-600"
                    : success
                    ? "text-green-600"
                    : "text-white"
                }`}
              >
                Email
              </label>
            </div>

            {error && (
              <p className="mt-2 text-xs text-red-600">
                <span className="font-medium">Error:</span> {error}
              </p>
            )}
            {success && (
              <p className="mt-2 text-xs text-green-600">
                <span className="font-medium">Success:</span> {success}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#7367F0] hover:bg-[#5E50EE] text-white font-semibold rounded transition duration-200"
            >
              Send reset link
            </button>
          </form>

          <p className="text-center mt-4 text-sm">
            <Link href="/login" className="text-[#7367F0] hover:underline">
              ← Back to login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
