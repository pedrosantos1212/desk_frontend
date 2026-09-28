import { Component } from '@angular/core';
import { CatalogoCrud } from '../catalogo-crud/catalogo-crud';

@Component({
  imports: [CatalogoCrud],
  selector: 'app-locais',
  styleUrl: './locais.css',
  templateUrl: './locais.html',
})
export class Locais {}
