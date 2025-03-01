import { Card } from "@/components/ui/card";
import RollbackStatus from "./RollbackStatus";
import ConformanceMetrics from "./ConformanceMetrics";
import { motion } from "framer-motion";

export default function DeploymentMonitor() {
  return (
    <div
      // initial={{ opacity: 0, y: 20 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 bg-card">
          <RollbackStatus />
        </Card>

        <Card className="p-6 bg-card">
          <ConformanceMetrics />
        </Card>
      </div>
    </div>
  );
}
