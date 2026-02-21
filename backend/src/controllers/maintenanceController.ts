import { Request, Response } from "express";
import { addMaintenanceLog } from "../queries/maintenance.queries";

/* ADD MAINTENANCE LOG */
export const addMaintenanceLogController = async (
  req: Request,
  res: Response
) => {
  try {
    const { vehicleId, description, cost, serviceDate } = req.body;

    // Basic validation
    if (!vehicleId || !description || !cost || !serviceDate) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    if (typeof vehicleId !== "string") {
      return res.status(400).json({
        message: "Invalid vehicle ID",
      });
    }

    if (typeof cost !== "number") {
      return res.status(400).json({
        message: "Cost must be a number",
      });
    }

    await addMaintenanceLog(
      vehicleId,
      description,
      cost,
      serviceDate
    );

    res.status(201).json({
      message: "Maintenance log added and vehicle moved to IN_SHOP",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding maintenance log",
      error,
    });
  }
};