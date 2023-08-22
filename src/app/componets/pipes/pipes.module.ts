import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextoComponent } from './texto/texto.component';
import { PipeAngularComponent } from './pipes-angular/pipe-angular.component';
import { NumeroComponent } from './numero/numero.component';



@NgModule({
  declarations: [
    PipeAngularComponent,
    TextoComponent,
    NumeroComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ PipeAngularComponent]

})
export class PipesModule { }
