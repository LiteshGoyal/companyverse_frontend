"use client";

import { useEffect, useState } from "react";

import ProtectedRoute from "@/app/components/ProtectedRoute";

import DashboardLayout from "@/app/components/dashboard/DashboardLayout";

import { getCompanyAuditLogs } from "@/services/auditlog.service";
import DashboardSkeletonLoader from "../components/Loading/loading";

export default function AuditLogsPage() {
  const [logs, setLogs] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const data = await getCompanyAuditLogs();

        setLogs(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchLogs();
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
        <h1
          className="
                    text-3xl
                    font-bold
                    mb-6
                "
        >
          Audit Logs
        </h1>

        <div
          className="
                    space-y-4
                "
        >
          {logs.length === 0 && (
            <div
              className="
                            bg-white
                            p-6
                            rounded-lg
                            shadow
                        "
            >
              <p
                className="
                                text-gray-500
                            "
              >
                No logs found
              </p>
            </div>
          )}

          {logs.map((log: any) => (
            <div
              key={log.id}
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
                                gap-4
                            "
              >
                <div>
                  <p
                    className="
                                        font-semibold
                                        text-lg
                                    "
                  >
                    {log.description}
                  </p>

                  <div
                    className="
                                        mt-3
                                        flex
                                        gap-3
                                        flex-wrap
                                    "
                  >
                    <span
                      className="
                                            px-3
                                            py-1
                                            bg-gray-100
                                            rounded-full
                                            text-sm
                                        "
                    >
                      Actor: {log.actor}
                    </span>

                    <span
                      className="
                                            px-3
                                            py-1
                                            bg-blue-100
                                            text-blue-800
                                            rounded-full
                                            text-sm
                                        "
                    >
                      {log.action}
                    </span>

                    <span
                      className="
                                            px-3
                                            py-1
                                            bg-green-100
                                            text-green-800
                                            rounded-full
                                            text-sm
                                        "
                    >
                      {log.entity_type}
                    </span>
                  </div>
                </div>

                <p
                  className="
                                    text-sm
                                    text-gray-500
                                    whitespace-nowrap
                                "
                >
                  {new Date(log.created_at).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
