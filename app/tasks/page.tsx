"use client";

import { useEffect, useState } from "react";

import ProtectedRoute from "../components/ProtectedRoute";
import DashboardLayout from "../components/dashboard/DashboardLayout";

import { getTasks, updateTaskStatus } from "@/services/task.service";
import DashboardSkeletonLoader from "../components/Loading/loading";

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingTaskId, setUpdatingTaskId] = useState<number | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const data = await getTasks();

        setTasks(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    fetchTasks();
  }, []);

  const handleCompleteTask = async (taskId: number) => {
    setUpdatingTaskId(taskId);
    try {
      await updateTaskStatus(taskId, "COMPLETED");
      setTasks((prevTasks: any) =>
        prevTasks.map((task: any) =>
          task.id === taskId ? { ...task, status: "COMPLETED" } : task,
        ),
      );
      setUpdatingTaskId(null);
    } catch (error) {
      setUpdatingTaskId(null);
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

  const handleUpdateStatus = async (taskId: number, status: string) => {
    try {
      await updateTaskStatus(taskId, status);

      setTasks((prevTasks: any) =>
        prevTasks.map((task: any) =>
          task.id === taskId
            ? {
                ...task,
                status,
              }
            : task,
        ),
      );
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <h1 className="text-3xl font-bold mb-6">Tasks</h1>

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
              <p className="text-gray-500">No tasks assigned</p>
            </div>
          )}

          {tasks.map((task: any) => {
            const isOverdue =
              new Date(task.deadline) < new Date() &&
              task.status !== "COMPLETED";

            return (
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

                {isOverdue && (
                  <div
                    className="
                        mt-4
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

                <div
                  className="
                    mt-5
                    grid
                    md:grid-cols-2
                    gap-4
                "
                >
                  <div>
                    <p className="font-semibold">Assigned By</p>

                    <p className="text-gray-600">{task.assigned_by}</p>
                  </div>

                  <div>
                    <p className="font-semibold">Deadline</p>

                    <p
                      className={`
                                ${
                                  isOverdue
                                    ? "text-red-600 font-semibold"
                                    : "text-gray-600"
                                }
                            `}
                    >
                      {new Date(task.deadline).toLocaleString()}
                    </p>
                  </div>
                  <div
                    className="
    mt-5
    flex
    gap-3
    flex-wrap
"
                  >
                    {task.status !== "IN_PROGRESS" || task.status !== "COMPLETED" && (
                      <button
                        onClick={() =>
                          handleUpdateStatus(task.id, "IN_PROGRESS")
                        }
                        className="
                px-4
                py-2
                bg-blue-600
                text-white
                rounded-lg
                hover:bg-blue-700
            "
                      >
                        Start Task
                      </button>
                    )}

                    {task.status !== "COMPLETED" && (
                      <button
                        onClick={() => handleUpdateStatus(task.id, "COMPLETED")}
                        className="
                px-4
                py-2
                bg-green-600
                text-white
                rounded-lg
                hover:bg-green-700
            "
                      >
                        Complete Task
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
