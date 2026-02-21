"use client";

import { useState } from "react";

export default function VehiclesPage() {
  const [open, setOpen] = useState(false);
  const [outOfService, setOutOfService] = useState(false);

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Vehicle Registry (Asset Management)
        </h1>

        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition font-medium shadow-sm"
        >
          + Add Vehicle
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs tracking-wide">
            <tr>
              <th className="p-4 text-left">No</th>
              <th className="p-4 text-left">License</th>
              <th className="p-4 text-left">Model</th>
              <th className="p-4 text-left">Capacity</th>
              <th className="p-4 text-left">Odometer</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t hover:bg-gray-50 transition">
              <td className="p-4">1</td>
              <td className="p-4 font-medium">MH12AB1234</td>
              <td className="p-4">Tata Ace</td>
              <td className="p-4">500 kg</td>
              <td className="p-4">10,000 km</td>
              <td className="p-4">
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                  AVAILABLE
                </span>
              </td>
              <td className="p-4 space-x-3">
                <button className="text-blue-600 hover:underline text-sm">
                  Edit
                </button>
                <button className="text-red-600 hover:underline text-sm">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white w-[500px] p-8 rounded-2xl shadow-xl space-y-6 animate-fadeIn">
            <div>
              <h2 className="text-xl font-semibold">New Vehicle Registration</h2>
              <p className="text-sm text-gray-500 mt-1">
                Enter vehicle details below
              </p>
            </div>

            {/* Form Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="text-sm font-medium text-gray-700">
                  License Plate
                </label>
                <input
                  placeholder="e.g. MH12AB1234"
                  className="mt-1 w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Max Payload (kg)
                </label>
                <input
                  type="number"
                  placeholder="5000"
                  className="mt-1 w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Initial Odometer (km)
                </label>
                <input
                  type="number"
                  placeholder="10000"
                  className="mt-1 w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Type
                </label>
                <select className="mt-1 w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  <option>Select type</option>
                  <option>Mini Truck</option>
                  <option>Trailer</option>
                  <option>Container</option>
                  <option>Heavy Truck</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Model
                </label>
                <input
                  placeholder="e.g. Tata 407"
                  className="mt-1 w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Out of Service Toggle */}
            <div className="flex items-center justify-between pt-4 border-t">
              <span className="text-sm font-medium text-gray-700">
                Mark as Out of Service
              </span>

              <button
                onClick={() => setOutOfService(!outOfService)}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                  outOfService ? "bg-red-500" : "bg-gray-300"
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow transform transition ${
                    outOfService ? "translate-x-6" : ""
                  }`}
                />
              </button>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-6">
              <button
                onClick={() => setOpen(false)}
                className="px-5 py-2 border rounded-lg hover:bg-gray-100 transition"
              >
                Cancel
              </button>

              <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-sm">
                Save Vehicle
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}