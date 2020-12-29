import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './../myservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newComponent = "Entered in new Component Created";
  todaydate!: Date;
  constructor(private myservice: MyserviceService) { }

  ngOnInit(): void {
    this.todaydate = this.myservice.showTodayDate();
  }

}
