"use client";

import { useEffect, useState } from "react";

import ProtectedRoute from "@/app/components/ProtectedRoute";
import DashboardLayout from "@/app/components/dashboard/DashboardLayout";
import {
  closeRequirement,
  getMyRequirements,
} from "@/services/requirement.service";

import Link from "next/link";
import DashboardSkeletonLoader from "../components/Loading/loading";

export default function RequirementsPage() {
  const [requirements, setRequirements] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequirements = async () => {
      try {
        const data = await getMyRequirements();

        setRequirements(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequirements();
  }, []);

  const handleCloseRequirement = async (requirementId: number) => {
    try {
      await closeRequirement(requirementId);

      setRequirements((prevRequirements: any) =>
        prevRequirements.map((requirement: any) =>
          requirement.id === requirementId
            ? {
                ...requirement,
                status: "CLOSED",
              }
            : requirement,
        ),
      );
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <ProtectedRoute allowedRoles={["ADMIN", "MANAGER"]}>
        <DashboardLayout>
          <DashboardSkeletonLoader />
        </DashboardLayout>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute allowedRoles={["ADMIN", "MANAGER"]}>
      <DashboardLayout>
        <h1 className="text-3xl font-bold mb-6">My Requirements</h1>
        <Link
          href="/requirements/create"
          className="
        inline-block
        mb-6
        px-5
        py-3
        bg-black
        text-white
        rounded-lg
        hover:bg-gray-800
    "
        >
          Create Requirement
        </Link>
        <div className="space-y-4">
          {requirements.length === 0 && (
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-500">No requirements created yet</p>
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
                  <span className="font-semibold">Skills needed:</span>{" "}
                  {requirement.required_skills}
                </p>
                <p>
                  <span className="font-semibold">Experience required:</span>{" "}
                  {requirement.experience_required} years
                </p>
                <span className="font-semibold">Status:</span>{" "}
                {/* <div className="mt-4"> */}
                  <span
                    className={` px-3 py-1 rounded-full text-sm font-medium ${requirement.status === "OPEN" && "bg-green-200 text-green-800"} ${requirement.status === "CLOSED" && "bg-red-200 text-red-800"} `}
                  >
                    {requirement.status}
                  </span>
              </div>
              <Link
                href={`/requirements/${requirement.id}/responses`}
                className=" inline-block  mt-5 mr-2 px-4 py-2 bg-black text-white rounded-lg  hover:bg-gray-800 "
              >
                View Responses
              </Link>

              {requirement.status !== "CLOSED" && (
                <button
                  onClick={() => handleCloseRequirement(requirement.id)}
                  className="mt-2 md:mt-0  px-4  py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 "
                >
                  Close Requirement
                </button>
              )}
            </div>
          ))}
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
