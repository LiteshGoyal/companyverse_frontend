import api from "@/lib/api";

export const getCompanyAuditLogs = async () => {
  const response = await api.get("/auditlogs/company/");
  return response.data;
};
