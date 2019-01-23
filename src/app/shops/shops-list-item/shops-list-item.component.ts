import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'turkey-shops-list-item',
  templateUrl: './shops-list-item.component.html',
  styleUrls: ['./shops-list-item.component.scss']
})
export class ShopsListItemComponent implements OnInit {

  @Input() currentShop: any;

  constructor() { }

  ngOnInit() {
  }

}
