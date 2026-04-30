import { useEffect, useState } from "react";
import { getFacets } from "../api/obras.api";
import { Facets } from "../models/facets";

interface Props {
  onFilter: (filters: {
    anio?: number;
    tecnica?: string;
    autor?: string;
  }) => void;
}

export const Filtros = ({ onFilter }: Props) => {
  const [facets, setFacets] = useState<Facets | null>(null);

  useEffect(() => {
    getFacets().then(setFacets);
  }, []);

  if (!facets) return <p>Cargando filtros...</p>;

  return (
    <div style={{ display: "flex", gap: 10 }}>
      {/* Año */}
      <select
        onChange={(e) =>
          onFilter({
            anio: e.target.value ? Number(e.target.value) : undefined,
          })
        }
      >
        <option value="">Año</option>
        {facets.anios.map((a) => (
          <option key={a} value={a}>
            {a}
          </option>
        ))}
      </select>

      {/* Técnica */}
      <select
        onChange={(e) =>
          onFilter({
            tecnica: e.target.value || undefined,
          })
        }
      >
        <option value="">Técnica</option>
        {facets.tecnicas.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      {/* Autor */}
      <select
        onChange={(e) =>
          onFilter({
            autor: e.target.value || undefined,
          })
        }
      >
        <option value="">Autor</option>
        {facets.autores.map((a) => (
          <option key={a} value={a}>
            {a}
          </option>
        ))}
      </select>
    </div>
  );
};