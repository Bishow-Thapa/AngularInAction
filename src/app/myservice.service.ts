import { Injectable } from '@angular/core';
import { ɵNgNoValidate } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  showTodayDate() {
    let ndate = new Date();
    return ndate;
  }
}
