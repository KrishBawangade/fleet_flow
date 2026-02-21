import { pool } from "../config/db";

export const getDashboardKPIs = async () => {
  const { rows } = await pool.query(`
    SELECT
      (SELECT COUNT(*) FROM vehicles WHERE status='ON_TRIP') AS active_fleet,
      (SELECT COUNT(*) FROM vehicles WHERE status='IN_SHOP') AS maintenance_alerts,
      (SELECT COUNT(*) FROM trips WHERE status='DRAFT') AS pending_cargo,
      (
        SELECT ROUND(
          COUNT(*) FILTER (WHERE status='ON_TRIP') * 100.0 / COUNT(*), 2
        )
        FROM vehicles
      ) AS utilization_rate;
  `);

  return rows[0];
};