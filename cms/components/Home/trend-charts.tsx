"use client"

import { RefreshCw } from "lucide-react"
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
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-medium">Trends</h2>
          <RefreshCw className="h-4 w-4 text-teal-500" />
        </div>
        <div className="flex space-x-2">
          <button className="h-8 bg-gray-100 text-xs border-0 rounded px-3 py-1 hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-teal-500">
            By Approved
          </button>
          <button className="h-8 bg-gray-100 text-xs border-0 rounded px-3 py-1 hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-teal-500">
            Daily
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <h3 className="text-md font-medium">Order Trend</h3>
            <InfoIcon className="h-4 w-4 text-gray-400" />
          </div>
          <div className="h-64">
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
          <div className="h-64">
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
