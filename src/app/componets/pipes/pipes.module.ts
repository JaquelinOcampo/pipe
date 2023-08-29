import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextoComponent } from './texto/texto.component';
import { PipeAngularComponent } from './pipes-angular/pipe-angular.component';
import { NumeroComponent } from './numero/numero.component';
import { FechasComponent } from './fechas/fechas.component';
import { JsonComponent } from './json/json.component';
import { KeyValueComponent } from './key-value/key-value.component';
import { SliceComponent } from './slice/slice.component';
import { I18nSelectComponent } from './i18n-select/i18n-select.component';
import { FormsModule } from '@angular/forms';
import { I18nPluralComponent } from './i18n-plural/i18n-plural.component';




@NgModule({
  declarations: [
    PipeAngularComponent,
    TextoComponent,
    NumeroComponent,
    FechasComponent,
    JsonComponent,
    KeyValueComponent,
    SliceComponent,
    I18nSelectComponent,
    I18nPluralComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[ PipeAngularComponent]

})
export class PipesModule { }
