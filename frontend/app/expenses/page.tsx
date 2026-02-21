"use client";

import { useState } from "react";

export default function ExpensesPage() {
  const [showForm, setShowForm] = useState(false);

  const [expenses, setExpenses] = useState([
    {
      tripId: "321",
      driver: "John",
      distance: "1000 km",
      fuelLiters: 120,
      fuelCost: 19000,
      miscCost: 3000,
      date: "2026-02-20",
      status: "Completed",
    },
  ]);

  const [formData, setFormData] = useState({
    tripId: "",
    driver: "",
    distance: "",
    fuelLiters: "",
    fuelCost: "",
    miscCost: "",
    date: "",
  });

  const totalOperationalCost = (fuel: number, misc: number) => fuel + misc;

  const handleCreate = () => {
    if (!formData.tripId) return;

    setExpenses([
      ...expenses,
      {
        ...formData,
        fuelLiters: Number(formData.fuelLiters),
        fuelCost: Number(formData.fuelCost),
        miscCost: Number(formData.miscCost),
        status: "Completed",
      },
    ]);

    setFormData({
      tripId: "",
      driver: "",
      distance: "",
      fuelLiters: "",
      fuelCost: "",
      miscCost: "",
      date: "",
    });

    setShowForm(false);
  };

  const totalFuel = expenses.reduce((acc, curr) => acc + curr.fuelCost, 0);
  const totalMaintenance = expenses.reduce(
    (acc, curr) => acc + curr.miscCost,
    0
  );
  const totalOperational = totalFuel + totalMaintenance;

  return (
    <div className="min-h-screen bg-gray-50 p-8 relative">

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <p className="text-sm text-gray-500">Total Fuel Cost</p>
          <h2 className="text-2xl font-bold text-blue-600 mt-2">
            ₹{totalFuel}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <p className="text-sm text-gray-500">Total Maintenance</p>
          <h2 className="text-2xl font-bold text-orange-500 mt-2">
            ₹{totalMaintenance}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <p className="text-sm text-gray-500">Total Operational Cost</p>
          <h2 className="text-2xl font-bold text-green-600 mt-2">
            ₹{totalOperational}
          </h2>
        </div>
      </div>

      {/* TABLE SECTION */}
      <div className="bg-white rounded-2xl shadow-sm border p-6">

        <div className="flex justify-between items-center mb-6">
          <input
            placeholder="Search by Trip ID..."
            className="border px-4 py-2 rounded-lg w-72 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition shadow-sm"
          >
            + Add Expense
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b text-gray-600">
                <th className="py-3">Trip ID</th>
                <th>Driver</th>
                <th>Distance</th>
                <th>Fuel (L)</th>
                <th>Fuel Cost</th>
                <th>Maintenance</th>
                <th>Date</th>
                <th>Total Cost</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {expenses.map((exp, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="py-3 font-medium">{exp.tripId}</td>
                  <td>{exp.driver}</td>
                  <td>{exp.distance}</td>
                  <td>{exp.fuelLiters}</td>
                  <td>₹{exp.fuelCost}</td>
                  <td>₹{exp.miscCost}</td>
                  <td>{exp.date}</td>
                  <td className="font-semibold text-blue-600">
                    ₹{totalOperationalCost(exp.fuelCost, exp.miscCost)}
                  </td>
                  <td>
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
                      {exp.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          
          <div
            onClick={() => setShowForm(false)}
            className="absolute inset-0 bg-gray-900/20 backdrop-blur-sm"
          />

          <div className="relative bg-white w-[650px] rounded-2xl shadow-2xl p-8">

            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">
                Add New Expense
              </h2>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-400 hover:text-gray-700 text-xl"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-5">

              <input
                placeholder="Trip ID"
                value={formData.tripId}
                onChange={(e) =>
                  setFormData({ ...formData, tripId: e.target.value })
                }
                className="input-modern"
              />

              <input
                placeholder="Driver"
                value={formData.driver}
                onChange={(e) =>
                  setFormData({ ...formData, driver: e.target.value })
                }
                className="input-modern"
              />

              <input
                placeholder="Distance"
                value={formData.distance}
                onChange={(e) =>
                  setFormData({ ...formData, distance: e.target.value })
                }
                className="input-modern"
              />

              <input
                type="number"
                placeholder="Fuel Liters"
                onChange={(e) =>
                  setFormData({ ...formData, fuelLiters: e.target.value })
                }
                className="input-modern"
              />

              <input
                type="number"
                placeholder="Fuel Cost"
                onChange={(e) =>
                  setFormData({ ...formData, fuelCost: e.target.value })
                }
                className="input-modern"
              />

              <input
                type="number"
                placeholder="Maintenance Cost"
                onChange={(e) =>
                  setFormData({ ...formData, miscCost: e.target.value })
                }
                className="input-modern"
              />

              <input
                type="date"
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="input-modern col-span-2"
              />
            </div>

            <div className="flex justify-end gap-4 mt-8">
              <button
                onClick={() => setShowForm(false)}
                className="px-6 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
              >
                Cancel
              </button>

              <button
                onClick={handleCreate}
                className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition shadow-md"
              >
                Create Expense
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}