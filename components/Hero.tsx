import React from "react";
import { Geist } from "next/font/google";
import { Button } from "./ui/button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <section className={`${geistSans.className} `}>
      <div className=" block md:hidden ">
        <div className="flex flex-col justify-center items-center w-full h-[327.562px] p-4 md:p-10 m-0 bg-black static">
          <div className="flex flex-col gap-2 justify-center items-center w-11/12 py-4 pb-6 m-0 bg-black static">
            <h1 className=" font-bold text-2xl ">Your complete</h1>
            <span className="font-bold text-2xl ">platform for the web.</span>
            <p className="text-sm text-gray-500 max-w-56">
              Vercel provides the developer tools and cloud infrastructure to
              build, scale, and secure a faster, more personalized web.
            </p>
          </div>
          <div className="flex gap-4 w-full justify-center items-center">
            <Button className="bg-slate-50 text-black">Deploy</Button>
            <Button>Get a Demo</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-7 grid-rows-4 md:grid-cols-12 md:grid-rows-9 items-center justify-center p-0 w-full h-[380.31px] md:h-[580.31px] bg-transparent m-0 box-border gap-normal  relative">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-black to-rose-500/20" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className=" hidden md:block col-start-2 col-end-11 row-start-1 row-end-8 container relative mx-auto px-4 text-center">
          <div className="flex flex-col justify-center items-center h-[310px]  pb-5  bg-black  ">
            <div className="flex flex-col justify-center items-center w-11/12 py-4 pb-6 m-0 bg-black static">
              <h1 className="font-bold clamp_text-main">
                Your complete platform for the web.
              </h1>
              <span className="text-md">
                Vercel provides the developer tools and cloud infrastructure
              </span>
              <span>
                to build, scale, and secure a faster, more personalized web.
              </span>
            </div>
            <div className="flex gap-4">
              <Button className="bg-slate-50 text-black">
                Start Deploying
              </Button>
              <Button>Get a Demo</Button>
            </div>
          </div>
        </div>
        <svg
          aria-label="Vercel's logo, a triangle, sits in the center of a grid, surrounded by rays of light which are the colors of the rainbow."
          className="col-start-1 col-end-8 row-start-1 row-end-5 md:col-start-2 md:col-end-12 md:row-start-4 md:row-end-8"
          fill="none"
          role="img"
          viewBox="0 0 1200 700"
        >
          <polygon
            fill="var(--geist-background)"
            points="485,650.3952809568069 715,650.3952809568069 600,451.20943808638606"
          ></polygon>
          <line
            opacity="1"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="451.20943808638606"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="1"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="451.20943808638606"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.9714285714285714"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="455.5066708300659"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.9714285714285714"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="455.5066708300659"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.9428571428571428"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="459.8039035737458"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.9428571428571428"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="459.8039035737458"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.9142857142857143"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="464.10113631742564"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.9142857142857143"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="464.10113631742564"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.8857142857142857"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="468.39836906110554"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.8857142857142857"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="468.39836906110554"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.8571428571428572"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="472.6956018047854"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.8571428571428572"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="472.6956018047854"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.8285714285714285"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="476.9928345484653"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.8285714285714285"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="476.9928345484653"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.8"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="481.2900672921451"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.8"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="481.2900672921451"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.7714285714285715"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="485.587300035825"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.7714285714285715"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="485.587300035825"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.7428571428571429"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="489.88453277950487"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.7428571428571429"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="489.88453277950487"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.7142857142857143"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="494.1817655231847"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.7142857142857143"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="494.1817655231847"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.6857142857142857"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="498.4789982668646"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.6857142857142857"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="498.4789982668646"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.6571428571428571"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="502.77623101054445"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.6571428571428571"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="502.77623101054445"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.6285714285714286"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="507.07346375422435"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.6285714285714286"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="507.07346375422435"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.6"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="511.3706964979042"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.6"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="511.3706964979042"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.5714285714285714"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="515.667929241584"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.5714285714285714"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="515.667929241584"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.5428571428571429"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="519.9651619852639"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.5428571428571429"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="519.9651619852639"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.5142857142857142"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="524.2623947289438"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.5142857142857142"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="524.2623947289438"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.48571428571428577"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="528.5596274726237"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.48571428571428577"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="528.5596274726237"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.4571428571428572"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="532.8568602163035"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.4571428571428572"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="532.8568602163035"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.4285714285714286"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="537.1540929599834"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.4285714285714286"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="537.1540929599834"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.4"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="541.4513257036633"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.4"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="541.4513257036633"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.37142857142857144"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="545.7485584473432"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.37142857142857144"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="545.7485584473432"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.34285714285714286"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="550.045791191023"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.34285714285714286"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="550.045791191023"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.3142857142857143"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="554.3430239347028"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.3142857142857143"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="554.3430239347028"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.2857142857142857"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="558.6402566783827"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.2857142857142857"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="558.6402566783827"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.2571428571428571"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="562.9374894220626"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.2571428571428571"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="562.9374894220626"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.22857142857142854"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="567.2347221657425"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.22857142857142854"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="567.2347221657425"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.19999999999999996"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="571.5319549094223"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.19999999999999996"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="571.5319549094223"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.17142857142857137"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="575.8291876531022"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.17142857142857137"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="575.8291876531022"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.1428571428571429"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="580.1264203967821"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.1428571428571429"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="580.1264203967821"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.11428571428571432"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="584.423653140462"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.11428571428571432"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="584.423653140462"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.08571428571428574"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="588.7208858841418"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.08571428571428574"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="588.7208858841418"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.05714285714285716"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="593.0181186278217"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.05714285714285716"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="593.0181186278217"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.02857142857142858"
            stroke="#FFFFFF"
            x1="600"
            x2="715"
            y1="597.3153513715015"
            y2="650.3952809568069"
            fill="none"
          ></line>
          <line
            opacity="0.02857142857142858"
            stroke="#FFFFFF"
            x1="600"
            x2="485"
            y1="597.3153513715015"
            y2="650.3952809568069"
            fill="none"
          ></line>
        </svg>
      </div>
    </section>
  );
}
