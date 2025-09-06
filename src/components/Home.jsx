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

const data = [
  { name: "Jan", sales: 400 },
  { name: "Feb", sales: 300 },
  { name: "Mar", sales: 500 },
  { name: "Apr", sales: 700 },
  { name: "May", sales: 600 },
  { name: "Jun", sales: 800 },
];

const Home = () => {
  return (
    <div className="flex gap-4 flex-wrap md:flex-nowrap">
      {/* Graph Card */}
      <Card title="Sales Overview" className="flex-[2] min-h-[300px]">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Detail Card */}
      <Card title="Details" className="flex-[1] min-h-[300px]">
        <ul className="space-y-2 text-gray-700">
          <li>Total Orders: 120</li>
          <li>Revenue: $4,500</li>
          <li>Pending: 12</li>
        </ul>
      </Card>
    </div>
  );
};

export default Home;
