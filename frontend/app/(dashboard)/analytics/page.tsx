"use client";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const fuelData = [
  { month: "Jan", efficiency: 14 },
  { month: "Feb", efficiency: 16 },
  { month: "Mar", efficiency: 13 },
  { month: "Apr", efficiency: 18 },
  { month: "May", efficiency: 20 },
];

const costData = [
  { vehicle: "VAN-01", cost: 120 },
  { vehicle: "TRK-01", cost: 180 },
  { vehicle: "TRK-05", cost: 150 },
  { vehicle: "BUS-02", cost: 200 },
  { vehicle: "CAR-04", cost: 100 },
];

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-[#f9faf8] p-10 space-y-10">

      {/* KPI CARDS */}
      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white border border-green-200 rounded-2xl p-6">
          <p className="text-sm text-gray-500">Total Fuel Cost</p>
          <h2 className="text-2xl font-semibold text-green-600 mt-2">
            ₹2.6L
          </h2>
        </div>

        <div className="bg-white border border-green-200 rounded-2xl p-6">
          <p className="text-sm text-gray-500">Fleet ROI</p>
          <h2 className="text-2xl font-semibold text-green-600 mt-2">
            +12.5%
          </h2>
          <p className="text-xs text-gray-400 mt-2">
            (Revenue − (Maintenance + Fuel)) / Acquisition Cost
          </p>
        </div>

        <div className="bg-white border border-green-200 rounded-2xl p-6">
          <p className="text-sm text-gray-500">Utilization Rate</p>
          <h2 className="text-2xl font-semibold text-green-600 mt-2">
            82%
          </h2>
          <div className="w-full bg-green-100 h-2 rounded-full mt-3">
            <div className="bg-green-500 h-2 rounded-full w-[82%]" />
          </div>
        </div>

      </div>

      {/* CHARTS */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* Fuel Efficiency */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <p className="text-sm font-medium text-gray-600 mb-6">
            Fuel Efficiency Trend (km/L)
          </p>

          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={fuelData}>
              <CartesianGrid stroke="#eef2f0" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="efficiency"
                stroke="#22c55e"
                strokeWidth={2}
                dot={{ r: 4, fill: "#22c55e" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Costliest Vehicles */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <p className="text-sm font-medium text-gray-600 mb-6">
            Top 5 Costliest Vehicles
          </p>

          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={costData}>
              <CartesianGrid stroke="#eef2f0" />
              <XAxis dataKey="vehicle" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Bar
                dataKey="cost"
                fill="#86efac"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* FINANCIAL SUMMARY */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">

        <div className="flex justify-between items-center mb-6">
          <p className="text-sm font-medium text-gray-600">
            Financial Summary of Month
          </p>

          <div className="flex gap-3">
            <button className="px-4 py-2 text-sm border border-green-400 text-green-600 rounded-lg hover:bg-green-50 transition">
              Export CSV
            </button>
            <button className="px-4 py-2 text-sm border border-green-400 text-green-600 rounded-lg hover:bg-green-50 transition">
              Export PDF
            </button>
          </div>
        </div>

        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="py-3 text-left">Month</th>
              <th className="text-left">Revenue</th>
              <th className="text-left">Fuel Cost</th>
              <th className="text-left">Maintenance</th>
              <th className="text-left">Net Profit</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-green-50 transition">
              <td className="py-3">Jan</td>
              <td>₹17L</td>
              <td>₹6L</td>
              <td>₹2L</td>
              <td className="text-green-600 font-medium">₹9L</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* REPORTS SECTION */}
      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-4">
          <p className="text-sm font-medium text-gray-600">
            Payroll & Health Reports
          </p>

          <button className="w-full border border-green-400 text-green-600 py-2 rounded-lg hover:bg-green-50 transition">
            Download Monthly Payroll (CSV)
          </button>

          <button className="w-full border border-green-400 text-green-600 py-2 rounded-lg hover:bg-green-50 transition">
            Download Health Audit (PDF)
          </button>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-4">
          <p className="text-sm font-medium text-gray-600">
            Dead Stock Alerts
          </p>

          <p className="text-sm text-gray-500">
            3 vehicles inactive for more than 30 days.
          </p>

          <button className="w-full border border-red-300 text-red-500 py-2 rounded-lg hover:bg-red-50 transition">
            View Idle Vehicles
          </button>
        </div>

      </div>

    </div>
  );
}