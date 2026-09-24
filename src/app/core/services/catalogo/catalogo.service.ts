import { environment } from '../../../../environments/environment';

import { Component, Injectable } from '@angular/core';

@Injectable({
  // Criado uma instancia do service
  providedIn:'root', // disponibilizando para toda a aplicação
})
export class CatalogoService {
  private readonly apiUrl = environment.apiUrl;
}
