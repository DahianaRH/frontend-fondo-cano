import { api } from "./client";
import { Obra } from "../models/obra";
import { Facets } from "../models/facets";

export const getObras = async (search?: string) => {
  const res = await api.get("/obras", {
    params: {
      ...(search ? { search } : {}),
      limit: 100,
      page: 1,
    }
  });

  return Array.isArray(res.data?.data) ? res.data.data : [];
};

export const getFacets = async (): Promise<Facets> => {
  const res = await api.get("/obras/facets");
  return res.data;
};