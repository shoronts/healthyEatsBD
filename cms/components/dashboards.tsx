"use client";
import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer,
  PieChart, Pie, Cell, Legend, LineChart, Line, Tooltip
} from 'recharts';
import { ChevronDown, Download, RefreshCw, Info, Menu, Bell, User } from 'lucide-react';

// Sample data matching the dashboard
const orderTrendData = [
  { day: 9, orders: 20 },
  { day: 10, orders: 25 },
  { day: 11, orders: 40 },
  { day: 12, orders: 30 },
  { day: 13, orders: 25 },
  { day: 14, orders: 50 },
  { day: 15, orders: 45 },
  { day: 16, orders: 40 },
  { day: 17, orders: 30 },
  { day: 18, orders: 35 },
  { day: 19, orders: 25 },
  { day: 20, orders: 20 },
  { day: 21, orders: 25 },
  { day: 22, orders: 15 },
  { day: 23, orders: 25 },
  { day: 24, orders: 75 },
  { day: 25, orders: 70 },
  { day: 26, orders: 60 },
  { day: 27, orders: 80 },
  { day: 28, orders: 75 },
  { day: 29, orders: 65 },
  { day: 30, orders: 55 },
  { day: 1, orders: 45 },
  { day: 2, orders: 60 },
  { day: 3, orders: 75 },
  { day: 4, orders: 80 },
  { day: 5, orders: 70 },
  { day: 6, orders: 65 },
  { day: 7, orders: 80 },
  { day: 8, orders: 25 },
  { day: 9, orders: 25 },
  { day: 10, orders: 30 }
];

const salesTrendData = [
  { day: 9, sales: 15 },
  { day: 10, sales: 20 },
  { day: 11, sales: 40 },
  { day: 12, sales: 25 },
  { day: 13, sales: 30 },
  { day: 14, sales: 55 },
  { day: 15, sales: 50 },
  { day: 16, sales: 35 },
  { day: 17, sales: 25 },
  { day: 18, sales: 30 },
  { day: 19, sales: 20 },
  { day: 20, sales: 15 },
  { day: 21, sales: 20 },
  { day: 22, sales: 10 },
  { day: 23, sales: 18 },
  { day: 24, sales: 70 },
  { day: 25, sales: 75 },
  { day: 26, sales: 60 },
  { day: 27, sales: 80 },
  { day: 28, sales: 70 },
  { day: 29, sales: 65 },
  { day: 30, sales: 50 },
  { day: 1, sales: 40 },
  { day: 2, sales: 55 },
  { day: 3, sales: 70 },
  { day: 4, sales: 75 },
  { day: 5, sales: 65 },
  { day: 6, sales: 60 },
  { day: 7, sales: 75 },
  { day: 8, sales: 20 },
  { day: 9, sales: 20 },
  { day: 10, sales: 25 }
];

const orderStatusData = [
  { name: 'Pending', value: 58.889, color: '#1e40af' },
  { name: 'Approved', value: 35.556, color: '#10b981' },
  { name: 'Cancelled', value: 5.556, color: '#ef4444' }
];

const locationData = [
  { location: 'Dhaka District', orders: 8, value: 7040 },
  { location: 'Sylhet District', orders: 3, value: 2750 },
  { location: 'Cumilla District', orders: 2, value: 2100 },
  { location: 'Chattogram District', orders: 2, value: 1700 },
  { location: 'ahmadbaria District', orders: 1, value: 1050 },
  { location: 'Khulna District', orders: 1, value: 1000 },
  { location: 'Aymensingh District', orders: 1, value: 1000 },
  { location: 'Noakhali District', orders: 1, value: 1000 },
  { location: 'Rajshahi District', orders: 1, value: 1000 },
  { location: 'Rangpur District', orders: 1, value: 1000 }
];

