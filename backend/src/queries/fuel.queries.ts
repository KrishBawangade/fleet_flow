import { pool } from "../config/db";

export const addFuelLog = async (
  vehicleId: string,
  tripId: string,
  liters: number,
  cost: number,
  date: string
) => {
  const { rows } = await pool.query(
    `INSERT INTO fuel_logs
     (vehicle_id, trip_id, liters, cost, date)
     VALUES ($1,$2,$3,$4,$5)
     RETURNING *;`,
    [vehicleId, tripId, liters, cost, date]
  );

  return rows[0];
};