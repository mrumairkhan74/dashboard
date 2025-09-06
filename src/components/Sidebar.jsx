import React, { useState } from 'react'
import { Link } from 'react-router'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='flex flex-row-reverse justify-center items-center mt-1 '>
            {/* Toggle Button */}

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 bg-sky-500 text-white rounded font-[Poppins] font-bold transition-all ease-in-out duration-500"
            >
                {isOpen ? "<" : ">"}
            </button>
            {/* Sidebar */}
            {isOpen && (
                <div className="w-64 h-screen bg-sky-400 text-white p-4 rounded-r-lg">
                    <ul className='flex flex-col'>
                        <Link className="mb-2 p-2 tracking-wide hover:underline hover:decoration-5 hover:underline-offset-6">Dashbaord</Link>
                        <Link className="mb-2 p-2 tracking-wide hover:underline hover:decoration-5 hover:underline-offset-6">Medicine</Link>
                        <Link className="mb-2 p-2 tracking-wide hover:underline hover:decoration-5 hover:underline-offset-6">Expiry</Link>
                        <Link className="mb-2 p-2 tracking-wide hover:underline hover:decoration-5 hover:underline-offset-6">Reports</Link>
                        <Link className="mb-2 p-2 tracking-wide hover:underline hover:decoration-5 hover:underline-offset-6">Setting</Link>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Sidebar
