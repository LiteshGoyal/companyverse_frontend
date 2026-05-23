"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative py-12 overflow-hidden bg-black sm:pb-16 lg:pb-20 xl:pb-24">
      
      {/* Animated Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"
      />

      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl relative">
        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.8,
              }}
              className="inline-flex items-center px-4 py-2 mb-6 border border-white/10 rounded-full bg-white/5 backdrop-blur-xl"
            >
              <div className="w-2 h-2 mr-2 bg-cyan-400 rounded-full animate-pulse"></div>

              <span className="text-sm text-gray-300">
                Trusted by 50k+ users worldwide
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-4xl font-normal leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Where Companies Meet{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Exceptional Talent
              </span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.9,
              }}
              className="mt-6 text-lg leading-8 text-gray-400 sm:mt-8"
            >
              Connecting companies with skilled professionals, developers,
              managers, and industry experts through one intelligent platform
              designed to simplify hiring, collaboration, networking, and
              long-term business growth for modern organizations.
            </motion.p>

            {/* Ratings */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.7,
                duration: 0.8,
              }}
              className="mt-10"
            >
              <p className="text-lg font-normal text-white">
                Trusted by 50k+ users
              </p>

              <div className="flex items-center mt-4">
                
                {/* Animated Stars */}
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <motion.svg
                      key={item}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.8 + item * 0.1,
                        type: "spring",
                        stiffness: 300,
                      }}
                      whileHover={{
                        scale: 1.3,
                        rotate: 12,
                      }}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.104L3.57508 11.6626C2.63463 10.9794 3.11796 9.49182 4.28043 9.49182H8.43387C8.95374 9.49182 9.41448 9.15706 9.57513 8.66264L10.8586 4.71248Z"
                        fill="url(#b)"
                      />
                      <defs>
                        <linearGradient
                          id="b"
                          x1="3.07813"
                          y1="3.8833"
                          x2="23.0483"
                          y2="6.90161"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0%"
                            stopColor="var(--color-cyan-500)"
                          />
                          <stop
                            offset="100%"
                            stopColor="var(--color-purple-500)"
                          />
                        </linearGradient>
                      </defs>
                    </motion.svg>
                  ))}
                </div>

                <span className="ml-2 text-base text-white">
                  4.1/5
                </span>

                <span className="ml-2 text-base text-gray-500">
                  (14k Reviews)
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >
            
            {/* Floating Blob */}
            <motion.div
              animate={{
                y: [0, -25, 0],
                rotate: [0, 6, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0"
            >
              <svg
                className="blur-3xl filter opacity-70"
                filter="blur(64px)"
                width="444"
                height="536"
                viewBox="0 0 444 536"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M225.919 112.719C343.98 64.6648 389.388 -70.487 437.442 47.574C485.496 165.635 253.266 481.381 135.205 529.435C17.1445 577.488 57.9596 339.654 9.9057 221.593C-38.1482 103.532 107.858 160.773 225.919 112.719Z"
                  fill="url(#c)"
                />
                <defs>
                  <linearGradient
                    id="c"
                    x1="82.7339"
                    y1="550.792"
                    x2="-39.945"
                    y2="118.965"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0%"
                      stopColor="var(--color-cyan-500)"
                    />
                    <stop
                      offset="100%"
                      stopColor="var(--color-purple-500)"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Noise */}
            <div className="absolute inset-0">
              <img
                className="object-cover w-full h-full opacity-50"
                src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
                alt=""
              />
            </div>

            {/* Main Illustration */}
            <motion.img
              animate={{
                y: [0, -18, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.03,
              }}
              className="relative w-full max-w-md mx-auto"
              src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/2/illustration.png"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}