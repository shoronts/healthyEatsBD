"use client";
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
  { day: "Day 4", value: 0 },
  { day: "Day 5", value: 0 },
  { day: "Day 6", value: 0 },
  { day: "Day 7", value: 0 },
  { day: "Day 8", value: 0 },
  { day: "Day 9", value: 0 },
  { day: "Day 10", value: 0 },
];

export default function DemoChart() {
  return (
    <div className="grid grid-cols-2 gap-6 p-6 bg-white rounded-lg shadow">
      {/* Orders Chart */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-sm font-semibold text-gray-700">Orders</h2>
          <div className="flex space-x-2">
            <button className="text-xs font-medium text-teal-600 border-b-2 border-teal-500">This Week</button>
            <button className="text-xs font-medium text-gray-400 hover:text-teal-600">This Month</button>
          </div>
        </div>
        <div className="w-full h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" fontSize={10} />
              <YAxis fontSize={10} />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#00B3B3" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Sales Chart */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-sm font-semibold text-gray-700">Sales</h2>
          <div className="flex space-x-2">
            <button className="text-xs font-medium text-teal-600 border-b-2 border-teal-500">This Week</button>
            <button className="text-xs font-medium text-gray-400 hover:text-teal-600">This Month</button>
          </div>
        </div>
        <div className="w-full h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" fontSize={10} />
              <YAxis fontSize={10} />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#00B3B3" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
