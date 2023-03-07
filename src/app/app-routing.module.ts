import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { TablaComponent } from './Components/tabla/tabla.component';

const routes: Routes = [
  {
    path:'Administrador',component:TablaComponent
  },
  {
    path:'Area',component:FormularioComponent
  },
    



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
