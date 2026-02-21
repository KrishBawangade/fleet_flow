import { Request, Response } from "express";
import {
  createTrip,
  dispatchTrip,
  completeTrip,
} from "../queries/trip.queries";

/* CREATE TRIP (DRAFT) */
export const createTripController = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      vehicleId,
      driverId,
      cargoWeight,
      origin,
      destination,
      revenue,
    } = req.body;

    // Validation
    if (
      !vehicleId ||
      !driverId ||
      !cargoWeight ||
      !origin ||
      !destination ||
      !revenue
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    if (
      typeof vehicleId !== "string" ||
      typeof driverId !== "string"
    ) {
      return res.status(400).json({
        message: "Invalid vehicleId or driverId",
      });
    }

    if (
      typeof cargoWeight !== "number" ||
      typeof revenue !== "number"
    ) {
      return res.status(400).json({
        message: "cargoWeight and revenue must be numbers",
      });
    }

    const trip = await createTrip(
      vehicleId,
      driverId,
      cargoWeight,
      origin,
      destination,
      revenue
    );

    res.status(201).json(trip);
  } catch (error) {
    res.status(500).json({
      message: "Error creating trip",
      error,
    });
  }
};

/* DISPATCH TRIP */
export const dispatchTripController = async (
  req: Request,
  res: Response
) => {
  try {
    const { tripId, vehicleId, driverId } = req.body;

    if (!tripId || !vehicleId || !driverId) {
      return res.status(400).json({
        message: "tripId, vehicleId and driverId are required",
      });
    }

    if (
      typeof tripId !== "string" ||
      typeof vehicleId !== "string" ||
      typeof driverId !== "string"
    ) {
      return res.status(400).json({
        message: "Invalid IDs",
      });
    }

    await dispatchTrip(tripId, vehicleId, driverId);

    res.json({
      message: "Trip dispatched successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error dispatching trip",
      error,
    });
  }
};

/* COMPLETE TRIP */
export const completeTripController = async (
  req: Request,
  res: Response
) => {
  try {
    const { tripId, vehicleId, driverId, finalOdometer } = req.body;

    if (!tripId || !vehicleId || !driverId || !finalOdometer) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    if (
      typeof tripId !== "string" ||
      typeof vehicleId !== "string" ||
      typeof driverId !== "string"
    ) {
      return res.status(400).json({
        message: "Invalid IDs",
      });
    }

    if (typeof finalOdometer !== "number") {
      return res.status(400).json({
        message: "finalOdometer must be a number",
      });
    }

    await completeTrip(
      tripId,
      vehicleId,
      driverId,
      finalOdometer
    );

    res.json({
      message: "Trip completed successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error completing trip",
      error,
    });
  }
};