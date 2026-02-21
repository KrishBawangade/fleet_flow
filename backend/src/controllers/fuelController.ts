import { Request, Response } from "express";
import { addFuelLog } from "../queries/fuel.queries";

/* ADD FUEL LOG */
export const addFuelLogController = async (
  req: Request,
  res: Response
) => {
  try {
    const { vehicleId, tripId, liters, cost, date } = req.body;

    // Basic validation
    if (!vehicleId || !tripId || !liters || !cost || !date) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    if (typeof vehicleId !== "string" || typeof tripId !== "string") {
      return res.status(400).json({
        message: "Invalid vehicleId or tripId",
      });
    }

    if (typeof liters !== "number" || typeof cost !== "number") {
      return res.status(400).json({
        message: "Liters and cost must be numbers",
      });
    }

    const fuelLog = await addFuelLog(
      vehicleId,
      tripId,
      liters,
      cost,
      date
    );

    res.status(201).json(fuelLog);
  } catch (error) {
    res.status(500).json({
      message: "Error adding fuel log",
      error,
    });
  }
};