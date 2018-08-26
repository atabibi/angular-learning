import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  showMessage(msg: string) {
    console.log(msg);
  }
}
