"use client";

import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      title: "Smart Hiring",
      desc: "Find skilled professionals and connect with the right talent faster.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
    {
      title: "Team Management",
      desc: "Organize employees, roles, and workflows from one dashboard.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      title: "Instant Notifications",
      desc: "Stay updated with alerts, updates, and important activities.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Custom Dashboards",
      desc: "Create dashboards tailored to your company workflows and teams.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        </svg>
      ),
    },
    {
      title: "Real-Time Collaboration",
      desc: "Collaborate with teams and professionals instantly from anywhere.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="FeaturesSection"
      className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24"
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Heading Animation */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-sm font-normal tracking-widest uppercase">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
              POWERFUL FEATURES
            </span>
          </p>

          <h2 className="mt-6 text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Everything Your Company Needs In One Platform
          </h2>

          <p className="mt-6 text-lg font-normal text-gray-400">
            Manage employees, track company requirements, connect with skilled
            professionals, and streamline collaboration through a modern
            platform built for growing teams and businesses.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid max-w-6xl grid-cols-1 mx-auto mt-12 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 sm:mt-16 lg:mt-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-transparent"
            >
              <div className="absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/20 to-purple-500/20"></div>

              <div className="relative">
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500"
                >
                  {feature.icon}
                </motion.div>

                <h3 className="mt-6 text-xl text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;