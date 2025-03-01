// import AnalyticsGraph from "@/components/Analytcs";
import Deployment from "@/components/Deployment";
import DeploymentMonitor from "@/components/DeploymentMonitor";
import FavouriteTools from "@/components/FavouriteTools";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ReadyToDeploy from "@/components/ReadyToDeploy";
import ScaleEnterprise from "@/components/ScaleEnterprise";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col justify-center items-center w-full py-12 md:py-[90px]">
        <div className="flex flex-col items-stretch justify-start  w-full max-w-[1100px] h-auto bg-black m-0 box-border gap-0 relative">
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
