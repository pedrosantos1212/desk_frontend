export interface Catalogo {
  id: number;
  nome: string;
  status: boolean;
}

export interface CatalogoCreate {
  id?: number;
  nome: string;
  status?: boolean;
}

export interface CatalogoUpdate {
  id: number;
  nome?: string;
  status?: boolean;
}