import React from "react"

const Button = ({ 
  children,        // text or icon inside
  onClick,         // click handler
  type = "button", // "button" | "submit" | "reset"
  variant = "primary", // custom style
  className = ""   // extra classes if needed
}) => {
  const baseStyles = "px-4 py-2 rounded-md font-medium transition-colors"

  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    success: "bg-green-500 text-white hover:bg-green-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
