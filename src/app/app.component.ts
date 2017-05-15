import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeTab = "Tab1"
  sendDataFromParent = "hi from parent component"
  anyMessageFromChild = ""

  changeTab(tabName:string){
    console.log(tabName)
    this.activeTab = tabName
  }

  handleEmit(value) {
    console.log('Parent function excuted with ', value);
    this.anyMessageFromChild = value
    
  }
}
