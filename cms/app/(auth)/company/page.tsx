"use client";
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import shopify from '@/app/(auth)/assets/shopify.png';
import magneto from '@/app/(auth)/assets/daraz.jpeg';
import wooCommarce from '@/app/(auth)/assets/woo.jpeg';
export default function Page() {
  const [showApiKey, setShowApiKey] = useState(false);
  const [activeTab, setActiveTab] = useState('General Details');
  const [activeSubTab, setActiveSubTab] = useState('General');
    const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen p-6">
      <div className="max-w-4xl bg-white dark:bg-gray-900 rounded-lg shadow-sm">
        {/* Main Tabs */}

        {/* Sub Tabs */}
        <div className="border-b border-gray-200 bg-gray-50 dark:bg-gray-800 dark:text-gray-200">
          <div className="flex px-6">
            {['General', 'Custom Configuration'].map((subTab) => (
              <button
                key={subTab}
                onClick={() => setActiveSubTab(subTab)}
                className={`px-4 py-3 text-sm font-medium ${
                  activeSubTab === subTab
                    ? 'text-blue-600 border-b-2 border-blue-500  bg-white dark:bg-gray-800 dark:text-gray-200'
                    : 'text-gray-600 hover:text-gray-800 dark:hover:text-gray-300'
                }`}
              >
                {subTab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Company Logo Section */}
          <div>
            <label className="text-[16px] font-medium text-gray-600 mb-4 flex items-center">
              Company Logo 
              <span className="ml-1 text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5' viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M.877 7.5a6.623 6.623 0 1 1 13.246 0a6.623 6.623 0 0 1-13.246 0M7.5 1.827a5.673 5.673 0 1 0 0 11.346a5.673 5.673 0 0 0 0-11.346m.75 8.673a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-2.2-4.25c0-.678.585-1.325 1.45-1.325s1.45.647 1.45 1.325c0 .491-.27.742-.736 1.025l-.176.104a5 5 0 0 0-.564.36c-.242.188-.524.493-.524.961a.55.55 0 0 0 1.1.004a.4.4 0 0 1 .1-.098c.102-.079.215-.144.366-.232q.116-.067.27-.159c.534-.325 1.264-.861 1.264-1.965c0-1.322-1.115-2.425-2.55-2.425S4.95 4.928 4.95 6.25a.55.55 0 0 0 1.1 0" clipRule="evenodd"/></svg></span>
            </label>
            <div className="">
              <div className="w-20 h-20 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                <div className="text-center">
                  <div className="w-12 h-8 mx-auto mb-1 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-xs text-gray-500 font-bold">CREATIVE</span>
                  </div>
                </div>
              </div>
              <div className="my-2">
                <div className="text-xs text-gray-500 mb-1">
                  Formats: .jpeg, .jpg, .png, .svg
                </div>
                <div className="text-xs text-gray-500 my-2">
                  Max Size: 2MB, Resolution: 137px x 75px
                </div>
              </div>
            </div>
          </div>

          {/* Industry Section */}
          <div>
            <label className="flex items-center  text-[16px] font-medium text-gray-600 mb-2 gap-2">
              <span>Industry</span> 
              <span className=" text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5' viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M.877 7.5a6.623 6.623 0 1 1 13.246 0a6.623 6.623 0 0 1-13.246 0M7.5 1.827a5.673 5.673 0 1 0 0 11.346a5.673 5.673 0 0 0 0-11.346m.75 8.673a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-2.2-4.25c0-.678.585-1.325 1.45-1.325s1.45.647 1.45 1.325c0 .491-.27.742-.736 1.025l-.176.104a5 5 0 0 0-.564.36c-.242.188-.524.493-.524.961a.55.55 0 0 0 1.1.004a.4.4 0 0 1 .1-.098c.102-.079.215-.144.366-.232q.116-.067.27-.159c.534-.325 1.264-.861 1.264-1.965c0-1.322-1.115-2.425-2.55-2.425S4.95 4.928 4.95 6.25a.55.55 0 0 0 1.1 0" clipRule="evenodd"/></svg></span>
            </label>
            <div className="relative">
              <select className="w-full px-3 py-3 border border-gray-300 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-500 focus:outline-none">
                <option>E-Commerce</option>
              </select>
            </div>
          </div>

          {/* Industry Type Section */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <span>Industry Type </span>
                           <span className=" text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5' viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M.877 7.5a6.623 6.623 0 1 1 13.246 0a6.623 6.623 0 0 1-13.246 0M7.5 1.827a5.673 5.673 0 1 0 0 11.346a5.673 5.673 0 0 0 0-11.346m.75 8.673a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-2.2-4.25c0-.678.585-1.325 1.45-1.325s1.45.647 1.45 1.325c0 .491-.27.742-.736 1.025l-.176.104a5 5 0 0 0-.564.36c-.242.188-.524.493-.524.961a.55.55 0 0 0 1.1.004a.4.4 0 0 1 .1-.098c.102-.079.215-.144.366-.232q.116-.067.27-.159c.534-.325 1.264-.861 1.264-1.965c0-1.322-1.115-2.425-2.55-2.425S4.95 4.928 4.95 6.25a.55.55 0 0 0 1.1 0" clipRule="evenodd"/></svg></span>
            </label>
            <div className="relative">
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-500 focus:outline-none">
                <option>Food & Beverage</option>
              </select>
            </div>
          </div>

          {/* Integration Section */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Integration</h3>
            
            {/* Company ID */}
            <div className="mb-4">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                Company ID 
                 <span className=" text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5' viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M.877 7.5a6.623 6.623 0 1 1 13.246 0a6.623 6.623 0 0 1-13.246 0M7.5 1.827a5.673 5.673 0 1 0 0 11.346a5.673 5.673 0 0 0 0-11.346m.75 8.673a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-2.2-4.25c0-.678.585-1.325 1.45-1.325s1.45.647 1.45 1.325c0 .491-.27.742-.736 1.025l-.176.104a5 5 0 0 0-.564.36c-.242.188-.524.493-.524.961a.55.55 0 0 0 1.1.004a.4.4 0 0 1 .1-.098c.102-.079.215-.144.366-.232q.116-.067.27-.159c.534-.325 1.264-.861 1.264-1.965c0-1.322-1.115-2.425-2.55-2.425S4.95 4.928 4.95 6.25a.55.55 0 0 0 1.1 0" clipRule="evenodd"/></svg></span>
              </label>
             <p>2b2e4028-5d2c-42ae-b677-25498ecab79</p>
            </div>

            {/* API Key */}
            <div className="my-8">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                API Key 
                 <span className=" text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5' viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M.877 7.5a6.623 6.623 0 1 1 13.246 0a6.623 6.623 0 0 1-13.246 0M7.5 1.827a5.673 5.673 0 1 0 0 11.346a5.673 5.673 0 0 0 0-11.346m.75 8.673a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-2.2-4.25c0-.678.585-1.325 1.45-1.325s1.45.647 1.45 1.325c0 .491-.27.742-.736 1.025l-.176.104a5 5 0 0 0-.564.36c-.242.188-.524.493-.524.961a.55.55 0 0 0 1.1.004a.4.4 0 0 1 .1-.098c.102-.079.215-.144.366-.232q.116-.067.27-.159c.534-.325 1.264-.861 1.264-1.965c0-1.322-1.115-2.425-2.55-2.425S4.95 4.928 4.95 6.25a.55.55 0 0 0 1.1 0" clipRule="evenodd"/></svg></span>
              </label>
              <div className="relative">
                <input
                  type={showApiKey ? "text" : "password"}
                  placeholder="sk-1234567890abcdef1234567890abcdef"
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-700 focus:outline-none"
                />
                <button
                  onClick={() => setShowApiKey(!showApiKey)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showApiKey ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Platform Icons */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center gap-2">
                <Image src={wooCommarce} height={20} width={50} alt='wooCommarce-logo'></Image>
                <span className='text-[12px] font-semibold'>WooCommerce</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src={shopify} height={100} width={100} alt='wooCommarce-logo'></Image>
              </div>
              <div className="flex items-center gap-2">
                <Image src={magneto} height={40} width={60} alt='wooCommarce-logo'></Image>
              </div>
               <div className="flex items-center gap-2">
                {/* <Image src={wooCommarce} height={20} width={50} alt='wooCommarce-logo'></Image> */}
                <span className='text-[12px] font-semibold'>WooCommerce</span>
              </div>
            </div>

            {/* Integration Status */}
            <div>
              <label className="block text-[16px] font-medium text-gray-900 mb-3">
                Integration(s)
              </label>
              
              <div className="border border-gray-200 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Webhook Configuration</span>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      Enabled
                    </span>
                  </div>
                </div>
                
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <span className="text-sm text-blue-600 cursor-pointer hover:text-blue-800">
                    Sync Products
                  </span>
                </div>
              </div>

              {/* Sync Inventory */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-sm text-gray-700">Sync Inventory</span>
                    <span className="ml-1 text-gray-400">ⓘ</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-xs text-gray-500">Disabled</span>
                     <div className="relative inline-block">
      <input
        type="checkbox"
        className="sr-only"
        checked={isOn}
        onChange={toggleSwitch}
      />
      <div
        onClick={toggleSwitch}
        className={`w-10 h-6 rounded-full cursor-pointer transition-colors duration-300 ${
          isOn ? "bg-green-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 transform ${
            isOn ? "translate-x-5" : "translate-x-0.5"
          } translate-y-0.5`}
        ></div>
      </div>
    </div>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Healthy Eats"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-400 placeholder-gray-400"
                />
              </div>

              {/* Delivery URL */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Delivery URL 
                  <span className="ml-1 text-gray-400">ⓘ</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="https://api.support.io/integration/woocommerce/4a228076-b2b3-4866-b0c7-7530d21af508"
                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-700 text-sm"
                  />
                  <button className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Secret */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Secret
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="sk-1234567890abcdef1234567890abcdef"
                    className="w-full px-3 py-2 pr-20 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-700"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center space-x-1 pr-3">
                    <button className="text-gray-400 hover:text-gray-600">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* REST API Configuration */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  REST API Configuration 
                  <span className="ml-1 text-gray-400">ⓘ</span>
                </label>
                
                {/* Wordpress URL */}
                <div className="mb-4">
                  <label className="block text-xs text-gray-600 mb-2">Wordpress URL</label>
                  <input
                    type="text"
                    placeholder="https://healthyeatsbd.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white dark:bg-gray-700 text-gray-700"
                  />
                </div>

                {/* Consumer Key */}
                <div className="mb-4">
                  <label className="block text-xs text-gray-600 mb-2">Consumer Key</label>
                  <input
                    type="text"
                    placeholder="ck_2239c1f537b2c59ee14477261bb59772455c8f49"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-700"
                  />
                </div>

                {/* Consumer Secret */}
                <div className="mb-4">
                  <label className="block text-xs text-gray-600 mb-2">Consumer Secret</label>
                  <input
                    type="text"
                    placeholder="cs_f687b2dc181deff79fd482fea85287cc68119533"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-700"
                  />
                </div>
              </div>

              {/* Poll Interval */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Poll Interval 
                  <span className="ml-1 text-gray-400">ⓘ</span>
                </label>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="poll-orders"
                      checked readOnly
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="poll-orders" className="ml-2 text-sm text-gray-700">
                      Poll Orders
                    </label>
                  </div>
                  <div className="flex items-center space-x-4 ml-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="poll-interval"
                        placeholder="5"
                        checked
                        readOnly
                        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">5 minutes</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="poll-interval"
                        placeholder="10"
                        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">10 minutes</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="poll-interval"
                        placeholder="15"
                        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">15 minutes</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Server Timezone */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Server Timezone (Optional) 
                  <span className="ml-1 text-gray-400">ⓘ</span>
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white dark:bg-gray-700 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Timezone</option>
                </select>
              </div>

              {/* Sync Orders */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Sync Orders 
                  <span className="ml-1 text-gray-400">ⓘ</span>
                </label>
                <span className="text-sm text-blue-600 cursor-pointer hover:text-blue-800">
                  Sync Orders
                </span>
              </div>

              {/* Pick Up Address */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pick Up Address
                </label>
                <input
                  type="text"
                  placeholder="Healthy Eats"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-700"
                />
              </div>

              {/* Bottom Row - Merchant ID and Sync Product Price */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Merchant ID (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Merchant ID (Optional)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-400 dark:bg-gray-700 placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sync Product Price 
                    <span className="ml-1 text-gray-400">ⓘ</span>
                  </label>
                  <div className="relative inline-block">
      <input
        type="checkbox"
        className="sr-only"
        checked={isOn}
        onChange={toggleSwitch}
      />
      <div
        onClick={toggleSwitch}
        className={`w-10 h-6 rounded-full cursor-pointer transition-colors duration-300 ${
          isOn ? "bg-green-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 transform ${
            isOn ? "translate-x-5" : "translate-x-0.5"
          } translate-y-0.5`}
        ></div>
      </div>
    </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-3 mb-6">
                <button className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
                  Remove
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Save
                </button>
              </div>

              {/* Add Another Integration */}
              <div className="mb-8">
                <span className="text-sm text-blue-600 cursor-pointer hover:text-blue-800">
                  Add Another Integration
                </span>
              </div>

              {/* E-Commerce Feature Flags */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-6">E-Commerce Feature Flags</h3>
                
                {/* First Row */}
                <div className="grid grid-cols-3 gap-6 mb-6">
                  {/* Delivery Success Rate */}
                  <div className='border border-gray-200 dark:border-gray-800 p-5'>
                    <div className="flex items-center mb-3">
                      <span className="text-sm font-medium text-gray-700">Delivery Success Rate</span>
                      <span className="ml-1 text-gray-400">ⓘ</span>
                    </div>
                    <div className="mb-3">
                      <span className="text-xs text-gray-600">Enabled</span>
                      <div className="flex items-center mt-1">
                         <div className="relative inline-block">
      <input
        type="checkbox"
        className="sr-only"
        checked={isOn}
        onChange={toggleSwitch}
      />
      <div
        onClick={toggleSwitch}
        className={`w-10 h-6 rounded-full cursor-pointer transition-colors duration-300 ${
          isOn ? "bg-green-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 transform ${
            isOn ? "translate-x-5" : "translate-x-0.5"
          } translate-y-0.5`}
        ></div>
      </div>
    </div>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="delivery-rate"
                          checked readOnly
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">Automatic</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="delivery-rate"
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">Manual</span>
                      </label>
                    </div>
                  </div>

                  {/* Purchase & Vendor */}
                  <div className='border border-gray-200 dark:border-gray-800 p-5'>
                    <div className="flex items-center mb-3">
                      <span className="text-sm font-medium text-gray-700">Purchase & Vendor</span>
                      <span className="ml-1 text-gray-400">ⓘ</span>
                    </div>
                    <div className="mb-3">
                      <span className="text-xs text-gray-600">Disabled</span>
                      <div className="flex items-center mt-1">
                        <div className="relative">
                          <input type="checkbox" className="sr-only" />
                          <div className="w-10 h-6 bg-gray-300 rounded-full cursor-pointer">
                            <div className="w-5 h-5 bg-white rounded-full shadow transform translate-x-0.5 translate-y-0.5"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expenses */}
                  <div className='border border-gray-200 dark:border-gray-800 p-5'>
                    <div className="flex items-center mb-3">
                      <span className="text-sm font-medium text-gray-700">Expenses</span>
                      <span className="ml-1 text-gray-400">ⓘ</span>
                    </div>
                    <div className="mb-3">
                      <span className="text-xs text-gray-600">Disabled</span>
                      <div className="flex items-center mt-1">
                        <div className="relative">
                          <input type="checkbox" className="sr-only" />
                          <div className="w-10 h-6 bg-gray-300 rounded-full cursor-pointer">
                            <div className="w-5 h-5 bg-white rounded-full shadow transform translate-x-0.5 translate-y-0.5"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div></div>
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-4 gap-6 mb-6">
                  {/* Inventory */}
                  <div className='border border-gray-200 dark:border-gray-800 p-5'>
                    <div className="flex items-center mb-3">
                      <span className="text-sm font-medium text-gray-700">Inventory</span>
                      <span className="ml-1 text-gray-400">ⓘ</span>
                    </div>
                    <div className="mb-3">
                      <span className="text-xs text-gray-600">Enabled</span>
                      <div className="flex items-center mt-1">
                         <div className="relative inline-block">
      <input
        type="checkbox"
        className="sr-only"
        checked={isOn}
        onChange={toggleSwitch}
      />
      <div
        onClick={toggleSwitch}
        className={`w-10 h-6 rounded-full cursor-pointer transition-colors duration-300 ${
          isOn ? "bg-green-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 transform ${
            isOn ? "translate-x-5" : "translate-x-0.5"
          } translate-y-0.5`}
        ></div>
      </div>
    </div>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="inventory"
                          checked readOnly
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">Basic</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="inventory"
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">Standard</span>
                      </label>
                    </div>
                  </div>

                  {/* Understocked Inventory */}
                  <div className='border border-gray-200 dark:border-gray-800 p-5'>
                    <div className="flex items-center mb-3">
                      <span className="text-sm font-medium text-gray-700">Understocked Inventory</span>
                      <span className="ml-1 text-gray-400">ⓘ</span>
                    </div>
                    <div className="mb-3">
                      <span className="text-xs text-gray-600">Enabled</span>
                      <div className="flex items-center mt-1">
                         <div className="relative inline-block">
      <input
        type="checkbox"
        className="sr-only"
        checked={isOn}
        onChange={toggleSwitch}
      />
      <div
        onClick={toggleSwitch}
        className={`w-10 h-6 rounded-full cursor-pointer transition-colors duration-300 ${
          isOn ? "bg-green-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 transform ${
            isOn ? "translate-x-5" : "translate-x-0.5"
          } translate-y-0.5`}
        ></div>
      </div>
    </div>
                      </div>
                    </div>
                  </div>

                  {/* Forecast */}
                  <div className='border border-gray-200 dark:border-gray-800 p-5'>
                    <div className="flex items-center mb-3">
                      <span className="text-sm font-medium text-gray-700">Forecast</span>
                      <span className="ml-1 text-gray-400">ⓘ</span>
                    </div>
                    <div className="mb-3">
                      <span className="text-xs text-gray-600">Enabled</span>
                      <div className="flex items-center mt-1">
                         <div className="relative inline-block">
      <input
        type="checkbox"
        className="sr-only"
        checked={isOn}
        onChange={toggleSwitch}
      />
      <div
        onClick={toggleSwitch}
        className={`w-10 h-6 rounded-full cursor-pointer transition-colors duration-300 ${
          isOn ? "bg-green-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 transform ${
            isOn ? "translate-x-5" : "translate-x-0.5"
          } translate-y-0.5`}
        ></div>
      </div>
    </div>
                      </div>
                    </div>
                  </div>

                  {/* Insights */}
                  <div className='border border-gray-200 dark:border-gray-800 p-5'>
                    <div className="flex items-center mb-3">
                      <span className="text-sm font-medium text-gray-700">Insights</span>
                      <span className="ml-1 text-gray-400">ⓘ</span>
                    </div>
                    <div className="mb-3">
                      <span className="text-xs text-gray-600">Disabled</span>
                      <div className="flex items-center mt-1">
                        <div className="relative">
                          <input type="checkbox" className="sr-only" />
                          <div className="w-10 h-6 bg-gray-300 rounded-full cursor-pointer">
                            <div className="w-5 h-5 bg-white rounded-full shadow transform translate-x-0.5 translate-y-0.5"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Status Flows */}
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <span className="text-sm font-medium text-gray-700">Order Status Flows</span>
                    <span className="ml-1 text-gray-400">ⓘ</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="order-flow"
                        checked readOnly
                        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                    </label>
                    <span>Pending</span>
                    <span>→</span>
                    <span>Flagged</span>
                    <span>→</span>
                    <span>Approved</span>
                    <span>→</span>
                    <span>Processing</span>
                    <span>→</span>
                    <span>Shipped</span>
                    <span>→</span>
                    <span>InTransit</span>
                    <span>→</span>
                    <span>Delivered</span>
                    <span>→</span>
                    <span>Cancelled</span>
                  </div>
                </div>

                {/* Customer Notifications */}
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <span className="text-sm font-medium text-gray-700">Customer Notifications</span>
                    <span className="ml-1 text-gray-400">ⓘ</span>
                  </div>
                  <div className="mb-3">
                    <span className="text-xs text-gray-600">Enabled</span>
                    <div className="flex items-center mt-1">
                      <div className="relative">
                        <input type="checkbox" className="sr-only" checked readOnly />
                        <div className="w-10 h-6 bg-blue-500 rounded-full cursor-pointer">
                          <div className="w-5 h-5 bg-white rounded-full shadow transform translate-x-4 translate-y-0.5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-6 gap-4">
                    {[
                      { name: 'Pending', enabled: false },
                      { name: 'Approved', enabled: false },
                      { name: 'Shipped', enabled: false },
                      { name: 'In Transit', enabled: false },
                      { name: 'Delivered', enabled: false },
                      { name: 'Cancelled', enabled: false }
                    ].map((status) => (
                      <div key={status.name} className="text-center">
                        <div className="text-xs text-gray-600 mb-2">{status.name}</div>
                        <div className="flex justify-center">
                          <div className="relative">
                            <input type="checkbox" className="sr-only" />
                            <div className="w-8 h-5 bg-gray-300 rounded-full cursor-pointer">
                              <div className="w-4 h-4 bg-white rounded-full shadow transform translate-x-0.5 translate-y-0.5"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order placeholder Preference */}
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <span className="text-sm font-medium text-gray-700">Order placeholder Preference</span>
                    <span className="ml-1 text-gray-400">ⓘ</span>
                  </div>
                  <div className="flex items-center space-x-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="order-placeholder"
                        checked readOnly
                        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">ORDER placeholder</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="order-placeholder"
                        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">OWING AMOUNT</span>
                    </label>
                  </div>
                </div>

                {/* Hotline */}
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <span className="text-sm font-medium text-gray-700">Hotline</span>
                    <span className="ml-1 text-gray-400">ⓘ</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-xs text-gray-600">Disabled</span>
                    <div className="relative">
                      <input type="checkbox" className="sr-only" />
                      <div className="w-10 h-6 bg-gray-300 rounded-full cursor-pointer">
                        <div className="w-5 h-5 bg-white rounded-full shadow transform translate-x-0.5 translate-y-0.5"></div>
                      </div>
                    </div>
                    <input
                      type="text"
                      placeholder="Hotline Number"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-400 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Upload Data in Bulk */}
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <span className="text-sm font-medium text-gray-700">Upload Data in Bulk</span>
                    <span className="ml-1 text-gray-400">ⓘ</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-xs text-gray-600">Disabled</span>
                    <div className="flex items-center mt-1">
                      <div className="relative">
                        <input type="checkbox" className="sr-only" />
                        <div className="w-10 h-6 bg-gray-300 rounded-full cursor-pointer">
                          <div className="w-5 h-5 bg-white rounded-full shadow transform translate-x-0.5 translate-y-0.5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { name: 'Orders', enabled: false },
                      { name: 'Customers', enabled: false },
                      { name: 'Purchase Orders', enabled: false },
                      { name: 'Vendors', enabled: false }
                    ].map((item) => (
                      <div key={item.name} className="text-center">
                        <div className="text-xs text-gray-600 mb-2">{item.name} <span className="text-gray-400">ⓘ</span></div>
                        <div className="flex justify-center">
                          <div className="relative">
                            <input type="checkbox" className="sr-only" />
                            <div className="w-8 h-5 bg-gray-300 rounded-full cursor-pointer">
                              <div className="w-4 h-4 bg-white rounded-full shadow transform translate-x-0.5 translate-y-0.5"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Document Templates */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-6">Document Templates</h3>
                  
                  {/* Invoice */}
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <span className="text-sm font-medium text-gray-700">Invoice</span>
                      <span className="ml-1 text-gray-400">ⓘ</span>
                    </div>
                    <div className="mb-4">
                      <span className="text-xs text-gray-600">Enabled</span>
                      <div className="flex items-center mt-1">
                         <div className="relative inline-block">
      <input
        type="checkbox"
        className="sr-only"
        checked={isOn}
        onChange={toggleSwitch}
      />
      <div
        onClick={toggleSwitch}
        className={`w-10 h-6 rounded-full cursor-pointer transition-colors duration-300 ${
          isOn ? "bg-green-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 transform ${
            isOn ? "translate-x-5" : "translate-x-0.5"
          } translate-y-0.5`}
        ></div>
      </div>
    </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="invoice-type"
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">General Invoice</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="invoice-type"
                          checked readOnly
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">POS Invoice</span>
                      </label>
                    </div>
                  </div>

                  {/* Invoice Scan */}
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <span className="text-sm font-medium text-gray-700">Invoice Scan</span>
                      <span className="ml-1 text-gray-400">ⓘ</span>
                    </div>
                    <div className="mb-4">
                      <span className="text-xs text-gray-600">Disabled</span>
                      <div className="flex items-center mt-1">
                        <div className="relative">
                          <input type="checkbox" className="sr-only" />
                          <div className="w-10 h-6 bg-gray-300 rounded-full cursor-pointer">
                            <div className="w-5 h-5 bg-white rounded-full shadow transform translate-x-0.5 translate-y-0.5"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-600">
                      OR
                    </div>
                  </div>

                  {/* Invoice ID Initial */}
                  <div>
                    <div className="flex items-center mb-4">
                      <span className="text-sm font-medium text-gray-700">Invoice ID Initial</span>
                      <span className="ml-1 text-gray-400">ⓘ</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <input
                        type="text"
                        placeholder="Invoice ID Initial"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-white dark:bg-gray-700 text-gray-700 placeholder-gray-400"
                      />
                      <span className="text-sm text-gray-500">0 / 5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}