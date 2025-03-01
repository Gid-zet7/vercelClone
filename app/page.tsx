import AnalyticsGraph from "@/components/Analytcs";
import Deployment from "@/components/Deployment";
import DeploymentMonitor from "@/components/DeploymentMonitor";
import FavouriteTools from "@/components/FavouriteTools";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ReadyToDeploy from "@/components/ReadyToDeploy";
import ScaleEnterprise from "@/components/ScaleEnterprise";
import Image from "next/image";

// h-[3129.31px]

export default function Home() {
  // const sectionStyles = {
  //   "--banner-padding-t-lg": "29px",
  //   "--banner-padding-b-lg": "29px",
  //   "--banner-padding-t": "16px",
  //   "--banner-padding-b": "24px",
  //   "--stack-flex": "initial",
  //   "--stack-direction": "column",
  //   "--stack-align": "stretch",
  //   "--stack-justify": "flex-start",
  //   "--sm-stack-padding": "16px 0px",
  //   "--md-stack-padding": "32px 0px",
  //   "--lg-stack-padding": "90px 0px",
  //   "--xl-stack-padding": "90px 0px",
  //   "--stack-gap": "0px",
  // };

  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <main
        className="flex flex-col justify-center items-center w-full py-12 md:py-[90px]"
        // style={sectionStyles}
      >
        <div className="flex flex-col items-stretch justify-start  w-full max-w-[1100px] h-auto bg-black m-0 box-border gap-0 relative">
          {/* <div className="flex flex-col justify-center items-center w-full h-[327.562px] p-0 m-0 bg-red-400 static">
            <div className="flex flex-col justify-center items-center w-11/12 h-[8067.12px] py-4 pb-8 m-0 bg-black static">
              <div className="flex flex-col justify-center items-center gap-4 ">
                <h1 className="text-lg md:text-2xl lg:text-3xl font-extrabold w-full">
                  Introducing Fluid compute
                </h1>
                <p className="w-full">
                  The power of servers in serverless form.
                </p>
                <button>Learn more</button>
              </div>
            </div>
          </div> */}

          <Hero />

          <FavouriteTools />
          <Deployment />
          {/* <AnalyticsGraph /> */}
          <DeploymentMonitor />
          <ScaleEnterprise />
          <ReadyToDeploy />
          <Footer />
        </div>
      </main>
    </div>
  );
}
