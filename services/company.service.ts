import api from "@/lib/api";

export const createCompany = async (data: any) => {
  const response = await api.post("/companies/create/", data);

  return response.data;
};

export const getCompanyEmployees = async () => {
  const response = await api.get("/companies/employees/");

  return response.data;
};

export const addEmployee = async (data: any) => {
  const response = await api.post("/companies/add-employee/", data);

  return response.data;
};

export const getEmployeeDetail = async (employeeId: string) => {
  const response = await api.get(`/companies/employees/${employeeId}/`);

  return response.data;
};

export const updateEmployeeRole = async (employeeId: string, role: string) => {
  const response = await api.patch(
    `/companies/employees/${employeeId}/update-role/`,
    {
      role,
    },
  );

  return response.data;
};

export const removeEmployee = async (employeeId: string) => {
  const response = await api.patch(
    `/companies/employees/${employeeId}/remove/`,
  );

  return response.data;
};
