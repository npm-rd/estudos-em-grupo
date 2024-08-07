import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROTAS_ADMIN } from './admin.routes';
import { AdminPage } from './pages/admin/admin.page';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROTAS_ADMIN)],
  exports: [],
  declarations: [AdminPage],
  providers: [],
})
export class AdminModule {}
