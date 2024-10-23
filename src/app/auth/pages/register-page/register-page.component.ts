import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/service/validators.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern) ]],
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)]],
    username: ['', [Validators.required, this.validatorsService.cantBeGoku]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', Validators.required],
    },{
        validators:[
          this.validatorsService.isFieldOneEqualFieldTwo('password', 'password2'),
        ]
    })

  constructor(private fb: FormBuilder, private validatorsService: ValidatorsService){}

  public isInvalidField(field:string): boolean | null{
    return this.validatorsService.isInvalidField(this.myForm, field);
  }

  onSave(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched()
      return;
    }

    console.log(this.myForm.value);

  }

}
