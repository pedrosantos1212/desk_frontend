import { environment } from '../../../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catalogo, CatalogoCreate, CatalogoUpdate } from '../../models/catalogo/catalogo.model';

@Injectable({
  // Criado uma instancia do service
  providedIn:'root', // disponibilizando para toda a aplicação
})
export class CatalogoService {
  
  private readonly apiUrl = environment.apiUrl;

  // HttpClient = ferramenta do angular para requisições HTTP
  constructor(private readonly http: HttpClient) {}

  listar(endpoint:string): // endpoint pra receber o nome da rota
  Observable<Catalogo[]>{ // Informa que a resposta chegara e é uma lista de catalogo
    return this.http.get<Catalogo[]>( // tipo de requisição 
      `${this.apiUrl}/${endpoint}`, // formato que esperamos receber
    );
  }

  criar(
    endpoint:string,
    dados: CatalogoCreate,
  ):Observable<Catalogo> {
    return this.http.post<Catalogo>(
      `${this.apiUrl}/${endpoint}`,
      dados,
    )
  }

  desativar(
    endpoint:string,
    id:number,
  ): Observable<Catalogo> {
    return this.http.delete<Catalogo>(
      `${this.apiUrl}/${endpoint}/${id}`
    )
  }

  atualizar(
    endpoint:string,
    id:number,
    dados: CatalogoUpdate,
  ): Observable<Catalogo> {
    return this.http.patch<Catalogo>(
      `${this.apiUrl}/${endpoint}/${id}`,
      dados,
    );
  }


}
 