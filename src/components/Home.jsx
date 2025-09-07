import React from "react";
import Card from "./Card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

// Dummy sales data for chart
const salesData = [
  { name: "Jan", sales: 200, value: 200, total: 50, },
  { name: "Feb", sales: 140, value: 120, total: 50, },
  { name: "Mar", sales: 130, value: 120, total: 30, },
  { name: "Apr", sales: 250, value: 200, total: 50, },
  { name: "May", sales: 120, value: 120, total: 30, },
  { name: "June", sales: 180, value: 200, total: 30, },
  { name: "July", sales: 300, value: 200, total: 50, },
];

// Dummy table data
const tableData = [
  { id: 1, name: "Panadol", total: 50, value: 200, trend: "down" },
  { id: 2, name: "Disprin", total: 30, value: 120, trend: "up" },
  { id: 3, name: "Mefinamic", total: 50, value: 200, trend: "down" },
  { id: 4, name: "Amoxil", total: 30, value: 120, trend: "down" },
  { id: 5, name: "Fefol", total: 50, value: 200, trend: "up" },
  { id: 6, name: "Disprin", total: 30, value: 120, trend: "down" },
  { id: 7, name: "Panadol", total: 50, value: 200, trend: "up" },
  { id: 8, name: "Panadol", total: 50, value: 200, trend: "down" },
];

const Home = () => {
  return (
    <div className="flex gap-4 flex-wrap flex-col md:flex-row md:flex-nowrap z-0 items-center justify-center">

      {/* Graph Card */}
      <Card title="Sales" className="flex-[2] md:w-[600px] w-full">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#0ea5e9"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#e9690eff"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>


      {/* Table Card */}
      <Card title="Sales Report" className="flex-[1] h-[400px] overflow-hidden">
        <div className="h-full overflow-auto p-3">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 bg-sky-200">
                <th className="px-3 py-2 text-left">Sr#</th>
                <th className="px-3 py-2 text-left">Name</th>
                <th className="px-3 py-2 text-left">Total</th>
                <th className="px-3 py-2 text-left">Value</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr
                  key={row.id}
                  className={`border-b-2 ${index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    }`}
                >
                  <td className="px-3 py-2">{row.id}</td>
                  <td className="px-3 py-2">{row.name}</td>
                  <td className="px-3 py-2">{row.total}</td>
                  <td className="px-3 py-2 inline-flex items-center gap-1">
                    ${row.value}
                    {row.trend === "up" ? (
                      <IoMdArrowDropup className="text-green-500 text-xl" />
                    ) : (
                      <IoMdArrowDropdown className="text-red-500 text-xl" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>


    </div>
  );
};

export default Home;
