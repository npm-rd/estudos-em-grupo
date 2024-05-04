import { Routes } from '@angular/router';
import { BlogPage } from './pages/blog/blog.page';
import { CadastroPage } from './pages/cadastro/cadastro.page';
import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
//
export const routes: Routes = [
  { path: 'login', component: LoginPage },
  { path: 'cadastro', component: CadastroPage },
  {
    path: '',
    component: BlogPage,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomePage },
    ],
  },

  //
];
