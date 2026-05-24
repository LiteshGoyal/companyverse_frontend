"use client";

import { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import ProtectedRoute from "@/app/components/ProtectedRoute";
import DashboardLayout from "@/app/components/dashboard/DashboardLayout";

import {
  getRequirementResponses,
  updateRequirementResponseStatus,
} from "@/services/requirement.service";
import DashboardSkeletonLoader from "@/app/components/Loading/loading";
import { toast } from "sonner";

export default function RequirementResponsesPage() {
  const params = useParams();

  const [responses, setResponses] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const data = await getRequirementResponses(Number(params.id));

        setResponses(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchResponses();
  }, []);

  const handleUpdateStatus = async (responseId: number, status: string) => {
    try {
      const updatedResponse = await updateRequirementResponseStatus(responseId, status);

      setResponses((prevResponses: any) =>
        prevResponses.map((response: any) =>
          response.id === responseId
            ? {
                ...response,
                status,
                contact_email: updatedResponse.contact_email
              }
            : response,
        ),
      );
      toast.success("Requirement status updated to \"CLOSE\"")
    } catch (error) {
      console.log(error);
    }
  };

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
    <ProtectedRoute>
      <DashboardLayout>
        <h1 className="text-3xl font-bold mb-6">Requirement Responses</h1>
        <div className="space-y-4">
          {responses.length === 0 && (
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-500">No responses available</p>
            </div>
          )}

          {responses.map((response: any) => (
            <div key={response.id} className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold">
                {response.employee.username}
              </h2>
              <div className="mt-3 space-y-2">
                <p>
                  <span className="font-semibold">Position:</span>{" "}
                  {response.employee.current_position}
                </p>

                <p>
                  <span className="font-semibold">Skills:</span>{" "}
                  {response.employee.skills}
                </p>
              </div>

              <p className="text-gray-600 mt-2">{response.company}</p>

              <p className="mt-4">{response.message}</p>

              <div className="mt-4 space-y-2">
                <p>
                  <span className="font-semibold">Experience:</span>{" "}
                  {response.employee.experience_years} years
                </p>

                <p>
                  <span className="font-semibold">Rating:</span>{" "}
                  {response.employee.rating}
                </p>

                <div className="mt-4">
                  <span
                    className={`
            px-3
            py-1
            rounded-full
            text-sm
            font-medium

            ${response.status === "PENDING" && "bg-yellow-200 text-yellow-800"}

            ${response.status === "ACCEPTED" && "bg-green-200 text-green-800"}

            ${response.status === "REJECTED" && "bg-red-200 text-red-800"}
        `}
                  >
                    {response.status}
                  </span>
                </div>
              </div>
              {response.contact_email && (
                <div
                  className="
        mt-5
        p-4
        bg-green-50
        border
        border-green-200
        rounded-lg
    "
                >
                  <p className="font-semibold text-green-700">Contact Email</p>

                  <p className="mt-1">{response.contact_email}</p>
                </div>
              )}

              {response.status === "PENDING" && (
                <div className="flex gap-3 mt-5">
                  <button
                    onClick={() => {handleUpdateStatus(response.id, "ACCEPTED"); window.location.reload();}}
                    className="
              px-4
                py-2
                bg-green-600
                text-white
                rounded-lg
                hover:bg-green-700
            "
                  >
                    Accept
                  </button>

                  <button
                    onClick={() => handleUpdateStatus(response.id, "REJECTED")}
                    className="
                px-4
                py-2
                bg-red-600
                text-white
                rounded-lg
                hover:bg-red-700
                "
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
