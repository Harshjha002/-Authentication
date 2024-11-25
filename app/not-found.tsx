import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">404</h1>
      <p className="text-lg text-gray-600 mt-2">Oops! No such page exists.</p>
      <Link
        href="/"
        className="mt-4 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-md"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
