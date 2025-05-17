"use client"

import { InfoIcon, RefreshCw } from "lucide-react"

interface DeliveryPartnersProps {
  dateRange: string
}

export default function DeliveryPartners({ dateRange }: DeliveryPartnersProps) {
  return (
    <div className=" dark:bg-[#0F172A] bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-medium">Delivery Partners' Orders</h2>
          <InfoIcon className="h-4 w-4 text-gray-400" />
          <RefreshCw className="h-4 w-4 text-teal-500" />
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-xs text-gray-500">{dateRange}</div>
          <button className="h-8 bg-gray-100 dark:bg-[#0F172A] text-xs border-0 rounded px-3 py-1 hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-teal-500">
            By In-Transit
          </button>
          <button className="h-8 bg-gray-100 dark:bg-[#0F172A] text-xs border-0 rounded px-3 py-1 hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-teal-500">
            Today
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <h3 className="text-md font-medium">Delivery Partners' Order Rate</h3>
            <InfoIcon className="h-4 w-4 text-gray-400" />
          </div>
          <div className="h-64 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-sm font-medium">Total Order Count: 0</div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-4">
            <h3 className="text-md font-medium">Delivery Partners' Sales Value</h3>
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
