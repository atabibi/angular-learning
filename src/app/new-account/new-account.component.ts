import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  newAccountName: string;
  @Output() addNewAccount = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onAddClicked() {
    this.addNewAccount.emit(this.newAccountName);
  }

  txtAccountNameBlue(event) {
    this.newAccountName = event.target.value;
  }
}
