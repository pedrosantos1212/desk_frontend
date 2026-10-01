import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';

import {
  Solicitacao,
  SolicitacaoCreate,
  SolicitacaoUpdate,
} from '../../models/solicitacao/solicitacao.model';

@Injectable({
  providedIn: 'root',
})
export class SolicitacaoService {
  private readonly apiUrl =
    `${environment.apiUrl}/solicitacoes`;

  constructor(
    private readonly http: HttpClient,
  ) {}

  listar(): Observable<Solicitacao[]> {
    return this.http.get<Solicitacao[]>(
      this.apiUrl,
    );
  }

  buscarPorId(id: number): Observable<Solicitacao> {
    return this.http.get<Solicitacao>(
      `${this.apiUrl}/${id}`,
    );
  }

  criar(
    dados: SolicitacaoCreate,
  ): Observable<Solicitacao> {
    return this.http.post<Solicitacao>(
      this.apiUrl,
      dados,
    );
  }

  atualizar(
    id: number,
    dados: SolicitacaoUpdate,
  ): Observable<Solicitacao> {
    return this.http.patch<Solicitacao>(
      `${this.apiUrl}/${id}`,
      dados,
    );
  }
}