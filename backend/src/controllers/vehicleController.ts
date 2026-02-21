import { Request, Response } from "express";
import {
  createVehicle,
  getAllVehicles,
  updateVehicleStatus,
} from "../queries/vehicle.queries";

/* CREATE VEHICLE */
export const addVehicle = async (req: Request, res: Response) => {
  try {
    const { name, licensePlate, vehicleType, maxCapacity, acquisitionCost } =
      req.body;

    if (!name || !licensePlate || !vehicleType || !maxCapacity) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const vehicle = await createVehicle(
      name,
      licensePlate,
      vehicleType,
      maxCapacity,
      acquisitionCost
    );

    res.status(201).json(vehicle);
  } catch (error) {
    res.status(500).json({ message: "Error creating vehicle", error });
  }
};

/* GET VEHICLES */
export const fetchVehicles = async (_req: Request, res: Response) => {
  try {
    const vehicles = await getAllVehicles();
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ message: "Error fetching vehicles", error });
  }
};

/* UPDATE STATUS */
export const changeVehicleStatus = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const { status } = req.body;

    const vehicle = await updateVehicleStatus(id, status);
    res.json(vehicle);
  } catch (error) {
    res.status(500).json({ message: "Error updating status", error });
  }
};