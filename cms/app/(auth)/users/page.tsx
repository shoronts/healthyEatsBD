"use client";
import Image from "next/image";
import React, { useState } from "react";

const Users = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const inventoryStats = [
    { label: "Total Partner", value: "3" },
    { label: "Active Partner", value: "3" },
  ];

  const inventoryData = [
    {
      location: "taingail- 37mauya road",
      phone: "+01743-236720",
      name: " Ashrful islam",
      totalWarehouses: 1,
      available: 3282,
      processing: "healthyEats",
      id: "D-1361",
      status: "Active",
    },
    {
      location: "taingail- 37mauya road",
      phone: "+01743-236720",
      name: " Ashrful islam",
      totalWarehouses: 1,
      available: 3282,
      processing: "healthyEats",
      id: "D-1361",
      status: "Active",
    },
    {
      location: "taingail- 37mauya road",
      phone: "+01743-236720",
      name: " Ashrful islam",
      totalWarehouses: 1,
      available: 3282,
      processing: "healthyEats",
      id: "D-1361",
      status: "Active",
    },
    {
      location: "taingail- 37mauya road",
      phone: "+01743-236720",
      name: " Ashrful islam",
      totalWarehouses: 1,
      available: 3282,
      processing: "healthyEats",
      id: "D-1361",
      status: "Active",
    },
    {
      location: "taingail- 37mauya road",
      phone: "+01743-236720",
      name: " Ashrful islam",
      totalWarehouses: 1,
      available: 3282,
      processing: "healthyEats",
      id: "D-1361",
      status: "Active",
    },
    // Add additional rows based on image
  ];

  return (
    <div className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold mb-6">Users</h1>
      </div>

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
          <div className="border border-gray-200 py-1 px-2 rounded">
            <p>Total: <span className="font-semibold">4</span></p>
          </div>
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
              <th className="ps-2 text-start text-[11px] m-0 p-0">Name</th>
              <th className="px-4 py-3 text-start text-[11px]">Email</th>
              <th className="px-4 py-3 text-start text-[11px]">
                Phone Number
              </th>
              <th className="px-4 py-3 text-start text-[11px]">Role</th>
              <th className="px-4 py-3 text-start text-[11px]">Permitoin Group</th>
              <th className="px-4 py-3 text-start text-[11px]">Locations</th>
              <th className="px-4 py-3 text-start text-[11px]">
                Status
              </th>
              <th className="px-4 py-3 text-start text-[11px]">Created At</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item, idx) => (
              <tr
                key={idx}
                className="even:bg-gray-50 odd:bg-white dark:even:bg-gray-800 dark:odd:bg-gray-700"
              >
                <td className="ps-2 text-start text-[10px] m-0 p-0 text-teal-400">
                  {item.id} <br />{" "}
                </td>
                <td className="px-4 py-2 text-start text-[10px] flex items-center gap-2">
                  {/* <Image src="" alt="logo" height={40} width={35}></Image> */}
                  {item.name}
                </td>
                <td className="px-4 py-2 text-start text-[10px]">
                  {item.name}
                </td>
                <td className="px-4 py-2 text-start text-[10px] ">
                  {item.phone}
                </td>
                <td className="px-4 py-2 text-start text-[10px] ">
                  {item.location}
                </td>
                <td className="px-4 py-2 text-start text-[10px] ">
                  {item.available}
                </td>
                <td className="px-4 py-2 text-start text-[10px] text-teal-500 ">
                  {item.processing}
                </td>
                <td className="px-4 py-2 text-start text-[10px] ">
                  <div className="inline-flex items-center bg-[#15838C] text-white text-[10px] font-semibold px-1 py-[1px] rounded-full">
                    <span className="mr-1">Active</span>
                    <span className="h-4 w-4 bg-white rounded-full"></span>
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

export default Users;
