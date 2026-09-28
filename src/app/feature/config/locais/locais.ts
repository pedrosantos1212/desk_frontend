import { Component, OnInit, Signal, signal } from '@angular/core';
import { CatalogoService } from '../../../core/services/catalogo/catalogo.service';
import { Catalogo } from '../../../core/models/catalogo/catalogo.model';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-locais',
  styleUrl: './locais.css',
  templateUrl: './locais.html',
})
export class Locais  implements OnInit{

  locais = signal<Catalogo[]>([]);

  nome = ''

  idEdicao = signal<number | null>(null)
  nomeEmEdicao = ''

  constructor(
    private readonly catalogoService:CatalogoService,
  ) {}

  ngOnInit(): void { // executa quando o componente inicia
    this.catalogoService.listar('locais').subscribe({ // recebe a resposta
      next: (dados) => { // next salva os dados em locais
        this.locais.set(dados)
        console.log(this.locais);
      },
      error: (erro) => {
        console.error('Eerro ao buscar locais:', erro);
        }
      })
  }

  criar():void {
    const nomeTratado = this.nome.trim() // remove espaços do começo e do final

    if(!nomeTratado){
      return;
    }

    this.catalogoService.criar('locais', { 
      nome:nomeTratado // cria o corpo enviado ao backend
    }).subscribe({
      next: (novoLocal) => {
        this.locais.update((locaisatuais) => [ 
          // cria uma nova lista constendo os anteriores e o novo
          ...locaisatuais,
          novoLocal
        ])
        this.nome = '' // limpa os campos
      },
      error: (erro) => {
        console.error("Erro ao cadastrar local: ", erro)
      }    })
  }

  desativar(id:number): void {
    this.catalogoService
    .desativar('locais', id)
    .subscribe({
      next: (localDesativado) => {
        this.locais.update((locaisAtuais =>
          locaisAtuais.map((local) =>
          local.id === localDesativado.id ? localDesativado : local)
        ))
      },
      error: (erro) => {
        console.error('Erro ao desativar local: ', erro)
      }
    })
  }

  reativar(id:number): void {
    this.catalogoService.atualizar('locais', id, {
      status:true
    }).subscribe({
      next: (localReativado) => {
        this.locais.update((locaisAtuais) => locaisAtuais.map(
          (local) => local.id === localReativado.id ? localReativado : local,
        ),
      );
      },
      error: (erro) => {
        console.error('Erro ao reativar local: ', erro)
      }
    })
  }

  iniciarEdicao(local: Catalogo): void {
    this.idEdicao.set(local.id);
    this.nomeEmEdicao = local.nome
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
    this.catalogoService.atualizar('locais', id, {
      nome:nomeTratado
    }).subscribe({
      next: (localAtualizado) => {
        this.locais.update(
          (locaisAtuais) => locaisAtuais.map(
            (local) => local.id === localAtualizado.id ? localAtualizado : local,
          )
        )
      }
    })
  }


}
