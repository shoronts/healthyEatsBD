"use client"
import Image from "next/image";
import React, { useState } from "react";

const ProductPrice = () => {
    const [showAddProduct, setShowAddProduct] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const inventoryStats = [
    { label: "Total Sku", value: "60" },
    { label: "Total varient", value: "36" },
    { label: "New Sku", value: "0" },
    { label: "Action Sku", value: "56" },
    { label: "Inactive Sku", value: "4" },
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
      status: 'Active',
      images:'https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png',
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
      status:'Active',
      images:'https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png',
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
      status: 'Active',
      images:'https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png',
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
      status: 'Active',
      images:'https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png',
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
      status: 'Active',
      images:'https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png',
    },
    // Add additional rows based on image
  ];

  return (
    <div className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">

    <div className="flex justify-between"> 
      <h1 className="text-3xl font-semibold mb-6">Product & Pricing</h1>

        <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
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
          <button className="px-6 py-1 bg-white dark:bg-gray-900 text-teal-700 dark:text-white font-semibold border border-gray-400 rounded hover:bg-teal-700 hover:text-white">Action</button>
           <button
              className="px-6 py-1 bg-teal-700 dark:bg-teal-700 dark:text-white-700 font-semibold border border-gray-400 rounded hover:bg-teal-700 hover:text-white text-white ml-5"
              onClick={() => setShowAddProduct(true)}
            >
              Add Product
            </button>
        </div>
    </div>
      {/* Add Product Modal */}
      {showAddProduct && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="bg-black bg-opacity-20 absolute inset-0" onClick={() => setShowAddProduct(false)}></div>
          <div className="bg-white dark:bg-gray-800 w-full max-w-md relative z-10 overflow-y-auto h-full shadow-lg">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-800">Add Product</h2>
              <button onClick={() => setShowAddProduct(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5z" clipRule="evenodd"/></svg>
              </button>
            </div>

            <div className="p-6">
              {currentStep === 1 ? (
                <div>
                  <div className="flex mb-6">
                    <div className="flex items-center">
                      <div className="w-7 h-7 rounded-full bg-[#2980b9] text-white flex items-center justify-center text-sm">
                        1
                      </div>
                      <span className="ml-2 text-[#2980b9] font-medium text-sm">Product Details</span>
                    </div>
                    <div className="mx-2 border-t border-gray-300 flex-1 self-center"></div>
                    <div className="flex items-center">
                      <div className="w-7 h-7 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-sm">
                        2
                      </div>
                      <span className="ml-2 text-gray-600 text-sm">Attributes & Variants</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium mb-2 text-gray-700">Product Images</h3>
                      <div className="border border-dashed rounded-md p-6 flex justify-center">
                        <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 flex items-center justify-center rounded">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M8 2.75a.5.5 0 0 0-1 0V7H2.75a.5.5 0 0 0 0 1H7v4.25a.5.5 0 0 0 1 0V8h4.25a.5.5 0 0 0 0-1H8z" clipRule="evenodd"/></svg>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Please upload maximum 6 images. (.png, .jpg or .jpeg. Max size: 1MB/file.)
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-4 text-gray-700">Product Details</h3>

                      <div className="space-y-4">
                        <div>
                          <label className="text-xs text-gray-600 mb-1 block">Product Name</label>
                          <input
                            type="text"
                            className="w-full border border-gray-200 bg-red-50 dark:bg-gray-700 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#3498db] text-sm"
                            placeholder="Product Name"
                          />
                        </div>

                        <div>
                          <label className="text-xs text-gray-600 mb-1 block">Product Summary</label>
                          <textarea
                            className="w-full border border-gray-200 dark:bg-gray-700 rounded-md p-2 h-24 focus:outline-none focus:ring-1 focus:ring-[#3498db] text-sm"
                            placeholder="Product Summary"
                          ></textarea>
                        </div>

                        <div>
                          <label className="text-xs text-gray-600 mb-1 block">Product Category</label>
                          <div className="relative">
                            <select className="w-full border border-gray-200 dark:bg-gray-700 rounded-md p-2 pr-8 appearance-none focus:outline-none focus:ring-1 focus:ring-[#3498db] text-sm">
                              <option value="">Product Category</option>
                            </select>
                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M3.135 6.158a.5.5 0 0 1 .707-.023L7.5 9.565l3.658-3.43a.5.5 0 0 1 .684.73l-4 3.75a.5.5 0 0 1-.684 0l-4-3.75a.5.5 0 0 1-.023-.707"clipRule="evenodd"/></svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-4 text-gray-700">Product Specifications</h3>

                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-xs text-gray-600  mb-1 block">Weight</label>
                            <input
                              type="text"
                              className="w-full border dark:bg-gray-700 border-gray-200 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#3498db] text-sm"
                              placeholder="Enter Weight"
                            />
                          </div>
                          <div>
                            <label className="text-xs text-gray-600 mb-1 block">Unit</label>
                            <div className="relative">
                              <select className="w-full dark:bg-gray-700 border border-gray-200 rounded-md p-2 pr-8 appearance-none focus:outline-none focus:ring-1 focus:ring-[#3498db] text-sm">
                                <option value="kg">Kilograms</option>
                              </select>
                               <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M3.135 6.158a.5.5 0 0 1 .707-.023L7.5 9.565l3.658-3.43a.5.5 0 0 1 .684.73l-4 3.75a.5.5 0 0 1-.684 0l-4-3.75a.5.5 0 0 1-.023-.707"clipRule="evenodd"/></svg>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-xs text-gray-600 mb-1 block">Volume</label>
                            <input
                              type="text"
                              className="w-full border dark:bg-gray-700 border-gray-200 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#3498db] text-sm"
                              placeholder="Enter Volume"
                            />
                          </div>
                          <div>
                            <label className="text-xs text-gray-600 mb-1 block">Unit</label>
                            <div className="relative">
                              <select className="w-full border dark:bg-gray-700 border-gray-200 rounded-md p-2 pr-8 appearance-none focus:outline-none focus:ring-1 focus:ring-[#3498db] text-sm">
                                <option value="litres">Litres</option>
                              </select>
                               <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M3.135 6.158a.5.5 0 0 1 .707-.023L7.5 9.565l3.658-3.43a.5.5 0 0 1 .684.73l-4 3.75a.5.5 0 0 1-.684 0l-4-3.75a.5.5 0 0 1-.023-.707"clipRule="evenodd"/></svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-4 text-gray-700">Prices</h3>

                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center gap-1 mb-1">
                            <label className="text-xs text-gray-600 ">MRP</label>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M7.5.877a6.623 6.623 0 1 0 0 13.246A6.623 6.623 0 0 0 7.5.877M1.827 7.5a5.673 5.673 0 1 1 11.346 0a5.673 5.673 0 0 1-11.346 0m6.423-3a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M6 6h1.5a.5.5 0 0 1 .5.5V10h1v1H6v-1h1V7H6z" clipRule="evenodd"/></svg>
                          </div>
                          <div className="flex items-center border">
                            <span className="text-xs rounded-l-md p-2 bg-gray-50 dark:bg-gray-700">Regular</span>
                            <input
                              type="text"
                              className="w-full  rounded-r-md p-2 focus:outline-none focus:ring-1 focus:ring-[#3498db] text-sm dark:bg-gray-700"
                              placeholder="BDT 0.00"
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center border">
                            <span className="text-xs rounded-l-md p-2 bg-gray-50 dark:bg-gray-700">Sale</span>
                            <input
                              type="text"
                              className="w-full  rounded-r-md p-2 focus:outline-none focus:ring-1 focus:ring-[#3498db] text-sm dark:bg-gray-700"
                              placeholder="BDT 0.00"
                            />
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
                      Continue
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
                      <span className="ml-2 text-gray-600 text-sm">Product Details</span>
                    </div>
                    <div className="mx-2 border-t border-gray-300 flex-1 self-center"></div>
                    <div className="flex items-center">
                      <div className="w-7 h-7 rounded-full bg-[#2980b9] text-white flex items-center justify-center text-sm">
                        2
                      </div>
                      <span className="ml-2 text-[#2980b9] font-medium text-sm">Attributes & Variants</span>
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
                        setShowAddProduct(false)
                        setCurrentStep(1)
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

      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          <button className="text-sm px-4 py-2 bg-teal-100 dark:bg-gray-800 text-blue-700 dark:text-blue-300 font-medium rounded">Stock</button>
          <button className="text-sm px-4 py-2 text-gray-600 dark:text-gray-400">Logs</button>
        </div>
        </div>
             <div className="mt-8 flex justify-between p-3 border-gray-100 border dark:border-gray-800">
              <div className="flex items-center gap-5">
                <button className="bg-gray-50 dark:bg-gray-800 p-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M1.85 7.5c0-2.835 2.21-5.65 5.65-5.65c2.778 0 4.152 2.056 4.737 3.15H10.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0v1.813C12.296 3.071 10.666.85 7.5.85C3.437.85.85 4.185.85 7.5s2.587 6.65 6.65 6.65c1.944 0 3.562-.77 4.714-1.942a6.8 6.8 0 0 0 1.428-2.167a.5.5 0 1 0-.925-.38a5.8 5.8 0 0 1-1.216 1.846c-.971.99-2.336 1.643-4.001 1.643c-3.44 0-5.65-2.815-5.65-5.65" clipRule="evenodd"/></svg></button>
                
                <div>
                  <button className="flex items-center gap-2 border rounded px-3 py-1.5 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M2 4.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5" clipRule="evenodd"/></svg>
              <span>Filter Column</span>
            </button>
                </div>
                <div>
                              <div className="flex items-center gap-2">
              <span className="text-sm">Show</span>
              <button className="border rounded px-2 py-1 flex items-center gap-1 text-sm">
                <span>50</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M3.135 6.158a.5.5 0 0 1 .707-.023L7.5 9.565l3.658-3.43a.5.5 0 0 1 .684.73l-4 3.75a.5.5 0 0 1-.684 0l-4-3.75a.5.5 0 0 1-.023-.707" clipRule="evenodd"/></svg>
              </button>
            </div>
                </div>
              </div>
        <div className="flex items-center space-x-2 text-sm">
          <button className="px-3 py-1 text-gray-500 dark:text-gray-400 border rounded-midium"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M8.818 4.182a.45.45 0 0 1 0 .636L6.136 7.5l2.682 2.682a.45.45 0 1 1-.636.636l-3-3a.45.45 0 0 1 0-.636l3-3a.45.45 0 0 1 .636 0" clipRule="evenodd"/></svg></button>
          <button className="px-3 py-1 text-white dark:text-gray-400 bg-teal-700 dark:bg-gray-800">2</button>
          <button className="px-3 py-1 text-gray-500 dark:text-gray-400 border rounded-midium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M6.182 4.182a.45.45 0 0 1 .636 0l3 3a.45.45 0 0 1 0 .636l-3 3a.45.45 0 1 1-.636-.636L8.864 7.5L6.182 4.818a.45.45 0 0 1 0-.636" clipRule="evenodd"/></svg>
          </button>


          <span className="text-sm">Page</span>
            <input type="text" className="border rounded w-16 px-2 py-1 text-sm dark:bg-gray-800" />
            <button className="px-2 py-1 border rounded text-sm flex items-center gap-2 text-teal-700">Go
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M8.146 3.146a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L11.293 8H2.5a.5.5 0 0 1 0-1h8.793L8.146 3.854a.5.5 0 0 1 0-.708" clipRule="evenodd"/></svg>
            </button>
        </div>
      </div>

      <div className="overflow-x-auto bg-white dark:bg-gray-900 border-gray-50 dark:border-gray-800 shadow">
        <table className="min-w-full table-auto text-sm">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              <th className="ps-2 text-start text-[11px] m-0 p-0">
                    <input type="checkbox" className="rounded h-4 w-4" />
                  </th>
              <th className="px-4 py-3 text-start text-[11px]">SKU</th>
              <th className="px-4 py-3 text-start text-[11px]">Images</th>
              <th className="px-4 py-3 text-start text-[11px]">Name</th>
              <th className="px-4 py-3 text-start text-[11px]">Category</th>
              <th className="px-4 py-3 text-start text-[11px]">Speacifications</th>
              <th className="px-4 py-3 text-start text-[11px]">Attributes</th>
              <th className="px-4 py-3 text-start text-[11px]">MRP</th>
              <th className="px-4 py-3 text-start text-[11px]">Distributor Price</th>
              <th className="px-4 py-3 text-start text-[11px]">Retailer Price</th>
              <th className="px-4 py-3 text-start text-[11px]">Purchase Price</th>
              <th className="px-4 py-3 text-start text-[11px]">Status</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item, idx) => (
              <tr key={idx} className="even:bg-gray-50 odd:bg-white dark:even:bg-gray-800 dark:odd:bg-gray-700">
                <td className="ps-2 text-start text-[10px] m-0 p-0">
                    <input type="checkbox" className="rounded h-4 w-4" />
                  </td>
                <td className="px-4 py-2 text-start text-[10px] text-teal-400">{item.sku}</td>
                <td className="px-4 py-2 text-start text-[10px] ">
                  <Image src={item.images} alt="product" width={60} height={40}></Image>
                </td>

                <td className="px-4 py-2 text-start text-[10px] text-teal-400">{item.name}</td>
                <td className="px-4 py-2 text-start text-[10px] ">{item.totalWarehouses}</td>
                <td className="px-4 py-2 text-start text-[10px] ">{item.available}</td>
                <td className="px-4 py-2 text-start text-[10px] ">{item.processing}</td>
                <td className="px-4 py-2 text-start text-[10px] ">{item.transit}</td>
                <td className="px-4 py-2 text-start text-[10px] ">{item.returning}</td>
                <td className="px-4 py-2 text-start text-[10px]  ">{item.stockValue}</td>
                <td className="px-4 py-2 text-start text-[10px]  ">{item.purchaseCost}</td>
                <td className="px-4 py-2 text-start text-[10px] ">
                  <div className="flex items-center gap-2">
                      <span
                        className={`px-2 py-0.5 rounded-sm text-xs text-white ${
                          item.status === "Active" ? "bg-[#16a085]" : "bg-gray-500"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

 
    </div>
  );
};

export default ProductPrice;
