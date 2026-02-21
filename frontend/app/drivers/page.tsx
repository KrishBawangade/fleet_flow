// components/DriverTable.tsx
import React from "react";

type Driver = {
  name: string;
  license: string;
  expiry: string;
  completionRate: number; // in %
  safetyScore: number;     // in %
  complaints: number;
};

const sampleDrivers: Driver[] = [
  { name: "Rajat Behera", license: "DL1234567", expiry: "22/36", completionRate: 88, safetyScore: 95, complaints: 1 },
  { name: "Anita Sharma", license: "DL7654321", expiry: "11/25", completionRate: 92, safetyScore: 90, complaints: 0 },
  { name: "Vikram Singh", license: "DL2468101", expiry: "05/24", completionRate: 75, safetyScore: 85, complaints: 2 },
];

const DriverTable: React.FC = () => {
  return (
    <div className="overflow-x-auto mt-4 rounded-lg shadow-md bg-white">
      <table className="min-w-full text-center">
        {/* Header with bold horizontal line */}
        <thead>
          <tr className="border-b-4 border-gray-800">
            <th className="px-6 py-4 text-lg font-bold">Name</th>
            <th className="px-6 py-4 text-lg font-bold">License</th>
            <th className="px-6 py-4 text-lg font-bold">Expiry</th>
            <th className="px-6 py-4 text-lg font-bold">Completion Rate</th>
            <th className="px-6 py-4 text-lg font-bold">Safety Score</th>
            <th className="px-6 py-4 text-lg font-bold">Complaints</th>
          </tr>
        </thead>

        <tbody>
          {sampleDrivers.map((driver, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="px-6 py-3">{driver.name}</td>
              <td className="px-6 py-3">{driver.license}</td>
              <td className="px-6 py-3">{driver.expiry}</td>
              <td className="px-6 py-3">{driver.completionRate}%</td>
              <td className="px-6 py-3">{driver.safetyScore}%</td>
              <td className="px-6 py-3">{driver.complaints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DriverTable;