import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-temp',
  templateUrl: './register-temp.component.html',
  styleUrls: ['./register-temp.component.css']
})
export class RegisterTempComponent implements OnInit {
  
  name= "Intial name";
  constructor() { }

  ngOnInit() {
  }

}
