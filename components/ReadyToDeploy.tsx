import { Button } from "@/components/ui/button";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function ReadyToDeploy() {
  return (
    <div
      //   initial={{ opacity: 0, y: 20 }}
      //   animate={{ opacity: 1, y: 0 }}
      //   transition={{ duration: 0.5 }}
      className={`space-y-8 p-6 flex justify-center items-center h-[227px] ${geistSans.className}`}
    >
      <div className="space-y-4">
        <h3 className="text-xl md:text-2xl font-medium">
          Ready to deploy?{" "}
          <span className="text-gray-500 ">
            Start building with a free account. Speak to an expert for your{" "}
            <span className="text-blue-500">Pro</span> or{" "}
            <span className="text-indigo-500">Enterprise</span> needs.
          </span>
        </h3>

        <div className="flex gap-4 mt-6">
          <Button className="bg-slate-50 text-black rounded-full">
            Start Deploying
          </Button>
          <Button className="border border-gray-800 rounded-full">
            Talk to an Expert
          </Button>
        </div>
      </div>
    </div>
  );
}
