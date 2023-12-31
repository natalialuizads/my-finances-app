import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'contas',
    pathMatch: 'full'
  },
  {
    path: 'contas',
    loadComponent: () => import('./pages/contas/contas.component'),
    children: [
      {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full'
      },
      {
        path: 'listar',
        loadComponent: () => import('./pages/contas/listar-contas/listar-contas.component')
      },
      {
        path: 'criar',
        loadComponent: () => import('./pages/contas/criar-conta/criar-conta.component')
      },
      {
        path: 'editar/:id',
        loadComponent: () => import('./pages/contas/editar-conta/editar-conta.component')
      }
    ]
  },
  {
    path: 'balanco',
    loadComponent: () => import('./pages/balanco/balanco.component')
  },
  {
    path: 'categorias',
    loadComponent: () => import('./pages/categorias/categorias.component'),
    children: [
      {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full'
      },
      {
        path: 'listar',
        loadComponent: () => import('./pages/categorias/lista-categorias/lista-categorias.component')
      },

      {
        path: 'criar',
        loadComponent: () => import('./pages/categorias/criar-categoria/criar-categoria.component')
      },
      {
        path: 'editar/:id',
        loadComponent: () => import('./pages/categorias/editar-categoria/editar-categoria.component')
      }
    ]
  }
];
