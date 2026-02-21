"use client";

import { useState } from "react";
import { MaintenanceLog } from "@/types/maintenance";

interface Props {
  onCreate: (log: MaintenanceLog) => void;
  onCancel: () => void;
}

export default function MaintenanceForm({ onCreate, onCancel }: Props) {
  const [vehicle, setVehicle] = useState("");
  const [issue, setIssue] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    const newLog: MaintenanceLog = {
      id: Math.floor(Math.random() * 1000),
      vehicle,
      issue,
      date,
      cost: "0",
      status: "New",
    };

    onCreate(newLog);
  };

  return (
    <div className="w-80 p-6 bg-white border rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold mb-4">New Service</h3>

      <input
        placeholder="Vehicle Name"
        className="w-full border p-2 mb-3 rounded"
        value={vehicle}
        onChange={(e) => setVehicle(e.target.value)}
      />

      <input
        placeholder="Issue/Service"
        className="w-full border p-2 mb-3 rounded"
        value={issue}
        onChange={(e) => setIssue(e.target.value)}
      />

      <input
        type="date"
        className="w-full border p-2 mb-4 rounded"
        onChange={(e) => setDate(e.target.value)}
      />

      <div className="flex justify-between">
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Create
        </button>

        <button
          onClick={onCancel}
          className="border border-red-500 text-red-500 px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}