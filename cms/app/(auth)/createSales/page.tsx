"use client";
import React, { useState } from "react";
import {
  Plus,
  Minus,
  Trash2,
  Filter,
  Calendar,
} from "lucide-react";

const CreateSales = () => {
  const [currentView, setCurrentView] = useState("cart"); // 'cart' or 'delivery'
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "কালোজিরার ফুলের মধু | Black seed Honey - 1 KG",
      sku: "17-BSH-500-GM",
      price: 1800.0,
      originalPrice: 1800.0,
      size: "1 KG",
      weight: "5 KG",
      quantity: 1,
      image: "/api/placeholder/60/60",
    },
  ]);

  const products = [
    {
      id: 1,
      name: "কালোজিরার ফুলের মধু | Black seed Honey",
      sku: "17-BSH",
      price: 1800.0,
      size: "1 KG",
      weight: "5 KG",
      image: "/api/placeholder/60/60",
    },
    {
      id: 2,
      name: "কালোজিরার ফুলের মধু | Black seed Honey - 1 KG",
      sku: "17-BSH-500-GM",
      price: 1800.0,
      size: "1 KG",
      weight: "5 KG",
      image: "/api/placeholder/60/60",
    },
    {
      id: 3,
      name: "কালোজিরার ফুলের মধু | Black seed Honey - 500gm",
      sku: "17-BSH-1-KG",
      price: 900.0,
      size: "500gm",
      weight: "1 KG",
      image: "/api/placeholder/60/60",
    },
    {
      id: 4,
      name: "Premium Laccha Semai | প্রিমিয়াম লাচ্ছা সেমাই ( ধীর গতি )",
      sku: "16-LS",
      price: 0,
      size: "",
      weight: "",
      image: "/api/placeholder/60/60",
    },
    {
      id: 5,
      name: "Premium Laccha Semai | প্রিমিয়াম লাচ্ছা সেমাই ( ধীর গতি ) - 500gm",
      sku: "16-LS-500-gm",
      price: 750.0,
      size: "500gm",
      weight: "5 KG",
      image: "/api/placeholder/60/60",
    },
    {
      id: 6,
      name: "Premium Laccha Semai | প্রিমিয়াম লাচ্ছা সেমাই ( ধীর গতি ) - 1 KG",
      sku: "16-LS-1000-gm",
      price: 1400.0,
      size: "1 KG",
      weight: "1 KG",
      image: "/api/placeholder/60/60",
    },
  ];

  const updateQuantity = (id, change) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id:any) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const addToCart = (produc:any) => {
    const existingItem = cartItems.find((item) => item.sku === product.sku);
    if (existingItem) {
      updateQuantity(existingItem.id, 1);
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
          originalPrice: product.price,
        },
      ]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 grid grid-cols-12 dark:bg-gray-900">
      {/* Left Side - Product Selection */}
      <div className="col-span-3 p-5">
        <h1 className="text-xl font-semibold text-gray-800 mb-6 dark:text-gray-200">
          Create Sales Order
        </h1>

        {/* Customer Search */}
        <div className="mb-6 border-2 p-2 bg-gray-100  border-t-red-300 border-l-red-300 border-b-gray-400 border-r-gray-400 dark:bg-gray-800">
            <label htmlFor="tel" className="text-[14px] font-light">search customer</label>
          <input
            type="tel"
            placeholder="Search Customer"
            className="w-full p-3 border border-gray-100 rounded text-sm bg-gray-100 dark:bg-gray-700"
            defaultValue="+880"
          />
        </div>
      </div>
      {/* middle side  */}
      <div className="col-span-5 bg-white p-6 dark:bg-gray-900">
         {/* Product Search */}
        <div className="mb-6 flex items-center gap-4">
          <div className="flex-1 relative p-2 bg-gray-100">
            <label htmlFor="text">Product search</label>
            <input
              type="text"
              placeholder="Search by product name or SKU"
              className="w-full p-3 bg-gray-100 rounded text-sm pr-10"
            />
          </div>
          <button className="p-3 bg-gray-100  rounded py-8 px-6">
            <div className="flex flex-col gap-0.5">
            <Filter className="h-6 w-6"/>
            </div>
          </button>
        </div>
        {/* Product List */}
        <div className="space-y-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-medium text-gray-800 text-sm mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  SKU: <span className="text-teal-600">{product.sku}</span>
                </p>
                {product.price > 0 && (
                  <>
                    <p className="text-sm font-semibold text-gray-800 mb-1">
                      BDT {product.price.toFixed(2)}
                    </p>
                    <p className="text-xs text-gray-500">
                      {product.size && `Size: ${product.size}`}
                      {product.size && product.weight && "    "}
                      {product.weight && `Weight: ${product.weight}`}
                    </p>
                  </>
                )}
              </div>
              <div className="flex flex-col items-end gap-2">
                {product.price > 0 ? (
                  <button
                    onClick={() => addToCart(product)}
                    className="flex items-center gap-1 px-3 py-1.5 bg-teal-600 text-white text-sm rounded hover:bg-teal-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M8 2.75a.5.5 0 0 0-1 0V7H2.75a.5.5 0 0 0 0 1H7v4.25a.5.5 0 0 0 1 0V8h4.25a.5.5 0 0 0 0-1H8z" clipRule="evenodd"/></svg>
                    Add to Cart
                  </button>
                ) : (
                  <span className="text-xs text-gray-500">
                    Check Availability
                  </span>
                )}
                <span className="text-xs text-gray-400">
                  Check Availability ⓘ
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Cart or Delivery */}
      <div className="col-span-4 bg-white border-l border-gray-200 dark:bg-gray-900">
        {currentView === "cart" ? (
          /* Cart View */
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Cart (1)
            </h2>

            {cartItems.map((item) => (
              <div key={item.uid} className="mb-6">
                <div className="flex gap-3 mb-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-800 mb-1">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-600 mb-1">
                      SKU: <span className="text-teal-600">{item.sku}</span>
                    </p>
                    <p className="text-sm font-semibold text-gray-800">
                      BDT {item.price.toFixed(2)}{" "}
                      <span className="text-xs font-normal text-gray-500 line-through">
                        BDT {item.originalPrice.toFixed(2)}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-gray-500">
                    Size: {item.size} Weight: {item.weight}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-xs">
                    <p className="text-gray-600">Unit Price</p>
                    <p className="font-semibold">BDT {item.price.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-green-600">
                      A 1:1 % discount applied
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-red-500">Remove</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded text-gray-600 hover:bg-gray-50"
                    >
                      {/* <Minus className="h-3 w-3" /> */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M2.25 7.5a.5.5 0 0 1 .5-.5h9.5a.5.5 0 0 1 0 1h-9.5a.5.5 0 0 1-.5-.5" clipRule="evenodd"/></svg>
                    </button>
                    <span className="w-8 text-center text-sm">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded text-gray-600 hover:bg-gray-50"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M8 2.75a.5.5 0 0 0-1 0V7H2.75a.5.5 0 0 0 0 1H7v4.25a.5.5 0 0 0 1 0V8h4.25a.5.5 0 0 0 0-1H8z" clipRule="evenodd"/></svg>
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="w-6 h-6 flex items-center justify-center text-red-500 hover:bg-red-50 rounded"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M5.5 1a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM3 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H11v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4h-.5a.5.5 0 0 1-.5-.5M5 4h5v8H5z" clipRule="evenodd"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="border-t border-gray-200 pt-4 mt-6">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold text-gray-800">
                  Total: {subtotal.toFixed(2)}
                </span>
              </div>

              <button
                onClick={() => setCurrentView("delivery")}
                className="w-full bg-teal-600 text-white py-2.5 rounded font-medium hover:bg-teal-700"
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          /* Delivery & Payment View */
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">
              Delivery & Payment
            </h2>

            {/* Delivery Type */}
            <div className="mb-4 bg-gray-100 p-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Delivery Type
              </label>
              <select className="w-full p-3 rounded text-sm bg-gray-100">
                <option>Regular</option>
                <option>Optional</option>
              </select>
            </div>

            {/* Search Customer */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Customer
              </label>
              <input
                type="text"
                className="w-full p-3 border-2 rounded text-sm border-t-red-300 border-l-red-300 border-b-gray-400 border-r-gray-400"
                defaultValue="+880"
              />
            </div>

            {/* Delivery Address */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Delivery Address
              </label>
              <select className="w-full p-3 border border-gray-300 rounded text-sm">
                <option></option>
              </select>
            </div>

            {/* Pick Up Address */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pick Up Address
              </label>
              <p className="text-sm text-gray-600">Healthy Eats</p>
            </div>

            {/* Preferred Delivery Partner */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Delivery Partner
              </label>
              <select className="w-full p-3 border border-gray-300 rounded text-sm">
                <option>RedX</option>
              </select>
            </div>

            {/* Delivery Area */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Delivery Area
              </label>
              <p className="text-sm text-gray-400">Search Area</p>
              <div className="flex gap-2 mt-2">
                <select className="flex-1 p-2 border border-gray-300 rounded text-sm">
                  <option>Division</option>
                </select>
                <select className="flex-1 p-2 border border-gray-300 rounded text-sm">
                  <option>District</option>
                </select>
                <select className="flex-1 p-2 border border-gray-300 rounded text-sm">
                  <option>Area</option>
                </select>
              </div>
            </div>

            {/* Order Source */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Order Source
              </label>
              <select className="w-full p-3 border border-gray-300 rounded text-sm">
                <option>🔵 Other</option>
                <option>🔵 Online</option>
              </select>
            </div>

            {/* Shipping Date */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Shipping Date
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded text-sm pr-10"
                  defaultValue="2025-05-10 15:09:29"
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-3 top-3.5 h-4 w-4 text-gray-400" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M4.5 1a.5.5 0 0 1 .5.5V2h5v-.5a.5.5 0 0 1 1 0V2h1.5A1.5 1.5 0 0 1 14 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 12.5v-9A1.5 1.5 0 0 1 2.5 2H4v-.5a.5.5 0 0 1 .5-.5M10 3v.5a.5.5 0 0 0 1 0V3h1.5a.5.5 0 0 1 .5.5V5H2V3.5a.5.5 0 0 1 .5-.5H4v.5a.5.5 0 0 0 1 0V3zM2 6v6.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V6zm5 1.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M9.5 7a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m1.5.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m.5 1.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M9 9.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M7.5 9a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M5 9.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M3.5 9a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M3 11.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m2.5-.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m1.5.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m2.5-.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1" clipRule="evenodd"/></svg>
              </div>
            </div>

            {/* Order Summary */}
            <div className="border-t border-gray-200 pt-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="text-gray-800">{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-red-500">
                  <span>Discount:</span>
                  <span>- 0.00</span>
                </div>
                <div className="flex justify-between text-blue-500">
                  <span>Delivery Fee</span>
                  <span>0.00</span>
                </div>
                <div className="flex justify-between text-blue-500">
                  <span>Advance Payment</span>
                  <span>0.00</span>
                </div>
                <div className="flex justify-between font-semibold text-gray-800 pt-2 border-t">
                  <span>Total:</span>
                  <span>{subtotal.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setCurrentView("cart")}
                  className="flex-1 border border-gray-300 text-gray-700 py-2.5 rounded font-medium hover:bg-gray-50"
                >
                  Back
                </button>
                <button className="flex-1 bg-teal-600 text-white py-2.5 rounded font-medium hover:bg-teal-700 flex items-center justify-center gap-2">
                  Proceed to Checkout
                  <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateSales;
