import { Component, OnInit} from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  newAccountName: string;

  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
  }

  onAddClicked() {
    this.accountsService.addNewAccount(this.newAccountName);
  }

  txtAccountNameBlue(event) {
    this.newAccountName = event.target.value;
  }
}
