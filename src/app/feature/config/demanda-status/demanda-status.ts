import { Component } from '@angular/core';
import { CatalogoCrud } from '../catalogo-crud/catalogo-crud';

@Component({
  imports: [CatalogoCrud],
  selector: 'app-demanda-status',
  styleUrl: './demanda-status.css',
  templateUrl: './demanda-status.html',
})
export class DemandaStatus {}
