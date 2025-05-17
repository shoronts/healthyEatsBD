"use client"

import { InfoIcon, RefreshCw } from "lucide-react"
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
    <div className="dark:bg-[#0F172A] bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-medium">Order Workflow Analysis</h2>
          <InfoIcon className="h-4 w-4 text-gray-400" />
          <RefreshCw className="h-4 w-4 text-teal-500" />
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-xs text-gray-500">{dateRange}</div>
          <button className="h-8 dark:bg-[#0F172A] bg-gray-100  text-xs border-0 rounded px-3 py-1 hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-teal-500">
            Today
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <h3 className="text-md font-medium">Order Status Percentage</h3>
            <InfoIcon className="h-4 w-4 text-gray-400" />
          </div>
          <div className="h-64 relative">
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
          <div className="h-64">
            <div className="flex flex-col space-y-4 mt-8">
              {cycleTimeData.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-24 text-sm">{item.name}</div>
                  <div
                    className="h-8 flex items-center"
                    style={{
                      backgroundColor: item.color,
                      width: `${item.value * 8}%`,
                      minWidth: "90px",
                      color: "white",
                      paddingLeft: "8px",
                      borderRadius: "4px",
                    }}
                  >
                    {item.value} hrs
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
