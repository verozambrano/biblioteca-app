import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrivadoComponent } from './pages/privado/privado.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { LoginComponent } from './pages/login/login.component';
import { Error404Component } from './pages/error404/error404.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { GestionLibrosComponent } from './pages/gestion-libros/gestion-libros.component';
import { GestionUsuariosComponent } from './pages/gestion-usuarios/gestion-usuarios.component';
import { PrestamosComponent } from './pages/prestamos/prestamos.component';
import { gestionLibrosGuard } from './guards/gestion-libros.guard';
import { gestionUsuariosGuard } from './guards/gestion-usuarios.guard';

export const routes: Routes = [
    {path:"home", component: HomeComponent},
    {path: "privado", component: PrivadoComponent},
    {path: "catalogo",component: CatalogoComponent},
    {path:"login",component:LoginComponent},
    {path:"registro",component:RegistroComponent},
    {path:"contacto", component:ContactosComponent},
    {path:"gestion-libros", component:GestionLibrosComponent,canActivate:[gestionLibrosGuard]},
    {path:"gestion-user", component:GestionUsuariosComponent, canActivate:[gestionUsuariosGuard]},
    {path:"prestamos", component:PrestamosComponent},
     
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"**", component:Error404Component},
];
