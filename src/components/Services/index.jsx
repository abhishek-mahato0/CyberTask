import React from "react";
import {
  ArrowUpRight,
  Shield,
  Wifi,
  ShieldCheck,
  Lightbulb,
  ShieldAlert,
} from "lucide-react";
import { HoverEffect } from "../Card";

export default function index() {
  const services = [
    {
      id: "01",
      title: "Network Analysis",
      icon: <Wifi size={28} />,
      description:
        "Comprehensive evaluation of your network infrastructure to identify vulnerabilities, optimize performance, and ensure secure data flow. We detect anomalies and unauthorized access points before they become threats.",
    },
    {
      id: "02",
      title: "Threat Intelligence",
      icon: <ShieldCheck size={28} />,
      description:
        "Real-time monitoring and analysis of emerging cyber threats using advanced analytics and threat databases. Our proactive approach helps you stay ahead of hackers by understanding and neutralizing risks before they impact your business.",
    },
    {
      id: "03",
      title: "Endpoint Security",
      icon: <Lightbulb size={28} />,
      description:
        "Protects all devices connected to your network — from laptops to mobile phones — using antivirus, anti-malware, and zero-trust protocols. This ensures every endpoint acts as a secure gateway, not a vulnerability.",
    },
    {
      id: "04",
      title: "Network Security",
      icon: <ShieldAlert size={28} />,
      description:
        "Implements robust firewalls, intrusion detection systems, and traffic filtering to shield your network from internal and external attacks. Our layered defense keeps your business data secure and always accessible.",
    },
  ];

  return (
    <section className="w-full bg-[#100220] text-white px-6 md:px-20">
      <div className="flex items-center justify-between w-full gap-10">
        <div className="w-[40%]">
          <div className="inline-flex items-center gap-2 border border-purple-600 text-purple-400 px-4 py-1 rounded-full text-sm font-medium mb-4">
            <Shield size={16} /> OUR SERVICES
          </div>
          <h2 className="text-5xl sm:text-6xl text-white font-extrabold mb-4 leading-tight">
            Services We Offer
          </h2>
          <p className="text-white mb-8 text-lg text-justify">
            We offer cutting-edge cybersecurity services designed to protect
            your digital infrastructure from ever-evolving threats. Our
            solutions include real-time threat detection, network and endpoint
            security, vulnerability assessments, and threat intelligence.
            Whether you're a growing startup or a large enterprise, we tailor
            our services to meet your specific needs — ensuring the
            confidentiality, integrity, and availability of your data. With
            proactive monitoring, expert consultation, and advanced defense
            systems, we help you stay one step ahead of cybercriminals and
            maintain trust in a secure digital environment.
          </p>
          <button className="bg-purple-500 hover:bg-purple-600 transition px-6 py-3 rounded-full font-medium text-white inline-flex items-center gap-2">
            See More <ArrowUpRight size={16} />
          </button>
        </div>
        <div className="w-[60%]">
          <HoverEffect services={services} />
        </div>
      </div>
    </section>
  );
}
