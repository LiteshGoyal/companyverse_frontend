"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import DashboardLayout from "@/app/components/dashboard/DashboardLayout";
import ProtectedRoute from "@/app/components/ProtectedRoute";

import { Building2, Plus, Users } from "lucide-react";

import axios from "axios";

export default function CompaniesPage() {
  const [companies, setCompanies] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/companies/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setCompanies(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  return (
        <div className="space-y-8 p-8">
          {/* HEADER */}
          <div
            className="
              flex
              flex-col
              lg:flex-row
              lg:items-center
              lg:justify-between
              gap-6
            "
          >
            <div>
              <h1
                className="
                  text-4xl
                  font-bold
                  text-black
                "
              >
                Companies
              </h1>

              <p
                className="
                  text-gray-500
                  mt-2
                  text-lg
                "
              >
                Explore all companies registered on CompanyVerse.
              </p>
            </div>

            <Link
              href="/company/create"
              className="
                inline-flex
                items-center
                gap-2
                px-6
                py-3
                bg-black
                text-white
                rounded-2xl
                hover:bg-gray-900
                transition-all
                shadow-lg
                w-fit
              "
            >
              <Plus size={20} />
              Create Company
            </Link>
          </div>

          {/* LOADING */}
          {loading && (
            <div
              className="
                bg-white
                rounded-3xl
                p-10
                border
                shadow-sm
                text-center
              "
            >
              <p
                className="
                  text-gray-500
                  text-lg
                "
              >
                Loading companies...
              </p>
            </div>
          )}

          {/* EMPTY STATE */}
          {!loading && companies.length === 0 && (
            <div
              className="
                  bg-white
                  rounded-3xl
                  p-16
                  border
                  shadow-sm
                  text-center
                "
            >
              <div
                className="
                    w-20
                    h-20
                    rounded-full
                    bg-gray-100
                    flex
                    items-center
                    justify-center
                    mx-auto
                    mb-6
                  "
              >
                <Building2
                  className="
                      text-gray-500
                    "
                  size={36}
                />
              </div>

              <h2
                className="
                    text-2xl
                    font-semibold
                  "
              >
                No Companies Yet
              </h2>

              <p
                className="
                    text-gray-500
                    mt-3
                  "
              >
                Be the first one to create a company.
              </p>
            </div>
          )}

          {/* COMPANIES GRID */}
          {!loading && companies.length > 0 && (
            <div
              className="
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  xl:grid-cols-3
                  gap-6
                "
            >
              {companies.map((company: any) => (
                <div
                  key={company.id}
                  className="
                        bg-white
                        border
                        rounded-3xl
                        p-7
                        shadow-sm
                        hover:shadow-xl
                        transition-all
                        duration-300
                        group
                      "
                >
                  {/* ICON */}
                  <div
                    className="
                          w-14
                          h-14
                          rounded-2xl
                          bg-violet-100
                          flex
                          items-center
                          justify-center
                          mb-6
                          group-hover:scale-110
                          transition-all
                        "
                  >
                    <Building2
                      className="
                            text-violet-600
                          "
                    />
                  </div>

                  {/* NAME */}
                  <h2
                    className="
                          text-2xl
                          font-bold
                          text-black
                        "
                  >
                    {company.name}
                  </h2>

                  {/* DESCRIPTION */}
                  <p
                    className="
                          text-gray-500
                          mt-3
                          line-clamp-3
                        "
                  >
                    {company.description || "No description available."}
                  </p>

                  
                </div>
              ))}
            </div>
          )}
        </div>
  );
}
