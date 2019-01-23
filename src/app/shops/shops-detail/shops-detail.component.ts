import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopsService } from '../shared/shops.service';
import { Shops } from '../shared/shops.model';

@Component({
  selector: 'turkey-shops-detail',
  templateUrl: './shops-detail.component.html',
  styleUrls: ['./shops-detail.component.scss']
})
export class ShopsDetailComponent implements OnInit {

  shops: Shops;

  constructor(private route: ActivatedRoute,
              private shopsService: ShopsService) { }

  ngOnInit() {
    //this.shops = new Shops();

    this.route.params.subscribe(
      (params) => {
        this.getRental(params['shopId']);
      })
  }

  getRental(shopId: string) {
     this.shopsService.getShopById(shopId).subscribe(
      (shops: Shops) => {
        this.shops = shops;
      });
  }

}
