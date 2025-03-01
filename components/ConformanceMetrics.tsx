import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
export default function ConformanceMetrics() {
  return (
    <div className={`space-y-4 ${geistSans.className}`}>
      <div className="flex items-center gap-2 mb-6">
        <Shield className="w-4 h-4 text-muted-foreground" />
        <h2 className="text-sm text-gray-500">Conformance</h2>
      </div>

      <h3 className="text-xl md:text-2xl font-medium">
        Move fast, don't break things.{" "}
        <span className="text-gray-500 ">
          Keep quality high while maintaining velocity with Enterprise
          Monorepos.
        </span>
      </h3>

      <div
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        className="flex justify-between"
      >
        <div className="md:flex-1 flex flex-col gap-3 border-r border-gray-800 p-3 md:p-8">
          <span className="text-sm text-muted-foreground">Conformance</span>
          <div className="flex items-center justify-between px-2 py-1 bg-gray-500 rounded-md">
            <div className="flex items-center">
              <span className="text-sm font-medium">Excellent</span>
              {/* <div className="w-2 h-2 rounded-full bg-green-500" /> */}
            </div>
            <div className="flex gap-1 justify-center items-center">
              <svg
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="none"
                height="20"
                stroke-width="2"
                viewBox="0 0 100 100"
                width="20"
              >
                <circle
                  style={{ opacity: "0" }}
                  cx="50"
                  cy="50"
                  r="42.5"
                  stroke-width="15px"
                  stroke-dashoffset="0"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  //   class="gauge_arcSecondary__s11_g"
                  stroke="#FFFFFF"
                  stroke-opacity="0.14"
                  fill="none"
                ></circle>
                <circle
                  cx="50"
                  cy="50"
                  r="42.5"
                  stroke-width="15px"
                  stroke-dashoffset="0"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  //   className="gauge_arc__UGu7u"
                  data-geist-progress-circle-fg=""
                  stroke="#0C9784"
                  style={{ opacity: "1" }}
                  fill="none"
                ></circle>
              </svg>
              <span className="text-xl font-bold">9.5</span>
            </div>
          </div>

          <div className="space-y-4 ">
            <div className="flex items-center justify-between px-2 py-1 bg-gray-500 rounded-md">
              <span className="text-sm text-muted-foreground">
                Total Issues
              </span>
              <span className="text-sm font-medium">34</span>
            </div>

            <div className="flex items-center justify-between px-2 py-1 bg-gray-500 rounded-md ">
              <span className="text-sm text-muted-foreground">
                Major Issues
              </span>
              <span className="text-sm font-medium">12</span>
            </div>
          </div>
        </div>

        <div className="md:flex-1 flex flex-col gap-3 border-r border-gray-800 p-3 md:p-8 ">
          <span className="text-sm text-muted-foreground">Code Owners</span>

          <div className="flex items-center justify-between px-2 py-1 bg-gray-500 rounded-md ">
            <span className="text-sm text-muted-foreground">
              @vercel/design
            </span>
            <div className="flex -space-x-2">
              <Avatar className="w-6 h-6  border-background">
                <AvatarImage src={`profile-compressed.jpg`} alt="profile" />
                <AvatarFallback>TS</AvatarFallback>
              </Avatar>
              <Avatar className="w-6 h-6 border-2 border-background">
                <AvatarFallback>RK</AvatarFallback>
              </Avatar>
              <Avatar className="w-6 h-6 border-2 border-background">
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="flex items-center justify-between px-2 py-1 bg-gray-500 rounded-md">
            <span className="text-sm text-muted-foreground">@vercel/eng</span>
            <div className="flex -space-x-2">
              <Avatar className="w-6 h-6 border-2 border-background">
                <AvatarImage src="" alt="profile" />
                <AvatarFallback>SK</AvatarFallback>
              </Avatar>
              <Avatar className="w-6 h-6 border-2 border-background">
                <AvatarFallback>LM</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="flex items-center justify-between px-2 py-1 bg-gray-500 rounded-md">
            <span className="text-sm text-muted-foreground">
              @vercel/marketing
            </span>
            <div className="flex -space-x-2">
              <Avatar className="w-6 h-6 border-2 border-background">
                <AvatarFallback>SK</AvatarFallback>
              </Avatar>
              <Avatar className="w-6 h-6 border-2 border-background">
                <AvatarFallback>LM</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
