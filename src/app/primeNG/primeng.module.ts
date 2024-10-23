import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputGroupModule } from 'primeng/inputgroup';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CheckboxModule } from 'primeng/checkbox';



@NgModule({
  exports:[
    FormsModule,
    InputTextModule,
    ButtonModule,
    MenubarModule,
    InputGroupModule,
    RadioButtonModule,
    InputSwitchModule,
    CheckboxModule
  ]
})
export class PrimeNgModule { }
