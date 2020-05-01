import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Graficos
import { ChartsModule } from 'ng2-charts';
import { LineaComponent } from './components/linea/linea.component';
import { BarraComponent } from './components/barra/barra.component';
import { DonasComponent } from './components/donas/donas.component';
import { RadarComponent } from './components/radar/radar.component';
import { PastelComponent } from './components/pastel/pastel.component';
import { PolarComponent } from './components/polar/polar.component';
import { BurbujasComponent } from './components/burbujas/burbujas.component';

@NgModule({
  declarations: [
    AppComponent,
    LineaComponent,
    BarraComponent,
    DonasComponent,
    RadarComponent,
    PastelComponent,
    PolarComponent,
    BurbujasComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
