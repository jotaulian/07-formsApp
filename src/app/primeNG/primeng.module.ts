import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
  exports:[
    FormsModule,
    InputTextModule,
    ButtonModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
