export interface Catalogo {
  id: number;
  nome: string;
  status: boolean;
}

export interface CatalogoCreate {
  nome: string;
}

export interface CatalogoUpdate {
  nome?: string;
  status?: boolean;
}