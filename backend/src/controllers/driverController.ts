// import { Request, Response } from "express";
// import {
//   createDriver,
//   getAllDrivers,
//   getDriverById,
//   updateDriver,
//   deleteDriver,
// } from "../queries/driver.queries";

// export const createDriverController = async (req: Request, res: Response) => {
//   try {
//     const driver = await createDriver(req.body);
//     res.status(201).json(driver);
//   } catch (error) {
//     res.status(500).json({ message: "Error creating driver", error });
//   }
// };

// export const getAllDriversController = async (_req: Request, res: Response) => {
//   try {
//     const drivers = await getAllDrivers();
//     res.json(drivers);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching drivers", error });
//   }
// };

// export const getDriverByIdController = async (req: Request, res: Response) => {
//   try {
//     const id = req.params.id;

//     if (typeof id !== "string") {
//       return res.status(400).json({ message: "Invalid ID" });
//     }

//     const driver = await getDriverById(id);

//     if (!driver) {
//       return res.status(404).json({ message: "Driver not found" });
//     }

//     res.json(driver);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching driver", error });
//   }
// };

// export const updateDriverController = async (req: Request, res: Response) => {
//   try {
//     const id = req.params.id;

//     if (typeof id !== "string") {
//       return res.status(400).json({ message: "Invalid ID" });
//     }

//     const driver = await updateDriver(id, req.body);

//     res.json(driver);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating driver", error });
//   }
// };

// export const deleteDriverController = async (req: Request, res: Response) => {
//   try {
//     const id = req.params.id;

//     if (typeof id !== "string") {
//       return res.status(400).json({ message: "Invalid ID" });
//     }

//     await deleteDriver(id);

//     res.json({ message: "Driver deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting driver", error });
//   }
// };