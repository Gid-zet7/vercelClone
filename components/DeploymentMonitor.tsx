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
      <div className="grid md:grid-cols-2 gap-6 md:gap-0">
        <div className="p-3 md:p-6 border-r border-gray-800">
          <RollbackStatus />
        </div>

        <div className="p-3 md:p-6 ">
          <ConformanceMetrics />
        </div>
      </div>
    </div>
  );
}
