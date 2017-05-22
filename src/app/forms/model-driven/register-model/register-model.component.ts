import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from "@angular/forms";


@Component({
  selector: 'app-register-model',
  templateUrl: './register-model.component.html',
  styleUrls: ['./register-model.component.css']
})
export class RegisterModelComponent implements OnInit {

  myForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {

      this.myForm = formBuilder.group({
        userData: formBuilder.group({
          'username': ['Max', [Validators.required, this.exampleValidator]],
          'email': ''
      }),
      'password': ['', Validators.required],
      'newsletter':''
    });
    
   }

  ngOnInit() {
  }
  
 exampleValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Example') {
      return { example: true };
    }
    return null;
  }
}
