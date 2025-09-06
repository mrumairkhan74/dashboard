import React from 'react'
import { HiH3 } from 'react-icons/hi2'

const Card = ({ title, className, children }) => {
    return (
        <div className={`w-[600px] h-[400px] rounded-md ${className}`}>
            {title && <h3>{title}</h3>}
            <div className="">{children}</div>
        </div>
    )
}

export default Card