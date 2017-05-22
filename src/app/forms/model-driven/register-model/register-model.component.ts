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
      'username': '',
      'email': '',
      'password': '',
      'newsletter':''
      });

   }

  ngOnInit() {
  }

}
