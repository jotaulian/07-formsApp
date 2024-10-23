import { FormControl, ValidationErrors } from "@angular/forms";

export const firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,6}$";

export const cantBeGoku = (control: FormControl): ValidationErrors | null =>{

  const value: string = control.value.trim().toLowerCase();

  // Si hay error, regresamos objeto con el mensaje de error:
  if(value === 'goku'){
    return {
      noGoku: true
    }
  }

  // Si NO hay error, regresamos 'null':
  return null;
}
