import { ArrowUpRight } from "lucide-react";
import React from "react";

export default function index({ text = "" }) {
  return (
    <button className="bg-purple-500 cursor-pointer hover:bg-purple-600 transition px-6 py-3 rounded-full font-medium text-white inline-flex items-center gap-2">
      {text} <ArrowUpRight size={16} />
    </button>
  );
}
