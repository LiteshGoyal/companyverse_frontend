"use client";

import { useEffect, useRef, useState } from "react";

interface AnimateOnScrollProps {
  className?: string;
}
const Features = ({ className = "" }: AnimateOnScrollProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Disconnect the observer if you only want it to animate once
          if (elementRef.current) observer.unobserve(elementRef.current);
        }
      },
      {
        root: null, // Defaults to the viewport
        threshold: 0.1, // Triggers when 10% of the element is visible
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);
  return (
    <section
      id="FeaturesSection"
      className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24"
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-normal tracking-widest uppercase">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
              {" "}
              POWERFUL FEATURES{" "}
            </span>
          </p>
          <h2 ref={elementRef}
            className={`mt-6 text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl  transition-all duration-700 ease-out ${className} 
                ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-20 opacity-0"
                }`}
          >
            Everything Your Company Needs In One Platform
          </h2>
          <p className="mt-6 text-lg font-normal text-gray-400">
            Manage employees, track company requirements, connect with skilled
            professionals, and streamline collaboration through a modern
            platform built for growing teams and businesses.
          </p>
        </div>

        <div className="grid max-w-6xl grid-cols-1 mx-auto mt-12 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 sm:mt-16 lg:mt-20">
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-transparent">
            <div className="absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/20 to-purple-500/20"></div>

            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500">
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
              </div>

              <h3 className="mt-6 text-xl text-white">Smart Hiring</h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Find skilled professionals and connect with the right talent
                faster.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-transparent">
            <div className="absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/20 to-purple-500/20"></div>

            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500">
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
              </div>

              <h3 className="mt-6 text-xl text-white">Team Management</h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Organize employees, roles, and workflows from one dashboard.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-transparent">
            <div className="absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/20 to-purple-500/20"></div>

            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500">
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
              </div>

              <h3 className="mt-6 text-xl text-white">Instant Notifications</h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Stay updated with alerts, updates, and important activities.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-transparent">
            <div className="absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/20 to-purple-500/20"></div>

            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500">
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
              </div>

              <h3 className="mt-6 text-xl text-white">Custom Dashboards</h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Create dashboards tailored to your company workflows and teams.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-transparent">
            <div className="absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/20 to-purple-500/20"></div>

            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500">
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
              </div>

              <h3 className="mt-6 text-xl text-white">
                Real-Time Collaboration
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Collaborate with teams and professionals instantly from
                anywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
