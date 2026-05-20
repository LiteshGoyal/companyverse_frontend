"use client";
import { useContext, useState } from "react";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import Image from "next/image";

export default function Navbar() {
  const auth = useContext(AuthContext);
  const [expanded, setExpanded] = useState(false);
  return (
    <header className="py-4 bg-black sm:py-6" x-data="{expanded: false}">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="shrink-0">
            <Link href="/" title="" className="flex">
              <span className="flex text-white font-bold">
                <Image
                  src="/logo-bgdark.png"
                  alt="logo"
                  width="150"
                  height="50"
                />
              </span>
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-white"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
            >
              {!expanded ? (
                <span aria-hidden="true">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </span>
              ) : (
                <span aria-hidden="true">{/* Close icon */}✖</span>
              )}
            </button>
          </div>

          <nav className="hidden ml-10 mr-auto space-x-10 lg:ml-20 lg:space-x-12 md:flex md:items-center md:justify-start">
            <Link
              href="/"
              title=""
              className="text-lg font-normal text-gray-400 transition-all duration-200 hover:text-white hover:scale-110"
            >
              {" "}
              Home{" "}
            </Link>

            <a
              href="/dashboard"
              title=""
              className="text-lg font-normal text-gray-400 transition-all duration-200 hover:text-white hover:scale-110"
            >
              {" "}
              Dashboard{" "}
            </a>

            <a
              href="/company"
              className="inline-block text-lg font-normal text-gray-400 transition-transform duration-200 ease-out hover:text-white hover:scale-110 origin-left"
            >
              Companies
            </a>

            <a
              href="#"
              title=""
              className="text-lg font-normal text-gray-400 transition-all duration-200 hover:text-white hover:scale-110"
            >
              {" "}
              Contact{" "}
            </a>
          </nav>

          <div className="flex space-x-5">
            {!auth?.accessToken && (
              <div className="flex space-x-5">
                <div className="relative hidden md:items-center md:justify-center md:inline-flex group">
                  <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                  <a
                    href="/auth/signup"
                    title=""
                    className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
                    role="button"
                  >
                    {" "}
                    SignUp{" "}
                  </a>
                </div>
                <div className="relative hidden md:items-center md:justify-center md:inline-flex group">
                  <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                  <a
                    href="/auth/login"
                    title=""
                    className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
                    role="button"
                  >
                    {" "}
                    Login{" "}
                  </a>
                </div>
              </div>
            )}
            {auth?.accessToken && (
              <button onClick={auth?.logout}>
                <div className="relative hidden md:items-center md:justify-center md:inline-flex group">
                  <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                  <a
                    href="/auth/login"
                    title=""
                    className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
                    role="button"
                  >
                    {" "}
                    Logout{" "}
                  </a>
                </div>
              </button>
            )}
          </div>
        </div>

        {expanded && (
          <nav className="md:hidden">
            <div className="flex flex-col pt-8 pb-4 space-y-6">
              <a
                href="#"
                title=""
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white hover:scale-110"
              >
                {" "}
                Home{" "}
              </a>

              <a
                href="#"
                title=""
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white hover:scale-110"
              >
                {" "}
                Features{" "}
              </a>

              <a
                href="#"
                title=""
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white hover:scale-110"
              >
                {" "}
                Companies{" "}
              </a>

              <a
                href="#"
                title=""
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white hover:scale-110"
              >
                {" "}
                Contact{" "}
              </a>

              <div className="relative inline-flex items-center justify-center group">
                {!auth?.accessToken && (
                  <div>
                    <div className="relative hidden md:items-center md:justify-center md:inline-flex group">
                      <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                      <a
                        href="/auth/signup"
                        title=""
                        className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
                        role="button"
                      >
                        {" "}
                        SignUp{" "}
                      </a>
                    </div>
                    <div className="relative hidden md:items-center md:justify-center md:inline-flex group">
                      <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                      <a
                        href="/auth/login"
                        title=""
                        className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
                        role="button"
                      >
                        {" "}
                        Login{" "}
                      </a>
                    </div>
                  </div>
                )}
                {auth?.accessToken && (
                  <button onClick={auth?.logout}>
                    <div className="relative hidden md:items-center md:justify-center md:inline-flex group">
                      <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                      <a
                        href="/auth/login"
                        title=""
                        className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
                        role="button"
                      >
                        {" "}
                        Logout{" "}
                      </a>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
