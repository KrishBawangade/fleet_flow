import { pool } from "../config/db";

/* CREATE TRIP (DRAFT) */
export const createTrip = async (
  vehicleId: string,
  driverId: string,
  cargoWeight: number,
  origin: string,
  destination: string,
  revenue: number
) => {
  const { rows } = await pool.query(
    `INSERT INTO trips
     (vehicle_id, driver_id, cargo_weight_kg, origin, destination, revenue)
     VALUES ($1,$2,$3,$4,$5,$6)
     RETURNING *;`,
    [vehicleId, driverId, cargoWeight, origin, destination, revenue]
  );

  return rows[0];
};

/* DISPATCH TRIP (TRANSACTION) */
export const dispatchTrip = async (
  tripId: string,
  vehicleId: string,
  driverId: string
) => {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    await client.query(
      `UPDATE trips
       SET status='DISPATCHED', start_time=NOW()
       WHERE id=$1;`,
      [tripId]
    );

    await client.query(
      `UPDATE vehicles
       SET status='ON_TRIP'
       WHERE id=$1;`,
      [vehicleId]
    );

    await client.query(
      `UPDATE drivers
       SET status='ON_TRIP'
       WHERE id=$1;`,
      [driverId]
    );

    await client.query("COMMIT");
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
};

/* COMPLETE TRIP */
export const completeTrip = async (
  tripId: string,
  vehicleId: string,
  driverId: string,
  finalOdometer: number
) => {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    await client.query(
      `UPDATE trips
       SET status='COMPLETED', end_time=NOW()
       WHERE id=$1;`,
      [tripId]
    );

    await client.query(
      `UPDATE vehicles
       SET status='AVAILABLE', odometer=$1
       WHERE id=$2;`,
      [finalOdometer, vehicleId]
    );

    await client.query(
      `UPDATE drivers
       SET status='ON_DUTY'
       WHERE id=$1;`,
      [driverId]
    );

    await client.query("COMMIT");
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
};