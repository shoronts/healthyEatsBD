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
    <div className="bg-white rounded-lg shadow p-4">
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
            <button className="h-8 bg-gray-100 text-xs border-0 rounded px-3 py-1 hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-teal-500">
              Order Status
            </button>
            <button className="h-8 bg-gray-100 text-xs border-0 rounded px-3 py-1 hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-teal-500">
              Today
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <h3 className="text-md font-medium">Order Count</h3>
            <InfoIcon className="h-4 w-4 text-gray-400" />
          </div>
          <div className="h-64 relative">
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
              <div className="flex items-center justify-center space-x-2">
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
          <div className="h-64">
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
