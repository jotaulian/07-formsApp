import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: ``
})
export class SwitchesPageComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantsNotification: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue]
  })

  public person = {
    gender: 'F',
    wantsNotification: false
  }

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.myForm.reset(this.person);
  }

    // Manejo de errores
    invalidField(field: 'termsAndConditions'):boolean|null{
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  onSave(){
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const {termsAndConditions, ...updatedPerson} = this.myForm.value;
    this.person = updatedPerson;

  }

}
