/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export const HoverEffect = ({ services }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
      {services.map((service, idx) => (
        <a
          key={service?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-purple-400 opacity-20 rounded-3xl z-40"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 0.5,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div
            key={idx}
            className="p-6 z-50 border border-purple-700 bg-[#15052b] rounded-2xl hover:shadow-lg transition-all relative group"
          >
            <span className="absolute top-4 right-4 text-purple-400 text-sm font-medium">
              {service.id}
            </span>
            <div className="mb-4 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400 text-sm">{service.description}</p>
            <ArrowUpRight className="text-purple-400 mt-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </a>
      ))}
    </div>
  );
};
