import { pool } from "../config/db";

/* CREATE VEHICLE */
export const createVehicle = async (
  name: string,
  licensePlate: string,
  vehicleType: string,
  maxCapacity: number,
  acquisitionCost: number
) => {
  const query = `
    INSERT INTO vehicles
    (name, license_plate, vehicle_type, max_capacity_kg, acquisition_cost)
    VALUES ($1,$2,$3,$4,$5)
    RETURNING *;
  `;

  const { rows } = await pool.query(query, [
    name,
    licensePlate,
    vehicleType,
    maxCapacity,
    acquisitionCost,
  ]);

  return rows[0];
};

/* GET ALL VEHICLES */
export const getAllVehicles = async () => {
  const { rows } = await pool.query(`SELECT * FROM vehicles;`);
  return rows;
};

/* UPDATE VEHICLE STATUS */
export const updateVehicleStatus = async (
  vehicleId: string,
  status: string
) => {
  const { rows } = await pool.query(
    `UPDATE vehicles SET status=$1 WHERE id=$2 RETURNING *;`,
    [status, vehicleId]
  );
  return rows[0];
};