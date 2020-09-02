import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { usuario_details } from './components/usuario/usuario.routes';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'usuario/:id', component: UsuarioComponent, children: usuario_details},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
