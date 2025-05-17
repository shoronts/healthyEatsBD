// import { FaEye } from 'react-icons/fa';
"use client"

import { useState } from "react";

export default function Payment() {
    const [openAccordion, setOpenAccordion] = useState(null);
  
    const toggleAccordion = (id:any) => {
      setOpenAccordion(openAccordion === id ? null : id);
    };
  return (
    <div className="p-6 dark:bg-slate-900 bg-white rounded shadow">
      {/* Active Plan Section */}
      <div className="border border-gray-100 rounded p-10 text-center mb-8 relative">
        <h2 className="text-gray-700 mb-1 text-2xl font-semibold"> <span className="text-teal-700 font-semibold">Active Plan </span> (Basic):<span className="text-teal-700 font-semibold">BDT 1,430.00</span>/Month</h2>
        <p className="text-[18px] font-semibold text-gray-600">Since July 18, 2024</p>
        <p className="text-[18px] font-semibold text-gray-600">Current Billing Cycle: <span className="font-light">April 18, '25 - May 18, '25</span></p>
        <p className="text-[18px] font-semibold text-gray-600">Latest Invoice Status: <span className="text-teal-700 font-semibold">Paid</span></p>
        <button className="mt-4 px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded">Change Plan</button>
        <div className="absolute inset-0 opacity-10 bg-[url('/bg-pattern.svg')] bg-no-repeat bg-center"></div>
      </div>

      {/* Collapsible sections (mock) */}
       <div className="mb-8 rounded">
        <div>
          <button
            onClick={() => toggleAccordion(1)}
            className="w-full flex gap-3 items-center font-medium px-4 py-3 text-gray-700  bg-gray-50 hover:bg-gray-100"
          >
            <span>{openAccordion === 1 ? <svg xmlns="http://www.w3.org/2000/svg" className='h-4 w-6' viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M7.5 2a.5.5 0 0 1 .5.5v8.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 1 1 .708-.708L7 11.293V2.5a.5.5 0 0 1 .5-.5"clipRule="evenodd"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" className='h-4 w-6' viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M8.146 3.146a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L11.293 8H2.5a.5.5 0 0 1 0-1h8.793L8.146 3.854a.5.5 0 0 1 0-.708"clipRule="evenodd"/></svg>}</span>
            SMS Dashboard
          </button>
          {openAccordion === 1 && (
            <div className="px-4 py-3 text-sm text-gray-600 bg-white grid grid-cols-3 gap-3">
              <div className='border border-gray-50 p-5 rounded-md'>
                <p className='text-gray-900 font-medium'>Total sms send </p>
                <p className='flex gap-1 items-center font-bold text-2xl text-gray-950 my-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M12.5 3h-10A1.5 1.5 0 0 0 1 4.5v5A1.5 1.5 0 0 0 2.5 11h5a.5.5 0 0 1 .354.146L10 13.294V11.5a.5.5 0 0 1 .5-.5h2A1.5 1.5 0 0 0 14 9.5v-5A1.5 1.5 0 0 0 12.5 3m-10-1h10A2.5 2.5 0 0 1 15 4.5v5a2.5 2.5 0 0 1-2.5 2.5H11v2.5a.5.5 0 0 1-.854.354L7.293 12H2.5A2.5 2.5 0 0 1 0 9.5v-5A2.5 2.5 0 0 1 2.5 2" clipRule="evenodd"/></svg> 
                    <span>0</span>
                </p>
                <p className='text-gray-900 font-medium'>Available sms :268</p>
              </div>
              <div className='border border-gray-50 p-5 rounded-md'>
                <p className='text-gray-900 font-medium'>Total sms send </p>
                <p className='flex gap-1 items-center font-bold text-2xl text-gray-950 my-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M2 3.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5zm0 7.415A1.5 1.5 0 0 1 1 9.5v-6A1.5 1.5 0 0 1 2.5 2h10A1.5 1.5 0 0 1 14 3.5v6a1.5 1.5 0 0 1-1 1.415v.585a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 11.5zM12 11v.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5V11z" clipRule="evenodd"/></svg>
                    <span>BDT: 0.00</span>
                </p>
                <p className=' font-medium text-cyan-600'>Sms Rate :0.034</p>
              </div>
              <div className='border border-gray-50 p-3'>
                <p className='text-gray-900 font-medium'>Available Balance</p>
                 <p className='flex gap-1 items-center font-bold text-2xl text-gray-950 my-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M2 3.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5zm0 7.415A1.5 1.5 0 0 1 1 9.5v-6A1.5 1.5 0 0 1 2.5 2h10A1.5 1.5 0 0 1 14 3.5v6a1.5 1.5 0 0 1-1 1.415v.585a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 11.5zM12 11v.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5V11z" clipRule="evenodd"/></svg>
                    <span>BDT: 96.60</span>
                </p>
                <p className='font-light text-yellow-500 text-[12px]'>Your Balance is low</p>
                <div className='flex items-center gap-3 my-2'>
                    <input className='bg-gray-200 p-2 rounded-header' type="text" name="balance" id="balance" />
                    <button className='px-12 py-2 rounded-header bg-green-700 text-white font-semibold'>Buy Now</button>
                </div>
                <p className='text-red-600'>Minimum recharge is 100 Taka</p>
              </div>
            </div>
          )}
        </div>

        <div className="my-3">
          <button
            onClick={() => toggleAccordion(2)}
            className="w-full flex gap-3 items-center font-medium px-4 py-3 text-gray-700 bg-gray-50 hover:bg-gray-50"
          >
            <span>{openAccordion === 2 ? <svg xmlns="http://www.w3.org/2000/svg" className='h-4 w-6' viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M7.5 2a.5.5 0 0 1 .5.5v8.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 1 1 .708-.708L7 11.293V2.5a.5.5 0 0 1 .5-.5"clipRule="evenodd"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" className='h-4 w-6' viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M8.146 3.146a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L11.293 8H2.5a.5.5 0 0 1 0-1h8.793L8.146 3.854a.5.5 0 0 1 0-.708"clipRule="evenodd"/></svg> }</span>
            Delivery Success Rate Dashboard
          </button>
          {openAccordion === 2 && (
            <div className="px-4 py-3 text-sm text-gray-600 bg-white grid grid-cols-3 gap-3">
              <div className='border border-gray-50 p-5 rounded-md'>
                <p className='text-gray-900 font-medium'>Total sms send </p>
                <p className='flex gap-1 items-center font-bold text-2xl text-gray-950 my-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M12.5 3h-10A1.5 1.5 0 0 0 1 4.5v5A1.5 1.5 0 0 0 2.5 11h5a.5.5 0 0 1 .354.146L10 13.294V11.5a.5.5 0 0 1 .5-.5h2A1.5 1.5 0 0 0 14 9.5v-5A1.5 1.5 0 0 0 12.5 3m-10-1h10A2.5 2.5 0 0 1 15 4.5v5a2.5 2.5 0 0 1-2.5 2.5H11v2.5a.5.5 0 0 1-.854.354L7.293 12H2.5A2.5 2.5 0 0 1 0 9.5v-5A2.5 2.5 0 0 1 2.5 2" clipRule="evenodd"/></svg> 
                    <span>0</span>
                </p>
                <p className='text-gray-900 font-medium'>Available sms :268</p>
              </div>
              <div className='border border-gray-50 p-5 rounded-md'>
                <p className='text-gray-900 font-medium'>Total sms send </p>
                <p className='flex gap-1 items-center font-bold text-2xl text-gray-950 my-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M2 3.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5zm0 7.415A1.5 1.5 0 0 1 1 9.5v-6A1.5 1.5 0 0 1 2.5 2h10A1.5 1.5 0 0 1 14 3.5v6a1.5 1.5 0 0 1-1 1.415v.585a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 11.5zM12 11v.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5V11z" clipRule="evenodd"/></svg>
                    <span>BDT: 0.00</span>
                </p>
                <p className=' font-medium text-cyan-600'>Sms Rate :0.034</p>
              </div>
              <div className='border border-gray-50 p-3'>
                <p className='text-gray-900 font-medium'>Available Balance</p>
                 <p className='flex gap-1 items-center font-bold text-2xl text-gray-950 my-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M2 3.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5zm0 7.415A1.5 1.5 0 0 1 1 9.5v-6A1.5 1.5 0 0 1 2.5 2h10A1.5 1.5 0 0 1 14 3.5v6a1.5 1.5 0 0 1-1 1.415v.585a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 11.5zM12 11v.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5V11z" clipRule="evenodd"/></svg>
                    <span>BDT: 96.60</span>
                </p>
                
                <div className='flex items-center gap-3 my-2'>
                    <input className='bg-gray-200 p-2 rounded-header' placeholder='100' type="text" name="balance" id="balance" />
                    <button className='px-12 py-2 rounded-header bg-green-700 text-white font-semibold'>Buy Dsr Request</button>
                </div>
                
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Payment History Table */}
      <div className="border border-gray-100 rounded p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <button className="border border-gray-100 rounded px-2 py-1">⟳</button>
            <label>Show</label>
            <select className="border border-gray-100 rounded px-2 py-1">
              <option>50</option>
              <option>100</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-t border-gray-100 text-sm">
            <thead className="dark:bg-slate-900 bg-gray-50">
              <tr>
                <th className="p-2">Payment Date</th>
                <th className="p-2">Payment Cycle</th>
                <th className="p-2">Type</th>
                <th className="p-2">Payment ID</th>
                <th className="p-2">Transaction ID</th>
                <th className="p-2">Bank Name</th>
                <th className="p-2">Amount</th>
                <th className="p-2">Card Type</th>
                <th className="p-2">Card No.</th>
                <th className="p-2">Issuer Bank Country</th>
                <th className="p-2">Invoice Number</th>
                <th className="p-2">Receipt</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-100">
                <td className="p-2">6 May 2025<br /><span className="text-xs">12:36 PM</span></td>
                <td className="p-2">Invalid date to Invalid date</td>
                <td className="p-2">Upsell</td>
                <td className="p-2">ee43da43-e8a1-4407-8c09-95ed4cc8358a</td>
                <td className="p-2">CE63V8J01J</td>
                <td className="p-2">Bkash Mobile Banking</td>
                <td className="p-2">BDT 1,502.00</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2 text-teal-600 cursor-pointer">B6AF9633-0011</td>
                <td className="p-2"></td>
              </tr>
              {/* Example row */}
              <tr className="border-t border-gray-100">
                <td className="p-2">25 April 2025<br /><span className="text-xs">8:34 PM</span></td>
                <td className="p-2">18 Apr, '25 to 18 May, '25</td>
                <td className="p-2">Subscription Renewal</td>
                <td className="p-2">3b31961e-7c86-4090-acf3-2807b1ebf83b</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2">BDT 1,501.50</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2 text-teal-600 cursor-pointer">B6AF9633-0010</td>
                <td className="p-2"></td>
              </tr>
              {/* Repeat more rows as needed */}
              <tr className="border-t border-gray-100">
                <td className="p-2">25 April 2025<br /><span className="text-xs">8:34 PM</span></td>
                <td className="p-2">18 Apr, '25 to 18 May, '25</td>
                <td className="p-2">Subscription Renewal</td>
                <td className="p-2">3b31961e-7c86-4090-acf3-2807b1ebf83b</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2">BDT 1,501.50</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2 text-teal-600 cursor-pointer">B6AF9633-0010</td>
                <td className="p-2"></td>
              </tr>

              <tr className="border-t border-gray-100">
                <td className="p-2">25 April 2025<br /><span className="text-xs">8:34 PM</span></td>
                <td className="p-2">18 Apr, '25 to 18 May, '25</td>
                <td className="p-2">Subscription Renewal</td>
                <td className="p-2">3b31961e-7c86-4090-acf3-2807b1ebf83b</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2">BDT 1,501.50</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2 text-teal-600 cursor-pointer">B6AF9633-0010</td>
                <td className="p-2"></td>
              </tr>

              <tr className="border-t border-gray-100">
                <td className="p-2">25 April 2025<br /><span className="text-xs">8:34 PM</span></td>
                <td className="p-2">18 Apr, '25 to 18 May, '25</td>
                <td className="p-2">Subscription Renewal</td>
                <td className="p-2">3b31961e-7c86-4090-acf3-2807b1ebf83b</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2">BDT 1,501.50</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2 text-teal-600 cursor-pointer">B6AF9633-0010</td>
                <td className="p-2"></td>
              </tr>

              <tr className="border-t border-gray-100">
                <td className="p-2">25 April 2025<br /><span className="text-xs">8:34 PM</span></td>
                <td className="p-2">18 Apr, '25 to 18 May, '25</td>
                <td className="p-2">Subscription Renewal</td>
                <td className="p-2">3b31961e-7c86-4090-acf3-2807b1ebf83b</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2">BDT 1,501.50</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2 text-teal-600 cursor-pointer">B6AF9633-0010</td>
                <td className="p-2"></td>
              </tr>

              <tr className="border-t border-gray-100">
                <td className="p-2">25 April 2025<br /><span className="text-xs">8:34 PM</span></td>
                <td className="p-2">18 Apr, '25 to 18 May, '25</td>
                <td className="p-2">Subscription Renewal</td>
                <td className="p-2">3b31961e-7c86-4090-acf3-2807b1ebf83b</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2">BDT 1,501.50</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2 text-teal-600 cursor-pointer">B6AF9633-0010</td>
                <td className="p-2"></td>
              </tr>


              <tr className="border-t border-gray-100">
                <td className="p-2">25 April 2025<br /><span className="text-xs">8:34 PM</span></td>
                <td className="p-2">18 Apr, '25 to 18 May, '25</td>
                <td className="p-2">Subscription Renewal</td>
                <td className="p-2">3b31961e-7c86-4090-acf3-2807b1ebf83b</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2">BDT 1,501.50</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2 text-teal-600 cursor-pointer">B6AF9633-0010</td>
                <td className="p-2"></td>
              </tr>

              <tr className="border-t border-gray-100">
                <td className="p-2">25 April 2025<br /><span className="text-xs">8:34 PM</span></td>
                <td className="p-2">18 Apr, '25 to 18 May, '25</td>
                <td className="p-2">Subscription Renewal</td>
                <td className="p-2">3b31961e-7c86-4090-acf3-2807b1ebf83b</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2">BDT 1,501.50</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2 text-teal-600 cursor-pointer">B6AF9633-0010</td>
                <td className="p-2"></td>
              </tr>

              <tr className="border-t border-gray-100">
                <td className="p-2">25 April 2025<br /><span className="text-xs">8:34 PM</span></td>
                <td className="p-2">18 Apr, '25 to 18 May, '25</td>
                <td className="p-2">Subscription Renewal</td>
                <td className="p-2">3b31961e-7c86-4090-acf3-2807b1ebf83b</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2">BDT 1,501.50</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2 text-teal-600 cursor-pointer">B6AF9633-0010</td>
                <td className="p-2"></td>
              </tr>

              <tr className="border-t border-gray-100">
                <td className="p-2">25 April 2025<br /><span className="text-xs">8:34 PM</span></td>
                <td className="p-2">18 Apr, '25 to 18 May, '25</td>
                <td className="p-2">Subscription Renewal</td>
                <td className="p-2">3b31961e-7c86-4090-acf3-2807b1ebf83b</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2">BDT 1,501.50</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2 text-teal-600 cursor-pointer">B6AF9633-0010</td>
                <td className="p-2"></td>
              </tr>

              <tr className="border-t border-gray-100">
                <td className="p-2">25 April 2025<br /><span className="text-xs">8:34 PM</span></td>
                <td className="p-2">18 Apr, '25 to 18 May, '25</td>
                <td className="p-2">Subscription Renewal</td>
                <td className="p-2">3b31961e-7c86-4090-acf3-2807b1ebf83b</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2">BDT 1,501.50</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2 text-teal-600 cursor-pointer">B6AF9633-0010</td>
                <td className="p-2"></td>
              </tr>


            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end mt-4 items-center gap-2">
          <button className="border border-gray-100 rounded px-2 py-1">‹</button>
          <button className="border border-gray-100 rounded px-3 py-1 bg-teal-600 text-white">1</button>
          <button className="border border-gray-100 rounded px-2 py-1">›</button>
        </div>
      </div>
    </div>
  );
}
