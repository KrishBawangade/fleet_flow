import { Request, Response } from "express";
import { getDashboardKPIs } from "../queries/dashboard.queries";

/* GET DASHBOARD KPIs */
export const getDashboardKPIsController = async (
  _req: Request,
  res: Response
) => {
  try {
    const kpis = await getDashboardKPIs();

    res.json({
      message: "Dashboard KPIs fetched successfully",
      data: kpis,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching dashboard KPIs",
      error,
    });
  }
};