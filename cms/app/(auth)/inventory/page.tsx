import React from "react";

const Inventory = () => {
  
  const inventoryStats = [
    { label: "Total Available Quantity", value: "40784" },
    { label: "Total Shortage Quantity", value: "2" },
    { label: "Total Wastage", value: "0" },
    { label: "Total Expired", value: "0" },
    { label: "Total Stock Value", value: "BDT 33,879,140.00" },
    { label: "Total Purchase Cost", value: "BDT 0.00" },
  ];

  const inventoryData = [
    {
      sku: "01-PBC-800",
      name: "Peanut Butter Combo - পিনাট বাটার কম্বো (স্বাদ সহ) - 800gm",
      totalWarehouses: 1,
      available: 3282,
      processing: 508,
      transit: 483,
      returning: 24,
      stockValue: "BDT 3,446,100.00",
      purchaseCost: "BDT 0.00",
      shortage: 0,
      wastage: 0,
      expired: 0
    },
    {
      sku: "01-PBC-800",
      name: "Peanut Butter Combo - পিনাট বাটার কম্বো (স্বাদ সহ) - 800gm",
      totalWarehouses: 1,
      available: 3282,
      processing: 508,
      transit: 483,
      returning: 24,
      stockValue: "BDT 3,446,100.00",
      purchaseCost: "BDT 0.00",
      shortage: 0,
      wastage: 0,
      expired: 0
    },
    {
      sku: "01-PBC-800",
      name: "Peanut Butter Combo - পিনাট বাটার কম্বো (স্বাদ সহ) - 800gm",
      totalWarehouses: 1,
      available: 3282,
      processing: 508,
      transit: 483,
      returning: 24,
      stockValue: "BDT 3,446,100.00",
      purchaseCost: "BDT 0.00",
      shortage: 0,
      wastage: 0,
      expired: 0
    },
    {
      sku: "01-PBC-800",
      name: "Peanut Butter Combo - পিনাট বাটার কম্বো (স্বাদ সহ) - 800gm",
      totalWarehouses: 1,
      available: 3282,
      processing: 508,
      transit: 483,
      returning: 24,
      stockValue: "BDT 3,446,100.00",
      purchaseCost: "BDT 0.00",
      shortage: 0,
      wastage: 0,
      expired: 0
    },
    {
      sku: "01-PBC-800",
      name: "Peanut Butter Combo - পিনাট বাটার কম্বো (স্বাদ সহ) - 800gm",
      totalWarehouses: 1,
      available: 3282,
      processing: 508,
      transit: 483,
      returning: 24,
      stockValue: "BDT 3,446,100.00",
      purchaseCost: "BDT 0.00",
      shortage: 0,
      wastage: 0,
      expired: 0
    },
    // Add additional rows based on image
  ];

  return (
    <div className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">

    <div className="flex justify-between"> 
      <h1 className="text-3xl font-semibold mb-6">Inventory</h1>

        <div className="max-w-[1200px] grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
        {inventoryStats.map((stat, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-800 border border-gray-50 dark:border-gray-700 p-4 rounded-xl shadow">
            <div className="flex gap-1 text-[12px] text-gray-600 dark:text-gray-400 mb-1 text-nowrap">{stat.label}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M7.5.877a6.623 6.623 0 1 0 0 13.246A6.623 6.623 0 0 0 7.5.877M1.827 7.5a5.673 5.673 0 1 1 11.346 0a5.673 5.673 0 0 1-11.346 0m6.423-3a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M6 6h1.5a.5.5 0 0 1 .5.5V10h1v1H6v-1h1V7H6z" clipRule="evenodd"/></svg>
            </div>
            <div className={`text-[14px] text-green-400 font-semibold ${stat.label.includes('Value') || stat.label.includes('Cost') ? 'text-green-600 dark:text-green-400' : ''}`}>{stat.value}</div>
          </div>
        ))}
      </div>
        <div>
          <button className="px-6 py-1 bg-white dark:bg-gray-900 text-teal-700 font-semibold border border-gray-400 rounded hover:bg-teal-700 hover:text-white">Action</button>
        </div>
    </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          <button className="text-sm px-4 py-2 bg-teal-100 dark:bg-gray-800 text-blue-700 dark:text-blue-300 font-medium rounded">Stock</button>
          <button className="text-sm px-4 py-2 text-gray-600 dark:text-gray-400">Logs</button>
        </div>
        </div>
             <div className="mt-8 flex justify-between p-3 border-gray-100 border dark:border-gray-800">
              <div>
                <button className="bg-gray-50 dark:bg-gray-800 p-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M1.85 7.5c0-2.835 2.21-5.65 5.65-5.65c2.778 0 4.152 2.056 4.737 3.15H10.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0v1.813C12.296 3.071 10.666.85 7.5.85C3.437.85.85 4.185.85 7.5s2.587 6.65 6.65 6.65c1.944 0 3.562-.77 4.714-1.942a6.8 6.8 0 0 0 1.428-2.167a.5.5 0 1 0-.925-.38a5.8 5.8 0 0 1-1.216 1.846c-.971.99-2.336 1.643-4.001 1.643c-3.44 0-5.65-2.815-5.65-5.65" clipRule="evenodd"/></svg></button>
              </div>
        <div className="flex items-center space-x-2 text-sm">
          <button className="px-3 py-1 text-gray-500 dark:text-gray-400 border rounded-header"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M8.818 4.182a.45.45 0 0 1 0 .636L6.136 7.5l2.682 2.682a.45.45 0 1 1-.636.636l-3-3a.45.45 0 0 1 0-.636l3-3a.45.45 0 0 1 .636 0" clipRule="evenodd"/></svg></button>
          <button className="px-3 py-1 text-white dark:text-gray-400 bg-teal-500 dark:bg-gray-800">2</button>
          <button className="px-3 py-1 text-gray-500 dark:text-gray-400 border rounded-header">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M6.182 4.182a.45.45 0 0 1 .636 0l3 3a.45.45 0 0 1 0 .636l-3 3a.45.45 0 1 1-.636-.636L8.864 7.5L6.182 4.818a.45.45 0 0 1 0-.636" clipRule="evenodd"/></svg>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto bg-white dark:bg-gray-900 border-gray-50 dark:border-gray-800 shadow">
        <table className="min-w-full table-auto text-sm">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              <th className="px-4 py-3 text-start text-[11px]">SKU</th>
              <th className="px-4 py-3 text-start text-[11px]">Name</th>
              <th className="px-4 py-3 text-start text-[11px]">Total Warehouses</th>
              <th className="px-4 py-3 text-start text-[11px]">Total Available Quantity</th>
              <th className="px-4 py-3 text-start text-[11px]">Total Processing Stock</th>
              <th className="px-4 py-3 text-start text-[11px]">Total In Transit Stock</th>
              <th className="px-4 py-3 text-start text-[11px]">Total Returning Stock</th>
              <th className="px-4 py-3 text-start text-[11px]">Total Stock Value</th>
              <th className="px-4 py-3 text-start text-[11px]">Total Purchase Cost</th>
              <th className="px-4 py-3 text-start text-[11px]">Total Shortage Quantity</th>
              <th className="px-4 py-3 text-start text-[11px]">Total Wastage</th>
              <th className="px-4 py-3 text-start text-[11px]">Total Expired</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item, idx) => (
              <tr key={idx} className="even:bg-gray-50 odd:bg-white dark:even:bg-gray-800 dark:odd:bg-gray-700">
                <td className="px-4 py-2 text-start text-[10px] text-teal-400">{item.sku}</td>
                <td className="px-4 py-2 text-start text-[10px] text-teal-400">{item.name}</td>
                <td className="px-4 py-2 text-start text-[10px] ">{item.totalWarehouses}</td>
                <td className="px-4 py-2 text-start text-[10px] ">{item.available}</td>
                <td className="px-4 py-2 text-start text-[10px] ">{item.processing}</td>
                <td className="px-4 py-2 text-start text-[10px] ">{item.transit}</td>
                <td className="px-4 py-2 text-start text-[10px] ">{item.returning}</td>
                <td className="px-4 py-2 text-start text-[10px]  ">{item.stockValue}</td>
                <td className="px-4 py-2 text-start text-[10px]  ">{item.purchaseCost}</td>
                <td className="px-4 py-2 text-start text-[10px] ">{item.shortage}</td>
                <td className="px-4 py-2 text-start text-[10px] ">{item.wastage}</td>
                <td className="px-4 py-2 text-start text-[10px] ">{item.expired}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

 
    </div>
  );
};

export default Inventory;
