import { api } from "./client";

export const getObrasWithFilters = async (filters: any) => {
  const res = await api.get("/obras", { 
    params: { ...filters, limit: 100, page: 1 }, 
  });

  return res.data.data.map((o: any) => ({
    id: o.id,
    titulo: o.titulo,
    autor_nombre: o.autor_nombre,
    tecnica_nombre: o.tecnica_nombre,
    anio: o.anio,
    imagenes: o.imagenes || []
  }));
};