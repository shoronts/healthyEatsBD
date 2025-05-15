"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const orderData = [
  { day: "9", count: 20, revenue: 25 },
  { day: "10", count: 18, revenue: 20 },
  { day: "11", count: 25, revenue: 30 },
  { day: "12", count: 22, revenue: 25 },
  { day: "13", count: 40, revenue: 40 },
  { day: "14", count: 30, revenue: 35 },
  { day: "15", count: 25, revenue: 30 },
  { day: "16", count: 35, revenue: 40 },
  { day: "17", count: 20, revenue: 25 },
  { day: "18", count: 30, revenue: 35 },
  { day: "19", count: 15, revenue: 20 },
  { day: "20", count: 20, revenue: 25 },
  { day: "21", count: 15, revenue: 20 },
  { day: "22", count: 15, revenue: 20 },
  { day: "23", count: 20, revenue: 25 },
  { day: "24", count: 15, revenue: 20 },
  { day: "25", count: 15, revenue: 20 },
  { day: "26", count: 40, revenue: 45 },
  { day: "27", count: 65, revenue: 70 },
  { day: "28", count: 60, revenue: 65 },
  { day: "29", count: 65, revenue: 70 },
  { day: "30", count: 60, revenue: 65 },
  { day: "1", count: 55, revenue: 60 },
  { day: "2", count: 40, revenue: 45 },
  { day: "3", count: 60, revenue: 65 },
  { day: "4", count: 65, revenue: 70 },
  { day: "5", count: 40, revenue: 45 },
  { day: "6", count: 60, revenue: 65 },
  { day: "7", count: 75, revenue: 80 },
  { day: "8", count: 60, revenue: 65 },
  { day: "9", count: 75, revenue: 80 },
  { day: "10", count: 70, revenue: 75 },
]

export default function OrderCharts() {
  return (
    <div className="row mb-4">
      <div className="col-md-6">
        <div className="chart-container bg-white p-3 rounded shadow-sm">
          <div className="chart-header d-flex justify-content-between mb-2">
            <div className="chart-title fw-bold">Count</div>
            <div className="chart-scale">
              <span>80%</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={orderData}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="day" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip />
              <Bar dataKey="count" fill="#2A9D8F" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="col-md-6">
        <div className="chart-container bg-white p-3 rounded shadow-sm">
          <div className="chart-header d-flex justify-content-between mb-2">
            <div className="chart-title fw-bold">Revenue</div>
            <div className="chart-scale">
              <span>80%</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={orderData}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="day" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip />
              <Bar dataKey="revenue" fill="#2A9D8F" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
