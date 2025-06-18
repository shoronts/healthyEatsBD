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
    <div className="dark:bg-gray-900 bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-medium">Top 10 Locations</h2>
          <InfoIcon className="h-4 w-4 text-gray-400" />
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
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <h3 className="text-md font-medium">Order by Top 10 Locations</h3>
              <InfoIcon className="h-4 w-4 text-gray-400" />
            </div>
            <Download className="h-4 w-4 text-gray-400" />
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart className="text-[14px]" data={locationData} layout="vertical" margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
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
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart className="text-[14px]" data={locationData} layout="vertical" margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
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
