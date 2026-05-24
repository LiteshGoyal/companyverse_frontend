"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-150px] left-[-100px] h-[400px] w-[400px] rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-100px] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4 text-violet-400" />
          <span className="text-sm text-gray-300">
            Contact CompanyVerse
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl text-center text-5xl font-black leading-tight md:text-7xl"
        >
          Let’s Build The
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
            {" "}
            Future Together
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 max-w-2xl text-center text-lg leading-relaxed text-gray-400 md:text-xl"
        >
          Have an idea, startup, collaboration, or project in mind?
          Reach out to CompanyVerse and let’s create something extraordinary.
        </motion.p>

        {/* Contact Cards */}
        <div className="mt-20 grid w-full grid-cols-1 gap-8 md:grid-cols-3">
          {/* Phone */}
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="relative z-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/20">
                <Phone className="h-8 w-8 text-violet-400" />
              </div>

              <h3 className="text-2xl font-bold">Call Us</h3>

              <p className="mt-3 text-gray-400">
                Speak directly with our team.
              </p>

              <a
                href="tel:+919781571558"
                className="mt-8 flex items-center gap-2 text-lg font-semibold text-white transition hover:text-violet-400"
              >
                +91 97815 71558
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="relative z-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/20">
                <Mail className="h-8 w-8 text-blue-400" />
              </div>

              <h3 className="text-2xl font-bold">Email Us</h3>

              <p className="mt-3 text-gray-400">
                Send us your queries anytime.
              </p>

              <a
                href="mailto:hello@companyverse.in"
                className="mt-8 flex items-center gap-2 text-lg font-semibold text-white transition hover:text-blue-400"
              >
                liteshgoyal55@gmail.com
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="relative z-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-fuchsia-500/20">
                <MapPin className="h-8 w-8 text-fuchsia-400" />
              </div>

              <h3 className="text-2xl font-bold">Location</h3>

              <p className="mt-3 text-gray-400">
                Based in India, working globally.
              </p>

              <div className="mt-8 flex items-center gap-2 text-lg font-semibold text-white">
                Bengaluru, India
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-24 flex flex-col items-center"
        >
          <h2 className="text-center text-3xl font-bold md:text-5xl">
            Ready To Launch Something Amazing?
          </h2>

          <p className="mt-4 max-w-xl text-center text-gray-400">
            CompanyVerse helps startups, creators, and businesses
            transform ideas into digital experiences.
          </p>

          <motion.a
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            href="mailto:hello@companyverse.in"
            className="mt-10 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 px-8 py-4 text-lg font-semibold shadow-2xl shadow-violet-500/30 transition"
          >
            Let’s Connect
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}