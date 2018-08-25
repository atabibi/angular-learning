import { Component } from '@angular/core';

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

  onChangeState(account: {id: number, status: string}) {
    console.log(account);
    this.accounts[account.id].status = account.status;
  }

  onAddNewAccount(accountName) {
    this.accounts.push({name: accountName, status: 'unknown'});
  }
}
