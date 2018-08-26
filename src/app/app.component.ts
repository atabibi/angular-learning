import { Component } from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 't02';

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

  onChangeState(account: {id: number, status: string}) {
    this.logging.showMessage(account.id + ' status changed to ' + account.status);
    this.accounts[account.id].status = account.status;
  }

  onAddNewAccount(accountName) {
    this.accounts.push({name: accountName, status: 'unknown'});
    this.logging.showMessage(accountName + ' has created!');
  }
}
