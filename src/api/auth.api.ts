import { api } from "./client";
import { Auth } from "../models/auth";

export const login = async (email: string, password: string): Promise<Auth> => {
  const res = await api.post("/auth/login", { email, password });
  return res.data;
};