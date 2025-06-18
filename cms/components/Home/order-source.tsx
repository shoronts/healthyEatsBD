"use client"

import { InfoIcon, RefreshCw, Download } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts"

interface OrderSourceProps {
  dateRange: string
}

const sourceData = [{ name: "Website", value: 34, color: "#10b981" }]

const valueData = [{ name: "Website", value: 20000 }]

export default function OrderSource({ dateRange }: OrderSourceProps) {
  return (
    <div className="dark:bg-gray-900 bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-medium">Order Source</h2>
          <InfoIcon className="h-4 w-4 text-gray-400" />
          <RefreshCw className="h-4 w-4 text-teal-500" />
        </div>
        <div className="flex items-center space-x-2">
          <Download className="h-4 w-4 text-gray-400" />
          <div className="text-xs text-gray-500">{dateRange}</div>
          <div className="flex space-x-2">
             <select className="px-3 py-2 border-none dark:border-gray-700 rounded shadow-sm text-sm dark:bg-gray-800">
      <option value="Last 7 Days">Order Status</option>
      <option value="Last 30 Days">Last 30 Days</option>
      <option value="Last 6 Months">Last 6 Months</option>
      <option value="Last Year">Last Year</option>
    </select>
    <select className="px-3 py-1 border-none dark:border-gray-700 rounded shadow-sm text-sm dark:bg-gray-800">
      <option value="Daily">Today</option>
      <option value="Weekly">Weekly</option>
      <option value="Monthly">Monthly</option>
      <option value="Yearly">Yearly</option>
    </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <h3 className="text-md font-medium">Order Count</h3>
            <InfoIcon className="h-4 w-4 text-gray-400" />
          </div>
          <div className="h-[270px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sourceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={0}
                  dataKey="value"
                >
                  {sourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute bottom-0 left-0 right-0 text-center">
              <div className="flex items-center justify-center space-x-2 absolute left-12 bottom-24">
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <div className="text-sm">Website</div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 text-center mt-4">
              <div className="text-sm font-medium">Total Order Count: 34</div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-4">
            <h3 className="text-md font-medium">Order Value</h3>
            <InfoIcon className="h-4 w-4 text-gray-400" />
          </div>
          <div className="h-[270px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={valueData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="value" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
            <div className="text-center mt-4">
              <div className="text-sm font-medium">Total Order Count: 34</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
