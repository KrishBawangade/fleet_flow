import { pool } from "../config/db";

export const addMaintenanceLog = async (
  vehicleId: string,
  description: string,
  cost: number,
  serviceDate: string
) => {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    await client.query(
      `INSERT INTO maintenance_logs
       (vehicle_id, description, cost, service_date)
       VALUES ($1,$2,$3,$4);`,
      [vehicleId, description, cost, serviceDate]
    );

    await client.query(
      `UPDATE vehicles
       SET status='IN_SHOP'
       WHERE id=$1;`,
      [vehicleId]
    );

    await client.query("COMMIT");
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
};