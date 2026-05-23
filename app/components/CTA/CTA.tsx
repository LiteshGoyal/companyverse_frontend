"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24 overflow-hidden">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto text-center md:max-w-2xl"
        >
          
          {/* Small Glow */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-[300px] h-[300px] bg-cyan-500/10 blur-3xl rounded-full"></div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            viewport={{ once: true }}
            className="relative text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl"
          >
            Build Smarter Teams. Scale Faster.
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="relative max-w-xl mx-auto mt-6 text-base font-normal text-gray-400 lg:text-lg sm:mt-8"
          >
            Connect with skilled professionals, manage company operations, and
            streamline hiring through a modern platform designed for growing
            businesses and startups.
          </motion.p>

          {/* Button */}
          <motion.form
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
            viewport={{ once: true }}
            action="#"
            method="POST"
            className="relative mt-8 rounded-full sm:mt-12"
          >
            <div className="relative"></div>

            <div className="flex mt-4 sm:absolute sm:right-1.5 sm:inset-y-1.5 sm:mt-0">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                <Link
                  href="/dashboard"
                  className="relative inline-flex items-center justify-center w-full px-5 py-5 overflow-hidden text-sm font-semibold tracking-widest text-black uppercase transition-all duration-300 bg-white rounded-full sm:w-auto sm:py-3 hover:opacity-90"
                >
                  {/* Shine Effect */}
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute top-0 left-[-100%] h-full w-[50%] bg-white/40 skew-x-12 transition-all duration-700 group-hover:left-[120%]"></span>
                  </span>

                  <span className="relative z-10">
                    GET STARTED
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.form>

          {/* Bottom Text */}
          {/* <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.7,
            }}
            viewport={{ once: true }}
            className="mt-8 text-sm font-normal text-gray-500"
          >
            Trusted by growing companies and professionals worldwide
          </motion.p> */}
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;