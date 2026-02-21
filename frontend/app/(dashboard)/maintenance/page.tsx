"use client";

import { useState } from "react";
import { MaintenanceLog } from "@/types/maintenance";

export default function MaintenancePage() {
  const [logs, setLogs] = useState<MaintenanceLog[]>([
    {
      id: 321,
      vehicle: "TATA",
      issue: "Engine Issue",
      date: "20/02",
      cost: "10k",
      status: "New",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    vehicle: "",
    issue: "",
    date: "",
    cost: "",
    status: "New",
  });

  const handleCreate = () => {
    const newLog: MaintenanceLog = {
      id: Date.now(),
      ...formData,
    };

    setLogs([...logs, newLog]);
    setShowForm(false);
    setFormData({
      vehicle: "",
      issue: "",
      date: "",
      cost: "",
      status: "New",
    });
  };

  return (
    <div className="relative min-h-screen bg-gray-50 p-8">

      {/* TABLE SECTION */}
      <div className={`${showForm ? "blur-sm pointer-events-none" : ""}`}>
        <div className="bg-white shadow-md rounded-xl p-6">
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setShowForm(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Create New Service
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-3 border">Log ID</th>
                  <th className="p-3 border">Vehicle</th>
                  <th className="p-3 border">Issue/Service</th>
                  <th className="p-3 border">Date</th>
                  <th className="p-3 border">Cost</th>
                  <th className="p-3 border">Status</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log) => (
                  <tr key={log.id} className="hover:bg-gray-50">
                    <td className="p-3 border">{log.id}</td>
                    <td className="p-3 border">{log.vehicle}</td>
                    <td className="p-3 border">{log.issue}</td>
                    <td className="p-3 border">{log.date}</td>
                    <td className="p-3 border">{log.cost}</td>
                    <td className="p-3 border">{log.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* MODAL FORM */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
          <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-6">
            <h3 className="text-lg font-semibold mb-4">New Service</h3>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Vehicle Name"
                className="w-full border p-2 rounded-md"
                value={formData.vehicle}
                onChange={(e) =>
                  setFormData({ ...formData, vehicle: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="Issue / Service"
                className="w-full border p-2 rounded-md"
                value={formData.issue}
                onChange={(e) =>
                  setFormData({ ...formData, issue: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="Date"
                className="w-full border p-2 rounded-md"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="Cost"
                className="w-full border p-2 rounded-md"
                value={formData.cost}
                onChange={(e) =>
                  setFormData({ ...formData, cost: e.target.value })
                }
              />

              <div className="flex justify-end gap-4 pt-2">
                <button
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 border rounded-md"
                >
                  Cancel
                </button>

                <button
                  onClick={handleCreate}
                  className="px-4 py-2 bg-green-600 text-white rounded-md"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}