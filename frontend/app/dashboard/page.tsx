// pages/dashboard.tsx
import React from "react";

interface Trip {
  id: number;
  tripName: string;
  vehicle: string;
  driverName: string;
  status: "On Trip" | "Idle";
}

const tripsData: Trip[] = [
  { id: 1, tripName: "Trip-1", vehicle: "Truck-123", driverName: "John Doe", status: "On Trip" },
  { id: 2, tripName: "Trip-2", vehicle: "Truck-456", driverName: "Jane Smith", status: "Idle" },
  { id: 3, tripName: "Trip-3", vehicle: "Truck-789", driverName: "Bob Brown", status: "On Trip" },
];

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen font-sans relative">
      {/* Top Right Buttons */}
      <div className="absolute right-6 top-6 flex gap-2">
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition">
          New Trip
        </button>
        <button className="bg-green-600 text-white px-5 py-2 rounded-lg shadow hover:bg-green-700 transition">
          New Vehicle
        </button>
      </div>

      {/* Centered Large Metrics */}
      <div className="flex justify-center gap-10 mt-16">
        <div className="bg-gradient-to-r from-white to-gray-50 p-10 rounded-3xl shadow-md w-64 text-center hover:shadow-xl transition">
          <h2 className="text-gray-500 text-sm uppercase tracking-wide">Active Fleet</h2>
          <p className="text-4xl font-extrabold mt-2 text-gray-800">12</p>
        </div>
        <div className="bg-gradient-to-r from-white to-gray-50 p-10 rounded-3xl shadow-md w-64 text-center hover:shadow-xl transition">
          <h2 className="text-gray-500 text-sm uppercase tracking-wide">Maintenance Alerts</h2>
          <p className="text-4xl font-extrabold mt-2 text-gray-800">3</p>
        </div>
        <div className="bg-gradient-to-r from-white to-gray-50 p-10 rounded-3xl shadow-md w-64 text-center hover:shadow-xl transition">
          <h2 className="text-gray-500 text-sm uppercase tracking-wide">Pending Cargo</h2>
          <p className="text-4xl font-extrabold mt-2 text-gray-800">5</p>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl shadow-lg overflow-x-auto mt-12">
        <table className="min-w-full border border-gray-300 divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-base font-bold text-gray-900 uppercase tracking-wider border-r border-gray-300">
                Trip
              </th>
              <th className="px-6 py-4 text-left text-base font-bold text-gray-900 uppercase tracking-wider border-r border-gray-300">
                Vehicle
              </th>
              <th className="px-6 py-4 text-left text-base font-bold text-gray-900 uppercase tracking-wider border-r border-gray-300">
                Driver Name
              </th>
              <th className="px-6 py-4 text-left text-base font-bold text-gray-900 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tripsData.map((trip) => (
              <tr
                key={trip.id}
                className="border-b border-gray-300 hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300 text-gray-700">
                  {trip.tripName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300 text-gray-700">
                  {trip.vehicle}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300 text-gray-700">
                  {trip.driverName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${
                      trip.status === "On Trip"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {trip.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;