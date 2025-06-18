"use client"
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LabelList
} from 'recharts';

const data = [
  { name: 'Pending', value: 7.82 },
  { name: 'On Hold', value: 154.87 },
  { name: 'Approved', value: 24.1 },
  { name: 'Processing', value: 71.9 },
  { name: 'Shipped', value: 0 },
  { name: 'In-Transit', value: 42.17 },
];
import { InfoIcon } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

interface OrderWorkflowProps {
  dateRange: string
}

const statusData = [
  { name: "Pending", value: 38.89, color: "#1e3a8a" },
  { name: "On Hold", value: 25.0, color: "#f87171" },
  { name: "Approved", value: 16.67, color: "#34d399" },
  { name: "Processing", value: 19.44, color: "#06b6d4" },
]

const cycleTimeData = [
  { name: "Pending", value: 0.2, color: "#1e3a8a" },
  { name: "On Hold", value: 11.5, color: "#f87171" },
  { name: "Approved", value: 0.1, color: "#34d399" },
]

export default function OrderWorkflow({ dateRange }: OrderWorkflowProps) {
  return (
    <div className="dark:bg-gray-900 bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-medium">Order Workflow Analysis</h2>
          <InfoIcon className="h-4 w-4 text-gray-400" />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-teal-300" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M1.85 7.5c0-2.835 2.21-5.65 5.65-5.65c2.778 0 4.152 2.056 4.737 3.15H10.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0v1.813C12.296 3.071 10.666.85 7.5.85C3.437.85.85 4.185.85 7.5s2.587 6.65 6.65 6.65c1.944 0 3.562-.77 4.714-1.942a6.8 6.8 0 0 0 1.428-2.167a.5.5 0 1 0-.925-.38a5.8 5.8 0 0 1-1.216 1.846c-.971.99-2.336 1.643-4.001 1.643c-3.44 0-5.65-2.815-5.65-5.65" clipRule="evenodd"/></svg>
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-xs text-gray-500">{dateRange}</div>
    <select className="px-3 py-2 border-none dark:border-gray-700 rounded shadow-sm text-sm dark:bg-gray-800">
      <option value="Daily">Today</option>
      <option value="Weekly">Weekly</option>
      <option value="Monthly">Monthly</option>
      <option value="Yearly">Yearly</option>
    </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <h3 className="text-md font-medium">Order Status Percentage</h3>
            <InfoIcon className="h-4 w-4 text-gray-400" />
          </div>
          <div className="h-[270px] relative">
                  <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={statusData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={0}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {statusData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-sm font-medium">Pending</div>
              <div className="text-xs">38.89%</div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-4">
            <h3 className="text-md font-medium">Order Cycle Time</h3>
            <InfoIcon className="h-4 w-4 text-gray-400" />
          </div>
          <div className="h-70">
              <BarChart
  layout="vertical"
  width={750}
  height={300}
  data={data}
  margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
>
  <CartesianGrid strokeDasharray="1 1" />
  <XAxis type="number" />
  <YAxis type="category" dataKey="name" className='text-[12px]'/>
  <Tooltip />
  <Bar dataKey="value" fill="#8884d8" className='text-[12px]'>
    <LabelList dataKey="value" position="right" formatter={(val) => `${val} hrs`} />
  </Bar>
</BarChart>
          </div>
        </div>
      </div>
    </div>
  )
}
