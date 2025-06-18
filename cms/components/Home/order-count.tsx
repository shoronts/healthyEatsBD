import { InfoIcon } from "lucide-react"

export default function OrderCount() {
  return (
    <div className="bg-teal-50 rounded-lg shadow dark:shadow-gray-800 p-4 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-200">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-medium">Order Count</h2>
          <InfoIcon className="h-4 w-4 text-gray-400" />
        </div>
      </div>
      <div className=" p-4 rounded-md">
        <div className="text-gray-500 mb-1">Total</div>
        <div className="text-2xl font-semibold">36</div>
      </div>
    </div>
  )
}
