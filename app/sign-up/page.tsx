'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const SignUpPage = () => {
  const [userDetails, setUserDetails] = useState({
    username: "", email: "", password: ""
  })
  const [buttonDisabled , setButtonDisabled] = useState(false)
  const router = useRouter()

  const handleSignUp = async () => {
    console.log(userDetails)
    
    router.push('/sign-in')
    
  }

  useEffect(() => {
    if(userDetails.email.length > 0 && userDetails.password.length > 0 && userDetails.username.length > 0){
      setButtonDisabled(false)
    }else{
      
    }

  },[userDetails])

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
            id='username'
              type="text"
              placeholder="Enter your username"
              value={userDetails.username}
              onChange={(e) =>
                setUserDetails({ ...userDetails, username: e.target.value })
              }
              className="w-full border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={userDetails.email}
              onChange={(e) =>
                setUserDetails({ ...userDetails, email: e.target.value })
              }
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
              placeholder="Enter your password"
              value={userDetails.password}
              onChange={(e) =>
                setUserDetails({ ...userDetails, password: e.target.value })
              }
              className="w-full border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>
        <button
          onClick={handleSignUp}
          className="mt-6 w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Sign Up
        </button>
        <hr className="my-6 border-gray-300" />
        <p className="text-sm text-gray-500 text-center">
          Already have an account?{' '}
          <Link href={'/sign-in'} className="text-blue-600 font-medium hover:underline">Sign In!
          </Link>
        </p>
      </div>

    </div>
  )
}

export default SignUpPage
