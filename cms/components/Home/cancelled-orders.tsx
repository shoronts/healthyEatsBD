"use client"

import { InfoIcon, RefreshCw } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

interface CancelledOrdersProps {
  dateRange: string
}

const cancelledData = [{ name: "Duplicate Order", value: 100, color: "#f87171" }]

export default function CancelledOrders({ dateRange }: CancelledOrdersProps) {
  return (
    <div className="dark:bg-gray-900 bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-medium">Cancelled & Returned Orders</h2>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-teal-300" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M1.85 7.5c0-2.835 2.21-5.65 5.65-5.65c2.778 0 4.152 2.056 4.737 3.15H10.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0v1.813C12.296 3.071 10.666.85 7.5.85C3.437.85.85 4.185.85 7.5s2.587 6.65 6.65 6.65c1.944 0 3.562-.77 4.714-1.942a6.8 6.8 0 0 0 1.428-2.167a.5.5 0 1 0-.925-.38a5.8 5.8 0 0 1-1.216 1.846c-.971.99-2.336 1.643-4.001 1.643c-3.44 0-5.65-2.815-5.65-5.65" clipRule="evenodd"/></svg>  
          </button>
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
            <h3 className="text-md font-medium">Cancelled Order</h3>
            <InfoIcon className="h-4 w-4 text-gray-400" />
          </div>
          <div className="h-72 relative">
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
              <div className="flex items-center justify-center space-x-2 absolute left-20 bottom-32">
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
          <div className="h-72 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-sm font-medium">Total Order Count: 0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
