import React from 'react'

export default function AddBlogButtonAtom() {
  return (
    <button className="flex justify-center items-center text-white bg-green-600 hover:bg-green-700 rounded-lg text-sm py-2 px-3 mt-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
          clipRule="evenodd"
        />
      </svg>
      <h1 className="pl-2">Tambahkan Blog</h1>
    </button>
  );
}
