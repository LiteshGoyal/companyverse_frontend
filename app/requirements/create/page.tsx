"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import ProtectedRoute from "@/app/components/ProtectedRoute";

import DashboardLayout from "@/app/components/dashboard/DashboardLayout";

import { createRequirement } from "@/services/requirement.service";

export default function CreateRequirementPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",

    description: "",

    required_skills: "",

    experience_required: "",

    offered_salary: "",

    offered_compensation: "",
  });

  const [loading, setLoading] = useState(false);

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

      await createRequirement(formData);

      router.push("/requirements");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute allowedRoles={["ADMIN", "MANAGER"]}>
      <DashboardLayout>
        <h1 className="text-3xl font-bold mb-6">Create Requirement</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="title"
            placeholder="Requirement Title"
            value={formData.title}
            onChange={handleChange}
            className="
            w-full
            p-3
            border
            rounded-lg
        "
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            rows={5}
            className="
            w-full
            p-3
            border
            rounded-lg
        "
          />

          <input
            type="text"
            name="required_skills"
            placeholder="Required Skills"
            value={formData.required_skills}
            onChange={handleChange}
            className="
            w-full
            p-3
            border
            rounded-lg
        "
          />

          <input
            type="number"
            name="experience_required"
            placeholder="Experience Required"
            value={formData.experience_required}
            onChange={handleChange}
            className="
            w-full
            p-3
            border
            rounded-lg
        "
          />

          <input
            type="number"
            name="offered_salary"
            placeholder="Offered Salary"
            value={formData.offered_salary}
            onChange={handleChange}
            className="
            w-full
            p-3
            border
            rounded-lg
        "
          />

          <input
            type="number"
            name="offered_compensation"
            placeholder="Offered Compensation"
            value={formData.offered_compensation}
            onChange={handleChange}
            className="
            w-full
            p-3
            border
            rounded-lg
        "
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
            {loading ? "Creating..." : "Create Requirement"}
          </button>
        </form>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
