import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { TablaComponent } from './Components/tabla/tabla.component';
import { AdministradorComponent } from './Components/administrador/administrador.component';
import { CalificacionComponent } from './Components/calificacion/calificacion.component';

const routes: Routes = [
  {
    path:'Administrador',component:AdministradorComponent
  },
  {
    path:'Area',component:FormularioComponent
  },
  {
    path:'Calificacion',component:CalificacionComponent
  },  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
