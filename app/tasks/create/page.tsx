"use client";

import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

import ProtectedRoute from "@/app/components/ProtectedRoute";
import DashboardLayout from "@/app/components/dashboard/DashboardLayout";

import { createTask } from "@/services/task.service";
import { getCompanyEmployees } from "@/services/company.service";

export default function CreateTaskPage() {
  const router = useRouter();

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    assigned_to: "",
    deadline: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      await createTask(formData);

      router.push("/tasks");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute allowedRoles={["ADMIN", "MANAGER"]}>
      <DashboardLayout>
        <h1 className="text-3xl font-bold mb-6">Create Task</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="title"
            placeholder="Task Title"
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
            placeholder="Task Description"
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

          <select
            name="assigned_to"
            value={formData.assigned_to}
            onChange={handleChange}
            className="
            w-full
            p-3
            border
            rounded-lg
            bg-white
        "
          >
            <option value="">Select Employee</option>

            {employees.map((employee: any) => (
              <option key={employee.id} value={employee.id}>
                {employee.username}
              </option>
            ))}
          </select>

          <input
            type="datetime-local"
            name="deadline"
            value={formData.deadline}
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
            {loading ? "Creating Task..." : "Create Task"}
          </button>
        </form>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
