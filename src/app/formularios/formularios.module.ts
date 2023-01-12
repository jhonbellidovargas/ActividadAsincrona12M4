import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRegistroComponent } from './form-registro/form-registro.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormRegistroComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    FormRegistroComponent,
  ]
})
export class FormulariosModule { }
