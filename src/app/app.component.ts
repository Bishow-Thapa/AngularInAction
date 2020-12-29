import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-practice';
  todaydate = new Date();
  jsonval = {name: "Ninja", age: 24, address:{a1: "Kathmandu", a2: "Washington DC"}};

  // array months
  months = ["jan", "feb", "jun", "july", "april", "sep", "dec", "november"];

  isavailable = "true"; // variable is set to true

  myClickFunction(event: any) {
    console.log("Button is clicked");
    alert("Button is Clicked");
  }

  changemonths(event: any) {
      console.log("months is changed from dropdown");
      console.log(event);
    }

    constructor(private myservice: MyserviceService) {}
    // On Initailize
    ngOnIt() {
      this.todaydate = this.myservice.showTodayDate();
    }
}
