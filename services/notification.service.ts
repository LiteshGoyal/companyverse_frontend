import api from "@/lib/api";

export const getMyNotifications = async () => {
  const response = await api.get("/notifications/my/");

  return response.data;
};

export const markNotificationRead = async (notificationId: string) => {
  const response = await api.patch(`/notifications/${notificationId}/read/`);

  return response.data;
};
