import { api } from "./client";
import { Obra } from "../models/obra";
import { Facets } from "../models/facets";

export const getObras = async (): Promise<Obra[]> => {
  const res = await api.get("/obras");

  return res.data.data.map((o: any) => ({
    id: o.id,
    titulo: o.titulo,
    autor: o.autor_nombre,
    tecnica: o.tecnica_nombre,
    anio: o.anio,
    imagenes: o.imagenes ?? [],
  }));
};

export const getFacets = async (): Promise<Facets> => {
  const res = await api.get("/obras/facets");
  return res.data;
};