import { useEffect, useState } from "react"
import DashboardLayout from "../layouts/DashboardLayout"
import { api } from "../api/client"
import { type UserUtilization } from "../types/User"
import UtilizationChart from "../components/UtilizationChart"

export default function Dashboard() {
  const [users, setUsers] = useState<UserUtilization[]>([])

  useEffect(() => {
    api.get("/utilization")
      .then(res => setUsers(res.data))
  }, [])

  return (
    <DashboardLayout>
      <h1>Resource Utilization</h1>

      <div style={{ marginTop: "30px", background: "white", padding: "20px", borderRadius: "12px" }}>
        <UtilizationChart data={users} />
      </div>
    </DashboardLayout>
  )
}