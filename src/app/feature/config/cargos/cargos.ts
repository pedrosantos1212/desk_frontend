import { Component } from '@angular/core';
import { CatalogoCrud } from '../catalogo-crud/catalogo-crud';

@Component({
  imports: [CatalogoCrud],
  selector: 'app-cargos',
  styleUrl: './cargos.css',
  templateUrl: './cargos.html',
})
export class Cargos {}
