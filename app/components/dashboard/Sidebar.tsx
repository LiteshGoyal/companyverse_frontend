"use client";

import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { usePathname } from "next/navigation";


export default function Sidebar() {
  const pathname = usePathname();
  const auth = useContext(AuthContext);

  return (
    <aside className="sticky top-0 w-64 p-5 bg-black text-white">
      <h1 className="text-3xl font-semibold mb-10">{auth?.user?.company}</h1>

      <div className=" flex items-center space-x-5 bg-gradient-to-r from-purple-300 to-black rounded-xl p-2">
        <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
          {auth?.user?.username[0].toUpperCase()}
        </div>
        <div>
          <p className="font-semibold text-black">{auth?.user?.username}</p>

          <p className="text-sm text-gray-400">{auth?.user?.role}</p>
        </div>
      </div>

      <nav className="flex flex-col">
        <Link
          href="/dashboard"
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
              className="  w-8"
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
          href="/notifications"
          className={`mt-3 flex items-center space-x-5 rounded-xl p-3 transition-all ${
          pathname === "/notifications"
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
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
          </div>
          <p>Notifications</p>
        </Link>
        <Link
          href="/tasks"
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
              className="  w-8"
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
        {(auth?.user?.role === "ADMIN" || auth?.user?.role === "MANAGER") && (
          <>
            <Link
              href="/tasks/company"
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
                  className="  w-8"
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
                  className="  w-8"
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
                  className="  w-8"
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
                  className="  w-8"
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
                  className="  w-8"
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
      </nav>
    </aside>
  );
}
