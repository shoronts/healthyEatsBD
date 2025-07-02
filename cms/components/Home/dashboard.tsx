"use client"

import { useState } from "react"
import OrderCount from "@/components/Home/order-count"
import SalesAmount from "@/components/Home/sales-amount"
import TrendCharts from "@/components/Home/trend-charts"
import OrderWorkflow from "@/components/Home/order-workflow"
import OrderSource from "@/components/Home/order-source"
import CancelledOrders from "@/components/Home/cancelled-orders"
import TopLocations from "@/components/Home/top-locations"
import DeliveryPartners from "@/components/Home/delivery-partners"
import Payments from "@/components/Home/payments"
import TopSellingItems from "@/components/Home/top-selling-items"
import { InfoIcon, RefreshCw } from "lucide-react"
import Dahboardfilter from "./dahboardfilter"

export default function Dashboard() {
  const [dateRange] = useState("May 10, 2025 12:00 AM - May 10, 2025 11:59 PM")

  return (
    <div className="space-y-6 bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-200 p-4">
        <Dahboardfilter/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <OrderCount />
        <SalesAmount />
      </div>

      <TrendCharts />

      {/* <OrderWorkflow dateRange={dateRange} /> */}

      <OrderSource dateRange={dateRange} />

      <CancelledOrders dateRange={dateRange} />

      <TopLocations dateRange={dateRange} />

      <DeliveryPartners dateRange={dateRange} />

      <Payments dateRange={dateRange} />

      <div className=" dark:bg-gray-900 bg-white rounded-lg shadow p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <h2 className="text-lg font-medium">Top 10 Selling Items</h2>
            <InfoIcon className="h-4 w-4 text-gray-400" />
          </div>
          <div className="flex items-center space-x-2">
            <RefreshCw className="h-4 w-4 text-teal-500" />
            <div className="text-xs text-gray-500">{dateRange}</div>
            <div className="flex space-x-2">
                          <select className="px-3 py-2 border-none dark:border-gray-700 rounded shadow-sm text-sm dark:bg-gray-800">
      <option value="Last 7 Days">By-Variants</option>
      <option value="Last 30 Days">Last 30 Days</option>
      <option value="Last 6 Months">Last 6 Months</option>
      <option value="Last Year">Last Year</option>
    </select>
    <select className="px-3 py-2 border-none dark:border-gray-700 rounded shadow-sm text-sm dark:bg-gray-800">
      <option value="Daily">By-Requested</option>
      <option value="Weekly">Weekly</option>
      <option value="Monthly">Monthly</option>
      <option value="Yearly">Yearly</option>
    </select>
        <select className="px-3 py-2 border-none dark:border-gray-700 rounded shadow-sm text-sm dark:bg-gray-800">
      <option value="Daily">Today</option>
      <option value="Weekly">Weekly</option>
      <option value="Monthly">Monthly</option>
      <option value="Yearly">Yearly</option>
    </select>
            </div>
          </div>
        </div>
        <TopSellingItems />
      </div>
    </div>
  )
}
