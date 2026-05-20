import api from "@/lib/api";

export const getMarketplaceRequirements = async () => {
  const response = await api.get("/requirements/marketplace/");

  return response.data;
};

export const getMyRequirements = async () => {
  const response = await api.get("/requirements/my-requirements/");

  return response.data;
};

export const respondToRequirement = async (
  requirementId: string,
  data: {
    employee: string;
    message: string;
  },
) => {
  const response = await api.post(
    `/requirements/${requirementId}/respond/`,
    data,
  );

  return response.data;
};

export const getRequirementResponses = async (requirementId: number) => {
  const response = await api.get(`/requirements/${requirementId}/responses/`);

  return response.data;
};

export const updateRequirementResponseStatus = async (
  responseId: number,
  status: string,
) => {
  const response = await api.patch(
    `/requirements/responses/${responseId}/update-status/`,
    {
      status,
    },
  );
  return response.data;
};

export const closeRequirement = async (requirementId: number) => {
  const response = await api.patch(`requirements/${requirementId}/close/`);

  return response.data;
};

export const createRequirement = async (data: any) => {
  const response = await api.post("/requirements/create/", data);

  return response.data;
};
