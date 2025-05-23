import Image from "next/image"
import { Maximize2, RefreshCw, ChevronLeft, ChevronRight } from "lucide-react"

export default function CustomerDetails() {
  return (
    <div className="bg-white min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-gray-900">Customer Details</h1>
          <div className="flex gap-2">
            <button className="px-4 py-1.5 text-sm text-teal-600 border border-teal-600 rounded hover:bg-teal-50">
              Action
            </button>
            <button className="px-4 py-1.5 text-sm text-white bg-teal-600 rounded hover:bg-teal-700">Edit</button>
          </div>
        </div>

        {/* Top Section */}
        <div className="bg-white rounded-md border border-gray-200 mb-6">
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Customer Basic Info */}
            <div>
              <h2 className="text-gray-800 font-medium text-lg mb-3">C-4912105</h2>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-gray-600">Tag:</span>
                <span className="bg-yellow-400 text-xs px-2 py-0.5 rounded text-white">New</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-gray-600">Source:</span>
                <span className="bg-teal-500 text-xs px-2 py-0.5 rounded text-white">Facebook</span>
              </div>
              <p className="text-sm text-gray-700 mb-1">Muhammad Ashikul Alam's</p>
              <p className="text-sm text-gray-700 mb-4">+8801831406344</p>

              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-1">Delivery Success Rate</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                    <RefreshCw className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-teal-500 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                  <span className="text-teal-500 font-medium">100.00 %</span>
                  <span className="text-teal-500 text-sm font-medium">• Details</span>
                </div>
              </div>

              <p className="text-xs text-gray-500">Updated at May 10, 2023 3:04 PM by Ashikul Alam</p>
            </div>

            {/* Delivery Stats Table */}
            <div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 px-2 text-left text-gray-600 font-medium">Courier</th>
                    <th className="py-2 px-2 text-center text-gray-600 font-medium">Total</th>
                    <th className="py-2 px-2 text-center text-teal-500 font-medium">Delivered</th>
                    <th className="py-2 px-2 text-center text-red-500 font-medium">Undelivered</th>
                    <th className="py-2 px-2 text-center text-gray-600 font-medium">Confidence</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b">
                    <td className="py-2 px-2">STEADFAST</td>
                    <td className="py-2 px-2 text-center">6</td>
                    <td className="py-2 px-2 text-center">6</td>
                    <td className="py-2 px-2 text-center">0</td>
                    <td className="py-2 px-2 text-center">100.00 %</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-2">PATHAO</td>
                    <td className="py-2 px-2 text-center">1</td>
                    <td className="py-2 px-2 text-center">1</td>
                    <td className="py-2 px-2 text-center">0</td>
                    <td className="py-2 px-2 text-center">100.00 %</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-2">REDX</td>
                    <td className="py-2 px-2 text-center">0</td>
                    <td className="py-2 px-2 text-center">0</td>
                    <td className="py-2 px-2 text-center">0</td>
                    <td className="py-2 px-2 text-center">0.00 %</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2 font-medium">Total</td>
                    <td className="py-2 px-2 text-center">7</td>
                    <td className="py-2 px-2 text-center">7</td>
                    <td className="py-2 px-2 text-center">0</td>
                    <td className="py-2 px-2 text-center">100.00 %</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Map Section */}
            <div>
              <div className="border border-gray-200 rounded-md">
                <div className="p-2 border-b">
                  <div className="flex items-center justify-center gap-4 max-w-xs mx-auto">
                    <button className="flex items-center justify-center w-1/3 py-1 rounded-full relative">
                      <div className="w-4 h-4 bg-teal-500 rounded-full absolute -top-1 -right-1"></div>
                      <div className="w-4 h-4 bg-teal-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="ml-2 text-sm text-gray-700">Home</span>
                    </button>
                    <button className="flex items-center justify-center w-1/3 py-1 rounded-full">
                      <div className="w-4 h-4 border border-gray-300 rounded-full"></div>
                      <span className="ml-2 text-sm text-gray-500">Work</span>
                    </button>
                    <button className="flex items-center justify-center w-1/3 py-1 rounded-full">
                      <div className="w-4 h-4 border border-gray-300 rounded-full"></div>
                      <span className="ml-2 text-sm text-gray-500">Others</span>
                    </button>
                  </div>
                </div>
                <div className="relative h-[180px]">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-05-20%2001-22-29-jyl4GNDVABvYVj9LRamBkJ0flZiB5C.png"
                    alt="Map showing Chattogram"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <button className="bg-white p-1 rounded shadow">
                      <Maximize2 className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 right-0 text-xs text-gray-600 bg-white p-1 w-full">
                    <div className="flex items-center justify-between">
                      <span>Keyboard shortcuts</span>
                      <span className="mx-2">Map data ©2023</span>
                      <span>Terms</span>
                      <span className="ml-2">Report a map error</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="md:col-span-2">{/* Empty space as in the original design */}</div>
          <div>
            <div className="bg-white rounded-md border border-gray-200">
              <div className="p-4 border-b">
                <div className="flex items-center gap-2">
                  <div className="text-teal-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Delivered Orders</span>
                </div>
                <p className="text-2xl font-medium mt-2">7</p>
              </div>
              <div className="p-4 border-b">
                <div className="flex items-center gap-2">
                  <div className="text-teal-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 14l6-6"></path>
                      <circle cx="14" cy="14" r="2"></circle>
                      <circle cx="10" cy="10" r="2"></circle>
                      <path d="M2 12A10 10 0 1 0 12 2a10 10 0 0 0-10 10z"></path>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Returned Orders</span>
                </div>
                <p className="text-2xl font-medium mt-2">0</p>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <div className="text-teal-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Cancelled Orders</span>
                </div>
                <p className="text-2xl font-medium mt-2">0</p>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Orders Chart */}
          <div className="bg-white rounded-md border border-gray-200">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="font-medium text-gray-700">Orders</h2>
              <div className="flex">
                <button className="px-3 py-1 text-xs text-teal-500 bg-teal-50 rounded-l border border-teal-100">
                  This Week
                </button>
                <button className="px-3 py-1 text-xs text-gray-500 bg-gray-100 rounded-r border border-gray-200 border-l-0">
                  This Month
                </button>
              </div>
            </div>
            <div className="p-4 h-[180px] flex items-end justify-between">
              {[4, 5, 6, 7, 8, 9, 10].map((day) => (
                <div key={day} className="flex flex-col items-center gap-2 w-1/7">
                  <div className="h-32 w-full flex items-end justify-center">
                    <div className="w-8 bg-gray-100 rounded-t" style={{ height: "0%" }}></div>
                  </div>
                  <span className="text-xs text-gray-500">Day {day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sales Chart */}
          <div className="bg-white rounded-md border border-gray-200">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="font-medium text-gray-700">Sales</h2>
              <div className="flex">
                <button className="px-3 py-1 text-xs text-teal-500 bg-teal-50 rounded-l border border-teal-100">
                  This Week
                </button>
                <button className="px-3 py-1 text-xs text-gray-500 bg-gray-100 rounded-r border border-gray-200 border-l-0">
                  This Month
                </button>
              </div>
            </div>
            <div className="p-4 h-[180px] flex items-end justify-between relative">
              <div className="absolute right-8 top-1/3 text-xs text-gray-500">BDT 0.00</div>
              {[4, 5, 6, 7, 8, 9, 10].map((day) => (
                <div key={`sales-${day}`} className="flex flex-col items-center gap-2 w-1/7">
                  <div className="h-32 w-full flex items-end justify-center">
                    <div className="w-8 bg-gray-100 rounded-t" style={{ height: "0%" }}></div>
                  </div>
                  <span className="text-xs text-gray-500">Day {day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order History Section */}
        <div className="bg-white rounded-md border border-gray-200">
          <div className="border-b">
            <div className="flex">
              <button className="px-4 py-3 text-sm text-teal-500 border-b-2 border-teal-500 font-medium">
                Order History
              </button>
              <button className="px-4 py-3 text-sm text-gray-500">Ordered Products</button>
              <button className="px-4 py-3 text-sm text-gray-500">SMS Logs</button>
              <button className="px-4 py-3 text-sm text-gray-500">Logs</button>
            </div>
          </div>
          <div className="p-6 flex items-center justify-between">
            <button className="w-8 h-8 flex items-center justify-center text-gray-400 border rounded-full">
              <RefreshCw className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 flex items-center justify-center text-gray-400 border rounded-full">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center text-white bg-teal-500 border border-teal-500 rounded-full">
                1
              </button>
              <button className="w-8 h-8 flex items-center justify-center text-gray-400 border rounded-full">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <button className="w-8 h-8 flex items-center justify-center text-white bg-teal-500 rounded-full">
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
