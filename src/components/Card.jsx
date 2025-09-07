import React from 'react'

const Card = ({ title, className, children }) => {
    return (
        <div className={`mt-5 rounded-md ${className}`}>
            <div className="text-center">
                {title && <h3>{title}</h3>}
            </div>
            <div className="">{children}</div>
        </div>
    )
}

export default Card