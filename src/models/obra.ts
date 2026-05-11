export interface Obra {
  id: string;
  titulo: string;
  autor_nombre: string;
  tecnica_nombre: string;
  anio: number | null;
  imagenes?: {
    id: number;
    url: string;
    tipo: string;
  }[];
}