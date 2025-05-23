export default function Inputfield() {
  return (
    <div className="border rounded-md p-4 w-full max-w-md bg-white text-sm shadow-sm">
      {/* Dropdown-style section title */}
      <div className="flex items-center justify-between cursor-pointer border-b pb-2 mb-4">
        <h2 className="text-gray-800 font-medium">Set Delivery Fees</h2>
        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Radio buttons */}
      <div className="flex items-center space-x-6 mb-4">
        <label className="flex items-center space-x-2">
          <input type="radio" name="delivery" className="form-radio text-cyan-600" defaultChecked />
          <span className="text-cyan-600 font-medium">Regular Delivery</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" name="delivery" className="form-radio text-gray-600" />
          <span className="text-gray-700">Express Delivery</span>
        </label>
      </div>

      {/* 2-column layout */}
      <div className="grid grid-cols-2 gap-4">
        {/* Left: Labels */}
        <div className="space-y-4">
          <div className="text-sm font-medium text-cyan-700">INSIDE</div>
          <div className="text-sm font-medium text-cyan-700">OUTSIDE</div>
          <div className="text-sm font-medium text-cyan-700">SUBURB</div>
        </div>

        {/* Right: Price fields */}
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
  );
}
