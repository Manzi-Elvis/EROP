import { useEffect, useState } from "react"
import DashboardLayout from "../layouts/DashboardLayout"
import { api } from "../api/client"
import { UserUtilization } from "../types/User"

export default function Dashboard() {
  const [users, setUsers] = useState<UserUtilization[]>([])

  useEffect(() => {
    api.get("/utilization")
      .then(res => setUsers(res.data))
  }, [])

  return (
    <DashboardLayout>
      <h1>Resource Utilization</h1>

      <div style={{ marginTop: "20px" }}>
        {users.map(user => (
          <div key={user.id} style={{
            background: "white",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "8px"
          }}>
            <h3>{user.name}</h3>
            <p>{user.total_allocation}%</p>
            <strong>{user.status}</strong>
          </div>
        ))}
      </div>
    </DashboardLayout>
  )
}