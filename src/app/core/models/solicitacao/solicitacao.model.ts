export interface Solicitacao {
  id: number;
  titulo: string;
  descricao: string;
  solicitanteId: number;
  criadoPorId: number;
  solicitacaoStatusId: number;
  dataCriacao: string;
  alteradoEm: string;
}

export interface SolicitacaoCreate {
  titulo: string;
  descricao: string;
  solicitanteId: number;
  criadoPorId: number;
  solicitacaoStatusId: number;
}

export interface SolicitacaoUpdate {
  titulo?: string;
  descricao?: string;
  solicitanteId?: number;
  solicitacaoStatusId?: number;
}