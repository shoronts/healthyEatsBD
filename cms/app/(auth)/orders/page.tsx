"use client";
import React, { useEffect, useRef, useState } from 'react';
import {Filter, AlertCircle} from 'lucide-react';
import Link from 'next/link';

const OrderDashboard = () => {
  const [activeTab, setActiveTab] = useState('All Orders');
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
  const [showColumnFilter, setShowColumnFilter] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(50);
  const [visibleColumns, setVisibleColumns] = useState({
    selectAll: true,
    invoiceNo: true,
    date: true,
    customer: true,
    pickUpAddress: true,
    paymentsInfo: true,
    deliveryPartner: true,
    deliveryFee: true,
    internalNotes: true
  });
  const orderTabs = [
    { name: 'All Orders', count: 7102 },
    { name: 'Pending', count: 29 },
    { name: 'On Hold', count: 7 },
    { name: 'Approved', count: 32 },
    { name: 'Processing', count: 2 },
    { name: 'Shipped', count: 0 },
    { name: 'In-Transit', count: 701 },
    { name: 'Delivered', count: 5275 },
    { name: 'Flagged', count: 115 },
    { name: 'Cancelled', count: 941 }
  ];

  const sampleOrders = [
    {
      id: 'SO-7082',
      invoiceNo: 'SO-7082',
      customer: "Muhammad Ashikul Alam's",
      phone: '+8801831406344',
      address: 'গ্রামবাড়ী দক্ষিণপাড়া ওয়ার্ড নং, ১০ দরগাহ গেট, আমদানী বাজার, দুর্গাপুর, BD',
      status: 'NEW',
      created: 'May 10, 2025 03:04 PM',
      shipping: 'May 10, 2025 03:03 PM',
      salesAmount: 'BDT 1,050.00',
      paidAmount: 'BDT 0.00',
      dueAmount: 'BDT 1,170.00',
      pickupLocation: 'Warehouse',
      deliveryPartner: 'Healthy Eats',
      deliveryFee: 'BDT 120.00',
      priority: 'Regular'
    },
    {
      id: 'SO-7081',
      invoiceNo: 'SO-7081',
      customer: 'আহমদ আলমগীর',
      phone: '+8801915905565',
      address: 'Judge court, Cumilla , BD',
      status: 'NEW',
      created: 'May 10, 2025 03:02 PM',
      shipping: 'May 10, 2025 03:01 PM',
      salesAmount: 'BDT 1,050.00',
      paidAmount: 'BDT 0.00',
      dueAmount: 'BDT 1,170.00',
      pickupLocation: 'Warehouse',
      deliveryPartner: 'Healthy Eats',
      deliveryFee: 'BDT 120.00',
      priority: 'Regular'
    },
    {
      id: 'SO-7080',
      invoiceNo: 'SO-7080',
      customer: 'আরিফুজ্জামান শাহ',
      phone: '+8801723901671',
      address: 'গাজির বাজারটি এলাকা ১৮৬ বিনোদপুর, BD',
      status: 'NEW',
      created: 'May 10, 2025 03:00 PM',
      shipping: 'May 10, 2025 02:59 PM',
      salesAmount: 'BDT 1,050.00',
      paidAmount: 'BDT 0.00',
      dueAmount: 'BDT 1,170.00',
      pickupLocation: 'Warehouse',
      deliveryPartner: 'Healthy Eats',
      deliveryFee: 'BDT 120.00',
      priority: 'Regular'
    },
    {
      id: 'SO-7079',
      invoiceNo: 'SO-7079',
      customer: 'Md Showkat osman',
      phone: '+8801828419522',
      address: 'আমাদের কোনো ঠিকানা নিয় কুপিয়ানা কুমিল্লা, সদর, আলোচনা বাড়ী এলাকায়, BD',
      status: 'NEW',
      created: 'May 10, 2025 02:33 PM',
      shipping: 'May 10, 2025 02:32 PM',
      salesAmount: 'BDT 1,050.00',
      paidAmount: 'BDT 0.00',
      dueAmount: 'BDT 1,170.00',
      pickupLocation: 'Warehouse',
      deliveryPartner: 'Healthy Eats',
      deliveryFee: 'BDT 120.00',
      priority: 'Regular'
    },
    {
      id: 'SO-7078',
      invoiceNo: 'SO-7078',
      customer: 'লিরাত জাহান',
      phone: '+8801942263806',
      address: 'তোমার বাড়ি চন্দ্রপুরা বরিশাল, sadar,Barisal , BD',
      status: 'NEW',
      created: 'May 10, 2025 10:51 AM',
      shipping: 'May 10, 2025 10:50 AM',
      salesAmount: 'BDT 940.00',
      paidAmount: 'BDT 0.00',
      dueAmount: 'BDT 1,060.00',
      pickupLocation: 'Warehouse',
      deliveryPartner: 'Healthy Eats',
      deliveryFee: 'BDT 120.00',
      priority: 'Regular'
    }
  ];

const toggleColumnVisibility = (column: string) => {
  setVisibleColumns(prev => ({
    ...prev,
    [column]: !prev[column]
  }));
};

const handleSelectOrder = (orderId: string) => {
  setSelectedOrders(prev =>
    prev.includes(orderId)
      ? prev.filter(id => id !== orderId)
      : [...prev, orderId]
  );
};

const handleSelectAll = () => {
  if (selectedOrders.length === sampleOrders.length) {
    setSelectedOrders([]);
  } else {
    setSelectedOrders(sampleOrders.map(order => order.id));
  }
};
const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#111827]">
      {/* Header */}
      <div className="bg-white dark:bg-[#111827] border-b border-gray-200 dark:border-gray-600 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Orders</h1>
          </div>
          <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">S</span>
              </div>
              <button className="p-1 hover:bg-gray-100 rounded">
                <div className='bg-white dark:bg-[#111827] border border-gray-100 dark:border-gray-700  h-8 w-8 flex items-center justify-center'>
                 <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5 text-teal-500' viewBox="0 0 15 15"><g fill="currentColor"><rect width="1" height="1" x="7" y="5.025" rx=".5"/><rect width="1" height="1" x="7" y="3.025" rx=".5"/><rect width="1" height="1" x="7" y="7.025" rx=".5"/><rect width="1" height="1" x="7" y="13.025" rx=".5"/><rect width="1" height="1" x="7" y="1.025" rx=".5"/><rect width="1" height="1" x="13" y="7.025" rx=".5"/><rect width="1" height="1" x="5" y="7.025" rx=".5"/><rect width="1" height="1" x="3" y="7.025" rx=".5"/><rect width="1" height="1" x="9" y="7.025" rx=".5"/><rect width="1" height="1" x="11" y="7.025" rx=".5"/><rect width="1" height="1" x="7" y="9.025" rx=".5"/><rect width="1" height="1" x="7" y="11.025" rx=".5"/><rect width="1" height="1" x="1" y="7.025" rx=".5"/><path fillRule="evenodd" d="M1 1.5a.5.5 0 0 1 .5-.5H6v1H2v4H1zM13 2H9V1h4.5a.5.5 0 0 1 .5.5V6h-1zM1 13.5V9h1v4h4v1H1.5a.5.5 0 0 1-.5-.5m12-.5V9h1v4.5a.5.5 0 0 1-.5.5h-4v-1z" clipRule="evenodd"/></g></svg>
                </div>
              </button>
            </div>
            <button className="px-4 py-1 text-teal-600 border border-gray-200 rounded hover:bg-gray-50 font-semibold dark:border-gray-700 ">
              Action
            </button>
            <button className="px-4 py-1 bg-teal-600 text-white rounded hover:bg-teal-700 font-semibold">
              Create Order
            </button>
          </div>
        </div>
      </div>

      {/* Status Tabs */}
      <div className="bg-white dark:bg-[#111827] border-b border-gray-200 dark:border-gray-600 px-6">
        <div className="flex gap-8 overflow-x-auto">
          {orderTabs.map((tab) => (
            // <Link href="">
                        <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-2 py-4 border-b-2 whitespace-nowrap ${
                activeTab === tab.name
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-gray-600 hover:text-teal-600'
              }`}
            >
              <span>{tab.name}</span>
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                activeTab === tab.name 
                  ? 'bg-teal-100 dark:bg-gray-600 dark:text-white text-teal-800' 
                  : 'bg-gray-100 dark:bg-gray-600 dark:text-white text-gray-600'
              }`}>
                {tab.count}
              </span>
            </button>
            // </Link>
          ))}
        </div>
      </div>

      {/* Alert */}
      <div className="bg-orange-50 dark:bg-[#111827] border-l-4 border-orange-400 p-4 mx-6 mt-4">
        <div className="flex items-center">
          <AlertCircle className="w-5 h-5 text-orange-400 mr-3" />
          <div className="text-sm text-gray-800 dark:text-white">
            <span className="font-medium">Multiple orders (9)</span> with the same phone number <span className="font-medium">(6)</span>. 
            You have selected <span className="font-medium">29 order(s)</span>. 
            <button className="text-red-500 hover:text-red-300 ml-2">Clear all selections</button>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between px-6 py-4 bg-white dark:bg-[#111827] mx-6 mt-4 rounded border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button className="text-gray-400 hover:text-gray-600 border p-2 rounded dark:border-gray-700  border-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M1.85 7.5c0-2.835 2.21-5.65 5.65-5.65c2.778 0 4.152 2.056 4.737 3.15H10.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0v1.813C12.296 3.071 10.666.85 7.5.85C3.437.85.85 4.185.85 7.5s2.587 6.65 6.65 6.65c1.944 0 3.562-.77 4.714-1.942a6.8 6.8 0 0 0 1.428-2.167a.5.5 0 1 0-.925-.38a5.8 5.8 0 0 1-1.216 1.846c-.971.99-2.336 1.643-4.001 1.643c-3.44 0-5.65-2.815-5.65-5.65" clipRule="evenodd"/></svg>
            </button>
            <button 
              onClick={() => setShowColumnFilter(!showColumnFilter)}
              className="flex items-center gap-2 px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50"
            >
              <Filter className="w-4 h-4" />
              Filter Column
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="px-3 py-2 bg-teal-600 text-white text-sm rounded" onClick={() => setIsModalOpen(true)}>Picking</button>
            <button className="flex items-center gap-1 px-3 py-2 text-sm text-teal-600 border border-teal-600 rounded hover:bg-teal-50">
              <svg xmlns="http://www.w3.org/2000/svg" className='h-4 w-4' viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M7.5 1.05a.45.45 0 0 1 .45.45v6.914l2.232-2.232a.45.45 0 1 1 .636.636l-3 3a.45.45 0 0 1-.636 0l-3-3a.45.45 0 1 1 .636-.636L7.05 8.414V1.5a.45.45 0 0 1 .45-.45M2.5 10a.5.5 0 0 1 .5.5V12c0 .554.446 1 .996 1h7.005A1 1 0 0 0 12 12v-1.5a.5.5 0 0 1 1 0V12a2 2 0 0 1-1.999 2H3.996A1.997 1.997 0 0 1 2 12v-1.5a.5.5 0 0 1 .5-.5" clipRule="evenodd"/></svg>
              Export Summary
            </button>
          </div>
            {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black  bg-opacity-30">
          <div
            ref={modalRef}
            className="bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-lg p-6 w-full max-w-5xl relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>

            {/* Modal Content */}
            <h2 className="text-xl font-semibold mb-4">Product and Stock Checklist</h2>
            <div className='flex gap-6 items-center'>
                            {/* Warehouse Selector */}
            <div className="mb-4 bg-gray-200 dark:bg-gray-700 flex-1 p-3">
              <label className="block text-sm font-medium mb-1 bg-gray-200 dark:bg-gray-700">Warehouse</label>
              <input
                type="text"
                placeholder="Search Warehouse"
                className="w-full  py-1 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300 bg-gray-200 dark:bg-gray-700"
              />
            </div>

            {/* Stock Status */}
            <div className="mb-4 flex-1">
              <label className="block text-sm font-medium mb-1">Stock Status</label>
              <div className="flex gap-4 mt-1">
                <label className="flex items-center gap-2">
                  <input type="radio" name="stockStatus" defaultChecked />
                  Both
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="stockStatus" />
                  Available Stock
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="stockStatus" />
                  Shortage Stock
                </label>
              </div>
            </div>
            </div>

            
            {/* Action Buttons */}
            <div className='flex gap-2 items-center mb-2 my-4'>
               <div className="flex items-center gap-2">
            <button className="text-gray-400 hover:text-gray-600 border p-2 rounded border-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M1.85 7.5c0-2.835 2.21-5.65 5.65-5.65c2.778 0 4.152 2.056 4.737 3.15H10.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0v1.813C12.296 3.071 10.666.85 7.5.85C3.437.85.85 4.185.85 7.5s2.587 6.65 6.65 6.65c1.944 0 3.562-.77 4.714-1.942a6.8 6.8 0 0 0 1.428-2.167a.5.5 0 1 0-.925-.38a5.8 5.8 0 0 1-1.216 1.846c-.971.99-2.336 1.643-4.001 1.643c-3.44 0-5.65-2.815-5.65-5.65" clipRule="evenodd"/></svg>
            </button>
            <button 
              className="flex items-center gap-2 px-3 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50"
            >
              <Filter className="w-4 h-4" />
              Filter Column
            </button>
          </div> 
          <div className="flex items-center gap-2">
            <button className="px-3 py-2 bg-teal-600 text-white text-sm rounded">Picking</button>
            <button className="flex items-center gap-1 px-3 py-2 text-sm text-teal-600 border border-teal-600 rounded hover:bg-teal-50">
              <svg xmlns="http://www.w3.org/2000/svg" className='h-4 w-4' viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M7.5 1.05a.45.45 0 0 1 .45.45v6.914l2.232-2.232a.45.45 0 1 1 .636.636l-3 3a.45.45 0 0 1-.636 0l-3-3a.45.45 0 1 1 .636-.636L7.05 8.414V1.5a.45.45 0 0 1 .45-.45M2.5 10a.5.5 0 0 1 .5.5V12c0 .554.446 1 .996 1h7.005A1 1 0 0 0 12 12v-1.5a.5.5 0 0 1 1 0V12a2 2 0 0 1-1.999 2H3.996A1.997 1.997 0 0 1 2 12v-1.5a.5.5 0 0 1 .5-.5" clipRule="evenodd"/></svg>
              Export as Svg
            </button>
          </div>
            </div>
            
            
            {/* Table (Demo Data) */}
            <table className="w-full text-sm border-t">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="text-left px-3 py-2 text-[12px]">Product SKU</th>
                  <th className="text-left px-3 py-2 text-[12px]">Image</th>
                  <th className="text-left px-3 py-2 text-[12px]">Product Name</th>
                  <th className="text-left px-3 py-2 text-[12px]">Picking Qty</th>
                  <th className="text-left px-3 py-2 text-[12px]">Available Qty</th>
                  <th className="text-left px-3 py-2 text-[12px]">Shortage Qty</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-3 py-2 text-[10px]">01-PB-800</td>
                  <td className="px-3 py-2 text-[10px]">
                    <img src="https://via.placeholder.com/40" alt="product" className="w-10 h-10" />
                  </td>
                  <td className="px-3 py-2 text-[10px]">Peanut Butter</td>
                  <td className="px-3 py-2 text-[10px]">3</td>
                  <td className="px-3 py-2 text-[10px]">5646</td>
                  <td className="px-3 py-2 text-[10px]">0</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      )}
          <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600 dark:text-white">Show</span>
          <select 
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="border bg-gray-200 dark:bg-gray-700 border-gray-300 rounded px-3 py-2 text-sm p-3 dark:border-gray-700 "
          >
            <option value={50}>50</option>
            <option value={100}>100</option>
            <option value={200}>200</option>
          </select>
        </div>
        </div>
                      <div className="flex items-center gap-1">
              <button className="w-8 h-8 flex items-center justify-center text-gray-400 border rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M8.842 3.135a.5.5 0 0 1 .023.707L5.435 7.5l3.43 3.658a.5.5 0 0 1-.73.684l-3.75-4a.5.5 0 0 1 0-.684l3.75-4a.5.5 0 0 1 .707-.023" clipRule="evenodd"/></svg>
              </button>
              <button className="w-8 h-8 flex items-center justify-center text-white bg-teal-500 border border-teal-500 rounded-full">
                1
              </button>
              <button className="w-8 h-8 flex items-center justify-center text-gray-400 border rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M6.158 3.135a.5.5 0 0 1 .707.023l3.75 4a.5.5 0 0 1 0 .684l-3.75 4a.5.5 0 1 1-.73-.684L9.566 7.5l-3.43-3.658a.5.5 0 0 1 .023-.707" clipRule="evenodd"/></svg>
              </button>
        </div>
      </div>

      {/* Column Filter Panel */}
      {showColumnFilter && (
        <div className="mx-6 mt-2 bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-700 rounded p-6 max-w-96 absolute">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-4 h-4 border border-gray-300 rounded"></div>
            <span className="text-sm font-medium">Columns</span>
          </div>
          <div className="flex flex-col gap-2">
            {Object.entries(visibleColumns).map(([column, visible]) => (
              <label key={column} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={visible}
                  onChange={() => toggleColumnVisibility(column)}
                  className="w-4 h-4 text-teal-600 border-gray-300 rounded"
                />
                <span className="capitalize">{column.replace(/([A-Z])/g, ' $1').trim()}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Table */}
      <div className="mx-6 mt-4 bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-700 rounded overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-[#111827] border-b border-gray-600">
              <tr>
                {visibleColumns.selectAll && (
                  <th className="w-12 px-4 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedOrders.length === sampleOrders.length}
                      onChange={handleSelectAll}
                      className="w-4 h-4 text-teal-600 border-gray-300 rounded"
                    />
                  </th>
                )}
                {visibleColumns.invoiceNo && (
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Invoice No
                  </th>
                )}
                {visibleColumns.date && (
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                )}
                {visibleColumns.customer && (
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                )}
                {visibleColumns.pickUpAddress && (
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Pick Up Address
                  </th>
                )}
                {visibleColumns.paymentsInfo && (
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payments Info
                  </th>
                )}
                {visibleColumns.deliveryPartner && (
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Delivery Partner
                  </th>
                )}
                {visibleColumns.deliveryFee && (
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Delivery Fee
                  </th>
                )}
                {visibleColumns.internalNotes && (
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Internal Notes
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-gray-50 dark:bg-[#111827]">
              {sampleOrders.map((order, index) => (
                <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-600">
                  {visibleColumns.selectAll && (
                    <td className="px-4 py-4">
                      <input
                        type="checkbox"
                        checked={selectedOrders.includes(order.id)}
                        onChange={() => handleSelectOrder(order.id)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                      />
                    </td>
                  )}
                  {visibleColumns.invoiceNo && (
                    <td className="px-4 py-4">
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex gap-2">
                          <button className="w-4 h-4 text-gray-400 hover:text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className='h-4 w-4 text-teal-700' viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M7.5.877a6.623 6.623 0 1 0 0 13.246A6.623 6.623 0 0 0 7.5.877M1.827 7.5a5.673 5.673 0 1 1 11.346 0a5.673 5.673 0 0 1-11.346 0m6.423-3a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M6 6h1.5a.5.5 0 0 1 .5.5V10h1v1H6v-1h1V7H6z" clipRule="evenodd"/></svg>
                          </button>
                          <button className="w-4 h-4 text-gray-400 hover:text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className='h-4 w-4 text-teal-700' viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M12.146 1.146a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1 0 .708l-3.942 3.942a1 1 0 0 1-.26.188L6.724 9.947a.5.5 0 0 1-.671-.67l1.963-3.928a1 1 0 0 1 .188-.26zm.354 1.061l-3.59 3.59l-1.037 2.076l.254.254l2.077-1.038L13.793 3.5zM10 2L9 3H4.9c-.428 0-.72 0-.944.019c-.22.018-.332.05-.41.09a1 1 0 0 0-.437.437c-.04.078-.072.19-.09.41C3 4.18 3 4.472 3 4.9v6.2c0 .428 0 .72.019.944c.018.22.05.332.09.41a1 1 0 0 0 .437.437c.078.04.19.072.41.09c.225.019.516.019.944.019h6.2c.428 0 .72 0 .944-.019c.22-.018.332-.05.41-.09a1 1 0 0 0 .437-.437c.04-.078.072-.19.09-.41c.019-.225.019-.516.019-.944V7l1-1v5.12c0 .403 0 .735-.022 1.006c-.023.281-.072.54-.196.782a2 2 0 0 1-.874.874c-.243.124-.501.173-.782.196c-.27.022-.603.022-1.005.022H4.88c-.403 0-.735 0-1.006-.022c-.281-.023-.54-.072-.782-.196a2 2 0 0 1-.874-.874c-.124-.243-.173-.501-.196-.782C2 11.856 2 11.523 2 11.12V4.88c0-.403 0-.735.022-1.006c.023-.281.072-.54.196-.782a2 2 0 0 1 .874-.874c.243-.124.501-.173.782-.196C4.144 2 4.477 2 4.88 2z" clipRule="evenodd"/></svg>
                          </button>
                          <button className="w-4 h-4 text-gray-400 hover:text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className='h-4 w-4 text-teal-700' viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M5.5 1a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM3 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H11v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4h-.5a.5.5 0 0 1-.5-.5M5 4h5v8H5z" clipRule="evenodd"/></svg>
                          </button>
                          <button className="w-4 h-4 text-gray-400 hover:text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className='h-4 w-4 text-teal-700' viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M1 9.5A1.5 1.5 0 0 0 2.5 11H4v-1H2.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V4H5.5A1.5 1.5 0 0 0 4 5.5v7A1.5 1.5 0 0 0 5.5 14h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 12.5 4H11V2.5A1.5 1.5 0 0 0 9.5 1h-7A1.5 1.5 0 0 0 1 2.5zm4-4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z" clipRule="evenodd"/></svg>
                          </button>
                        </div>
                        <span className="text-[10px] font-medium text-teal-500">{order.invoiceNo}</span>
                        <span className="px-2 py-1 text-[10px] text-yellow-400 rounded">website</span>
                      </div>
                    </td>
                  )}
                  {visibleColumns.date && (
                    <td className="px-4 py-4">
                      <div className="text-[11px]">
                        <div className="text-gray-900 dark:text-gray-200 font-semibold text-[10px]">Created <span className="font-light">{order.created}</span></div>
                        <div className="text-gray-900 dark:text-gray-200 font-semibold text-[10px]">Shipping <span className="font-light">{order.shipping}</span></div>
                      </div>
                    </td>
                  )}
                  {visibleColumns.customer && (
                    <td className="px-4 py-4">
                      <div className="text-[11px]">
                        <div className="font-medium text-teal-500">{order.customer}</div>
                        <div className='flex items-center gap-1'>
                           <span className={`inline-flex px-2 text-[11px] font-semibold rounded ${
                          order.status === 'NEW' ? 'bg-orange-300 text-white' : 'bg-orange-200 text-gray-800'
                        }`}>
                          {order.status}
                          
                        </span>
                         <button className="w-4 h-4 text-gray-400 hover:text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5 text-teal-700' viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M7.5.877a6.623 6.623 0 1 0 0 13.246A6.623 6.623 0 0 0 7.5.877M1.827 7.5a5.673 5.673 0 1 1 11.346 0a5.673 5.673 0 0 1-11.346 0m6.423-3a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M6 6h1.5a.5.5 0 0 1 .5.5V10h1v1H6v-1h1V7H6z" clipRule="evenodd"/></svg>
                          </button>
                        </div>
                        <div className="flex items-center gap-1 text-blue-600">
                          <span>{order.phone}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className='h-4 w-4' viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M1 9.5A1.5 1.5 0 0 0 2.5 11H4v-1H2.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V4H5.5A1.5 1.5 0 0 0 4 5.5v7A1.5 1.5 0 0 0 5.5 14h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 12.5 4H11V2.5A1.5 1.5 0 0 0 9.5 1h-7A1.5 1.5 0 0 0 1 2.5zm4-4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z" clipRule="evenodd"/></svg>
                        </div>
                        <div className="text-gray-500 max-w-xs truncate">{order.address}</div>
                      </div>
                    </td>
                  )}
                  {visibleColumns.pickUpAddress && (
                    <td className="px-4 py-4">
                      <div className="text-[11px]">
                        <span className="text-gray-700  font-medium bg-gray-100 dark:bg-gray-700 dark:text-gray-300 p-1 rounded">{order.pickupLocation}</span>
                        <div className="text-teal-600">Healthy Eats</div>
                      </div>
                    </td>
                  )}
                  {visibleColumns.paymentsInfo && (
                    <td className="px-4 py-4 dark:text-gray-400">
                      <div className="text-[11px]">
                        <div className='text-[11px] font-semibold'>Sales Amount: <span className="font-normal">{order.salesAmount}</span></div>
                        <div className='text-[11px] font-semibold'>Paid Amount: <span className="font-normal">{order.paidAmount}</span></div>
                        <div className='text-[11px] font-semibold'>Due Amount: <span className="font-normal">{order.dueAmount}</span></div>
                      </div>
                    </td>
                  )}
                  {visibleColumns.deliveryPartner && (
                    <td className="px-4 py-4">
                      <span className="text-[11px] text-teal-600 font-medium">{order.deliveryPartner}</span>
                    </td>
                  )}
                  {visibleColumns.deliveryFee && (
                    <td className="px-4 py-4">
                      <div className="text-[11px]">
                        <div className="font-medium text-gray-900 dark:text-gray-200">{order.deliveryFee}</div>
                        <span className="text-green-600 bg-teal-100 p-1 rounded">{order.priority}</span>
                      </div>
                    </td>
                  )}
                  {visibleColumns.internalNotes && (
                    <td className="px-4 py-4">
                      <button className="w-6 h-6 text-gray-400 hover:text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className='h-4 w-4' viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M8 2.75a.5.5 0 0 0-1 0V7H2.75a.5.5 0 0 0 0 1H7v4.25a.5.5 0 0 0 1 0V8h4.25a.5.5 0 0 0 0-1H8z" clipRule="evenodd"/></svg>
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination would go here */}
      <div className="mx-6 mt-4 pb-6">
        <div className="text-sm text-gray-500 text-center">
          Showing 1 to {sampleOrders.length} of {orderTabs.find(tab => tab.name === activeTab)?.count || 0} entries
        </div>
      </div>
    </div>
  );
};

export default OrderDashboard;