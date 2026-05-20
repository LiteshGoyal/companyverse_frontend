import api from "@/lib/api";

export const getTasks = async () => {
  const response = await api.get("/tasks/my-tasks");

  return response.data;
};

export const updateTaskStatus = async (taskId: number, status: string) => {
  const response = await api.patch(`/tasks/${taskId}/update-status/`, {
    status,
  });

  return response.data;
};
export const createTask = async (data: any) => {
  const response = await api.post("/tasks/create/", data);

  return response.data;
};

export const getCompanyTasks = async () => {
  const response = await api.get("/tasks/company-tasks/");

  return response.data;
};
