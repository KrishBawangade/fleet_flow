"use client";

import { MaintenanceLog } from "@/types/maintenance";
import StatusBadge from "@/components/status-pill/StatusBadge";

interface Props {
  logs: MaintenanceLog[];
  onCreateClick: () => void;
}

export default function MaintenanceTable({ logs, onCreateClick }: Props) {
  return (
    <div className="flex-1 bg-white p-6 border rounded-xl shadow-sm">
      <div className="flex justify-between mb-4">
        <input
          placeholder="Search bar..."
          className="border p-2 rounded w-1/2"
        />

        <div className="space-x-2">
          <button className="border px-3 py-1 rounded">Group by</button>
          <button className="border px-3 py-1 rounded">Filter</button>
          <button className="border px-3 py-1 rounded">Sort by...</button>
        </div>
      </div>

      <button
        onClick={onCreateClick}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 float-right"
      >
        Create New Service
      </button>

      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b text-left">
            <th className="py-2">Log ID</th>
            <th>Vehicle</th>
            <th>Issue/Service</th>
            <th>Date</th>
            <th>Cost</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {logs.map((log) => (
            <tr key={log.id} className="border-b">
              <td className="py-2">{log.id}</td>
              <td>{log.vehicle}</td>
              <td>{log.issue}</td>
              <td>{log.date}</td>
              <td>{log.cost}</td>
              <td>
                <StatusBadge status={log.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}