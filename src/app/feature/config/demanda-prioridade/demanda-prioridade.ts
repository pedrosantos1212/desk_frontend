import { Component } from '@angular/core';
import { CatalogoCrud } from '../catalogo-crud/catalogo-crud';

@Component({
  imports: [CatalogoCrud],
  selector: 'app-demanda-prioridade',
  styleUrl: './demanda-prioridade.css',
  templateUrl: './demanda-prioridade.html',
})
export class DemandaPrioridade {}