const topProducts = [
  {
    name: 'Peanut Butter Combo - পিনাট বাটার (কম্বো) - 800gm',
    weight: '8 kg',
    price: 1050,
    quantity: 25,
    total: 26250,
    image: '/api/placeholder/80/80'
  },
  {
    name: 'Chocolate Peanut Butter - চকলেট পিনাট বাটার - 400gm',
    weight: '0.4 kg',
    price: 650,
    quantity: 4,
    total: 2600,
    image: '/api/placeholder/80/80'
  },
  {
    name: 'Peanut Butter - পিনাট বাটার - 400gm',
    weight: '4 kg',
    price: 490,
    quantity: 3,
    total: 1470,
    image: '/api/placeholder/80/80'
  },
  {
    name: 'Peanut Butter - পিনাট বাটার - 800gm',
    weight: '8 kg',
    price: 940,
    quantity: 2,
    total: 1880,
    image: '/api/placeholder/80/80'
  }
];

const paymentData = [
  { type: 'Payment Due', count: 42, value: 41750 },
  { type: 'Payment Collected', count: 0, value: 0 }
];

export default function Dashboard() {
  const [activeFilter, setActiveFilter] = useState('Today');

  const FilterButton = ({ children, active = false }) => (
    <button className={`px-3 py-1.5 text-sm rounded border ${
      active 
        ? 'bg-blue-500 text-white border-blue-500' 
        : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
    }`}>
      {children}
    </button>
  );

  const StatCard = ({ title, value, subtitle }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm border">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
        <Info className="w-4 h-4 text-gray-400" />
      </div>
      <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
      {subtitle && <div className="text-sm text-gray-500">{subtitle}</div>}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Menu className="w-6 h-6 text-gray-600" />
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">H</span>
              </div>
              <span className="text-lg font-semibold text-gray-700">HEALTHY EATS</span>
            </div>
          </div>
          
          <nav className="flex space-x-8">
            <a href="#" className="text-blue-500 font-medium">Dashboard</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Orders</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Bell className="w-5 h-5 text-gray-600" />
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-orange-600" />
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div className="flex">
        <aside className="w-16 bg-white border-r border-gray-200 py-6">
          <div className="flex flex-col items-center space-y-6">
            <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded"></div>
            </div>
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-8 h-8 bg-gray-100 rounded-lg"></div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <div className="flex space-x-2">
              <FilterButton>Master Filter</FilterButton>
              <FilterButton>Warehouse <ChevronDown className="w-4 h-4 ml-1 inline" /></FilterButton>
              <FilterButton active>Today</FilterButton>
            </div>
          </div>

          {/* Orders Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <h2 className="text-lg font-semibold text-gray-900">Orders</h2>
                <RefreshCw className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex space-x-2">
                <FilterButton>Order Status <ChevronDown className="w-4 h-4 ml-1 inline" /></FilterButton>
                <FilterButton active>Today</FilterButton>
              </div>
            </div>
            
            <div className="text-sm text-gray-500 mb-4">May 10, 2025 12:00 AM - May 10, 2025 11:59 PM</div>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <StatCard title="Order Count" value="36" subtitle="Total" />
              <StatCard title="Sales Amount" value="BDT 34,300.00" subtitle="Total" />
            </div>
          </div>

          {/* Trends Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <h2 className="text-lg font-semibold text-gray-900">Trends</h2>
                <RefreshCw className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex space-x-2">
                <FilterButton>By Approved <ChevronDown className="w-4 h-4 ml-1 inline" /></FilterButton>
                <FilterButton active>Daily</FilterButton>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {/* Order Trend */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center space-x-2 mb-4">
                  <h3 className="font-medium text-gray-900">Order Trend</h3>
                  <Info className="w-4 h-4 text-gray-400" />
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={orderTrendData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#666' }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#666' }} />
                      <Bar dataKey="orders" fill="#0891b2" radius={[2, 2, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Sales Trend */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center space-x-2 mb-4">
                  <h3 className="font-medium text-gray-900">Sales Trend</h3>
                  <Info className="w-4 h-4 text-gray-400" />
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={salesTrendData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#666' }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#666' }} />
                      <Bar dataKey="sales" fill="#0891b2" radius={[2, 2, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* Order Workflow Analysis */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <h2 className="text-lg font-semibold text-gray-900">Order Workflow Analysis</h2>
                <Info className="w-4 h-4 text-gray-400" />
                <RefreshCw className="w-4 h-4 text-gray-400" />
              </div>
              <FilterButton active>Today</FilterButton>
            </div>

            <div className="text-sm text-gray-500 mb-4">May 10, 2025 12:00 AM - May 10, 2025 11:59 PM</div>

            <div className="grid grid-cols-2 gap-8">
              {/* Order Status Percentage */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center space-x-2 mb-4">
                  <h3 className="font-medium text-gray-900">Order Status Percentage</h3>
                  <Info className="w-4 h-4 text-gray-400" />
                </div>
                <div className="h-64 flex items-center justify-center">
                  <PieChart width={250} height={250}>
                    <Pie
                      data={orderStatusData}
                      cx={125}
                      cy={125}
                      innerRadius={60}
                      outerRadius={100}
                      dataKey="value"
                    >
                      {orderStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Legend 
                      wrapperStyle={{ fontSize: '12px' }}
                      layout="vertical"
                      align="left"
                      verticalAlign="middle"
                    />
                  </PieChart>
                </div>
              </div>

              {/* Order Cycle Time */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center space-x-2 mb-4">
                  <h3 className="font-medium text-gray-900">Order Cycle Time</h3>
                  <Info className="w-4 h-4 text-gray-400" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Pending</span>
                    <div className="flex-1 mx-4">
                      <div className="bg-yellow-200 h-4 rounded" style={{width: '20%'}}></div>
                    </div>
                    <span className="text-xs text-gray-500">435 hrs</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">On Hold</span>
                    <div className="flex-1 mx-4">
                      <div className="bg-red-200 h-4 rounded" style={{width: '90%'}}></div>
                    </div>
                    <span className="text-xs text-gray-500">1611 hrs</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Approved</span>
                    <div className="flex-1 mx-4">
                      <div className="bg-green-400 h-4 rounded" style={{width: '15%'}}></div>
                    </div>
                    <span className="text-xs text-gray-500">3 hrs</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Processing</span>
                    <div className="flex-1 mx-4">
                      <div className="bg-blue-400 h-4 rounded" style={{width: '85%'}}></div>
                    </div>
                    <span className="text-xs text-gray-500">71.90 hrs</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Shipped</span>
                    <div className="flex-1 mx-4">
                      <div className="bg-teal-400 h-4 rounded" style={{width: '10%'}}></div>
                    </div>
                    <span className="text-xs text-gray-500">37 hrs</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">In Transit</span>
                    <div className="flex-1 mx-4">
                      <div className="bg-amber-600 h-4 rounded" style={{width: '45%'}}></div>
                    </div>
                    <span className="text-xs text-gray-500">42.12 hrs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Source */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <h2 className="text-lg font-semibold text-gray-900">Order Source</h2>
                <Info className="w-4 h-4 text-gray-400" />
                <RefreshCw className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex space-x-2">
                <Download className="w-4 h-4 text-gray-600" />
                <FilterButton>Order Status <ChevronDown className="w-4 h-4 ml-1 inline" /></FilterButton>
                <FilterButton active>Today</FilterButton>
              </div>
            </div>

            <div className="text-sm text-gray-500 mb-4">May 10, 2025 12:00 AM - May 10, 2025 11:59 PM</div>

            <div className="grid grid-cols-2 gap-8">
              {/* Order Count */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center space-x-2 mb-4">
                  <h3 className="font-medium text-gray-900">Order Count</h3>
                  <Info className="w-4 h-4 text-gray-400" />
                </div>
                <div className="h-48 flex items-center justify-center">
                  <PieChart width={200} height={200}>
                    <Pie
                      data={[{ name: 'Website', value: 100 }]}
                      cx={100}
                      cy={100}
                      innerRadius={60}
                      outerRadius={90}
                      fill="#10b981"
                      dataKey="value"
                    />
                  </PieChart>
                </div>
                <div className="text-center mt-2">
                  <span className="text-sm text-gray-600">Website</span>
                </div>
              </div>

              {/* Order Value */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center space-x-2 mb-4">
                  <h3 className="font-medium text-gray-900">Order Value</h3>
                  <Info className="w-4 h-4 text-gray-400" />
                </div>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={[{ name: 'Website', value: 32000 }]}>
                      <XAxis dataKey="name" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} />
                      <Bar dataKey="value" fill="#10b981" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* Cancelled and Returned Orders */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center space-x-2 mb-4">
                <h3 className="font-medium text-gray-900">Cancelled Order</h3>
                <Info className="w-4 h-4 text-gray-400" />
              </div>
              <div className="h-32 flex items-center justify-center">
                <PieChart width={120} height={120}>
                  <Pie
                    data={[{ name: 'Duplicate Order', value: 100 }]}
                    cx={60}
                    cy={60}
                    innerRadius={30}
                    outerRadius={50}
                    fill="#ef4444"
                    dataKey="value"
                  />
                </PieChart>
              </div>
              <div className="text-center">
                <span className="text-sm text-gray-600">Total Order Count: 2</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center space-x-2 mb-4">
                <h3 className="font-medium text-gray-900">Returned Order</h3>
                <Info className="w-4 h-4 text-gray-400" />
              </div>
              <div className="h-32 flex items-center justify-center">
                <div className="text-gray-400 text-center">
                  <div className="text-4xl mb-2">📊</div>
                  <div className="text-sm">No data available</div>
                </div>
              </div>
              <div className="text-center">
                <span className="text-sm text-gray-600">Total Order Count: 0</span>
              </div>
            </div>
          </div>

          {/* Top 10 Locations */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <h2 className="text-lg font-semibold text-gray-900">Top 10 Locations</h2>
                <Info className="w-4 h-4 text-gray-400" />
                <RefreshCw className="w-4 h-4 text-gray-400" />
              </div>
              <FilterButton active>Today</FilterButton>
            </div>

            <div className="text-sm text-gray-500 mb-4">May 10, 2025 12:00 AM - May 10, 2025 11:59 PM</div>

            <div className="grid grid-cols-2 gap-8">
              {/* Order by Top 10 Locations */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-medium text-gray-900">Order by Top 10 Locations</h3>
                    <Info className="w-4 h-4 text-gray-400" />
                  </div>
                  <Download className="w-4 h-4 text-gray-600" />
                </div>
                <div className="space-y-2">
                  {locationData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 flex-1">{item.location}</span>
                      <div className="flex-1 mx-2">
                        <div 
                          className="bg-teal-500 h-4 rounded"
                          style={{ width: `${(item.orders / 8) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium w-8 text-right">{item.orders}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center text-sm text-gray-600">
                  Total Order Count: 21
                </div>
              </div>

              {/* Order Value by Top 10 Locations */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-medium text-gray-900">Order Value by Top 10 Locations</h3>
                    <Info className="w-4 h-4 text-gray-400" />
                  </div>
                  <Download className="w-4 h-4 text-gray-600" />
                </div>
                <div className="space-y-2">
                  {locationData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 flex-1">{item.location}</span>
                      <div className="flex-1 mx-2">
                        <div 
                          className="bg-teal-500 h-4 rounded"
                          style={{ width: `${(item.value / 7040) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-right">BDT {item.value.toLocaleString()}.00</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center text-sm text-gray-600">
                  Total Sales Value: BDT 19,890.00
                </div>
              </div>
            </div>
          </div>
    </div>
    </div>
    </div>)};