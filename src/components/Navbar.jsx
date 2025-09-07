import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='w-full bg-sky-400 flex items-center justify-between py-2 px-4'>
            <div className="logo flex gap-3 justify-center items-center">
                <img src="./icons/logo.png" className='h-15 w-15 object-cover' alt="" />
                <h5 className='text-white font-bold font-[Poppins] tracking-wide'>Medical Store</h5>
            </div>
            <Link className="button flex gap-3 justify-center items-center">
                <div className="w-10 h-10">
                    <img src="./icons/logo.png" className='object-cover w-10 h-10 rounded-full bg-white' loading='lazy' alt="" />
                </div>
                <h6 className='text-white font-[Poppins] tracking-wide'>Umair Khan</h6>
            </Link>
        </div>
    )
}

export default Navbar