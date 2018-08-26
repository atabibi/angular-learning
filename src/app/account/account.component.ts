import { Component, OnInit, Input} from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
  }

  onClick(newState: string) {
    this.accountsService.changeState({id: this.id, status: newState});
  }
}
