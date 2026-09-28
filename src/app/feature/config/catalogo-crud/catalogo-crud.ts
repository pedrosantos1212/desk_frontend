import { Component, input, OnInit, signal } from '@angular/core';
import { CatalogoService } from '../../../core/services/catalogo/catalogo.service';
import { Catalogo } from '../../../core/models/catalogo/catalogo.model';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-catalogo-crud',
  styleUrl: './catalogo-crud.css',
  templateUrl: './catalogo-crud.html',
})
export class CatalogoCrud implements OnInit{

  titulo = input.required<string>()
  endpoint = input.required<string>()

  itens = signal<Catalogo[]>([]);

  nome = ''

  idEdicao = signal<number | null>(null)
  nomeEmEdicao = ''

  constructor(
    private readonly catalogoService:CatalogoService,
  ) {}

  ngOnInit(): void { // executa quando o componente inicia
    this.catalogoService.listar(this.endpoint()).subscribe({ // recebe a resposta
      next: (dados) => { // next salva os dados em itens
        this.itens.set(dados)
        console.log(this.itens());
      },
      error: (erro) => {
        console.error(`Erro ao buscar ${this.endpoint()}:`, erro);
        }
      })
  }

  criar():void {
    const nomeTratado = this.nome.trim() // remove espaços do começo e do final

    if(!nomeTratado){
      return;
    }

    this.catalogoService.criar(this.endpoint(), {
      nome:nomeTratado // cria o corpo enviado ao backend
    }).subscribe({
      next: (novoItem) => {
        this.itens.update((itensAtuais) => [
          // cria uma nova lista contendo os anteriores e o novo
          ...itensAtuais,
          novoItem
        ])
        this.nome = '' // limpa os campos
      },
      error: (erro) => {
        console.error(`Erro ao cadastrar em ${this.endpoint()}:`, erro)
      }
    })
  }

  desativar(id:number): void {
    this.catalogoService
    .desativar(this.endpoint(), id)
    .subscribe({
      next: (itemDesativado) => {
        this.itens.update((itensAtuais =>
          itensAtuais.map((item) =>
          item.id === itemDesativado.id ? itemDesativado : item)
        ))
      },
      error: (erro) => {
        console.error(`Erro ao desativar em ${this.endpoint()}:`, erro)
      }
    })
  }

  reativar(id:number): void {
    this.catalogoService.atualizar(this.endpoint(), id, {
      status:true
    }).subscribe({
      next: (itemReativado) => {
        this.itens.update((itensAtuais) => itensAtuais.map(
          (item) => item.id === itemReativado.id ? itemReativado : item,
        ),
      );
      },
      error: (erro) => {
        console.error(`Erro ao reativar em ${this.endpoint()}:`, erro)
      }
    })
  }

  iniciarEdicao(item: Catalogo): void {
    this.idEdicao.set(item.id);
    this.nomeEmEdicao = item.nome
  }

  cancelarEdicao():void {
    this.idEdicao.set(null)
    this.nomeEmEdicao = ''
  }

  salvarEdicao(): void {
    const id = this.idEdicao()
    const nomeTratado = this.nomeEmEdicao.trim()

    if (id === null || !nomeTratado) {
      return
    }

    this.catalogoService.atualizar(this.endpoint(), id, {
      nome:nomeTratado
    }).subscribe({
      next: (itemAtualizado) => {
        this.itens.update(
          (itensAtuais) => itensAtuais.map(
            (item) => item.id === itemAtualizado.id ? itemAtualizado : item,
          )
        )
        this.cancelarEdicao()
      },
      error: (erro) => {
        console.error(`Erro ao editar em ${this.endpoint()}:`, erro)
      }
    })
  }


}
