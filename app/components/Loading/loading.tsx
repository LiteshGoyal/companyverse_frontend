"use client";

import { motion } from "framer-motion";



export default function DashboardSkeletonLoader() {
  return (
    <div className="flex items-center justify-center bg-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-cyan-400/20 to-purple-500/20 blur-3xl rounded-full animate-pulse" />

      {/* Main Content */}
      <div className="relative flex flex-col items-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative"
        >
          <div className="text-8xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            CV
          </div>

          {/* Floating Pixels */}
          <motion.div
            animate={{
              y: [-5, -15, -5],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="absolute -top-3 right-0 grid grid-cols-2 gap-1"
          >
            <div className="w-3 h-3 rounded-sm bg-cyan-400" />
            <div className="w-3 h-3 rounded-sm bg-purple-500" />
            <div className="w-3 h-3 rounded-sm bg-blue-500" />
            <div className="w-3 h-3 rounded-sm bg-cyan-300" />
          </motion.div>
        </motion.div>

        {/* Company Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
          className="mt-6 text-4xl md:text-5xl font-bold"
        >
          <span className="text-black">Company</span>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Verse
          </span>
        </motion.h1>

        {/* Loading Bar */}
        <div className="mt-10 w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "linear",
            }}
            className="w-1/2 h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full"
          />
        </div>

        {/* Loading Text */}
        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="mt-4 text-gray-500 tracking-widest uppercase text-sm"
        >
          Loading Experience...
        </motion.p>
      </div>
    </div>
  );
}