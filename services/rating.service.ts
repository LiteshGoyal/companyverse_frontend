import api from "@/lib/api";

export const rateEmployee = async (data: any) => {
  const response = await api.post("/ratings/rate/", data);

  return response.data;
};
