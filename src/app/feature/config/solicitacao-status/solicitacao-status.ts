import { Component } from '@angular/core';
import { CatalogoCrud } from '../catalogo-crud/catalogo-crud';

@Component({
  imports: [CatalogoCrud],
  selector: 'app-solicitacao-status',
  styleUrl: './solicitacao-status.css',
  templateUrl: './solicitacao-status.html',
})
export class SolicitacaoStatus {}
