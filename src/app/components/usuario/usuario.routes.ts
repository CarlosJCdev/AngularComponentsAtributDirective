import {Routes} from '@angular/router';
import { UsuarioNuevoComponent } from './usuario-nuevo.component';
import { UsuarioEditarComponent } from './usuario-editar.component';

export const usuario_details: Routes = [
    {path: 'nuevo', component: UsuarioNuevoComponent},
    {path: 'editar', component: UsuarioEditarComponent},
    {path: 'detalle', component: UsuarioEditarComponent},
    {path: '**', redirectTo: 'nuevo', pathMatch: 'full'}
];