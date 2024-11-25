"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const SignInPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userdetail, setUserDetail] = useState({
    username: "",
    password: ""
  });
  const router = useRouter();

  const handleSignIn = () => {
    console.log(userdetail);
    router.push('/profile');
    setIsLoggedIn(true);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
        <div className="space-y-4">
          <div>
            <label 
              htmlFor="username" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input 
              type="text"
              id="username"
              placeholder="Enter your username"
              value={userdetail.username}
              onChange={(e) => setUserDetail({ ...userdetail, username: e.target.value })}
              className="w-full border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input 
              type="password"
              id="password"
              placeholder="Enter your password"
              value={userdetail.password}
              onChange={(e) => setUserDetail({ ...userdetail, password: e.target.value })}
              className="w-full border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>
        <button 
          onClick={handleSignIn}
          className="mt-6 w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Sign In
        </button>
        <hr className="my-6 border-gray-300" />
        <p className="text-sm text-gray-500 text-center">
          Don’t have an account?{' '}
          <Link href={'/sign-up'} className="text-blue-600 font-medium hover:underline">Sign Up!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
