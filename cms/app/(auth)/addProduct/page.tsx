"use client";
import React, { useState } from 'react'

export default function page() {
        const [showAddProduct, setShowAddProduct] = useState(false)
      const [currentStep, setCurrentStep] = useState(1)
      const [currentPage, setCurrentPage] = useState(1)
  return (
    <>
<div className="w-full bg-white dark:bg-gray-900">
          <div className="bg-white dark:bg-gray-900 w-full max-w-lg relative z-10 overflow-y-auto h-full shadow-lg mx-auto">
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
              )  : (
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
    </>
  )
}
