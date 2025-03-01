import { motion } from "framer-motion";
import { Building2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ScaleEnterprise() {
  return (
    <div
      //   initial={{ opacity: 0, y: 20 }}
      //   animate={{ opacity: 1, y: 0 }}
      //   transition={{ duration: 0.5 }}
      className="space-y-8 p-3 md:p-6 flex justify-center items-center h-[227px] border-b border-t  border-gray-800"
    >
      <div className="flex items-center gap-2 flex-wrap">
        <h2 className="text-xl font-semibold">Scale your</h2>
        <div className="bg-accent/20 px-1 md:px-3 py-1 rounded-full flex items-center gap-1 md:gap-2 border border-gray-800">
          <Building2 className="w-4 h-4" />
          <Button className=" text-sm font-medium">Enterprise</Button>
        </div>
        <h2 className="text-xl font-semibold">without compromising</h2>
        <div className="bg-accent/20 px-1 md:px-3 py-1 rounded-full flex items-center gap-1 md:gap-2 border border-gray-800">
          <ShieldCheck className="w-4 h-4" />
          <Button className=" text-sm font-medium">Security</Button>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="space-y-4">
  <h3 className="text-lg font-medium">Ready to deploy?</h3>
  <p className="text-sm text-muted-foreground">
    Start building with a free account. Speak to an expert for your Pro or
    Enterprise needs.
  </p>

  <div className="flex gap-4 mt-6">
    <Button variant="default">Start Deploying</Button>
    <Button variant="outline">Talk to an Expert</Button>
  </div>
</div>; */
}
