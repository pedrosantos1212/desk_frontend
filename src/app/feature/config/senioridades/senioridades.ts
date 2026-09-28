import { Component } from '@angular/core';
import { CatalogoCrud } from '../catalogo-crud/catalogo-crud';

@Component({
  imports: [CatalogoCrud],
  selector: 'app-senioridades',
  styleUrl: './senioridades.css',
  templateUrl: './senioridades.html',
})
export class Senioridades {}
