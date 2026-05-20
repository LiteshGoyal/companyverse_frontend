"use client";

import { useContext, useEffect, useState } from "react";
import Link from "next/link";

import ProtectedRoute from "@/app/components/ProtectedRoute";
import DashboardLayout from "@/app/components/dashboard/DashboardLayout";
import { getCompanyEmployees } from "@/services/company.service";
import { AuthContext } from "@/context/AuthContext";
import DashboardSkeletonLoader from "../components/Loading/loading";


export default function EmployeesPage() {
  const auth  = useContext(AuthContext)

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getCompanyEmployees();

        setEmployees(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

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
        <h1 className="text-3xl font-bold mb-6">Employees</h1>
        {auth?.user?.role === "ADMIN" && (
          <Link
            href="/employees/add"
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
            Add Employee
          </Link>
        )}

        <div className="space-y-4">
          {employees.length === 0 && (
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-500">No employees found</p>
            </div>
          )}

          {employees.map((employee: any) => (
            <div key={employee.id} className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold">
                <Link
                  href={`/employees/${employee.id}`}
                  className="
        text-2xl
        font-semibold
        hover:underline
    "
                >
                  {employee.username}
                </Link>
              </h2>

              <p className="text-gray-600 mt-2">{employee.email}</p>

              <div className="mt-4 space-y-2">
                <p>
                  <span className="font-semibold">Role:</span>
                  <span
                    className={`
        px-3
        py-1
        rounded-full
        text-sm
        font-medium

        ${employee.role === "ADMIN" && "bg-red-200 text-red-800"}

        ${employee.role === "MANAGER" && "bg-yellow-200 text-yellow-800"}

        ${employee.role === "EMPLOYEE" && "bg-green-200 text-green-800"}
    `}
                  >
                    {employee.role}
                  </span>
                </p>

                <p>
                  <span className="font-semibold">Position:</span>{" "}
                  {employee.current_position}
                </p>

                <p>
                  <span className="font-semibold">Experience:</span>{" "}
                  {employee.experience_years} years
                </p>
              </div>
            </div>
          ))}
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
