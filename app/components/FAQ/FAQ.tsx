"use client";

import React, { useState } from "react";

const FAQ = () => {
  const [active, setActive] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setActive(active === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "How is CompanyVerse different from other platforms?",
      answer:
        "CompanyVerse helps companies connect with developers, managers, and professionals through a modern platform designed for collaboration, hiring, and business growth.",
    },
    {
      id: 2,
      question: "How long do you provide support?",
      answer:
        "We provide continuous support and platform updates to ensure companies and professionals have the best possible experience.",
    },
    {
      id: 3,
      question: "Can startups use CompanyVerse?",
      answer:
        "Yes, startups, enterprises, recruiters, and professionals can all use CompanyVerse to build connections and grow faster.",
    },
    {
      id: 4,
      question: "What features are included?",
      answer:
        "CompanyVerse includes company profiles, professional networking, hiring tools, dashboards, messaging, and collaboration features.",
    },
  ];

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Frequently Asked Questions
          </h2>

          <p className="max-w-lg mx-auto mt-6 text-base text-gray-600 font-pj">
            Everything you need to know about CompanyVerse and how it helps
            companies and professionals connect together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-8 sm:mt-14">
          <div className="space-y-4 transition">
            {faqs.map((faq) => {
              const expanded = active === faq.id;

              return (
                <div key={faq.id} className="relative">
                  {expanded && (
                    <div className="absolute -inset-1">
                      <div
                        className="w-full h-full mx-auto opacity-30 blur-lg filter"
                        style={{
                          background:
                            "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                        }}
                      ></div>
                    </div>
                  )}

                  <div className="relative overflow-hidden bg-white border border-gray-200 rounded-xl">
                    <h3>
                      <button
                        onClick={() => toggleFAQ(faq.id)}
                        aria-expanded={expanded}
                        className="flex items-center justify-between w-full px-6 py-5 text-xl font-bold text-left text-gray-900 sm:p-8 font-pj"
                      >
                        <span>{faq.question}</span>

                        <span className="ml-4">
                          {expanded ? (
                            <svg
                              className="w-6 h-6 text-gray-900"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M20 12H4"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="w-6 h-6 text-gray-900"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 4v16m8-8H4"
                              />
                            </svg>
                          )}
                        </span>
                      </button>
                    </h3>

                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        expanded
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 sm:px-8 sm:pb-8 text-gray-600">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
