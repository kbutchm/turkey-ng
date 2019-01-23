import { Component, OnInit } from '@angular/core';
import { ShopsService } from '../shared/shops.service';
import { Shops } from '../shared/shops.model';

@Component({
  selector: 'turkey-shops-list',
  templateUrl: './shops-list.component.html',
  styleUrls: ['./shops-list.component.scss']
})
export class ShopsListComponent implements OnInit {

  //rentals: any[] = [1,2,3,4];

  shops: any[] = [];

  constructor(private shopsService: ShopsService) {}

  ngOnInit() {
    const shopsObservable = this.shopsService.getShops();

    shopsObservable.subscribe(
      (shops: Shops[]) => {
        this.shops = shops;
      },
      (err) => {

      },
      () => {

      });
  }

}
