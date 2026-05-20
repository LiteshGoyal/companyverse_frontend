"use client";

import { useEffect, useState } from "react";

import ProtectedRoute from "@/app/components/ProtectedRoute";
import DashboardLayout from "@/app/components/dashboard/DashboardLayout";

import {getMyNotifications, markNotificationRead} from "@/services/notification.service";
import DashboardSkeletonLoader from "../components/Loading/loading";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const data = await getMyNotifications();

        setNotifications(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  const handleMarkRead = async (notificationId: string) => {
    try {
      await markNotificationRead(notificationId);

      setNotifications((prev: any) =>
        prev.map((notification: any) =>
          notification.id === notificationId
            ? {
                ...notification,
                is_read: true,
              }
            : notification,
        ),
      );
    } catch (error) {
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

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <h1
          className="
                    text-3xl
                    font-bold
                    mb-6
                "
        >
          Notifications
        </h1>

        <div
          className="
                    space-y-4
                "
        >
          {notifications.length === 0 && (
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
                No notifications
              </p>
            </div>
          )}

          {notifications.map((notification: any) => (
            <div
              key={notification.id}
              className={`
                                p-6
                                rounded-lg
                                shadow

                                ${
                                  notification.is_read
                                    ? "bg-white"
                                    : "bg-blue-50"
                                }
                            `}
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
                  <h2
                    className="
                                        text-xl
                                        font-semibold
                                    "
                  >
                    {notification.title}
                  </h2>

                  <p
                    className="
                                        mt-2
                                        text-gray-700
                                    "
                  >
                    {notification.message}
                  </p>

                  <p
                    className="
                                        mt-3
                                        text-sm
                                        text-gray-500
                                    "
                  >
                    {new Date(notification.created_at).toLocaleString()}
                  </p>
                </div>

                {!notification.is_read && (
                  <button
                    onClick={() => handleMarkRead(notification.id)}
                    className="
                                            px-4
                                            py-2
                                            bg-black
                                            text-white
                                            rounded-lg
                                            hover:bg-gray-800
                                        "
                  >
                    Mark Read
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
