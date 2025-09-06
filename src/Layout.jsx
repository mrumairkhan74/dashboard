import React from 'react'
import Sidebar from "./components/Sidebar.jsx"
import Home from "./components/Home.jsx"
import Navbar from "./components/Navbar"
import { Outlet } from 'react-router'
const Layout = () => {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-4 bg-gray-50 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
            {/* <footer /> */}
        </div>
    )
}

export default Layout