export interface MaintenanceLog {
  id: number;
  vehicle: string;
  issue: string;
  date: string;
  cost: string;
  status: "New" | "In Progress" | "Completed";
}