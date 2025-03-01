// import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function RollbackStatus() {
  return (
    <div className={`space-y-4 ${geistSans.className}`}>
      <div className="flex items-center gap-2 mb-6">
        <RotateCcw className="w-4 h-4 text-muted-foreground" />
        <h2 className="text-sm text-gray-500">Instant Rollbacks</h2>
      </div>

      <h3 className="text-xl md:text-2xl font-medium">
        Go ahead, deploy on Friday.{" "}
        <span className="text-gray-500 ">
          Instantly rollback to a working deployment.
        </span>
      </h3>

      <div
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        className="space-y-4 flex flex-col justify-center items-center"
      >
        <div className="flex items-center gap-4 p-3 rounded-md bg-accent/10 border border-gray-800 bg-[#0A0A0A]">
          {/* <CheckCircle2 className="w-5 h-5 text-green-500" /> */}
          <div className="flex-1 flex flex-col">
            <div className="flex-1 flex justify-between">
              <p className="text-sm font-medium">
                vercel-site/ <span className="text-gray-500">jvjb4ynna</span>
              </p>
              <p className="text-xs text-muted-foreground mt-1">1d ago</p>
            </div>
            <div className="flex-1 flex text-sm  items-center">
              <svg
                //   xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                data-testid="geist-icon"
                height="16"
                strokeLinejoin="round"
                style={{ color: "var(--ds-gray-900)" }}
                viewBox="0 0 16 16"
                width="16"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5ZM8 12C9.95279 12 11.5787 10.6006 11.9298 8.75H15.25H16V7.25H15.25H11.9298C11.5787 5.39935 9.95279 4 8 4C6.04721 4 4.42125 5.39935 4.0702 7.25H0.75H0V8.75H0.75H4.0702C4.42125 10.6006 6.04721 12 8 12Z"
                  fill="#A1A1A1"
                ></path>
              </svg>
              <p>
                ba5f55f <span className="ml-2">Update bento box design</span>
              </p>
            </div>
          </div>
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
        </div>

        <svg
          //   xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          data-size="small"
          fill="none"
          height="88"
          viewBox="0 0 129 88"
          width="129"
        >
          <path
            d="M3.99999 4.00001L3.99999 28.4324C3.99999 35.0598 9.37258 40.4324 16 40.4324L116 40.4324C122.627 40.4324 128 45.805 128 52.4324L128 88"
            stroke='url("#paint0_linear_6_107")'
            stroke-width="2px"
            fill="none"
          ></path>
          <path
            d="M3.99999 4.00001L3.99999 28.4324C3.99999 35.0598 9.37258 40.4324 16 40.4324L116 40.4324C122.627 40.4324 128 45.805 128 52.4324L128 88"
            stroke='url("#paint1_linear_6_107")'
            stroke-width="2px"
            fill="none"
          ></path>
          <g clipPath="url(#clip0_6_107)" fill="none">
            <path
              clipRule="evenodd"
              d="M4 0.5L8 7.5H0L4 0.5Z"
              fill="#45DEC4"
              fillRule="evenodd"
            ></path>
          </g>
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_6_107"
              x1="98"
              x2="34"
              y1="40.4324"
              y2="40.4324"
            >
              <stop stopColor="#E5484D"></stop>
              <stop offset="0.5" stopColor="#FFC634"></stop>
              <stop offset="1" stopColor="#45DEC4"></stop>
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_6_107"
              x1="98"
              x2="98"
              y1="88"
              y2="-2.37837"
            >
              <stop stopColor="var(--ds-background-200)"></stop>
              <stop
                offset="0.322368"
                stopColor="var(--ds-background-200)"
                stop-opacity="0"
              ></stop>
            </linearGradient>
            <clipPath id="clip0_6_107">
              <rect fill="white" height="8" width="8"></rect>
            </clipPath>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_6_107"
              x1="98"
              x2="34"
              y1="40.4324"
              y2="40.4324"
            >
              <stop stopColor="#E5484D"></stop>
              <stop offset="0.5" stopColor="#FFC634"></stop>
              <stop offset="1" stopColor="#45DEC4"></stop>
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_6_107"
              x1="98"
              x2="98"
              y1="88"
              y2="-2.37837"
            >
              <stop stopColor="var(--ds-background-200)"></stop>
              <stop
                offset="0.322368"
                stopColor="var(--ds-background-200)"
                stop-opacity="0"
              ></stop>
            </linearGradient>
          </defs>
        </svg>

        <div className="flex items-center gap-4 p-3 rounded-md bg-accent/10 border border-dotted border-gray-800 bg-[#0A0A0A]">
          {/* <CheckCircle2 className="w-5 h-5 text-green-500" /> */}
          <div className="flex-1 flex flex-col">
            <div className="flex-1 flex justify-between">
              <p className="text-sm font-medium">
                vercel-site/ <span className="text-gray-500">gigj178pv</span>
              </p>
              <p className="text-xs text-muted-foreground mt-1">10m ago</p>
            </div>
            <div className="flex-1 flex text-sm  items-center">
              <svg
                //   xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                data-testid="geist-icon"
                height="16"
                stroke-linejoin="round"
                style={{ color: "var(--ds-gray-900)" }}
                viewBox="0 0 16 16"
                width="16"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5ZM8 12C9.95279 12 11.5787 10.6006 11.9298 8.75H15.25H16V7.25H15.25H11.9298C11.5787 5.39935 9.95279 4 8 4C6.04721 4 4.42125 5.39935 4.0702 7.25H0.75H0V8.75H0.75H4.0702C4.42125 10.6006 6.04721 12 8 12Z"
                  fill="#A1A1A1"
                ></path>
              </svg>
              <p>
                bx012mm <span className="ml-2">Fix ESLint error</span>
              </p>
            </div>
          </div>
          <svg
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="none"
            height="32"
            stroke-width="2"
            viewBox="0 0 100 100"
            width="32"
          >
            <circle
              //   style="opacity:1;--stroke-percent:33"
              cx="50"
              cy="50"
              r="45"
              stroke-width="10px"
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
              r="45"
              stroke-width="10px"
              stroke-dashoffset="0"
              stroke-linecap="round"
              stroke-linejoin="round"
              //   class="gauge_arc__UGu7u"
              data-geist-progress-circle-fg=""
              stroke="#E5484D"
              //   style="opacity:1;--stroke-percent:55"
              fill="none"
            ></circle>
          </svg>
        </div>
      </div>
    </div>
  );
}
