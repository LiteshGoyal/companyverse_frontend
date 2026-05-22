"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import ProtectedRoute from "@/app/components/ProtectedRoute";
import DashboardLayout from "@/app/components/dashboard/DashboardLayout";

import { addEmployee } from "@/services/company.service";
import { toast } from "sonner";

export default function AddEmployeePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    role: "EMPLOYEE",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      await addEmployee(formData);

      router.push("/employees");
    } catch (error:any) {
      console.log(error);
      if (error?.response?.status === 404) {
        toast.error("No such employee exists");
      }
       else if(error?.response?.status===400) {
        toast.error("Add employee failed", {
          description: "User already belongs to a company",
        });
      }else{
        toast.error("Some error Occured", {description:"Please try again after some time"})
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute allowedRoles={["ADMIN"]}>
      <DashboardLayout>
        <h1 className="text-3xl font-bold mb-6">Add Employee</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Employee Email"
            value={formData.email}
            onChange={handleChange}
            className="
            w-full
            p-3
            border
            rounded-lg
        "
          />

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="
            w-full
            p-3
            border
            rounded-lg
            bg-white
        "
          >
            <option value="EMPLOYEE">Employee</option>

            <option value="MANAGER">Manager</option>
          </select>
          <button
            type="submit"
            disabled={loading}
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
            {loading ? "Adding Employee..." : "Add Employee"}
          </button>
        </form>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
