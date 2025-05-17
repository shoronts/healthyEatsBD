"use client"

import { InfoIcon, RefreshCw } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

interface PaymentsProps {
  dateRange: string
}

const paymentCountData = [
  { name: "Payment Due", value: 42 },
  { name: "Payment Collected", value: 0 },
]

const paymentValueData = [
  { name: "Payment Due", value: 41750 },
  { name: "Payment Collected", value: 0 },
]

const discountData = [
  { name: "Discount Allowed", value: 33 },
  { name: "Advanced Payment", value: 0 },
]

const discountValueData = [
  { name: "Discount Allowed", value: 2710 },
  { name: "Advanced Payment", value: 0 },
]

export default function Payments({ dateRange }: PaymentsProps) {
  return (
    <div className=" dark:bg-[#0F172A] bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-medium">Payments</h2>
          <InfoIcon className="h-4 w-4 text-gray-400" />
          <RefreshCw className="h-4 w-4 text-teal-500" />
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-xs text-gray-500">{dateRange}</div>
          <button className="h-8 bg-gray-100 dark:bg-[#0F172A] text-xs border-0 rounded px-3 py-1 hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-teal-500">
            Today
          </button>
        </div>
      </div>

      <div className="mb-8">
        <div className="grid grid-cols-2 gap-6 mb-4">
          <div className="text-sm font-medium">Total Order Count: 42</div>
          <div className="text-sm font-medium">Total Sales Value: BDT 41,750.00</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={paymentCountData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="value" fill="#f87171" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={paymentValueData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="value" fill="#f87171" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-2 gap-6 mb-4">
          <div className="text-sm font-medium">Total Discount Allowed Orders Count: 33</div>
          <div className="text-sm font-medium">Total Discount Allowed Orders Value: BDT 2,710.00</div>
        </div>
        <div className="grid grid-cols-2 gap-6 mb-4">
          <div className="text-sm font-medium">Total Advanced Payment Orders Count: 0</div>
          <div className="text-sm font-medium">Total Advanced Payment Orders Value: BDT 0.00</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={discountData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="value" fill="#0f3c4c" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={discountValueData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="value" fill="#0f3c4c" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
