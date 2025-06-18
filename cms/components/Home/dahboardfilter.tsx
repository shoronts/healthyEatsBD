import React from 'react'

export default function Dahboardfilter() {
  return (
    <div className='flex items-center justify-between p-6 bg-teal-50 rounded-lg shadow dark:shadow-gray-800 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-200'>
        <div>
            <h2 className='text-[22px] font-semibold'>Dashboard</h2>
        </div>
        <div>
        <div className="flex items-center">
      <p className='py-[5.5px] px-3 border-2 border-b-teal-300 border-t-gray-500 border-r-gray-500 border-l-teal-300 dark:border-gray-700 dark:bg-gray-800'>Master Filter</p>
      <select className="px-3 py-2  border-2 border-b-teal-300 border-t-gray-500 border-r-gray-500 border-l-teal-300 dark:border-gray-700  shadow-sm text-sm dark:bg-gray-800 bg-teal-50">
      <option value="Last 7 Days">Warehouse</option>
      <option value="Last 30 Days">Last 30 Days</option>
      <option value="Last 6 Months">Last 6 Months</option>
      <option value="Last Year">Last Year</option>
    </select>
    <select className="px-3 py-2 border-2 border-b-teal-300 border-t-gray-500 border-r-gray-500 border-l-teal-300 dark:border-gray-700  shadow-sm text-sm dark:bg-gray-800 bg-teal-50">
      <option value="Daily">Today</option>
      <option value="Weekly">Weekly</option>
      <option value="Monthly">Monthly</option>
      <option value="Yearly">Yearly</option>
    </select>
        </div>
        </div>
    </div>
  )
}
