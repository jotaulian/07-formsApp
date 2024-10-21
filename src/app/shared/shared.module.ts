import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrimeNgModule } from '../primeNG/primeng.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports:[NavbarComponent]
})
export class SharedModule { }
