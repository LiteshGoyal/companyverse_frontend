"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import ProtectedRoute from "../components/ProtectedRoute";
import DashboardLayout from "../components/dashboard/DashboardLayout";

import { getMarketplaceRequirements } from "@/services/requirement.service";
import DashboardSkeletonLoader from "../components/Loading/loading";

export default function MarketplacePage() {
  const [requirements, setRequirements] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequirements = async () => {
      try {
        const data = await getMarketplaceRequirements();
        setRequirements(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequirements();
  }, []);

  if (loading) {
    return (
      <ProtectedRoute>
        <DashboardLayout>
          <DashboardSkeletonLoader />
        </DashboardLayout>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute allowedRoles={["ADMIN", "MANAGER"]}>
      <DashboardLayout>
        <h1 className="text-3xl font-bold mb-6">Marketplace</h1>
        <div className="space-y-4">
          {requirements.length === 0 && (
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-500">
                No marketplace requirements available
              </p>
            </div>
          )}

          {requirements.map((requirement: any) => (
            <div
              key={requirement.id}
              className="bg-white p-6 rounded-lg shadow"
            >
              <h2 className="text-2xl font-semibold">{requirement.title}</h2>

              <p className="text-gray-600 mt-2">{requirement.description}</p>

              <div className="mt-4 space-y-2">
                <p>
                  <span className="font-semibold">Skills:</span>{" "}
                  {requirement.required_skills}
                </p>

                <p>
                  <span className="font-semibold">Experience:</span>{" "}
                  {requirement.experience_required} years
                </p>

                <p>
                  <span className="font-semibold">Salary:</span> ₹
                  {requirement.offered_salary}
                </p>

                <p>
                  <span className="font-semibold">Compensation:</span> ₹
                  {requirement.offered_compensation}
                </p>
                <Link
                  href={`/marketplace/${requirement.id}`}
                  className="
        inline-block
        mt-5
        px-4
        py-2
        bg-black
        text-white
        rounded-lg
        hover:bg-gray-800
    "
                >
                  Respond
                </Link>
              </div>
            </div>
          ))}
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
