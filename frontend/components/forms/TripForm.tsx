"use client";

export default function TripForm() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6">

      <h2 className="text-lg font-semibold mb-6 text-green-600">
        Create New Trip
      </h2>

      <div className="grid grid-cols-2 gap-6">

        {/* Vehicle */}
        <div>
          <label className="block text-sm mb-1">
            Select Available Vehicle
          </label>
          <select className="w-full border rounded-lg px-4 py-2">
            <option>Select Vehicle</option>
            <option>Truck-01 (1000kg)</option>
            <option>Van-02 (500kg)</option>
          </select>
        </div>

        {/* Cargo */}
        <div>
          <label className="block text-sm mb-1">
            Cargo Weight (Kg)
          </label>
          <input
            type="number"
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        {/* Driver */}
        <div>
          <label className="block text-sm mb-1">
            Select Available Driver
          </label>
          <select className="w-full border rounded-lg px-4 py-2">
            <option>Select Driver</option>
            <option>Alex</option>
            <option>John</option>
          </select>
        </div>

        {/* Origin */}
        <div>
          <label className="block text-sm mb-1">
            Origin Address
          </label>
          <input
            type="text"
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        {/* Destination */}
        <div>
          <label className="block text-sm mb-1">
            Destination Address
          </label>
          <input
            type="text"
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        {/* Estimated Fuel Cost */}
        <div>
          <label className="block text-sm mb-1">
            Estimated Fuel Cost (₹)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-gray-400 text-sm">
              ₹
            </span>
            <input
              type="number"
              placeholder="Enter estimated fuel cost"
              className="w-full border rounded-lg pl-8 pr-4 py-2"
            />
          </div>
        </div>

      </div>

      {/* Lifecycle Display */}
      <div className="mt-6">
        <label className="block text-sm mb-2">
          Trip Lifecycle
        </label>
        <div className="flex gap-3 text-xs">
          <span className="px-3 py-1 rounded-full bg-gray-200">
            Draft
          </span>
          <span className="px-3 py-1 rounded-full bg-blue-200">
            Dispatched
          </span>
          <span className="px-3 py-1 rounded-full bg-green-200">
            Completed
          </span>
          <span className="px-3 py-1 rounded-full bg-red-200">
            Cancelled
          </span>
        </div>
      </div>

      {/* Button */}
      <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-xl">
        Confirm & Dispatch Trip
      </button>

    </div>
  );
}