"use client";

import TripTable from "@/components/tables/TripTable";
import TripForm from "@/components/forms/TripForm";

export default function TripsPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto">

      <h1 className="text-2xl font-semibold mb-8">
        Trip Dispatcher & Management
      </h1>

      <TripTable />

      <TripForm />

    </div>
  );
}