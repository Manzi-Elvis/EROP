import { type ReactNode } from "react"

interface Props {
  children: ReactNode
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <aside style={{
        width: "250px",
        background: "#111827",
        color: "white",
        padding: "20px"
      }}>
        <h2>EROP</h2>
        <nav>
          <p>Dashboard</p>
          <p>Users</p>
          <p>Projects</p>
        </nav>
      </aside>

      <main style={{
        flex: 1,
        padding: "30px",
        background: "#f3f4f6"
      }}>
        {children}
      </main>
    </div>
  )
}