import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { RouterModule } from '@angular/router';
import { app_routing } from './app.routes';

// Servicios

import { HeroesService } from './servicios/heroes.service';


// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { HeroesComponent } from './component/heroes/heroes.component';
import { from } from 'rxjs';
import { HeroeComponent } from './component/heroe/heroe.component';
import { BuscadorComponent } from './component/buscador/buscador.component';
import { HeroeTarjetaComponent } from './component/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    app_routing
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
