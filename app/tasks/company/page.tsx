"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import ProtectedRoute from "@/app/components/ProtectedRoute";

import DashboardLayout from "@/app/components/dashboard/DashboardLayout";

import { getCompanyTasks } from "@/services/task.service";
import DashboardSkeletonLoader from "@/app/components/Loading/loading";

export default function CompanyTasksPage() {
  const [tasks, setTasks] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getCompanyTasks();

        setTasks(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const isOverdue = (deadline: string, status: string) => {
    return new Date(deadline) < new Date() && status !== "COMPLETED";
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

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task: any) => task.status === "COMPLETED",
  ).length;

  const pendingTasks = tasks.filter(
    (task: any) => task.status === "PENDING",
  ).length;

  const inProgressTasks = tasks.filter(
    (task: any) => task.status === "IN_PROGRESS",
  ).length;

  const overdueTasks = tasks.filter(
    (task: any) =>
      new Date(task.deadline) < new Date() && task.status !== "COMPLETED",
  ).length;

  return (
    <ProtectedRoute allowedRoles={["ADMIN", "MANAGER"]}>
      <DashboardLayout>
        <div
          className="
                    flex
                    items-center
                    justify-between
                    mb-6
                "
        >
          <h1
            className="
                        text-3xl
                        font-bold
                    "
          >
            Company Tasks
          </h1>

          <Link
            href="/tasks/create"
            className="
                            px-5
                            py-3
                            bg-black
                            text-white
                            rounded-lg
                            hover:bg-gray-800
                        "
          >
            Create Task
          </Link>
        </div>

        <div
          className="
    grid
    md:grid-cols-5
    gap-4
    mb-8
"
        >
          <div
            className="
        bg-white
        p-5
        rounded-lg
        shadow
    "
          >
            <p className="text-gray-500">Total Tasks</p>

            <h2
              className="
            text-3xl
            font-bold
            mt-2
        "
            >
              {totalTasks}
            </h2>
          </div>

          <div
            className="
        bg-white
        p-5
        rounded-lg
        shadow
    "
          >
            <p className="text-gray-500">Pending</p>

            <h2
              className="
            text-3xl
            font-bold
            mt-2
            text-yellow-600
        "
            >
              {pendingTasks}
            </h2>
          </div>

          <div
            className="
        bg-white
        p-5
        rounded-lg
        shadow
    "
          >
            <p className="text-gray-500">In Progress</p>

            <h2
              className="
            text-3xl
            font-bold
            mt-2
            text-blue-600
        "
            >
              {inProgressTasks}
            </h2>
          </div>

          <div
            className="
        bg-white
        p-5
        rounded-lg
        shadow
    "
          >
            <p className="text-gray-500">Completed</p>

            <h2
              className="
            text-3xl
            font-bold
            mt-2
            text-green-600
        "
            >
              {completedTasks}
            </h2>
          </div>

          <div
            className="
        bg-white
        p-5
        rounded-lg
        shadow
    "
          >
            <p className="text-gray-500">Overdue</p>

            <h2
              className="
            text-3xl
            font-bold
            mt-2
            text-red-600
        "
            >
              {overdueTasks}
            </h2>
          </div>
        </div>

        <div className="space-y-4">
          {tasks.length === 0 && (
            <div
              className="
            bg-white
            p-6
            rounded-lg
            shadow
        "
            >
              <p className="text-gray-500">No tasks found</p>
            </div>
          )}

          {tasks.map((task: any) => (
            <div
              key={task.id}
              className="
                bg-white
                p-6
                rounded-lg
                shadow
            "
            >
              <div
                className="
                flex
                items-start
                justify-between
            "
              >
                <div>
                  <h2
                    className="
                        text-2xl
                        font-semibold
                    "
                  >
                    {task.title}
                  </h2>
                  {isOverdue(task.deadline, task.status) && (
                    <div
                      className="
        mt-3
        inline-block
        px-3
        py-1
        bg-red-100
        text-red-700
        rounded-full
        text-sm
        font-medium
    "
                    >
                      Overdue
                    </div>
                  )}

                  <p
                    className="
                        text-gray-600
                        mt-2
                    "
                  >
                    {task.description}
                  </p>
                </div>

                <span
                  className={`
                        px-3
                        py-1
                        rounded-full
                        text-sm
                        font-medium

                        ${
                          task.status === "PENDING" &&
                          "bg-yellow-200 text-yellow-800"
                        }

                        ${
                          task.status === "IN_PROGRESS" &&
                          "bg-blue-200 text-blue-800"
                        }

                        ${
                          task.status === "COMPLETED" &&
                          "bg-green-200 text-green-800"
                        }
                    `}
                >
                  {task.status}
                </span>
              </div>

              <div
                className="
                mt-5
                grid
                md:grid-cols-2
                gap-4
            "
              >
                <div>
                  <p className="font-semibold">Assigned To</p>

                  <p className="text-gray-600">{task.assigned_to_name}</p>
                </div>

                <div>
                  <p className="font-semibold">Assigned By</p>

                  <p className="text-gray-600">{task.assigned_by}</p>
                </div>

                <div>
                  <p className="font-semibold">Deadline</p>

                  <p className="text-gray-600">
                    {new Date(task.deadline).toLocaleString()}
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Created At</p>

                  <p className="text-gray-600">
                    {new Date(task.created_at).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
