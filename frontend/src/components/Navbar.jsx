import React from 'react'

const Navbar = () => {
  return (
    <div><nav className="bg-sky-950 p-4">
    <div className="container mx-auto flex items-center justify-between">
      {/* Logo */}
      <div className="text-white text-2xl font-bold">MySocial</div>
      {/* Search Bar */}
      <div className="flex-1 mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 rounded-full bg-slate-700 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
        />
      </div>
      {/* Navigation Links */}
      <div className="flex space-x-6">
        <a href="#" className="text-white hover:text-gray-300">
          Home
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          Profile
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          Messages
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          Notifications
        </a>
      </div >
      {/* Profile Icon */}
      <div className="flex items-center px-3">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="rounded-full"
        />
        <div className="ml-2 text-white">@username</div>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default Navbar