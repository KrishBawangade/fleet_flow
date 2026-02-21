"use client";

export default function TripTable() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6 mb-10">

      {/* Search + Filters */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search trips..."
          className="flex-1 border rounded-lg px-4 py-2"
        />
        <button className="border px-4 py-2 rounded-lg">Group By</button>
        <button className="border px-4 py-2 rounded-lg">Filter</button>
        <button className="border px-4 py-2 rounded-lg">Sort</button>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-6 font-semibold border-b pb-3 text-sm text-gray-600">
        <div>Vehicle</div>
        <div>Driver</div>
        <div>Origin</div>
        <div>Destination</div>
        <div>Cargo</div>
        <div>Status</div>
      </div>

      {/* Example Row */}
      <div className="grid grid-cols-6 py-4 border-b text-sm">
        <div>Truck-01</div>
        <div>Alex</div>
        <div>Mumbai</div>
        <div>Pune</div>
        <div>450kg</div>
        <div>
          <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs">
            Dispatched
          </span>
        </div>
      </div>

    </div>
  );
}