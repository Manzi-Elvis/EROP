import { useEffect, useState } from "react"
import DashboardLayout from "../layouts/DashboardLayout"
import { api } from "../api/client"
import { type UserUtilization } from "../types/User"
import UtilizationChart from "../components/UtilizationChart"
import KPICard from "../components/KPICard"

export default function Dashboard() {
  const [users, setUsers] = useState<UserUtilization[]>([])

  useEffect(() => {
    api.get("/utilization")
      .then(res => setUsers(res.data))
  }, [])

  const totalEmployees = users.length
  const overloaded = users.filter(u => u.status === "OVERLOADED").length
  const underutilized = users.filter(u => u.status === "UNDERUTILIZED").length
  const optimal = users.filter(u => u.status === "OPTIMAL").length

  return (
    <DashboardLayout>
      <h1>Resource Utilization</h1>
      <div style={{ display: "flex", gap: "20px", marginTop: "20px", marginBottom: " 30px" }}>
        <KPICard title="Total Employees" value={totalEmployees} color="#3b82f6" />
        <KPICard title="Overloaded" value={overloaded} color="#ef4444" />
        <KPICard title="Underutilized" value={underutilized} color="#f59e0b" />
        <KPICard title="Optimal" value={optimal} color="#10b981" />
      </div>

      <div style={{ marginTop: "30px", background: "white", padding: "20px", borderRadius: "12px" }}>
        <UtilizationChart data={users} />
      </div>
    </DashboardLayout>
  )
}