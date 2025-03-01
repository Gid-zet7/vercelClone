import { motion } from "framer-motion";
import { Building2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ScaleEnterprise() {
  return (
    <div
      //   initial={{ opacity: 0, y: 20 }}
      //   animate={{ opacity: 1, y: 0 }}
      //   transition={{ duration: 0.5 }}
      className="space-y-8 p-6"
    >
      <div className="flex items-center gap-2 flex-wrap">
        <h2 className="text-xl font-semibold">Scale your</h2>
        <div className="bg-accent/20 px-3 py-1 rounded-full flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          <span className="text-sm font-medium">Enterprise</span>
        </div>
        <h2 className="text-xl font-semibold">without compromising</h2>
        <div className="bg-accent/20 px-3 py-1 rounded-full flex items-center gap-2">
          <ShieldCheck className="w-4 h-4" />
          <span className="text-sm font-medium">Security</span>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Ready to deploy?</h3>
        <p className="text-sm text-muted-foreground">
          Start building with a free account. Speak to an expert for your Pro or
          Enterprise needs.
        </p>

        <div className="flex gap-4 mt-6">
          <Button variant="default">Start Deploying</Button>
          <Button variant="outline">Talk to an Expert</Button>
        </div>
      </div>
    </div>
  );
}
