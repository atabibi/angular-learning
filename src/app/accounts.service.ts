import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  accounts = [
    {
      name: 'Abbas',
      status: 'active'
    },
    {
      name: 'Monir',
      status: 'active'
    },
    {
      name: 'Nargess',
      status: 'inactive'
    },
    {
      name: 'Hadi',
      status: 'unknown'
    },
  ];

  constructor(private logging: LoggingService) { }

  changeState(account: {id: number, status: string}) {
    this.logging.showMessage(account.id + ' status changed to ' + account.status);
    this.accounts[account.id].status = account.status;
  }

  addNewAccount(accountName) {
    this.accounts.push({name: accountName, status: 'unknown'});
    this.logging.showMessage(accountName + ' has created!');
  }

  getAccounts() {
    return this.accounts;
  }
}
