"use client";

import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Albert Flores",
      role: "Founder of GearUp",
      image:
        "https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/6/portrait-male.png",
      play: true,
    },
    {
      name: "Leslie Alexander",
      role: "Co-Founder of Womenia",
      image:
        "https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/6/portrait-female-1.png",
      play: false,
    },
    {
      name: "Courtney Henry",
      role: "Founder of CH Beauty",
      image:
        "https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/6/portrait-female-2.png",
      play: true,
    },
  ];

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Heading Animation */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Trusted By Companies & Professionals Worldwide
          </h2>

          <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
            Thousands of companies, recruiters, developers, and managers use
            CompanyVerse to connect, collaborate, and build stronger
            professional networks every day.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid max-w-md grid-cols-1 gap-5 mx-auto mt-12 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-3 sm:gap-6 lg:gap-8 xl:gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="relative overflow-hidden group rounded-2xl"
            >
              {/* Image */}
              <motion.img
                whileHover={{
                  scale: 1.1,
                  rotate: -2,
                }}
                transition={{ duration: 0.4 }}
                className="object-cover w-full"
                src={item.image}
                alt=""
              />

              {/* Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>

              {/* Floating Glow */}
              <div className="absolute inset-0 opacity-0 transition-all duration-500 bg-gradient-to-t from-cyan-500/20 to-purple-500/20 group-hover:opacity-100"></div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 w-full px-6 py-5">
                <div className="flex items-center justify-between">
                  <div>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3 + index * 0.2,
                      }}
                      viewport={{ once: true }}
                      className="text-base font-semibold text-white"
                    >
                      {item.name}
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.4 + index * 0.2,
                      }}
                      viewport={{ once: true }}
                      className="mt-1 text-sm font-normal text-gray-300"
                    >
                      {item.role}
                    </motion.p>
                  </div>

                  {/* Button */}
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                      rotate: 8,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    type="button"
                    className="inline-flex items-center justify-center text-white transition-all duration-200 border-2 border-white pointer-events-auto h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-lg hover:bg-white/20"
                  >
                    {item.play ? (
                      <svg
                        className="w-auto h-5 -mr-0.5"
                        viewBox="0 0 15 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 3.80425V14.1958C1 15.7666 2.7279 16.7243 4.06 15.8917L12.3732 10.696C13.6265 9.91266 13.6265 8.08734 12.3732 7.304L4.06 2.10825C2.7279 1.27569 1 2.23338 1 3.80425Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-auto h-5"
                        viewBox="0 0 13 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="1"
                          y1="1"
                          x2="0.999999"
                          y2="16"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <line
                          x1="12"
                          y1="1"
                          x2="12"
                          y2="16"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Link */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center text-sm font-semibold text-blue-600 transition-all duration-200 group hover:text-blue-800 hover:underline"
          >
            See all reviews by our customers

            <motion.svg
              whileHover={{ x: 4, y: -4 }}
              className="w-5 h-5 ml-1"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </motion.svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;