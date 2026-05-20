import api from "@/lib/api";

interface LoginData{
    email:string;
    password: string;
}
interface SignupData{
    email:string;
    username:string;
    password: string;
}

export const loginUser = async (data: LoginData) => {
    const response = await api.post('/auth/login/', data);

    return response.data
}
export const signupUser = async (data: SignupData) => {
    const response = await api.post('/auth/register/', data);

    return response.data
}

export const getCurrentUser = async () => {
    const response = await api.get("/auth/me");
    // response contains status, headers, config, data
    // we only need data
    // example { access:"....", "refresh":"...", "user":{...}}

    return response.data;
}