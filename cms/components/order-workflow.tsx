"use client"

import { useState } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts"
import { Info } from "lucide-react"

const statusData = [
  { name: "Pending", value: 30.54, color: "#264653" },
  { name: "Approved", value: 44.05, color: "#2A9D8F" },
  { name: "Cancelled", value: 5.41, color: "#E76F51" },
  { name: "Processing", value: 10, color: "#4361EE" },
  { name: "Shipped", value: 5, color: "#3A86FF" },
  { name: "In-Transit", value: 3, color: "#5E503F" },
  { name: "Delivered", value: 2, color: "#2F4550" },
]

const cycleTimeData = [
  { name: "Pending", time: 7.5, color: "#F4A261" },
  { name: "On Hold", time: 140, color: "#E76F51" },
  { name: "Approved", time: 3, color: "#2A9D8F" },
  { name: "Processing", time: 71.5, color: "#4361EE" },
  { name: "Shipped", time: 2, color: "#3A86FF" },
  { name: "In-Transit", time: 43.17, color: "#5E503F" },
]

export default function OrderWorkflow() {
  const [startDate, setStartDate] = useState("2025-05-10 12:00 AM")
  const [endDate, setEndDate] = useState("2025-05-14 11:59 PM")

  return (
    <div className="order-workflow bg-white p-4 rounded shadow-sm mb-4">
      <div className="section-header d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center">
          <h5 className="mb-0 me-2">Order Workflow Analysis</h5>
          <Info size={18} className="text-muted" />
        </div>
        <div className="d-flex align-items-center">
          <button className="btn btn-outline-secondary btn-sm me-2">
            <span className="d-inline-block me-1">○</span>
          </button>
          <button className="btn btn-outline-secondary btn-sm">Custom</button>
        </div>
      </div>

      <div className="date-range d-flex mb-4">
        <div className="date-input d-flex align-items-center me-2">
          <input
            type="text"
            className="form-control form-control-sm"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="date-separator">-</div>
        <div className="date-input d-flex align-items-center ms-2">
          <input
            type="text"
            className="form-control form-control-sm"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="chart-section mb-4">
            <div className="d-flex align-items-center mb-3">
              <h6 className="mb-0 me-2">Order Status Percentage</h6>
              <Info size={16} className="text-muted" />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={0}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(2)}%`}
                  labelLine={false}
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value.toFixed(2)}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="col-md-6">
          <div className="chart-section">
            <div className="d-flex align-items-center mb-3">
              <h6 className="mb-0 me-2">Order Cycle Time</h6>
              <Info size={16} className="text-muted" />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={cycleTimeData} layout="vertical" margin={{ top: 5, right: 30, left: 80, bottom: 5 }}>
                <CartesianGrid horizontal={true} vertical={false} strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={80} />
                <Tooltip formatter={(value) => `${value} hrs`} />
                <Bar dataKey="time" radius={[0, 4, 4, 0]}>
                  {cycleTimeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
