import { pool } from "../config/db";

/* CREATE DRIVER */
export const createDriver = async (
  name: string,
  licenseNumber: string,
  licenseCategory: string,
  licenseExpiry: string
) => {
  const { rows } = await pool.query(
    `INSERT INTO drivers
     (name, license_number, license_category, license_expiry)
     VALUES ($1,$2,$3,$4)
     RETURNING *;`,
    [name, licenseNumber, licenseCategory, licenseExpiry]
  );

  return rows[0];
};

/* CHECK DRIVER ELIGIBILITY */
export const checkDriverEligibility = async (driverId: string) => {
  const { rows } = await pool.query(
    `SELECT * FROM drivers
     WHERE id=$1
     AND license_expiry >= CURRENT_DATE
     AND status='ON_DUTY';`,
    [driverId]
  );

  return rows[0]; // undefined if invalid
};