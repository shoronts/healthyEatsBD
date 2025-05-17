import React from 'react';

const UserProfile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center dark:bg-slate-900 bg-white">
      <form className="w-full max-w-md px-4">
        <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-6 mx-auto">
          <svg
            className="w-16 h-16 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4a4 4 0 110 8 4 4 0 010-8zM16 14H8a4 4 0 00-4 4v1h16v-1a4 4 0 00-4-4z"
            />
          </svg>
        </div>

        <div className="flex items-end justify-end">
            <button type="button" className="mb-5 px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded shadow">
          Edit Profile
        </button>
        </div>

        <div className="w-full space-y-4 mb-5">
          <div className="border border-gray-300 rounded p-3">
            <label className="text-gray-600 text-sm">Full Name</label>
            <input
              type="text"
              placeholder="Shoron"
              className="w-full border-none outline-none bg-transparent font-medium"
            />
          </div>

          <div className="border border-gray-300 rounded p-3">
            <label className="text-gray-600 text-sm">Email</label>
            <input
              type="email"
              placeholder="healthyeats.live@gmail.com"
              className="w-full border-none outline-none bg-transparent font-medium"
            />
          </div>

          <div className="border border-gray-300 rounded p-3">
            <label className="text-gray-600 text-sm">Phone Number</label>
            <input
              type="text"
              placeholder="+8801759638777"
              className="w-full border-none outline-none bg-transparent font-medium"
            />
          </div>
        </div>

        <button type="button" className="px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded shadow">
          View Company
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
