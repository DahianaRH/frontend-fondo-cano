export interface FacetItem {
  facet: "autor" | "decada" | "tecnica";
  value: string;
  count: number;
}

export type Facets = FacetItem[];