import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

const PRODUCTO = {
  name: 'Dyson Vacuum 4Pets',
  price: 135,
  stock:3
}

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent implements OnInit {

// public myForm: FormGroup = new FormGroup({
//   name: new FormControl(''),
//   price: new FormControl(0),
//   stock: new FormControl(0),
// })

// Todas las validaciones deberan cumplirse para que el formulario sea válido
public myForm = this.fb.group({
  name:['',[Validators.required, Validators.minLength(3)]],
  price:[10,[Validators.min(0)]],
  stock:[0,[Validators.min(0)]]
})

// Utilizamos un servicio para construir en formulario reactivo de manera más sencilla
constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    // De esta forma podemos definir el producto cuando carga la página
    // tomando los valores de forma asincrona de ser necesario.
    this.myForm.reset(PRODUCTO)
  }

  invalidField(field: 'name' | 'price' | 'stock'):boolean|null{
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  getFieldError(field: 'name' | 'price' | 'stock'): string | null{
    if(!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {}; // Tomamos los errores del campo indicado

    for (const error of Object.keys(errors)) {
      switch(error){
        case 'required':
          return 'This field is required';
        case 'minlength':
          return `The name needs to have at least ${errors['minlength'].requiredLength} characters.`;
      }

    }

    return null;
  }

onSave():void{
  if(this.myForm.invalid) {
    this.myForm.markAllAsTouched(); // De esta forma podemos disparar las validaciones.
    return
  }
  console.log(this.myForm.value);
  this.myForm.reset({price:10, stock:0}) // Si paso propiedades que coincidan con los campos podemos resetear al valor que indiquemos
}

}
