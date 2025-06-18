"use client"
import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const dataSample = [
  { month: '8', actual: 400, forecasted: 240 },
  { month: '9', actual: 700, forecasted: 400 },
  { month: '10', actual: 600, forecasted: 300 },
  { month: '11', actual: 500, forecasted: 350 },
  { month: '12', actual: 300, forecasted: 400 },
  { month: '1', actual: 450, forecasted: 500 },
  { month: '2', actual: 900, forecasted: 600 },
  { month: '3', actual: 600, forecasted: 700 },
  { month: '4', actual: 700, forecasted: 900 },
  { month: '5', actual: 800, forecasted: 1200 },
  { month: '6', actual: 0, forecasted: 1400 },
  { month: '7', actual: 0, forecasted: 1600 },
];

const ForeCast = () => {
  const [timeRange, setTimeRange] = useState('Next 3 Months');
  const [frequency, setFrequency] = useState('Monthly');

  const timeOptions = ['Next 3 Months', 'Next 6 Months', 'Next 9 Months', 'Next 12 Months'];
  const frequencyOptions = ['Monthly', 'Weekly', 'Daily'];

  return (
    <div className="p-8 font-sans">
      <h1 className="text-3xl font-semibold mb-2">Forecast</h1>
      <p className="text-sm text-gray-500 mb-6">Forecasting executed an hour ago.</p>

      {/* Order Quantity */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">Order Quantity</h2>
          <div className="flex gap-4">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-1 border rounded shadow-sm text-sm dark:bg-gray-800"
            >
              {timeOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="px-3 py-1 border rounded shadow-sm text-sm dark:bg-gray-800"
            >
              {frequencyOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dataSample}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="actual" fill="#0077b6" name="Actual" />
            <Bar dataKey="forecasted" fill="#48cae4" name="Forecasted" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Sales Amount */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">Sales Amount</h2>
          <div className="flex gap-4">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-1 border rounded shadow-sm text-sm dark:bg-gray-800"
            >
              {timeOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="px-3 py-1 border rounded shadow-sm text-sm dark:bg-gray-800"
            >
              {frequencyOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dataSample}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="actual" fill="#0077b6" name="Actual" />
            <Bar dataKey="forecasted" fill="#48cae4" name="Forecasted" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ForeCast;
