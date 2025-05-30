"use client"

import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Peanut Butter Combo - চিনিযুক্ত মাখন (স্প্রেড) - 500gm",
    weight: "8 kg",
    price: "BDT 1,050.00",
    quantity: 25,
    totalAmount: "BDT 26,250.00",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Chocolate Peanut Butter - চকোলেট চিনিযুক্ত মাখন - 400gm",
    weight: "0.4 kg",
    price: "BDT 650.00",
    quantity: 4,
    totalAmount: "BDT 2,600.00",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Peanut Butter - চিনিযুক্ত মাখন - 400gm",
    weight: "4 kg",
    price: "BDT 490.00",
    quantity: 3,
    totalAmount: "BDT 1,470.00",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "Peanut Butter - চিনিযুক্ত মাখন - 500gm",
    weight: "8 kg",
    price: "BDT 940.00",
    quantity: 2,
    totalAmount: "BDT 1,880.00",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function TopSellingItems() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-900">
          <div className="flex justify-center mb-4">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium">{product.name}</h3>
            <div className="text-xs text-gray-500">Weight: {product.weight}</div>
            <div className="text-xs text-gray-500">Price: {product.price}</div>
            <div className="text-xs text-gray-500">Total Sales Quantity: {product.quantity}</div>
            <div className="text-xs text-gray-500">Total Sales Amount:</div>
            <div className="text-xs font-medium">{product.totalAmount}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
