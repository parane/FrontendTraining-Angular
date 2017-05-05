import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  cricketers: Array<any> = [
    {
      name:"Sanath",
      type:"batsman"
    },
    {
      name:"Sachin",
      type:"batsman"
    },
    {
      name:"Vaas",
      type:"bolwer"
    }
  ]

 trackByFn(index, cricketer) {
  console.log(cricketer);
  return cricketer.name;
}
}
