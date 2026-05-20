"use client";

import DashboardLayout from "@/app/components/dashboard/DashboardLayout";
import ProtectedRoute from "@/app/components/ProtectedRoute";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { getCompanyEmployees } from "@/services/company.service";
import { respondToRequirement } from "@/services/requirement.service";

export default function RespondRequirementPage() {
  const params = useParams();
  const router = useRouter();

  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getCompanyEmployees();

        setEmployees(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEmployees();
  }, []);

  const handleSubmitResponse = async () => {
    setError("");
    try {
      setSubmitting(true);

      await respondToRequirement(params.id as string, {
        employee: selectedEmployee,
        message,
      });
      alert("Response successfully submitted");
      router.push("/marketplace");
    } catch (error: any) {
      setError(error?.response?.data?.error || "Failed to submit response");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <h1 className="text-3xl font-bold mb-6">Respond To Requirement</h1>
        <p>Requirement ID: {params.id}</p>

        <div className="mt-6">
          <label htmlFor="" className="block mb-2 font-semibold">
            Select Employee
          </label>

          <select
            name=""
            id=""
            value={selectedEmployee}
            onChange={(e) => setSelectedEmployee(e.target.value)}
            className="p-3 border rounded-lg bg-white w-full"
          >
            <option value="">Select Employee</option>
            {employees.map((employee: any) => (
              <option key={employee.id} value={employee.id}>
                {employee.username} - {employee.current_position}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-6">
          <label className="block mb-2 font-semibold">Message</label>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            placeholder="
            Tell why this employee is suitable...
        "
            className="
            w-full
            p-3
            border
            rounded-lg
            bg-white
        "
          />
        </div>
        {error && <p className="mt-4 text-red-500">{error}</p>}

        <button
          onClick={handleSubmitResponse}
          disabled={submitting || !selectedEmployee}
          className="mt-6 px-5 py-3 bg-black text-white rounded-lg hover:bg-gray-800 disabled:bg-gray-400"
        >
          {submitting ? "Submitting" : "Submit Response"}
        </button>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
