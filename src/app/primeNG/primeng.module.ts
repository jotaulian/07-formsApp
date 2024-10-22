import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputGroupModule } from 'primeng/inputgroup';



@NgModule({
  exports:[
    FormsModule,
    InputTextModule,
    ButtonModule,
    MenubarModule,
    InputGroupModule
  ]
})
export class PrimeNgModule { }
