import type { LoginCredentials, SignupData, User } from "../types/user.ts";
import { axiosInstance } from "./axios.ts";

// Get the authenticated user
export const getAuthUser = async (): Promise<User | null> => {
  try {
    const res = await axiosInstance.get("/auth/me");
    return res.data.user; // ✅ Only return the user object
  } catch (error) {
    console.error("Error in getAuthUser:", error);
    return null;
  }
};

// Signup request
export const signup = async (signupData: SignupData): Promise<User> => {
    const res = await axiosInstance.post<User>("/auth/signup", signupData);
    return res.data;
};

// Login request
export const login = async (loginData: LoginCredentials): Promise<User> => {
    const res = await axiosInstance.post<User>("/auth/signin", loginData);
    return res.data;
};

// Logout request
export const logout = async (): Promise<{
  message: string 
}> => {
    const res = await axiosInstance.post<{ message: string }>("/auth/logout");
    return res.data;
};
