import { Routes } from '@angular/router';
import { BlogPage } from './pages/blog/blog.page';
import { HomePage } from './pages/home/home.page';
//
export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((c) => c.LoginPage),
  },
  {
    path: 'cadastro',
    loadComponent: () =>
      import('./pages/cadastro/cadastro.page').then((c) => c.CadastroPage),
  },
  {
    path: '',
    component: BlogPage,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomePage },
    ],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },

  //
];
