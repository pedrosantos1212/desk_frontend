import { Routes } from '@angular/router';

import { Home } from './feature/home/home';
import { Kanban } from './feature/kanban/kanban';
import { Login } from './feature/login/login';
import { Solicitacao } from './feature/solicitacao/solicitacao';

import { Config } from './feature/config/config';
import { Locais } from './feature/config/locais/locais';
import { Setores } from './feature/config/setores/setores';
import { Cargos } from './feature/config/cargos/cargos';
import { Senioridades } from './feature/config/senioridades/senioridades';
import { SolicitacaoStatus } from './feature/config/solicitacao-status/solicitacao-status';
import { DemandaPrioridade } from './feature/config/demanda-prioridade/demanda-prioridade';
import { DemandaStatus } from './feature/config/demanda-status/demanda-status';



export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'kanban',
    component: Kanban,
  },
  {
    path: 'solicitacoes',
    component: Solicitacao,
  },
  {
    path: 'configuracoes',
    component: Config,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'configuracoes/locais',
    component: Locais,
  },
  {
    path: 'configuracoes/setores',
    component: Setores,
  },
  {
    path: 'configuracoes/cargos',
    component: Cargos,
  },
  {
    path: 'configuracoes/senioridades',
    component: Senioridades,
  },
  {
    path: 'configuracoes/solicitacao-status',
    component: SolicitacaoStatus,
  },
  {
    path: 'configuracoes/demanda-priodidade',
    component: DemandaPrioridade,
  },
  {
    path: 'configuracoes/demanda-status',
    component: DemandaStatus,
  },
];
