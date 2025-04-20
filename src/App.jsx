/* eslint-disable no-unused-vars */
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Button from "./components/Button";
import { Spotlight } from "./components/SpotLight";
import { InfiniteMovingCards } from "./components/Moving";
import { motion } from "framer-motion";
import AnimatedTestimonialsDemo from "./components/Clients";

const testimonials = [
  "Cyber Security",
  "IT Support",
  "Network Analysis",
  "Threat Intelligence",
  "Endpoint Security",
  "Network Security",
  "Real-Time Detection",
  "Proactive Monitoring",
  "Incident Response",
  "Vulnerability Assessment",
  "Data Protection",
  "Compliance Management",
  "Cloud Security",
  "Risk Management",
  "Security Awareness Training",
];

function App() {
  return (
    <div className="h-screen w-screen bg-[#100220] font-sans relative overflow-x-hidden gap-20">
      <Navbar />
      <Spotlight />
      <div className="flex w-full h-[calc(100vh-80px)] relative mb-5">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="w-[50%] text-white flex items-center justify-center px-10"
        >
          <div className="flex flex-col gap-8">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-purple-400 leading-tight">
              <span className="text-white">Reliable</span> Cyber Security{" "}
              <span className="text-white"> And </span> <br /> IT Support{" "}
              <span className="text-white"> For Your </span> Business
            </h1>
            <motion.p className="text-white text-lg">
              Protect your digital assets and ensure seamless IT operations with
              our cutting-edge cybersecurity services. We provide proactive
              threat detection, real-time monitoring, and expert support
              tailored to keep your business secure and resilient in today’s
              digital world.
            </motion.p>
            <div className="w-[30%]">
              <Button text="Learn More" />
            </div>
          </div>
        </motion.div>
        <div className="w-[50%] flex items-center justify-center overflow-hidden relative">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: "url('Banner.svg')",
              position: "absolute",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              top: "0%",
              left: "0%",
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              opacity: "0.8",
            }}
          />
        </div>
      </div>
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="w-full flex items-center justify-center md:mt-[18rem]"
      >
        <Services />
      </motion.div>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="w-full h-[80%] flex flex-col px-20 gap-20 pt-30 my-30"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight">
          Our Clients
        </h1>
        <AnimatedTestimonialsDemo />
      </motion.div>
    </div>
  );
}

export default App;
