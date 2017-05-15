import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css']
})
export class Tab1Component implements OnInit {
  

  @Input() receivedByChild: String

  @Output() btnClickEmit = new EventEmitter();
  constructor() { }
  
  
  ngOnInit() {
  }

  btnClickInChild() {
    console.log('button clicked from the child component');
    this.btnClickEmit.emit("Hi from child");
  }


}
