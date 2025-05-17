"use client"

import { InfoIcon, RefreshCw, Download } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

interface TopLocationsProps {
  dateRange: string
}

const locationData = [
  { name: "Dhaka District", count: 10, value: 7500 },
  { name: "Sylhet District", count: 5, value: 3500 },
  { name: "Cumilla District", count: 3, value: 3000 },
  { name: "Chattogram District", count: 3, value: 2500 },
  { name: "Jamalpur District", count: 1, value: 1000 },
  { name: "Khulna District", count: 1, value: 1000 },
  { name: "Kishoreganj District", count: 1, value: 1000 },
  { name: "Noakhali District", count: 1, value: 1000 },
  { name: "Rajshahi District", count: 1, value: 1000 },
  { name: "Rangpur District", count: 1, value: 1000 },
]

export default function TopLocations({ dateRange }: TopLocationsProps) {
  return (
    <div className="dark:bg-[#0F172A] bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-medium">Top 10 Locations</h2>
          <InfoIcon className="h-4 w-4 text-gray-400" />
          <RefreshCw className="h-4 w-4 text-teal-500" />
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-xs text-gray-500">{dateRange}</div>
          <button className="h-8 bg-gray-100 dark:bg-[#0F172A]  text-xs border-0 rounded px-3 py-1 hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-teal-500">
            Today
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <h3 className="text-md font-medium">Order by Top 10 Locations</h3>
              <InfoIcon className="h-4 w-4 text-gray-400" />
            </div>
            <Download className="h-4 w-4 text-gray-400" />
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={locationData} layout="vertical" margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" width={100} />
                <Bar dataKey="count" fill="#0e7490" />
              </BarChart>
            </ResponsiveContainer>
            <div className="text-center mt-4">
              <div className="text-sm font-medium">Total Order Count: 21</div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <h3 className="text-md font-medium">Order Value by Top 10 Locations</h3>
              <InfoIcon className="h-4 w-4 text-gray-400" />
            </div>
            <Download className="h-4 w-4 text-gray-400" />
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={locationData} layout="vertical" margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" width={100} />
                <Bar dataKey="value" fill="#0e7490" />
              </BarChart>
            </ResponsiveContainer>
            <div className="text-center mt-4">
              <div className="text-sm font-medium">Total Sales Value: BDT 19,890.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
