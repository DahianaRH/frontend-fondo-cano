import { Imagen } from "./imagen";

export interface Obra {
  id: number;
  titulo: string;
  autor: string;
  anio: number | null;
  tecnica: string;
  descripcion?: string;
  imagenes?: Imagen[]; 
}