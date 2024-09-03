import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('../sobre-nosotros/sobre-nosotros.component'),
  },
  {
    path: 'esports',
    loadComponent: () => import('../esports/esports.component'),
  },
  {
    path: 'plantilla',
    loadComponent: () => import('../plantilla/plantilla.component'),
  },
  {
    path: 'socio',
    loadComponent: () => import('../socio/socio.component'),
  }
] as Routes;