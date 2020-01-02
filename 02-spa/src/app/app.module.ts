import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { app_routing } from './app.routes';

// Servicios

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { HeroesComponent } from './component/heroes/heroes.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
