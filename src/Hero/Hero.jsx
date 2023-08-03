import React from "react";
import { motion } from "framer-motion";
import { computer } from "../images/computer.jpg";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="w-5 rounded-full h-5 bg-blue-600"></div>
      <div className="w-1 h-[200px] sm:h-[400px]  bg-gradient-to-r  from-blue-500"></div>
    </div>
  );
}
