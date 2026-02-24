export interface UserUtilization {
  id: number
  name: string
  total_allocation: number
  status: "OVERLOADED" | "UNDERUTILIZED" | "OPTIMAL"
}