import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { Eye, MousePointerClick } from "lucide-react";

// Sample data for the graph
const data = [
  { name: "Jan", views: 1500, clicks: 1000 },
  { name: "Feb", views: 2500, clicks: 1500 },
  { name: "Mar", views: 2000, clicks: 1800 },
  { name: "Apr", views: 3000, clicks: 2000 },
  { name: "May", views: 2800, clicks: 2200 },
  { name: "Jun", views: 3500, clicks: 2500 },
  { name: "Jul", views: 4000, clicks: 2800 },
];

export default function AnalyticsGraph() {
  return (
    <div
      //   initial={{ opacity: 0, y: 20 }}
      //   animate={{ opacity: 1, y: 0 }}
      //   transition={{ duration: 0.5 }}
      className="p-6 space-y-6 bg-background rounded-lg border"
    >
      {/* Header */}
      <div className="flex items-center gap-2">
        <Eye className="w-5 h-5 text-muted-foreground" />
        <h2 className="text-lg font-semibold">Frontend Observability</h2>
      </div>

      {/* Description */}
      <div>
        <h3 className="text-xl font-semibold mb-2">
          Privacy-friendly, lightweight Analytics.
        </h3>
        <p className="text-sm text-muted-foreground">
          Upgrade your post-launch workflow with actionable, real-time insights.
        </p>
      </div>

      {/* Chart */}
      <div className="h-[200px] mt-8">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="name"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--background))",
                borderColor: "hsl(var(--border))",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Legend
              wrapperStyle={{
                paddingTop: "10px",
              }}
            />
            <Line
              type="monotone"
              dataKey="views"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={false}
              name="Views"
            />
            <Line
              type="monotone"
              dataKey="clicks"
              stroke="hsl(var(--accent))"
              strokeWidth={2}
              dot={false}
              name="Clicks"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Stats */}
      <div className="flex gap-8 mt-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4" />
            <span className="text-sm text-muted-foreground">Views</span>
          </div>
          <p className="text-2xl font-bold">5,218</p>
          <span className="text-xs text-muted-foreground">+15%</span>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <MousePointerClick className="w-4 h-4" />
            <span className="text-sm text-muted-foreground">Clicks</span>
          </div>
          <p className="text-2xl font-bold">2,005</p>
          <span className="text-xs text-muted-foreground">+5%</span>
        </div>
      </div>
    </div>
  );
}
