"use client";
import { useContext, useEffect, useState } from "react";

import {
  getEmployeeDetail,
  updateEmployeeRole,
  removeEmployee,
} from "@/services/company.service";
import { useParams, useRouter } from "next/navigation";

import ProtectedRoute from "@/app/components/ProtectedRoute";


import DashboardLayout from "@/app/components/dashboard/DashboardLayout";
import { rateEmployee } from "@/services/rating.service";
import { AuthContext } from "@/context/AuthContext";
import DashboardSkeletonLoader from "@/app/components/Loading/loading";

export default function EmployeeProfilePage() {
  const params = useParams();
  const router = useRouter();
  const auth = useContext(AuthContext)

  const [employee, setEmployee] = useState<any>(null);
  const [updatingRole, setUpdatingRole] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [removingEmployee, setRemovingEmployee] = useState(false);

  const [ratingData, setRatingData] = useState({
    rating: "",
    feedback: "",
  });

  const [ratingLoading, setRatingLoading] = useState(false);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const data = await getEmployeeDetail(params.id as string);

        setEmployee(data);
      } catch (error: any) {
        console.log(error);
        setError(error?.response?.data?.error || "Failed to load employee");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, []);

  const handleRatingChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRatingData({
      ...ratingData,

      [e.target.name]: e.target.value,
    });
  };

  const handleRateEmployee = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setRatingLoading(true);

      await rateEmployee({
        employee: employee.id,

        rating: ratingData.rating,

        feedback: ratingData.feedback,
      });

      setRatingData({
        rating: "",

        feedback: "",
      });

      setMessage("Employee rated successfully");
    } catch (error: any) {
      setError(error?.response?.data?.error || "Failed to rate employee");
    } finally {
      setRatingLoading(false);
    }
  };

  const handleRemoveEmployee = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this employee?",
    );

    if (!confirmed) {
      return;
    }

    try {
      setRemovingEmployee(true);

      await removeEmployee(employee.id);

      router.push("/employees");
    } catch (error: any) {
      setError(error?.response?.data?.error || "Failed to remove employee");
    } finally {
      setRemovingEmployee(false);
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

  if (error) {
    return (
      <ProtectedRoute allowedRoles={["ADMIN", "MANAGER"]}>
        <DashboardLayout>
          <div
            className="
                    bg-red-100
                    text-red-700
                    p-4
                    rounded-lg
                "
          >
            {error}
          </div>
        </DashboardLayout>
      </ProtectedRoute>
    );
  }

  const handleRoleUpdate = async (role: string) => {
    setMessage("");
    setError("");
    try {
      setUpdatingRole(true);

      await updateEmployeeRole(employee.id, role);

      setEmployee({
        ...employee,
        role,
      });
      setMessage("Role updated successfully");
    } catch (error) {
      console.log(error);
      setError("Failed to update role");
    } finally {
      setUpdatingRole(false);
    }
  };

  return (
    <ProtectedRoute allowedRoles={["ADMIN"]}>
      <DashboardLayout>
        <h1 className="text-3xl font-bold mb-6">Employee Profile</h1>

        <div
          className="
    bg-white
    p-6
    rounded-lg
    shadow
"
        >
          <h2
            className="
        text-2xl
        font-semibold
    "
          >
            {employee.username}
          </h2>
          <div className="mt-4">
            <span
              className="
        px-4
        py-2
        bg-yellow-100
        text-yellow-800
        rounded-full
        font-semibold
    "
            >
              Average Rating: {employee.average_rating || "Not Rated"}/ 5
            </span>
          </div>

          <p
            className="
        text-gray-600
        mt-2
    "
          >
            {employee.email}
          </p>

          <div
            className="
        mt-5
        space-y-3
    "
          >
            <p>
              <span className="font-semibold">Role:</span> {employee.role}
            </p>
            <div className="mt-5 flex gap-3">
              {message && (
                <p
                  className="
        text-green-600
        font-medium
    "
                >
                  {message}
                </p>
              )}

              {error && (
                <p
                  className="
        text-red-600
        font-medium
    "
                >
                  {error}
                </p>
              )}
              {employee.role !== "ADMIN" && (
                <div>
                  {employee.role !== "EMPLOYEE" && (
                    <button
                      onClick={() => handleRoleUpdate("EMPLOYEE")}
                      disabled={updatingRole}
                      className="
                px-4
                py-2
                bg-green-600
                text-white
                rounded-lg
                hover:bg-green-700
                disabled:bg-gray-400
            "
                    >
                      Make Employee
                    </button>
                  )}

                  {employee.role !== "MANAGER" && (
                    <button
                      onClick={() => handleRoleUpdate("MANAGER")}
                      disabled={updatingRole}
                      className="
                px-4
                py-2
                bg-yellow-500
                text-white
                rounded-lg
                hover:bg-yellow-600
                disabled:bg-gray-400
            "
                    >
                      Make Manager
                    </button>
                  )}
                </div>
              )}
            </div>

            {auth?.user?.id !== employee.id && auth?.user?.role === "ADMIN" && (
              <div className="mt-6">
                <button
                  onClick={handleRemoveEmployee}
                  disabled={removingEmployee}
                  className="
                px-5
                py-3
                bg-red-600
                text-white
                rounded-lg
                hover:bg-red-700
                disabled:bg-gray-400
            "
                >
                  {removingEmployee ? "Removing..." : "Remove Employee"}
                </button>
              </div>
            )}

            <p>
              <span className="font-semibold">Position:</span>{" "}
              {employee.current_position}
            </p>

            <p>
              <span className="font-semibold">Experience:</span>{" "}
              {employee.experience_years} years
            </p>

            <p>
              <span className="font-semibold">Skills:</span> {employee.skills}
            </p>

            <p>
              <span className="font-semibold">Bio:</span> {employee.bio}
            </p>
          </div>
          <form
            onSubmit={handleRateEmployee}
            className="
        mt-8
        border-t
        pt-6
        space-y-4
    "
          >
            <h3
              className="
        text-xl
        font-semibold
    "
            >
              Rate Employee
            </h3>

            <input
              type="number"
              name="rating"
              min="1"
              max="5"
              placeholder="Rating (1-5)"
              value={ratingData.rating}
              onChange={handleRatingChange}
              className="
            w-full
            p-3
            border
            rounded-lg
        "
            />

            <textarea
              name="feedback"
              placeholder="Feedback"
              rows={4}
              value={ratingData.feedback}
              onChange={handleRatingChange}
              className="
            w-full
            p-3
            border
            rounded-lg
        "
            />

            <button
              type="submit"
              disabled={ratingLoading}
              className="
            px-5
            py-3
            bg-black
            text-white
            rounded-lg
            hover:bg-gray-800
            disabled:bg-gray-400
        "
            >
              {ratingLoading ? "Submitting..." : "Submit Rating"}
            </button>
          </form>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
