import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-white p-6 mt-[1px] w-s  ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center w-screen">
        <p className="text-sm">&copy; 2025 Dilshan. All rights reserved.</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="https://github.com/DilHub27" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">LinkedIn</a>
          <a href="mailto:yourname@example.com" className="hover:text-gray-300">Email</a>
          <p className="hover:text-gray-300">076 8313828</p>
        </div>
      </div>
    </footer>
    </div>
  )
}
