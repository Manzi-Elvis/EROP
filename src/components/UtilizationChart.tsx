import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell
} from "recharts"
import { type UserUtilization } from "../types/User"

interface Props {
  data: UserUtilization[]
}

export default function UtilizationChart({ data }: Props) {
  
  const getColor = (status: string) => {
    switch (status) {
      case "OVERLOADED":
        return "#ef4444" // red
      case "UNDERUTILIZED":
        return "#f59e0b" // yellow
      default:
        return "#10b981" // green
    }
  }

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total_allocation">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColor(entry.status)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}