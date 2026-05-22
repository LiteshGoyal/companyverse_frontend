"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const auth = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  // Reusable Nav Links to avoid repetition
  const navLinks = (
    <>
      <Link
        href="/dashboard"
        onClick={() => setIsOpen(false)}
        className={`mt-3 flex items-center space-x-5 rounded-xl p-3 transition-all ${
          pathname === "/dashboard"
            ? "text-white border border-2 border-l-8 border-purple-400 bg-gradient-to-r to-30% from-purple-400 to-black"
            : ""
        }`}
      >
        <div className="w-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
            />
          </svg>
        </div>
        <p>Dashboard</p>
      </Link>

      <Link
        href="/tasks"
        onClick={() => setIsOpen(false)}
        className={`mt-3 flex items-center space-x-5 rounded-xl p-3 transition-all ${
          pathname === "/tasks"
            ? "text-white border border-2 border-l-8 border-purple-400 bg-gradient-to-r to-30% from-purple-400 to-black"
            : ""
        }`}
      >
        <div className="w-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>
        <p>My Tasks</p>
      </Link>
      <Link
        href="/profile"
        onClick={() => setIsOpen(false)}
        className={`mt-3 flex items-center space-x-5 rounded-xl p-3 transition-all ${
          pathname === "/profile"
            ? "text-white border border-2 border-l-8 border-purple-400 bg-gradient-to-r to-30% from-purple-400 to-black"
            : ""
        }`}
      >
        <div className="w-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>
        <p>Update Profile</p>
      </Link>

      {(auth?.user?.role === "ADMIN" || auth?.user?.role === "MANAGER") && (
        <>
          <Link
            href="/tasks/company"
            onClick={() => setIsOpen(false)}
            className={`mt-3 flex items-center space-x-5 rounded-xl p-3 transition-all ${
              pathname === "/tasks/company"
                ? "text-white border border-2 border-l-8 border-purple-400 bg-gradient-to-r to-30% from-purple-400 to-black"
                : ""
            }`}
          >
            <div className="w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                />
              </svg>
            </div>
            <p>Company Tasks</p>
          </Link>

          <Link
            href="/audit-logs"
            onClick={() => setIsOpen(false)}
            className={`mt-3 flex items-center space-x-5 rounded-xl p-3 transition-all ${
              pathname === "/audit-logs"
                ? "text-white border border-2 border-l-8 border-purple-400 bg-gradient-to-r to-30% from-purple-400 to-black"
                : ""
            }`}
          >
            <div className="w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
                />
              </svg>
            </div>
            <p>Audit Logs</p>
          </Link>

          <Link
            href="/requirements"
            onClick={() => setIsOpen(false)}
            className={`mt-3 flex items-center space-x-5 rounded-xl p-3 transition-all ${
              pathname === "/requirements"
                ? "text-white border border-2 border-l-8 border-purple-400 bg-gradient-to-r to-30% from-purple-400 to-black"
                : ""
            }`}
          >
            <div className="w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
            </div>
            <p>Requirements</p>
          </Link>

          <Link
            href="/marketplace"
            onClick={() => setIsOpen(false)}
            className={`mt-3 flex items-center space-x-5 rounded-xl p-3 transition-all ${
              pathname === "/marketplace"
                ? "text-white border border-2 border-l-8 border-purple-400 bg-gradient-to-r to-30% from-purple-400 to-black"
                : ""
            }`}
          >
            <div className="w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </div>
            <p>Marketplace</p>
          </Link>

          <Link
            href="/employees"
            onClick={() => setIsOpen(false)}
            className={`mt-3 flex items-center space-x-5 rounded-xl p-3 transition-all ${
              pathname === "/employees"
                ? "text-white border border-2 border-l-8 border-purple-400 bg-gradient-to-r to-30% from-purple-400 to-black"
                : ""
            }`}
          >
            <div className="w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
            <p>Employees</p>
          </Link>
        </>
      )}
    </>
  );

  return (
    <>
      {/* Mobile Toggle Burger Button (Visible only on screens below md breakpoint) */}
      <div className="md:hidden absolute top-28 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="p-2 bg-transparent text-black rounded-lg focus:outline-none border border-gray-700"
          aria-label="Toggle Sidebar"
        >
          {isOpen ? (
            /* Close/X Icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            /* Burger Menu Icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dark Overlay Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Desktop Layout - Always static & visible on desktop (`md:flex`) */}
      <aside className="hidden md:flex md:flex-col sticky top-0 h-screen w-64 p-5 bg-black text-white overflow-y-auto">
        <h1 className="text-3xl font-semibold mb-5">{auth?.user?.company}</h1>

        <div className="flex items-center space-x-5 bg-gradient-to-r from-purple-300 to-black rounded-xl p-2 mb-4">
          <div className="w-12 h-12 min-w-[48px] rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
            {auth?.user?.username?.[0]?.toUpperCase()}
          </div>
          <div className="truncate">
            <p className="font-semibold text-black truncate">
              {auth?.user?.username}
            </p>
            <p className="text-sm text-gray-400 truncate">{auth?.user?.role}</p>
          </div>
        </div>

        <nav className="flex flex-col flex-1">{navLinks}</nav>
      </aside>

      {/* Mobile Sliding Drawer Layout - Toggled by state on screens below `md` */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 p-5 bg-black text-white z-40 transform transition-transform duration-300 ease-in-out overflow-y-auto md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Spacer to push content past the absolute header burger icon */}
        <div className="h-12 mb-4" />

        <h1 className="text-3xl font-semibold mb-10">{auth?.user?.company}</h1>

        <div className="flex items-center space-x-5 bg-gradient-to-r from-purple-300 to-black rounded-xl p-2 mb-4">
          <div className="w-12 h-12 min-w-[48px] rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
            {auth?.user?.username?.[0]?.toUpperCase()}
          </div>
          <div className="truncate">
            <p className="font-semibold text-black truncate">
              {auth?.user?.username}
            </p>
            <p className="text-sm text-gray-400 truncate">{auth?.user?.role}</p>
          </div>
        </div>

        <nav className="flex flex-col">{navLinks}</nav>
      </aside>
    </>
  );
}
