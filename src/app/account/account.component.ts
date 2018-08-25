import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @Input() account: {name: string, status: string};
  @Output() statusChanged = new EventEmitter<{id: number, status: string}>();
  @Input() id: number;

  constructor() { }

  ngOnInit() {
  }

  onClick(newState: string) {
    const accountName = this.account.name;
    this.statusChanged.emit({id: this.id, status: newState});
  }
}
