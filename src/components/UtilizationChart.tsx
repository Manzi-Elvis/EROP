import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts"
import { type UserUtilization } from "../types/User"

interface Props {
  data: UserUtilization[]
}

export default function UtilizationChart({ data }: Props) {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total_allocation" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}