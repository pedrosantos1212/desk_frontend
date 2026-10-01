import { Component, OnInit, signal } from '@angular/core';
import {
  Solicitacao as SolicitacaoModel,
} from '../../core/models/solicitacao/solicitacao.model';
import { SolicitacaoService } from '../../core/services/solicitacao/solicitacao.service';

@Component({
  imports: [],
  selector: 'app-solicitacao',
  styleUrl: './solicitacao.css',
  templateUrl: './solicitacao.html',
})
export class Solicitacao implements OnInit{

  solicitacoes = signal<SolicitacaoModel[]>([])

  constructor(
    private readonly solicitacaoService:SolicitacaoService,
  ){}

  ngOnInit(): void {
    this.solicitacaoService.listar().subscribe({
      next: (dados) => {
        this.solicitacoes.set(dados)
      },
      error: (erro) => {
        console.error('Erro ao buscar solicitacoes: ', erro)
      }
    })
  }

}
