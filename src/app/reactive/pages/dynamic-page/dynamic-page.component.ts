import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/service/validators.service';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: ``
})
export class DynamicPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['',[Validators.required, Validators.minLength(3)]],
    favoriteAnimes: this.fb.array([
      ['Boku No Hero', [Validators.required]],
      ['Kimetsu No Yaiba', [Validators.required]]
    ])
  })

  public newAnime: FormControl = this.fb.control('', Validators.required )

  constructor(private fb: FormBuilder, private validatorsService: ValidatorsService){}

  get favoriteAnimes() {
     return this.myForm.get('favoriteAnimes') as FormArray;
  }

  // Manejo de errores
    invalidField(field: 'name'):boolean|null{
    return this.validatorsService.isInvalidField(this.myForm, field);
  }

    invalidFieldInArray(formArray: FormArray, i:number){
      return formArray.controls[i].errors && formArray.controls[i].touched;
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

  // Delete anime method
  deleteAnime(i: number):void {
    this.favoriteAnimes.removeAt(i);
  }

  // Add favourite anime
  addAnime():void{
    if(this.newAnime.invalid) return;

    // Forma sin el FormBuilder
    // this.favoriteAnimes.push(new FormControl(this.newAnime.value, Validators.required))

    this.favoriteAnimes.push(
      this.fb.control(this.newAnime.value, Validators.required)
    )

    this.newAnime.reset()
  }


  // Submit
  onSubmit():void{
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset();
  }

}
