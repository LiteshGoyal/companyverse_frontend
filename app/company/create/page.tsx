"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import ProtectedRoute from "@/app/components/ProtectedRoute";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

import DashboardLayout from "@/app/components/dashboard/DashboardLayout";
import { getCurrentUser } from "@/services/auth.service";
import { createCompany } from "@/services/company.service";

export default function CreateCompanyPage() {
  const auth = useContext(AuthContext);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
      
      await createCompany(formData);

      const updatedUser = await getCurrentUser();
      auth?.setUser(updatedUser);

      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <h1 className="text-3xl font-bold mb-6">Create Company</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            value={formData.name}
            onChange={handleChange}
            name="name"
            id=""
            required
            placeholder="Company Name"
            className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
          />
          <textarea
            value={formData.description}
            onChange={handleChange}
            name="description"
            id=""
            required
            placeholder="Enter Company Description"
            className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
          />

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
            {loading ? "Creating Company..." : "Create Company"}
          </button>
        </form>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
