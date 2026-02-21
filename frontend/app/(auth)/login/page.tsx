"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

      {/* LOGIN CARD */}
      <div className="w-full max-w-md bg-white rounded-3xl border-2 border-black p-10 shadow-sm">

        {/* Red Circle Avatar */}
        <div className="flex justify-center mb-8">
          <div className="w-28 h-28 rounded-full border-4 border-red-400"></div>
        </div>

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          className="w-full border-2 border-gray-400 rounded-md px-4 py-2 mb-4 focus:outline-none"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full border-2 border-gray-400 rounded-md px-4 py-2 mb-4 focus:outline-none"
        />

        {/* Role Dropdown */}
        <select
          className="w-full border-2 border-gray-400 rounded-md px-4 py-2 mb-6 focus:outline-none bg-white"
        >
          <option value="">Select Role</option>
          <option value="manager">Fleet Manager</option>
          <option value="dispatcher">Dispatcher</option>
          <option value="safety">Safety Officer</option>
          <option value="finance">Financial Analyst</option>
        </select>

        {/* Login Button */}
        <button className="w-full border-2 border-green-500 text-green-600 rounded-md py-2 hover:bg-green-50 transition">
          Login
        </button>

        {/* Register Redirect */}
        <p className="text-sm text-center mt-6 text-gray-600">
          Not a user?{" "}
          <span
            onClick={() => router.push("/register")}
            className="text-blue-600 cursor-pointer underline"
          >
            Register
          </span>
        </p>
      </div>

    </div>
  );
}