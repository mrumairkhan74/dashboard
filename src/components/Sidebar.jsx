import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiMedicines } from "react-icons/gi";
import { RiPassExpiredLine } from "react-icons/ri";
import { MdDashboard, MdReportProblem } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { name: "Dashboard", icon: <MdDashboard />, path: "/" , title:"Dashboard" },
    { name: "Medicine", icon: <GiMedicines />, path: "/medicine", title:"Medicine" },
    { name: "Expiry", icon: <RiPassExpiredLine />, path: "/expiry",title:"Expiry" },
    { name: "Reports", icon: <MdReportProblem />, path: "/reports", title:"Reports" },
    { name: "Setting", icon: <IoMdSettings />, path: "/settings",title:"Setting" },
  ];

  return (
    <div className="flex mt-1">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } h-screen bg-sky-400 text-white p-4 rounded-r-lg transition-all duration-500`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mb-6 p-2 bg-sky-600 text-white rounded font-[Poppins] font-bold w-full"
        >
          {isOpen ? "<" : ">"}
        </button>

        <ul className="flex flex-col space-y-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              title={item.title}
              className="flex items-center gap-3 p-2 rounded hover:bg-sky-500"
            >
              {item.icon}
              {isOpen && <span>{item.name}</span>}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
