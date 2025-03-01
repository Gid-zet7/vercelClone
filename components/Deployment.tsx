// import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Deployment() {
  return (
    <section
      className={` bg-black border-y border-gray-800 mb-16 ${geistSans.className} `}
    >
      <div className="container mx-auto px-2 md:px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 ">
          {/* Git Deployment Section */}
          <div
            // initial={{ opacity: 0, x: -20 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // viewport={{ once: true }}
            className="space-y-4 border-r border-gray-800 md:p-6 pb-16 w-full "
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="none"
                height="5"
                viewBox="0 0 28 28"
                width="5"
                className="h-5 w-5 text-gray-500"
              >
                <path
                  d="M2.50012 25.5L11.2151 16.3009C11.3749 16.1322 11.3749 15.8679 11.2151 15.6991L2.50012 6.5"
                  stroke="#EDEDED"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                  stroke-width="3.5px"
                  fill="none"
                ></path>
                <path
                  d="M14.75 26.25H26.25"
                  stroke="#EDEDED"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                  stroke-width="3.5px"
                  fill="none"
                ></path>
              </svg>
              {/* <Code2 className="h-5 w-5 text-gray-500" /> */}
              <span className="text-sm text-gray-500">
                Git-connected Deploys
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-medium">
              From localhost to https, in seconds.
            </h3>
            <h5 className="text-gray-500 text-lg md:text-xl font-medium">
              Deploy from Git or your CLI.
            </h5>

            {/* Terminal Window */}
            <div className="mt-8 bg-[#1E1E1E] rounded-lg overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-black/50">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                  <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                  <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-4 font-mono text-sm leading-relaxed">
                <div className="flex items-start text-gray-300">
                  <span className="text-gray-500 mr-2">$</span>
                  <span>vercel-site/ git push</span>
                </div>
                <div className="text-gray-500 mt-2">
                  Enumerating objects: 5, done.
                  <br />
                  Counting objects: 100% (5/5), done.
                  <br />
                  Writing objects: 100% (3/3), 2.32 KiB | 2.32 MiB/s, done.
                  <br />
                  Total 3 (delta 2), reused 0
                </div>
                <div className="text-gray-300 mt-2">
                  To github.com/vercel/vercel.site.git
                  <br />
                  <span className="text-emerald-500">
                    ✓ Deployed to vercel.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Collaboration Section */}
          <div
            // initial={{ opacity: 0, x: 20 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // viewport={{ once: true }}
            className="space-y-4 border-gray-800 md:p-6 pb-16 "
          >
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-gray-500" />
              <span className="text-sm text-gray-500">
                Collaborative pre-production
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-medium">
              Every deploy is remarkable,{" "}
              <span className="text-gray-500 ">
                Chat with your team on real, production-grade UI, not just
                designs.
              </span>
            </h3>

            {/* Chat Interface */}
            <div className=" flex flex-col mt-8 rounded-lg p-2 md:p-6 space-y-6">
              <div className="flex gap-4 border rounded-xl border-gray-800 w-1/2 p-1 bg-gray-950">
                {/* <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0" /> */}
                <div className="flex-1 space-y-2 flex flex-col ">
                  <span className="text-sm text-gray-300">
                    Swapped out the{" "}
                    <span className="text-gray-500">
                      <code>button</code>
                    </span>{" "}
                    for
                  </span>
                  <span className="text-sm text-gray-300">
                    some variants we needed.
                  </span>
                </div>
              </div>

              <div className="flex gap-2 justify-end">
                <div className="flex rounded-xl p-1 bg-blue-700 gap-3 text-sm">
                  <span className="text-black">Paranthi</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  height="18"
                  viewBox="0 0 17 18"
                  width="17"
                >
                  <path
                    d="M15.5036 3.11002L12.5357 15.4055C12.2666 16.5204 10.7637 16.7146 10.22 15.7049L7.4763 10.6094L2.00376 8.65488C0.915938 8.26638 0.891983 6.73663 1.96711 6.31426L13.8314 1.65328C14.7729 1.28341 15.741 2.12672 15.5036 3.11002ZM7.56678 10.6417L7.56645 10.6416C7.56656 10.6416 7.56667 10.6416 7.56678 10.6417L7.65087 10.4062L7.56678 10.6417Z"
                    fill="#0091FF"
                    stroke="#0A0A0A"
                    stroke-width="1.5px"
                  ></path>
                </svg>

                <div className="flex border rounded-xl border-gray-800 w-1/2 p-1 bg-gray-950 gap-3 text-sm">
                  <span className="text-gray-500">How about this instead?</span>
                </div>
              </div>

              <div className="flex gap-2 justify-center items-center">
                <div className="flex items-start  border rounded-xl border-gray-800 w-3/5 p-1 bg-gray-950">
                  <div className="flex-1">
                    <span className="text-sm text-gray-300">
                      I like it. Does this work with the brand tweaks @mamuso?
                    </span>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  height="18"
                  viewBox="0 0 17 18"
                  width="17"
                >
                  <path
                    d="M1.4964 3.11002L4.46428 15.4055C4.73338 16.5204 6.23625 16.7146 6.77997 15.7049L9.5237 10.6094L14.9962 8.65488C16.0841 8.26638 16.108 6.73663 15.0329 6.31426L3.16856 1.65328C2.22708 1.28341 1.25905 2.12672 1.4964 3.11002ZM9.43322 10.6417L9.43355 10.6416C9.43344 10.6416 9.43333 10.6416 9.43322 10.6417L9.34913 10.4062L9.43322 10.6417Z"
                    fill="#E5484D"
                    stroke="#0A0A0A"
                    stroke-width="1.5px"
                  ></path>
                </svg>
                <div className="flex rounded-xl p-1 bg-red-500 gap-3 text-sm">
                  <span className="text-black">Rauno</span>
                </div>
              </div>

              <div className="flex gap-2 justify-end">
                <div className="flex items-start gap-4">
                  <div className=" flex border rounded-xl border-gray-800  p-3 bg-gray-950 gap-3 text-sm ">
                    <span className="text-sm text-gray-300 flex gap-2">
                      This looks great{" "}
                      <div className="bg-white rounded-full w-5 h-5 flex justify-center items-center">
                        <svg
                          fill="none"
                          height="16"
                          viewBox="0 0 16 16"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            clip-rule="evenodd"
                            d="M8.7071 3.39641C8.31657 3.00588 7.68341 3.00588 7.29288 3.39641L4.21966 6.46963L3.68933 6.99996L4.74999 8.06062L5.28032 7.53029L7.24999 5.56062V12.25V13H8.74999V12.25V5.56062L10.7197 7.53029L11.25 8.06062L12.3107 6.99996L11.7803 6.46963L8.7071 3.39641Z"
                            fill="#0A0A0A"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    height="18"
                    viewBox="0 0 17 18"
                    width="17"
                    className="mb-0"
                  >
                    <path
                      d="M1.4964 3.11002L4.46428 15.4055C4.73338 16.5204 6.23625 16.7146 6.77997 15.7049L9.5237 10.6094L14.9962 8.65488C16.0841 8.26638 16.108 6.73663 15.0329 6.31426L3.16856 1.65328C2.22708 1.28341 1.25905 2.12672 1.4964 3.11002ZM9.43322 10.6417L9.43355 10.6416C9.43344 10.6416 9.43333 10.6416 9.43322 10.6417L9.34913 10.4062L9.43322 10.6417Z"
                      fill="#0C9784"
                      stroke="#0A0A0A"
                      stroke-width="1.5px"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
