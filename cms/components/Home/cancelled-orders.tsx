"use client"

import { InfoIcon, RefreshCw } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

interface CancelledOrdersProps {
  dateRange: string
}

const cancelledData = [{ name: "Duplicate Order", value: 100, color: "#f87171" }]

export default function CancelledOrders({ dateRange }: CancelledOrdersProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-medium">Cancelled & Returned Orders</h2>
          <RefreshCw className="h-4 w-4 text-teal-500" />
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-xs text-gray-500">{dateRange}</div>
          <button className="h-8 bg-gray-100 text-xs border-0 rounded px-3 py-1 hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-teal-500">
            Today
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <h3 className="text-md font-medium">Cancelled Order</h3>
            <InfoIcon className="h-4 w-4 text-gray-400" />
          </div>
          <div className="h-64 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={cancelledData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={0}
                  dataKey="value"
                >
                  {cancelledData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute bottom-0 left-0 right-0 text-center">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="text-sm">Duplicate Order</div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 text-center mt-4">
              <div className="text-sm font-medium">Total Order Count: 2</div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-4">
            <h3 className="text-md font-medium">Returned Order</h3>
            <InfoIcon className="h-4 w-4 text-gray-400" />
          </div>
          <div className="h-64 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-sm font-medium">Total Order Count: 0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
