import { useEffect, useState } from "react";
import { getFacets } from "../api/obras.api";
import { parseFacets } from "../utils/facets";

interface Props {
  onFilter: (filters: {
    anio?: number;
    tecnica?: string;
    autor?: string;
  }) => void;
}

type ParsedFacets = {
  autores: string[];
  tecnicas: string[];
  decadas: string[];
};

export const Filtros = ({ onFilter }: Props) => {
  const [facets, setFacets] = useState<ParsedFacets | null>(null);

  useEffect(() => {
    getFacets().then((data) => {
      const parsed = parseFacets(data);
      setFacets(parsed);
    });
  }, []);

  if (!facets) return <p>Cargando filtros...</p>;

  return (
    <div style={{ display: "flex", gap: 10 }}>
      {/* Año */}
      <select
        onChange={(e) =>
          onFilter({
            anio: e.target.value 
            ? Number(e.target.value.replace("s", ""))
            : undefined,
          })
        }
      >
        <option value="">Década</option>
        {facets.decadas.map((d) => (
          <option key={d} value={d}>
            {d}
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