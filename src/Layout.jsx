import React, { useState } from 'react'
import Sidebar from "./components/Sidebar.jsx"
import Navbar from "./components/Navbar"
import { Outlet } from 'react-router'

const Layout = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <main
          className={`flex-1 p-4 bg-gray-50 overflow-y-auto transition-all duration-500 ${
            isOpen ? "ml-64" : "ml-16"
          }`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
