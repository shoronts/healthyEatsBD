"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Day 4", value: 0 },
  { day: "Day 5", value: 0 },
  { day: "Day 6", value: 0 },
  { day: "Day 7", value: 0 },
  { day: "Day 8", value: 0 },
  { day: "Day 9", value: 0 },
  { day: "Day 10", value: 0 },
];
import { Maximize2} from "lucide-react";

export default function CustomerDetails() {
  return (
    <div className="bg-white min-h-screen p-3">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-gray-900">Customer Details</h1>
          <div className="flex gap-2">
            <button className="px-4 py-1.5 text-sm text-teal-600 border border-teal-600 rounded hover:bg-teal-50">
              Action
            </button>
            <button className="px-4 py-1.5 text-sm text-white bg-teal-600 rounded hover:bg-teal-700">
              Edit
            </button>
          </div>
        </div>

        {/* Top Section */}
        <div className=" bg-white rounded-md border border-gray-200 mb-6">
          <div className="p-3 grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Customer Basic Info */}
            <div className="flex flex-col p-3 col-span-4">
              <div>
                <h2 className="text-gray-800 font-medium text-lg mb-3">
                  C-4912105
                </h2>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-gray-600">Tag:</span>
                  <span className="bg-yellow-400 text-xs px-2 py-0.5 rounded text-white">
                    New
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-gray-600">Source:</span>
                  <span className="bg-teal-500 text-xs px-2 py-0.5 rounded text-white">
                    Facebook
                  </span>
                </div>
                <p className="text-sm text-gray-700 mb-1">
                  Muhammad Ashikul Alam's
                </p>
                <p className="text-sm text-gray-700 mb-4">+8801831406344</p>

                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600 mb-1">
                      Delivery Success Rate
                    </p>
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        viewBox="0 0 15 15"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M1.85 7.5c0-2.835 2.21-5.65 5.65-5.65c2.778 0 4.152 2.056 4.737 3.15H10.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0v1.813C12.296 3.071 10.666.85 7.5.85C3.437.85.85 4.185.85 7.5s2.587 6.65 6.65 6.65c1.944 0 3.562-.77 4.714-1.942a6.8 6.8 0 0 0 1.428-2.167a.5.5 0 1 0-.925-.38a5.8 5.8 0 0 1-1.216 1.846c-.971.99-2.336 1.643-4.001 1.643c-3.44 0-5.65-2.815-5.65-5.65"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-teal-500 rounded-full"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-teal-500 font-medium">100.00 %</span>
                    <span className="text-teal-500 text-sm font-medium">
                      • Details
                    </span>
                  </div>
                </div>

                <p className="text-xs text-gray-500">
                  Updated at May 10, 2023 3:04 PM by Ashikul Alam
                </p>
              </div>
              {/* Delivery Stats Table */}
              <div>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 px-2 text-left text-gray-600 font-medium">
                        Courier
                      </th>
                      <th className="py-2 px-2 text-center text-gray-600 font-medium">
                        Total
                      </th>
                      <th className="py-2 px-2 text-center text-teal-500 font-medium">
                        Delivered
                      </th>
                      <th className="py-2 px-2 text-center text-red-500 font-medium">
                        Undelivered
                      </th>
                      <th className="py-2 px-2 text-center text-gray-600 font-medium">
                        Confidence
                      </th>
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
            </div>

            {/* Map Section */}
            <div className="col-span-5 relative">
              <div className="rounded-md">
                <div className="p-2 border-b absolute">
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
                <div className="relative h-[300px] w-full">
                   <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.975382796871!2d90.37740361538527!3d23.793466584568825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7c1dcb5ebd1%3A0x813dbe3b99f78e3a!2sDhaka!5e0!3m2!1sen!2sbd!4v1655555555555!5m2!1sen!2sbd"
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="absolute inset-0 w-full h-full border-0"
  ></iframe>
                  <div className="absolute top-2 right-2">
                    <button className="bg-white p-1 rounded shadow">
                      <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-600 h-4 w-4" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M1.85 7.5c0-2.835 2.21-5.65 5.65-5.65c2.778 0 4.152 2.056 4.737 3.15H10.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0v1.813C12.296 3.071 10.666.85 7.5.85C3.437.85.85 4.185.85 7.5s2.587 6.65 6.65 6.65c1.944 0 3.562-.77 4.714-1.942a6.8 6.8 0 0 0 1.428-2.167a.5.5 0 1 0-.925-.38a5.8 5.8 0 0 1-1.216 1.846c-.971.99-2.336 1.643-4.001 1.643c-3.44 0-5.65-2.815-5.65-5.65" clipRule="evenodd"/></svg>
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
            {/* Order Stats Section */}
            <div className="col-span-3">
              <div>
                <div>
                  <div className="bg-white rounded-md">
                    <div className="p-4">
                      <div className="flex items-center gap-2 border p-3 border-gray-100 rounded">
                        <div className=" bg-green-100 p-1 rounded-2xl">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-green-400"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0L6.75 14.25h10.5l1.494-5.607a1.125 1.125 0 00-1.087-1.443H6.72m0 0L5.106 4.272A1.125 1.125 0 003.75 3.75H2.25m4.5 17.25a.75.75 0 100-1.5.75.75 0 000 1.5zm10.5 0a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-[14px] font-semibold">
                            Deleverd Orders
                          </p>
                          <p className="font-semibold text-[20px]">0</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 border p-3 border-gray-100 rounded">
                        <div className="bg-gray-100 p-1 rounded-2xl">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-black"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0L6.75 14.25h10.5l1.494-5.607a1.125 1.125 0 00-1.087-1.443H6.72m0 0L5.106 4.272A1.125 1.125 0 003.75 3.75H2.25m4.5 17.25a.75.75 0 100-1.5.75.75 0 000 1.5zm10.5 0a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-[14px] font-semibold">
                            Returned Orders
                          </p>
                          <p className="font-semibold text-[20px]">0</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 border p-3 border-gray-100 rounded">
                        <div className="bg-red-100 p-1 rounded-2xl">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-red-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0L6.75 14.25h10.5l1.494-5.607a1.125 1.125 0 00-1.087-1.443H6.72m0 0L5.106 4.272A1.125 1.125 0 003.75 3.75H2.25m4.5 17.25a.75.75 0 100-1.5.75.75 0 000 1.5zm10.5 0a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-[14px] font-semibold">
                            {" "}
                            Collected Orders
                          </p>
                          <p className="font-semibold text-[20px]">0</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
            <div className="grid grid-cols-2 gap-6 p-6 bg-white rounded-lg shadow">
              {/* Orders Chart */}
              <div className="bg-white rounded-lg  p-4 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-sm font-semibold text-gray-700">Orders</h2>
                  <div className="flex space-x-2">
                    <button className="text-xs font-medium text-teal-600 border-b-2 border-teal-500">This Week</button>
                    <button className="text-xs font-medium text-gray-400 hover:text-teal-600">This Month</button>
                  </div>
                </div>
                <div className="w-full h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" fontSize={10} />
                      <YAxis fontSize={10} />
                      <Tooltip />
                      <Line type="monotone" dataKey="value" stroke="#00B3B3" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
        
              {/* Sales Chart */}
              <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-sm font-semibold text-gray-700">Sales</h2>
                  <div className="flex space-x-2">
                    <button className="text-xs font-medium text-teal-600 border-b-2 border-teal-500">This Week</button>
                    <button className="text-xs font-medium text-gray-400 hover:text-teal-600">This Month</button>
                  </div>
                </div>
                <div className="w-full h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" fontSize={10} />
                      <YAxis fontSize={10} />
                      <Tooltip />
                      <Line type="monotone" dataKey="value" stroke="#00B3B3" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

        {/* Order History Section */}
        <div className="bg-white rounded-md border border-gray-300">
          <div className="border border-b-gray-300">
            <div className="flex">
              <button className="px-4 py-3 text-sm text-teal-500 border-b-2 border-teal-500 font-medium">
                Order History
              </button>
              <button className="px-4 py-3 text-sm text-gray-500">
                Ordered Products
              </button>
              <button className="px-4 py-3 text-sm text-gray-500">
                SMS Logs
              </button>
              <button className="px-4 py-3 text-sm text-gray-500">Logs</button>
            </div>
          </div>
          <div className="p-6 flex items-center justify-between">
                      <button className="w-8 h-8 flex items-center justify-center text-white bg-teal-500 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M1.903 7.297c0 3.044 2.207 5.118 4.686 5.547a.521.521 0 1 1-.178 1.027C3.5 13.367.861 10.913.861 7.297c0-1.537.699-2.745 1.515-3.663c.585-.658 1.254-1.193 1.792-1.602H2.532a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V2.686l-.001.002c-.572.43-1.27.957-1.875 1.638c-.715.804-1.253 1.776-1.253 2.97m11.108.406c0-3.012-2.16-5.073-4.607-5.533a.521.521 0 1 1 .192-1.024c2.874.54 5.457 2.98 5.457 6.557c0 1.537-.699 2.744-1.515 3.663c-.585.658-1.254 1.193-1.792 1.602h1.636a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 1 1 1 0v1.845h.002c.571-.432 1.27-.958 1.874-1.64c.715-.803 1.253-1.775 1.253-2.97" clipRule="evenodd"/></svg>
            </button>
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 flex items-center justify-center text-gray-400 border rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M8.842 3.135a.5.5 0 0 1 .023.707L5.435 7.5l3.43 3.658a.5.5 0 0 1-.73.684l-3.75-4a.5.5 0 0 1 0-.684l3.75-4a.5.5 0 0 1 .707-.023" clipRule="evenodd"/></svg>
              </button>
              <button className="w-8 h-8 flex items-center justify-center text-white bg-teal-500 border border-teal-500 rounded-full">
                1
              </button>
              <button className="w-8 h-8 flex items-center justify-center text-gray-400 border rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M6.158 3.135a.5.5 0 0 1 .707.023l3.75 4a.5.5 0 0 1 0 .684l-3.75 4a.5.5 0 1 1-.73-.684L9.566 7.5l-3.43-3.658a.5.5 0 0 1 .023-.707" clipRule="evenodd"/></svg>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
