import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { PersonasComponent } from './components/personas/personas.component';
import { PersonaComponent } from './components/persona/persona.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { FormComponent } from './components/form/form.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';



@NgModule({
  declarations: [
    AppComponent, PersonasComponent, PersonaComponent, HeaderComponent, SidebarComponent, HomeComponent, ProductoComponent, ClientesComponent, FormComponent, MenuComponent, ProveedoresComponent, VentasComponent, OfertasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
