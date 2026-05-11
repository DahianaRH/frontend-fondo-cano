import { Facets } from "../models/facets";

export const parseFacets = (facets: Facets) => {
  return {
    autores: facets
      .filter(f => f.facet === "autor")
      .map(f => f.value),

    tecnicas: facets
      .filter(f => f.facet === "tecnica")
      .map(f => f.value),

    decadas: facets
      .filter(f => f.facet === "decada")
      .map(f => f.value),
  };
};