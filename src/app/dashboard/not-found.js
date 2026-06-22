import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-blue-950 via-blue-900 to-indigo-950 flex items-center justify-center px-6">
      <div className="text-center text-white">
        <h1 className="text-9xl font-extrabold drop-shadow-lg text-blue-300">404</h1>
        <p className="text-2xl font-semibold mt-4">Oops! Page not found</p>
        <p className="text-blue-200/80 mt-2 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 rounded-full bg-blue-300 text-blue-950 font-semibold shadow-lg hover:scale-105 hover:bg-white transition-all duration-200"
        >
            
          Go back home
        </Link>
      </div>
    </div>
  );
}