"use client"

import { InfoIcon } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

const orderData = [
  { day: "9", count: 20 },
  { day: "10", count: 18 },
  { day: "11", count: 22 },
  { day: "12", count: 25 },
  { day: "13", count: 30 },
  { day: "14", count: 28 },
  { day: "15", count: 40 },
  { day: "16", count: 50 },
  { day: "17", count: 42 },
  { day: "18", count: 30 },
  { day: "19", count: 25 },
  { day: "20", count: 35 },
  { day: "21", count: 18 },
  { day: "22", count: 22 },
  { day: "23", count: 20 },
  { day: "24", count: 15 },
  { day: "25", count: 12 },
  { day: "26", count: 25 },
  { day: "27", count: 30 },
  { day: "28", count: 65 },
  { day: "29", count: 70 },
  { day: "30", count: 68 },
  { day: "31", count: 55 },
  { day: "1", count: 60 },
  { day: "2", count: 65 },
  { day: "3", count: 55 },
  { day: "4", count: 60 },
  { day: "5", count: 70 },
  { day: "6", count: 75 },
  { day: "7", count: 55 },
  { day: "8", count: 25 },
  { day: "9", count: 30 },
  { day: "10", count: 80 },
]

const salesData = [
  { day: "9", amount: 20 },
  { day: "10", amount: 22 },
  { day: "11", amount: 25 },
  { day: "12", amount: 30 },
  { day: "13", amount: 40 },
  { day: "14", amount: 30 },
  { day: "15", amount: 25 },
  { day: "16", amount: 50 },
  { day: "17", amount: 45 },
  { day: "18", amount: 30 },
  { day: "19", amount: 25 },
  { day: "20", amount: 35 },
  { day: "21", amount: 15 },
  { day: "22", amount: 20 },
  { day: "23", amount: 25 },
  { day: "24", amount: 15 },
  { day: "25", amount: 10 },
  { day: "26", amount: 25 },
  { day: "27", amount: 30 },
  { day: "28", amount: 65 },
  { day: "29", amount: 70 },
  { day: "30", amount: 68 },
  { day: "31", amount: 55 },
  { day: "1", amount: 60 },
  { day: "2", amount: 65 },
  { day: "3", amount: 55 },
  { day: "4", amount: 60 },
  { day: "5", amount: 70 },
  { day: "6", amount: 75 },
  { day: "7", amount: 55 },
  { day: "8", amount: 25 },
  { day: "9", amount: 30 },
  { day: "10", amount: 80 },
]

export default function TrendCharts() {
  return (
    <div className="dark:bg-gray-900  bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-medium">Trends</h2>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-teal-300" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M1.85 7.5c0-2.835 2.21-5.65 5.65-5.65c2.778 0 4.152 2.056 4.737 3.15H10.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0v1.813C12.296 3.071 10.666.85 7.5.85C3.437.85.85 4.185.85 7.5s2.587 6.65 6.65 6.65c1.944 0 3.562-.77 4.714-1.942a6.8 6.8 0 0 0 1.428-2.167a.5.5 0 1 0-.925-.38a5.8 5.8 0 0 1-1.216 1.846c-.971.99-2.336 1.643-4.001 1.643c-3.44 0-5.65-2.815-5.65-5.65" clipRule="evenodd"/></svg>
          </button>
        </div>
        <div className="flex space-x-2">
      <select className="px-3 py-2 border-none dark:border-gray-700 rounded shadow-sm text-sm dark:bg-gray-800">
      <option value="Last 7 Days">By Approved</option>
      <option value="Last 30 Days">Last 30 Days</option>
      <option value="Last 6 Months">Last 6 Months</option>
      <option value="Last Year">Last Year</option>
    </select>
    <select className="px-3 py-y border-none dark:border-gray-700 rounded shadow-sm text-sm dark:bg-gray-800">
      <option value="Daily">Daily</option>
      <option value="Weekly">Weekly</option>
      <option value="Monthly">Monthly</option>
      <option value="Yearly">Yearly</option>
    </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <h3 className="text-md font-medium">Order Trend</h3>
            <InfoIcon className="h-4 w-4 text-gray-400" />
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={orderData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="day" />
                <YAxis />
                <Bar dataKey="count" fill="#0e7490" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-4">
            <h3 className="text-md font-medium">Sales Trend</h3>
            <InfoIcon className="h-4 w-4 text-gray-400" />
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="day" />
                <YAxis />
                <Bar dataKey="amount" fill="#0e7490" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
