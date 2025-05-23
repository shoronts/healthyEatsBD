"use client";
import Image from "next/image";
import React, { useState } from "react";

const Reports = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const inventoryStats = [
    { label: "Total Partner", value: "3" },
    { label: "Active Partner", value: "3" },
  ];

  const inventoryData = [
    {
      lavel:"Ai-razi complex 2nd floor,Mamun coffee house road-32 Dhaka",
      type:"Billing",
      address:"mirput 1 dhaka",
      internalId:"",
      contactNumber:"",
      phone:"",
      cordinates:"22-25-23805",
      codinate:"91.1903894893",
      usages:"OrderDropOff",
      createdAt:"may-10-2025",
    },
    {
      lavel:"Ai-razi complex 2nd floor,Mamun coffee house road-32 Dhaka",
      type:"Billing",
      address:"mirput 1 dhaka",
      internalId:"",
      contactNumber:"",
      phone:"",
      cordinates:"22-25-23805",
      codinate:"91.1903894893",
      usages:"OrderDropOff",
      createdAt:"may-10-2025",
    },
    {
      lavel:"Ai-razi complex 2nd floor,Mamun coffee house road-32 Dhaka",
      type:"Billing",
      address:"mirput 1 dhaka",
      internalId:"",
      contactNumber:"",
      phone:"",
      cordinates:"22-25-23805",
      codinate:"91.1903894893",
      usages:"OrderDropOff",
      createdAt:"may-10-2025",
    },
    {
      lavel:"Ai-razi complex 2nd floor,Mamun coffee house road-32 Dhaka",
      type:"Billing",
      address:"mirput 1 dhaka",
      internalId:"",
      contactNumber:"",
      phone:"",
      cordinates:"22-25-23805",
      codinate:"91.1903894893",
      usages:"OrderDropOff",
      createdAt:"may-10-2025",
    },
    {
      lavel:"Ai-razi complex 2nd floor,Mamun coffee house road-32 Dhaka",
      type:"Billing",
      address:"mirput 1 dhaka",
      internalId:"",
      contactNumber:"",
      phone:"",
      cordinates:"22-25-23805",
      codinate:"91.1903894893",
      usages:"OrderDropOff",
      createdAt:"may-10-2025",
    },
    // Add additional rows based on image
  ];

  return (
    <div className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold mb-6">Locations</h1>
        <div className="flex items-start gap-3">
          <div className="flex items-center gap-3"></div>
          <div>
            <button
              className="px-6 py-1 bg-teal-700 dark:bg-teal-700 dark:text-white-700 font-semibold border border-gray-400 rounded hover:bg-teal-700 hover:text-white text-white ml-3"
              onClick={() => setShowAddProduct(true)}
            >
              Add Location
            </button>
          </div>
        </div>
      </div>
      {/* Add Product Modal */}
      {showAddProduct && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="bg-black bg-opacity-20 absolute inset-0"
            onClick={() => setShowAddProduct(false)}
          ></div>
          <div className="bg-white dark:bg-gray-800 w-full max-w-md relative z-10 overflow-y-auto h-full shadow-lg">
            <div className="p-4 flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                Add Location
              </h2>
              <button onClick={() => setShowAddProduct(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6">
              {currentStep === 1 ? (
                <div>
                  <div className="flex mb-2">
                    <div className="flex items-center"></div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="space-y-4">
                        <div>
                          <label className="text-xs text-gray-600 mb-1 block">
                            Select Delvery Partner
                          </label>
                          <div className="relative">
                            <select className="w-full border border-gray-200 dark:bg-gray-700 rounded-md p-2 pr-8 appearance-none focus:outline-none focus:ring-1 focus:ring-[#3498db] text-sm">
                              <option value="">Steadfast</option>
                              <option value="">Patho</option>
                              <option value="">RedX</option>
                            </select>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
                              viewBox="0 0 15 15"
                            >
                              <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M3.135 6.158a.5.5 0 0 1 .707-.023L7.5 9.565l3.658-3.43a.5.5 0 0 1 .684.73l-4 3.75a.5.5 0 0 1-.684 0l-4-3.75a.5.5 0 0 1-.023-.707"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>

                        <div>
                          <label className="text-xs text-gray-600 mb-1 block">
                            Select Delvery Partner
                          </label>
                          <div className="relative">
                            <select className="w-full border border-gray-200 dark:bg-gray-700 rounded-md p-2 pr-8 appearance-none focus:outline-none focus:ring-1 focus:ring-[#3498db] text-sm">
                              <option value="">Steadfast</option>
                              <option value="">Patho</option>
                              <option value="">RedX</option>{" "}
                            </select>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none
"
                              viewBox="0 0 15 15"
                            >
                              <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M1.903 7.297c0 3.044 2.207 5.118 4.686 5.547a.521.521 0 1 1-.178 1.027C3.5 13.367.861 10.913.861 7.297c0-1.537.699-2.745 1.515-3.663c.585-.658 1.254-1.193 1.792-1.602H2.532a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V2.686l-.001.002c-.572.43-1.27.957-1.875 1.638c-.715.804-1.253 1.776-1.253 2.97m11.108.406c0-3.012-2.16-5.073-4.607-5.533a.521.521 0 1 1 .192-1.024c2.874.54 5.457 2.98 5.457 6.557c0 1.537-.699 2.744-1.515 3.663c-.585.658-1.254 1.193-1.792 1.602h1.636a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 1 1 1 0v1.845h.002c.571-.432 1.27-.958 1.874-1.64c.715-.803 1.253-1.775 1.253-2.97"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>

                        <div>
                          <label className="text-xs text-gray-600 mb-1 block">
                            Parter Name
                          </label>
                          <input
                            type="phone"
                            className="w-full border border-gray-200 bg-red-50 dark:bg-gray-700 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#3498db] text-sm"
                            placeholder="name"
                          />
                        </div>

                        <div>
                          <label className="text-xs text-gray-600 mb-1 block">
                            Contact person
                          </label>
                          <input
                            type="text"
                            className="w-full border border-gray-200 bg-red-50 dark:bg-gray-700 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#3498db] text-sm"
                            placeholder=""
                          />
                        </div>
                        <div className="dark:bg-gray-800 bg-gray-100 p-2">
                          <label className="text-xs text-gray-600 mb-1 block">
                            Phone Number
                          </label>

                          <div className="flex items-center dark:bg-gray-800 bg-gray-100 px-2 py-2 dark:border border-gray-300">
                            {/* Country Code Select */}
                            <select className="bg-transparent text-gray-800 border-r border-gray-300 outline-none">
                              <option>🇧🇩</option>
                              <option>🇮🇳</option>
                              <option>🇺🇸</option>
                              <option>🇬🇧</option>
                            </select>

                            {/* Phone Number Input */}
                            <input
                              type="tel"
                              placeholder="Enter number"
                              className="flex-1 outline-none bg-transparent pl-2 text-gray-700"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-xs text-gray-600 mb-1 block">
                            Select Warehouse
                          </label>
                          <div className="relative">
                            <select className="w-full border border-gray-200 dark:bg-gray-700 rounded-md p-2 pr-8 appearance-none focus:outline-none focus:ring-1 focus:ring-[#3498db] text-sm">
                              <option value="">Dhaka</option>
                              <option value="">Mymensing</option>
                              <option value="">Rongpur</option>{" "}
                            </select>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 pw-4 h-4 text-gray-500 pointer-events-none"
                              viewBox="0 0 15 15"
                            >
                              <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M10 6.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-.691 3.516a4.5 4.5 0 1 1 .707-.707l2.838 2.837a.5.5 0 0 1-.708.708z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="border border-gray-700 rounded-md p-4 w-full max-w-md dark:bg-gray-800 bg-white text-sm shadow-sm">
                          <div className="flex items-center justify-between cursor-pointer border-b pb-2 mb-4">
                            <h2 className="text-gray-800 font-medium">
                              Set Delivery Fees
                            </h2>
                            <svg
                              className="w-4 h-4 text-gray-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>

                          <div className="flex items-center space-x-6 mb-4">
                            <label className="flex items-center space-x-2">
                              <input
                                type="radio"
                                name="delivery"
                                className="form-radio text-cyan-600"
                                defaultChecked
                              />
                              <span className="text-cyan-600 font-medium">
                                Regular Delivery
                              </span>
                            </label>
                            <label className="flex items-center space-x-2">
                              <input
                                type="radio"
                                name="delivery"
                                className="form-radio text-gray-600"
                              />
                              <span className="text-gray-700">
                                Express Delivery
                              </span>
                            </label>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                              <div className="text-sm font-medium text-cyan-700">
                                INSIDE
                              </div>
                              <div className="text-sm font-medium text-cyan-700">
                                OUTSIDE
                              </div>
                              <div className="text-sm font-medium text-cyan-700">
                                SUBURB
                              </div>
                            </div>

                            <div className="space-y-4">
                              <input
                                type="text"
                                value="BDT 50.00"
                                readOnly
                                className="w-full px-3 py-2 border bg-gray-100 text-gray-800 rounded"
                              />
                              <input
                                type="text"
                                value="BDT 100.00"
                                readOnly
                                className="w-full px-3 py-2 border bg-gray-100 text-gray-800 rounded"
                              />
                              <input
                                type="text"
                                value="BDT 70.00"
                                readOnly
                                className="w-full px-3 py-2 border bg-gray-100 text-gray-800 rounded"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end gap-2">
                    <button
                      className="px-4 py-2 border border-[#2980b9] text-[#2980b9] rounded text-sm"
                      onClick={() => setShowAddProduct(false)}
                    >
                      Clear
                    </button>
                    <button
                      className="px-4 py-2 bg-[#2980b9] text-white rounded text-sm"
                      onClick={() => setCurrentStep(2)}
                    >
                      Save
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex mb-6">
                    <div className="flex items-center">
                      <div className="w-7 h-7 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-sm">
                        1
                      </div>
                      <span className="ml-2 text-gray-600 text-sm">
                        Product Details
                      </span>
                    </div>
                    <div className="mx-2 border-t border-gray-300 flex-1 self-center"></div>
                    <div className="flex items-center">
                      <div className="w-7 h-7 rounded-full bg-[#2980b9] text-white flex items-center justify-center text-sm">
                        2
                      </div>
                      <span className="ml-2 text-[#2980b9] font-medium text-sm">
                        Attributes & Variants
                      </span>
                    </div>
                  </div>

                  {/* Attributes & Variants content would go here */}
                  <div className="h-96 flex items-center justify-center text-gray-500">
                    Attributes & Variants form would be here
                  </div>

                  <div className="mt-8 flex justify-end gap-2">
                    <button
                      className="px-4 py-2 border border-[#2980b9] text-[#2980b9] rounded text-sm"
                      onClick={() => setCurrentStep(1)}
                    >
                      Back
                    </button>
                    <button
                      className="px-4 py-2 bg-[#2980b9] text-white rounded text-sm"
                      onClick={() => {
                        setShowAddProduct(false);
                        setCurrentStep(1);
                      }}
                    >
                      Create
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {/* end product modal  */}

      <div className="mt-8 flex justify-between p-3 border-gray-100 border dark:border-gray-800">
        <div className="flex items-center gap-5">
          <button className="bg-gray-50 dark:bg-gray-800 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 15 15"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M1.85 7.5c0-2.835 2.21-5.65 5.65-5.65c2.778 0 4.152 2.056 4.737 3.15H10.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0v1.813C12.296 3.071 10.666.85 7.5.85C3.437.85.85 4.185.85 7.5s2.587 6.65 6.65 6.65c1.944 0 3.562-.77 4.714-1.942a6.8 6.8 0 0 0 1.428-2.167a.5.5 0 1 0-.925-.38a5.8 5.8 0 0 1-1.216 1.846c-.971.99-2.336 1.643-4.001 1.643c-3.44 0-5.65-2.815-5.65-5.65"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center space-x-1 text-sm">
          <button className="px-2 text-gray-500 dark:text-gray-400 rounded-midium ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5  border-gray-500 border dark:text-white text-gray-800"
              viewBox="0 0 15 15"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M8.818 4.182a.45.45 0 0 1 0 .636L6.136 7.5l2.682 2.682a.45.45 0 1 1-.636.636l-3-3a.45.45 0 0 1 0-.636l3-3a.45.45 0 0 1 .636 0"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="px-2 dark:text-gray-400 bg-gray-100 text-gray-800 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
            1
          </button>
          <button className="px-2 text-gray-500 dark:text-gray-400 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 border dark:text-white text-gray-800 border-gray-500"
              viewBox="0 0 15 15"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M6.182 4.182a.45.45 0 0 1 .636 0l3 3a.45.45 0 0 1 0 .636l-3 3a.45.45 0 1 1-.636-.636L8.864 7.5L6.182 4.818a.45.45 0 0 1 0-.636"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto bg-white dark:bg-gray-900 border-gray-50 dark:border-gray-800 shadow">
        <table className="min-w-full table-auto text-sm">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              <th className="ps-2 text-start text-[11px] m-0 p-0">Report ID</th>
              <th className="px-4 py-3 text-start text-[11px]">Report Type</th>
              <th className="px-4 py-3 text-start text-[11px]">
                Created BY
              </th>
              <th className="px-4 py-3 text-start text-[11px]">Creation Date & Time</th>
              <th className="px-4 py-3 text-start text-[11px]">Action</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item, idx) => (
              <tr
                key={idx}
                className="even:bg-gray-50 odd:bg-white dark:even:bg-gray-800 dark:odd:bg-gray-700"
              >
                <td className="px-4 py-2 text-start text-[10px] flex items-center gap-2 text-teal-500">
                  {/* <Image src="" alt="logo" height={40} width={35}></Image> */}
                  {item.type}
                </td>
                <td className="px-4 py-2 text-start text-[10px]">
                  <div className="flex items-center gap-1">
                    <span>{item.address}</span>
                  <span><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M7.5.877a6.623 6.623 0 1 0 0 13.246A6.623 6.623 0 0 0 7.5.877M1.827 7.5a5.673 5.673 0 1 1 11.346 0a5.673 5.673 0 0 1-11.346 0m6.423-3a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M6 6h1.5a.5.5 0 0 1 .5.5V10h1v1H6v-1h1V7H6z" clipRule="evenodd"/></svg></span>
                  </div>
                </td>
                <td className="px-4 py-2 text-start text-[10px] ">
                  {item.internalId}
                </td>
                <td className="px-4 py-2 text-start text-[10px] ">
                  {item.contactNumber}
                </td>
                <td className="px-4 py-2 text-start text-[10px] ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 border text-teal-500" viewBox="0 0 15 15"><path fill="currentColor" d="M4 6h7l-3.5 4.5z"/></svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
