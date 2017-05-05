import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  counterValue = 0;

  @Input()
  get counter() {
    console.log("get value")
    return this.counterValue;
  }
  @Output() counterChange :  EventEmitter<number>;

    constructor(){

        this.counterChange = new EventEmitter();

    }

      increment(){

            this.counterValue = this.counterValue+1; 
       this.counterChange.emit(this.counterValue);
        }
}
