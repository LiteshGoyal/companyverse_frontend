"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import ProtectedRoute from "@/app/components/ProtectedRoute";

import DashboardLayout from "@/app/components/dashboard/DashboardLayout";

import { createRequirement } from "@/services/requirement.service";
import { toast } from "sonner";

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
    if(formData.title===""){
      toast.error("Title can not be empty")
      return
    }else if(formData.description===""){
      toast.error("Description can not be empty")
      return
    }else if(formData.required_skills===""){
      toast.error("Skills can not be empty")
      return
    }else if(formData.experience_required===""){
      toast.error("Experience can not be empty")
      return
    }else if(formData.offered_salary===""){
      toast.error("Salary can not be empty")
      return
    }else if(formData.offered_compensation===""){
      toast.error("Compensation can not be empty")
      return
    }

    try {
      setLoading(true);

      await createRequirement(formData);

      router.push("/requirements");
      toast.success("Requirement Created Successfully");
    } catch (error) {
      toast.error("Failed to create the requirement");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute allowedRoles={["ADMIN", "MANAGER"]}>
      <DashboardLayout>
        <h1 className="text-4xl text-gray-800 font-bold mb-6">
          Create Requirement
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="">
            <label htmlFor=""><span className="text-red-700">*</span>Requirement Title:</label>

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
          </div>
          <div className="">
            <label htmlFor=""><span className="text-red-700">*</span>Description:</label>
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
          </div>

          <div className="">
            <label htmlFor=""><span className="text-red-700">*</span>Required Skills:</label>

            <input
              type="text"
              name="required_skills"
              placeholder="Python, Java, Datascience..."
              value={formData.required_skills}
              onChange={handleChange}
              className="
            w-full
            p-3
            border
            rounded-lg
        "
            />
          </div>
          <div className="">
            <label htmlFor=""><span className="text-red-700">*</span>Experience Required:</label>
            <input
              type="number"
              name="experience_required"
              placeholder="Experience Required (years)"
              value={formData.experience_required}
              onChange={handleChange}
              className="
            w-full
            p-3
            border
            rounded-lg
        "
            />
          </div>
          <div className="">
            <label htmlFor=""><span className="text-red-700">*</span>Offered Salary<span className="text-gray-500">(INR)</span>:</label>
            <input
              type="text"
              name="offered_salary"
              placeholder="Offered Salary"
              value={Number(formData.offered_salary || 0).toLocaleString(
                "en-IN",
              )}
              onChange={(e) => {
                const rawValue = e.target.value.replace(/,/g, "");

                if (!isNaN(Number(rawValue))) {
                  setFormData({
                    ...formData,
                    offered_salary: rawValue,
                  });
                }
              }}
              className=" w-full  p-3 border rounded-lg "
            />
          </div>
          <div className="">
            <label htmlFor=""><span className="text-red-700">*</span>Offered Compensation <span className="text-gray-500">(INR)</span>:</label>
            <input
              type="text"
              name="offered_compensation"
              placeholder="Offered Compensation"
              value={Number(formData.offered_compensation || 0).toLocaleString("en-IN",)}
              onChange={(e) => {
                const rawValue = e.target.value.replace(/,/g, "");

                if (!isNaN(Number(rawValue))) {
                  setFormData({
                    ...formData,
                    offered_compensation: rawValue,
                  });
                }
              }}

              // onChange={handleChange}
              className="
            w-full
            p-3
            border
            rounded-lg
        "
            />
          </div>

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
