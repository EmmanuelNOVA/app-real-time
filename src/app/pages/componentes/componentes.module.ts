import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesComponent } from './componentes.component';
import { BotonesComponent } from './botones/botones.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { CancelacionComponent } from './cancelacion/cancelacion.component';
import { ComponentesRoutesModule } from './componentes.routes';
import { PaisesComponent } from './paises/paises.component';



@NgModule({
  declarations: [
    ComponentesComponent, 
    BotonesComponent, 
    TarjetasComponent, 
    BusquedaComponent, 
    CancelacionComponent, PaisesComponent
  ],
  imports: [
    CommonModule,
    ComponentesRoutesModule
  ]
})
export class ComponentesModule { }
