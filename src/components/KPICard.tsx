interface Props {
  title: string
  value: number
  color: string
}

export default function KPICard({ title, value, color }: Props) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        flex: 1
      }}
    >
      <h4 style={{ color: "#6b7280", marginBottom: "10px" }}>{title}</h4>
      <h2 style={{ color, fontSize: "28px", margin: 0 }}>{value}</h2>
    </div>
  )
}